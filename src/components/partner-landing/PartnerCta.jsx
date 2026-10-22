// src/components/partner-landing/PartnerCta.jsx
"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useOwnerAuth } from "@/context/OwnerAuthContext";

const VARIANTS = {
  // on light sections
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-card hover:shadow-card-hover dark:bg-secondary dark:hover:bg-secondary-dark",
  // on the dark hero / final band
  accent: "bg-accent text-primary font-semibold hover:bg-accent-light shadow-card hover:shadow-card-hover",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-medium transition-all duration-300 " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

// "Sign Up" for visitors; "Go to your dashboard" for owners who are already logged in.
// The server-rendered HTML always contains the sign-up link (auth is only known on
// the client), so crawlers and no-JS visitors get a working primary action.
export function PartnerCta({ variant = "primary", label = "Sign Up Free", loggedInLabel = "Go to your dashboard", className = "" }) {
  const { owner, loading } = useOwnerAuth();
  const loggedIn = !loading && !!owner;
  return (
    <Link
      href={loggedIn ? "/owner/dashboard" : "/owner/signup"}
      className={`${BASE} ${VARIANTS[variant]} ${className}`}
    >
      {loggedIn ? loggedInLabel : label}
      <FiArrowRight aria-hidden="true" />
    </Link>
  );
}

// "Already a partner? Log in": hidden once we know the visitor is logged in.
export function PartnerLoginNote({ className = "", linkClassName = "underline underline-offset-4 font-medium" }) {
  const { owner, loading } = useOwnerAuth();
  if (!loading && owner) return null;
  return (
    <p className={className}>
      Already a partner?{" "}
      <Link href="/owner/login" className={linkClassName}>
        Log in
      </Link>
    </p>
  );
}