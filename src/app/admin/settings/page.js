// src/app/admin/settings/page.js
"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FiSave, FiLoader, FiAlertTriangle } from "react-icons/fi";
import ImageUploader from "@/components/admin/ImageUploader";
import {
  getSiteSettings,
  updateSiteSettings,
} from "@/lib/services/settingsService";
import { deleteImage } from "@/lib/services/imageService";
import { triggerRevalidation } from "@/utils/revalidate";

export default function AdminSettingsPage() {
  const [heroImage, setHeroImage] = useState(null);
  const [originalHeroImage, setOriginalHeroImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [logo, setLogo] = useState(null);
  const [originalLogo, setOriginalLogo] = useState(null);

  // Uploading a file only stages it in local state — nothing is written to
  // the database until "Save Settings" is clicked. This tracks that gap so
  // the admin can never lose an upload by refreshing/navigating away
  // without realizing it hadn't been saved yet.
  const hasUnsavedChanges =
    logo?.publicId !== originalLogo?.publicId ||
    heroImage?.publicId !== originalHeroImage?.publicId;

  useEffect(() => {
    getSiteSettings().then((settings) => {
      setHeroImage(settings.heroImage || null);
      setOriginalHeroImage(settings.heroImage || null);
      setLogo(settings.logo || null);
      setOriginalLogo(settings.logo || null);
      setIsLoading(false);
    });
  }, []);

  // Warn before closing/refreshing the tab with an unsaved upload —
  // this is exactly the situation that made a logo "disappear" before.
  useEffect(() => {
    if (!hasUnsavedChanges) return;
    const handler = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [hasUnsavedChanges]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateSiteSettings({ heroImage, logo });

      if (
        originalHeroImage?.publicId &&
        originalHeroImage.publicId !== heroImage?.publicId
      ) {
        await deleteImage(originalHeroImage.publicId);
      }
      if (originalLogo?.publicId && originalLogo.publicId !== logo?.publicId) {
        await deleteImage(originalLogo.publicId);
      }

      await triggerRevalidation(["/"]);
      setOriginalHeroImage(heroImage);
      setOriginalLogo(logo);
      toast.success("Settings saved");
    } catch (error) {
      console.error("Save settings error:", error);
      toast.error("Failed to save settings — your upload is NOT saved yet. Please try again before leaving this page.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <FiLoader className="animate-spin text-2xl text-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-6">
      {hasUnsavedChanges && (
        <div className="flex items-center gap-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm px-4 py-3">
          <FiAlertTriangle className="shrink-0" />
          You have unsaved changes. Uploading an image does not save it —
          click <strong className="mx-1">Save Settings</strong> below, or your
          upload will be lost if you leave this page.
        </div>
      )}

      <div className="card p-6">
        <h2 className="font-display font-semibold text-lg text-primary mb-1">
          Site Logo
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          Shown in the navbar, footer, and admin panel. Recommended: square or
          wide transparent PNG.
        </p>
        <ImageUploader
          value={logo}
          onChange={setLogo}
          folder="site-settings"
          label="Logo"
        />
      </div>
      <div className="card p-6">
        <h2 className="font-display font-semibold text-lg text-primary mb-1">
          Homepage Hero Banner
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          The background image shown behind the homepage search bar.
          Recommended: a wide landscape photo, at least 1920px wide.
        </p>
        <ImageUploader value={heroImage} onChange={setHeroImage} folder="site-settings" label="Hero Banner Image" minWidth={1920} minHeight={1080} />
      </div>

      <button
        onClick={handleSave}
        disabled={isSaving || !hasUnsavedChanges}
        className="btn-primary flex items-center gap-2 disabled:opacity-60"
      >
        {isSaving ? <FiLoader className="animate-spin" /> : <FiSave />}
        {isSaving ? "Saving..." : hasUnsavedChanges ? "Save Settings" : "Saved"}
      </button>
    </div>
  );
}