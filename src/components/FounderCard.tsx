"use client";

import React from "react";
import Image from "next/image";
import { FounderMember } from "@/content/founders";
import { useLanguage } from "@/context/LanguageContext";
import { TechnicalBadge } from "./TechnicalBadge";
import { CheckCircle2, UserCheck } from "lucide-react";
import { cn } from "@/utils/cn";

interface FounderCardProps {
  founder: FounderMember;
  isActive?: boolean;
  onSelect?: () => void;
  className?: string;
  isDetailed?: boolean;
}

export function FounderCard({
  founder,
  isActive = false,
  onSelect,
  className,
  isDetailed = false,
}: FounderCardProps) {
  const { language, t } = useLanguage();

  return (
    <div
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect?.();
        }
      }}
      tabIndex={0}
      role="button"
      aria-pressed={isActive}
      aria-label={`${founder.name} - ${founder.role[language]}`}
      className={cn(
        "relative rounded-lg border transition-all duration-300 text-left cursor-pointer overflow-hidden p-6 outline-none",
        isActive
          ? "bg-surface-card border-[#00D2FF] shadow-[0_0_30px_rgba(0,210,255,0.15)] ring-1 ring-[#00D2FF]/50"
          : "bg-surface-card/60 border-surface-border hover:border-slate-500 opacity-80 hover:opacity-100",
        "focus-visible:ring-2 focus-visible:ring-[#F59E0B]",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {/* Founder Portrait Image */}
        <div className="relative w-28 h-36 sm:w-36 sm:h-44 rounded border border-surface-border overflow-hidden bg-primary-dark flex-shrink-0">
          <Image
            src={founder.image}
            alt={founder.imageAlt}
            fill
            sizes="(max-width: 640px) 112px, 144px"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            priority={isActive}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Info */}
        <div className="space-y-3 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <TechnicalBadge variant={isActive ? "amber" : "neutral"} dot={isActive}>
              {founder.titleTag[language]}
            </TechnicalBadge>
          </div>

          <h3 className="text-xl font-bold text-white tracking-tight">
            {founder.name}
          </h3>

          <p className="text-xs font-mono text-[#00D2FF] font-medium leading-snug">
            {founder.role[language]}
          </p>

          <p className="text-xs text-slate-300 leading-relaxed">
            {founder.bio[language]}
          </p>

          {isDetailed && (
            <div className="pt-3 border-t border-surface-border space-y-3">
              <p className="text-xs text-slate-300 leading-relaxed">
                {founder.extendedBio[language]}
              </p>

              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#F59E0B] font-bold block">
                  {t.founders.competenciesTitle}:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                  {founder.competencies[language].map((comp, idx) => (
                    <span key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] flex-shrink-0" />
                      <span className="truncate">{comp}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
