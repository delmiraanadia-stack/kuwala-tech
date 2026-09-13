"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FounderCarousel } from "@/components/FounderCarousel";
import { CTASection } from "@/components/CTASection";
import { BRAND } from "@/content/brand";
import { Users, Shield } from "lucide-react";

export default function SobreNosPage() {
  const { language, t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      {/* PAGE HERO */}
      <PageHero
        badge={t.aboutUs.badge}
        title={t.aboutUs.title}
        subtitle={t.aboutUs.subtitle}
        breadcrumbs={[{ label: t.nav.aboutUs }]}
      />

      {/* HISTÓRIA E FUNDAÇÃO */}
      <section className="py-16 border-b border-surface-border bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge={t.aboutUs.identityBadge}
                title={t.aboutUs.identityTitle}
                subtitle={t.aboutUs.identitySubtitle}
              />

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>
                  {t.aboutUs.paragraph1}
                </p>
                <p>
                  {t.aboutUs.paragraph2}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="tech-card p-6 rounded-lg bg-surface-card border border-surface-border space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-primary-dark text-[#00D2FF]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{t.aboutUs.cardRigorTitle}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.aboutUs.cardRigorDesc}
                </p>
              </div>

              <div className="tech-card p-6 rounded-lg bg-surface-card border border-surface-border space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-primary-dark text-[#F59E0B]">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{t.aboutUs.cardPresenceTitle}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.aboutUs.cardPresenceDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARROSSEL EDITORIAL DOS FUNDADORES */}
      <FounderCarousel />

      {/* CTA */}
      <CTASection
        title={t.aboutUs.ctaTitle}
        subtitle={t.aboutUs.ctaSubtitle}
        buttonText={t.common.requestService}
        secondaryText={t.nav.contact}
        secondaryHref="/contacto"
      />
    </div>
  );
}
