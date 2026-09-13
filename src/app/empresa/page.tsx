"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BRAND } from "@/content/brand";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TechnicalBadge } from "@/components/TechnicalBadge";
import { CTASection } from "@/components/CTASection";
import {
  CheckCircle2,
  ShieldCheck,
  Target,
  Eye,
  MapPin,
  Cpu,
  Zap,
} from "lucide-react";

export default function EmpresaPage() {
  const { language, t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      {/* PAGE HERO */}
      <PageHero
        badge={t.company.badge}
        title={t.company.title}
        subtitle={t.company.subtitle}
        breadcrumbs={[{ label: t.nav.company }]}
      />

      {/* QUEM SOMOS & APRESENTAÇÃO */}
      <section className="py-16 border-b border-surface-border bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge={t.company.whoWeAreBadge}
                title={t.company.whoWeAreTitle}
                subtitle={BRAND.presentation[language]}
              />

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>
                  {t.company.paragraph1}
                </p>
                <p>
                  {t.company.paragraph2}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-surface-card border border-surface-border flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <span className="font-mono font-bold text-white uppercase block">
                    {t.company.locationSedeTitle}
                  </span>
                  <span className="text-slate-300 font-mono">
                    {t.common.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Target Audience & Competencies Card */}
            <div className="lg:col-span-5">
              <div className="tech-card rounded-lg p-6 sm:p-8 bg-surface-card border border-surface-border space-y-6">
                <h3 className="text-base font-mono font-bold uppercase tracking-wider text-slate-100 border-b border-surface-border pb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#00D2FF]" />
                  {t.company.targetAudienceTitle}
                </h3>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-mono block">{t.company.targetIndustriesTitle}</strong>
                      {t.company.targetIndustriesDesc}
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-mono block">{t.company.targetEnterprisesTitle}</strong>
                      {t.company.targetEnterprisesDesc}
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-mono block">{t.company.targetResidencesTitle}</strong>
                      {t.company.targetResidencesDesc}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded bg-primary-dark border border-surface-border text-center">
                  <span className="text-[11px] font-mono font-bold text-[#F59E0B] tracking-wide">
                    100% {t.aboutUs.cardPresenceTitle}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OS 3 PILARES */}
      <section className="py-16 border-b border-surface-border bg-surface/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge={t.company.pillarsBadge}
            title={t.company.pillarsTitle}
            subtitle={t.company.pillarsSubtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BRAND.pillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="tech-card rounded-lg p-8 bg-surface-card border border-surface-border space-y-4 hover:border-[#00D2FF]/60 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-bold text-slate-600 group-hover:text-[#F59E0B] transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="p-2 rounded bg-primary-dark text-[#00D2FF] border border-surface-border">
                    {idx === 0 && <Cpu className="w-5 h-5" />}
                    {idx === 1 && <Zap className="w-5 h-5" />}
                    {idx === 2 && <ShieldCheck className="w-5 h-5" />}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {pillar.title[language]}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISÃO & MISSÃO */}
      <section className="py-16 border-b border-surface-border bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge={t.company.visionMissionBadge}
            title={t.company.visionMissionTitle}
            subtitle={t.company.visionMissionSubtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visão */}
            <div className="tech-card rounded-lg p-8 bg-surface-card border border-surface-border space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary-dark border border-surface-border text-[#00D2FF]">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <TechnicalBadge variant="cyan">{t.company.visionTitle}</TechnicalBadge>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {t.company.visionTitle}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pt-2">
                {BRAND.vision[language]}
              </p>
            </div>

            {/* Missão */}
            <div className="tech-card rounded-lg p-8 bg-surface-card border border-surface-border space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary-dark border border-surface-border text-[#F59E0B]">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <TechnicalBadge variant="amber">{t.company.missionTitle}</TechnicalBadge>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {t.company.missionTitle}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pt-2">
                {BRAND.mission[language]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPROMISSOS & RIGOR TÉCNICO */}
      <section className="py-16 border-b border-surface-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            badge={t.company.commitmentsBadge}
            title={t.company.commitmentsTitle}
            subtitle={t.company.commitmentsSubtitle}
          />

          <div className="tech-card p-8 rounded-xl bg-surface-card border border-surface-border space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-300 leading-relaxed">
              <p>
                {t.company.commitmentsText1}
              </p>
              <p>
                {t.company.commitmentsText2}
              </p>
            </div>

            <div className="pt-4 border-t border-surface-border flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                {t.common.checkRealDiagnosis}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                {t.common.checkRigorousSizing}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                {t.common.checkDirectAssistance}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={t.company.ctaTitle}
        subtitle={t.company.ctaSubtitle}
        buttonText={t.common.requestService}
        secondaryText={t.nav.services}
        secondaryHref="/servicos"
      />
    </div>
  );
}
