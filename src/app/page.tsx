"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BRAND } from "@/content/brand";
import { CircuitBackground } from "@/components/CircuitBackground";
import { TechnicalBadge } from "@/components/TechnicalBadge";
import { CTASection } from "@/components/CTASection";
import {
  ArrowRight,
  PhoneCall,
  Mail,
  Instagram,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function HomePage() {
  const { language, t } = useLanguage();

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:py-24 border-b border-surface-border overflow-hidden">
        <CircuitBackground variant="dense" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <TechnicalBadge variant="cyan">{t.common.appliedEngineering}</TechnicalBadge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              {t.hero.titlePrefix}{" "}
              <span className="text-[#F59E0B] relative inline-block">
                {t.hero.titleHighlight}
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F59E0B]/60" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/atendimento"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-mono font-bold rounded bg-[#F59E0B] text-[#060A17] hover:bg-[#FFB703] transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{t.common.requestService}</span>
              </Link>

              <Link
                href="/empresa"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-mono font-medium rounded border border-surface-border bg-surface-card/60 text-slate-200 hover:bg-surface-light hover:text-white transition-colors"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACTOS RÁPIDOS */}
      <section className="py-16 bg-primary-dark border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <a
              href={`mailto:${BRAND.contact.email}`}
              className="tech-card p-6 rounded-lg bg-surface-card border border-surface-border flex items-center gap-4 hover:border-[#00D2FF]/40 transition-colors group"
            >
              <div className="p-3 rounded bg-primary-dark border border-surface-border text-[#00D2FF] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 block">
                  {t.common.email}
                </span>
                <span className="text-sm font-mono font-semibold text-white">
                  {BRAND.contact.email}
                </span>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={BRAND.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card p-6 rounded-lg bg-surface-card border border-surface-border flex items-center gap-4 hover:border-[#F59E0B]/40 transition-colors group"
            >
              <div className="p-3 rounded bg-primary-dark border border-surface-border text-[#F59E0B] group-hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-mono uppercase text-slate-400 block">
                  {t.common.instagram}
                </span>
                <span className="text-sm font-mono font-semibold text-white">
                  {BRAND.contact.instagram}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </a>

            {/* Localização */}
            <a
              href={BRAND.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card p-6 rounded-lg bg-surface-card border border-surface-border flex items-center gap-4 hover:border-[#00D2FF]/40 transition-colors group"
            >
              <div className="p-3 rounded bg-primary-dark border border-surface-border text-[#00D2FF] group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-mono uppercase text-slate-400 block">
                  {t.common.locationTitle}
                </span>
                <span className="text-sm font-mono font-semibold text-white">
                  {t.common.location}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. CTA FINAL */}
      <CTASection
        title={t.common.ctaHomeTitle}
        subtitle={t.common.ctaHomeSubtitle}
        buttonText={t.common.requestService}
        secondaryText={t.nav.company}
        secondaryHref="/empresa"
      />
    </div>
  );
}
