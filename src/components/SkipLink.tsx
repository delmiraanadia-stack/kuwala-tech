"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function SkipLink() {
  const { t } = useLanguage();
  return (
    <a href="#main-content" className="skip-to-content" tabIndex={0}>
      {t.common.skipToContent}
    </a>
  );
}
