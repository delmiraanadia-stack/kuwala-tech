"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { SOLUTIONS } from "@/content/solutions";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SolutionCard } from "@/components/SolutionCard";
import { CTASection } from "@/components/CTASection";
import { TechnicalBadge } from "@/components/TechnicalBadge";
import { Cpu, Network, ShieldCheck, Zap, ArrowRight, Layers } from "lucide-react";

export default function SolucoesPage() {
  const { language, t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      {/* PAGE HERO */}
      <PageHero
        badge={t.solutions.badge}
        title={t.solutions.title}
        subtitle={t.solutions.subtitle}
        breadcrumbs={[{ label: t.nav.solutions }]}
      />

      {/* INTRODUÇÃO & 5 SOLUÇÕES */}
      <section className="py-16 border-b border-surface-border bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            badge={t.solutions.badge}
            title={t.solutions.overviewTitle}
            subtitle={t.solutions.overviewSubtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((solution) => (
              <SolutionCard key={solution.slug} solution={solution} />
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO DE INTEGRAÇÃO GLOBAL */}
      <section className="py-16 border-b border-surface-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge={t.solutions.integrationBadge}
                title={t.solutions.integrationTitle}
                subtitle={t.solutions.integrationSubtitle}
              />

              <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
                <p>
                  {t.solutions.integrationParagraph1}
                </p>
                <p>
                  {t.solutions.integrationParagraph2}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="tech-card p-6 rounded-lg bg-surface-card border border-surface-border space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-primary-dark text-[#00D2FF]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{t.solutions.integrationCard1Title}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.solutions.integrationCard1Desc}
                </p>
              </div>

              <div className="tech-card p-6 rounded-lg bg-surface-card border border-surface-border space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-primary-dark text-[#F59E0B]">
                    <Network className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{t.solutions.integrationCard2Title}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.solutions.integrationCard2Desc}
                </p>
              </div>

              <div className="tech-card p-6 rounded-lg bg-surface-card border border-surface-border space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-primary-dark text-[#00D2FF]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{t.solutions.integrationCard3Title}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.solutions.integrationCard3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={t.solutions.ctaTitle}
        subtitle={t.solutions.ctaSubtitle}
        buttonText={t.common.requestService}
        secondaryText={t.nav.method}
        secondaryHref="/metodo"
      />
    </div>
  );
}
