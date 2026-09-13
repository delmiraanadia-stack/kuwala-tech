"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import { cn } from "@/utils/cn";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center p-1 rounded border border-surface-border bg-primary-card/80 backdrop-blur-sm",
        className
      )}
      role="group"
      aria-label={t.common.switchLanguage}
    >
      <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1" aria-hidden="true" />
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        aria-pressed={language === "pt"}
        className={cn(
          "px-2 py-0.5 text-xs font-mono font-medium rounded transition-colors",
          language === "pt"
            ? "bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40 font-bold"
            : "text-slate-400 hover:text-slate-200"
        )}
      >
        PT
      </button>
      <span className="text-slate-600 text-xs px-0.5">/</span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={cn(
          "px-2 py-0.5 text-xs font-mono font-medium rounded transition-colors",
          language === "en"
            ? "bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40 font-bold"
            : "text-slate-400 hover:text-slate-200"
        )}
      >
        EN
      </button>
    </div>
  );
}
