"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { METHOD_PHASES } from "@/content/method";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { TechnicalBadge } from "@/components/TechnicalBadge";
import { CheckCircle2, ArrowDown, ShieldCheck, Activity, FileText, Check } from "lucide-react";

export default function MetodoPage() {
  const { language, t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      {/* PAGE HERO */}
      <PageHero
        badge={t.method.badge}
        title={t.method.title}
        subtitle={t.method.subtitle}
        breadcrumbs={[{ label: t.nav.method }]}
      />

      {/* METODOLOGIA TÉCNICA - AS 6 FASES */}
      <section className="py-16 border-b border-surface-border bg-primary-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={t.method.flowBadge}
            title={t.method.flowTitle}
            subtitle={t.method.flowSubtitle}
          />

          <div className="relative space-y-12 before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-[#00D2FF] before:via-[#F59E0B] before:to-[#00D2FF] before:opacity-30">
            {METHOD_PHASES.map((phase, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={phase.id}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-8 group"
                >
                  {/* Timeline Badge Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-surface-card border-2 border-[#00D2FF] shadow-[0_0_15px_rgba(0,210,255,0.3)] z-10 font-mono font-bold text-sm text-[#F59E0B] group-hover:scale-110 group-hover:border-[#F59E0B] transition-transform">
                    {phase.number}
                  </div>

                  {/* Left Content (or spacer on desktop) */}
                  <div
                    className={`w-full md:w-1/2 pl-20 md:pl-0 ${
                      isEven ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="tech-card p-6 sm:p-8 rounded-lg bg-surface-card border border-surface-border space-y-4 hover:border-[#00D2FF]/60 transition-all">
                      <div
                        className={`flex items-center gap-2 ${
                          isEven ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        <span className="text-xs font-mono font-bold text-[#F59E0B] px-2 py-0.5 rounded bg-[#F59E0B]/10 border border-[#F59E0B]/30">
                          {t.method.phasePrefix} {phase.number}
                        </span>
                        <span className="text-xs font-mono text-[#00D2FF] uppercase font-bold">
                          {phase.name[language]}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white">
                        {phase.name[language]}
                      </h3>

                      {/* 1. O que acontece */}
                      <div className="space-y-1 text-left">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#00D2FF] font-bold block">
                          {t.method.whatHappensTitle}:
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {phase.whatHappens[language]}
                        </p>
                      </div>

                      {/* 2. Porque é importante */}
                      <div className="space-y-1 text-left pt-2 border-t border-surface-border/50">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#F59E0B] font-bold block">
                          {t.method.whyItMattersTitle}:
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {phase.whyItMatters[language]}
                        </p>
                      </div>

                      {/* 3. Qual o resultado */}
                      <div className="p-3 rounded bg-primary-dark border border-surface-border/80 text-left space-y-1">
                        <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                          {t.method.resultTitle}:
                        </span>
                        <p className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#00D2FF] flex-shrink-0" />
                          <span>{phase.result[language]}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for other column on desktop */}
                  <div
                    className={`hidden md:block w-1/2 ${
                      isEven ? "order-2 pl-12" : "order-1 pr-12 text-right"
                    }`}
                  >
                    <div className="p-6 border border-dashed border-surface-border/60 rounded-lg space-y-2 text-xs font-mono text-slate-400">
                      <span className="text-[#00D2FF] font-bold uppercase block">
                        {t.method.qaControlTitle}
                      </span>
                      <ul className="space-y-1.5">
                        {phase.technicalDetails[language].map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={t.method.ctaTitle}
        subtitle={t.method.ctaSubtitle}
        buttonText={t.common.requestService}
        secondaryText={t.nav.services}
        secondaryHref="/servicos"
      />
    </div>
  );
}
