
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { FiMail, FiLoader } from "react-icons/fi";
import Image from "next/image";
import { useOwnerAuth } from "@/context/OwnerAuthContext";

export default function OwnerVerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = (searchParams.get("email") || "").trim().toLowerCase();

  const { owner, loading, verifyEmail, resendVerification } = useOwnerAuth();

  const [otp, setOtp] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [resending, setResending] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!loading && owner) {
      router.replace("/owner/dashboard");
    }
  }, [loading, owner, router]);

  const handleVerify = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!/^\d{6}$/.test(otp)) {
      setMessage("Enter the six-digit code from your email.");
      return;
    }

    setSubmitting(true);

    try {
      await verifyEmail(email, otp);
      toast.success("Email verified successfully!");
      router.replace("/owner/dashboard");
    } catch (error) {
      const messages = {
        "auth/invalid-verification-code": "That code is incorrect. Please try again.",
        "auth/verification-expired": "Your code has expired. Please request a new one.",
        "auth/verification-not-found": "No active code was found. Please request a new one.",
        "auth/verification-too-many-attempts": "Too many incorrect attempts. Request a new code.",
      };

      setMessage(messages[error.code] || "Verification failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleResend = async () => {
    setMessage("");
    setResending(true);

    try {
      const result = await resendVerification(email);

      if (result.error === "auth/verification-cooldown") {
        setMessage(`Please wait ${result.retryAfter} seconds before requesting another code.`);
      } else if (result.error === "auth/verification-hourly-limit") {
        setMessage("You have reached the email limit. Please try again later.");
      } else if (result.error) {
        setMessage("We couldn't send the email. Please try again later.");
      } else if (result.alreadyVerified) {
        toast.success("This email is already verified. Please log in.");
        router.replace("/owner/login");
      } else {
        toast.success("A new verification code has been sent.");
      }
    } catch {
      setMessage("We couldn't send the email. Please try again later.");
    } finally {
      setResending(false);
    }
  };

  if (loading || owner) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <FiLoader className="animate-spin text-3xl text-primary" />
      </div>
    );
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="card p-8 text-center max-w-md">
          <h1 className="font-display font-bold text-xl text-primary">Email required</h1>
          <p className="text-gray-500 mt-3">Please start from owner signup or login.</p>
          <Link href="/owner/signup" className="btn-primary inline-block mt-5">Create account</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="relative w-10 h-10 shrink-0">
              <Image src="/logo.png" alt="LocalKokani" fill className="object-contain" />
            </div>
            <span className="font-display font-bold text-2xl text-primary">
              Local<span className="text-accent-dark">Kokani</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm mt-2">Partner Portal</p>
        </div>

        <div className="card p-8">
          <div className="flex justify-center mb-4">
            <FiMail className="text-3xl text-secondary" />
          </div>

          <h1 className="font-display font-bold text-2xl text-primary text-center">
            Verify your email
          </h1>

          <p className="text-gray-500 text-sm text-center mt-3 mb-6">
            Enter the six-digit code sent to <strong>{email}</strong>.
            The code expires in 10 minutes.
          </p>

          {message && (
            <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl mb-5">
              {message}
            </div>
          )}

          <form onSubmit={handleVerify} className="space-y-4">
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
              placeholder="Enter 6-digit code"
              className="w-full text-center tracking-[0.5em] text-xl py-3 rounded-xl border border-gray-200 focus:border-secondary outline-none"
            />

            <button
              type="submit"
              disabled={submitting || otp.length !== 6}
              className="btn-primary w-full disabled:opacity-60"
            >
              {submitting ? "Verifying..." : "Verify email"}
            </button>
          </form>

          <button
            type="button"
            onClick={handleResend}
            disabled={resending}
            className="w-full text-secondary font-medium text-sm mt-5 disabled:opacity-60"
          >
            {resending ? "Sending..." : "Resend verification code"}
          </button>

          <p className="text-center text-sm text-gray-500 mt-6">
            <Link href="/owner/login" className="text-secondary hover:underline">
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
