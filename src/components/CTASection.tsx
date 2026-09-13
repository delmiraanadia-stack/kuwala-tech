"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react";
import { TechnicalBadge } from "./TechnicalBadge";
import { cn } from "@/utils/cn";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
}

export function CTASection({
  title,
  subtitle,
  buttonText,
  secondaryText,
  secondaryHref = "/servicos",
  className,
}: CTASectionProps) {
  const { t } = useLanguage();

  return (
    <section className={cn("py-16 relative overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-lg border border-surface-border bg-gradient-to-r from-primary-card via-primary to-primary-card p-8 md:p-12 overflow-hidden tech-card">
          {/* Subtle circuit line decoration */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-[#00D2FF]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <TechnicalBadge variant="amber">
                {t.common.requestService}
              </TechnicalBadge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {title || t.common.ctaDefaultTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                {subtitle || t.common.ctaDefaultSubtitle}
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                  {t.common.checkRealDiagnosis}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                  {t.common.checkRigorousSizing}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                  {t.common.checkDirectAssistance}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                href="/atendimento"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono font-bold rounded bg-[#F59E0B] text-[#060A17] hover:bg-[#FFB703] transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]"
              >
                <PhoneCall className="w-4 h-4" />
                {buttonText || t.common.requestService}
              </Link>
              {secondaryText && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-mono font-medium rounded border border-surface-border text-slate-200 hover:bg-surface-light hover:text-white transition-colors"
                >
                  {secondaryText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
