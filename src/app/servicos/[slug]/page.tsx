"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "@/content/services";
import { useLanguage } from "@/context/LanguageContext";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TechnicalBadge } from "@/components/TechnicalBadge";
import { CTASection } from "@/components/CTASection";
import {
  ArrowLeft,
  PhoneCall,
  CheckCircle2,
  Cpu,
  Layers,
  Wrench,
  Zap,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { language, t } = useLanguage();
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      {/* PAGE HERO */}
      <PageHero
        number={service.number}
        badge={t.serviceDetail.engineeringServiceBadge}
        title={service.title[language]}
        subtitle={service.shortDescription[language]}
        breadcrumbs={[
          { label: t.nav.services, href: "/servicos" },
          { label: service.title[language] },
        ]}
      >
        <div className="flex flex-wrap gap-2 pt-2">
          {service.tags[language].map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-2.5 py-1 rounded bg-primary-dark border border-surface-border text-[#00D2FF]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </PageHero>

      {/* 1. VISÃO GERAL & ESCOPO TÉCNICO */}
      <section className="py-16 border-b border-surface-border bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Detailed Description */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge={t.serviceDetail.frameworkBadge}
                title={t.serviceDetail.specialtyDescriptionTitle}
                subtitle={service.fullDescription[language]}
              />

              {/* Practical Benefits Box */}
              <div className="p-6 rounded-lg bg-surface-card border border-surface-border space-y-4">
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#F59E0B] flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#F59E0B]" />
                  {t.services.benefitsTitle}
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {service.benefits[language].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Scope Checklist */}
            <div className="lg:col-span-6 space-y-6">
              <div className="tech-card p-6 sm:p-8 rounded-lg bg-surface-card border border-surface-border space-y-5">
                <div className="flex items-center justify-between border-b border-surface-border pb-3">
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#00D2FF]" />
                    {t.services.scopeTitle}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400">
                    {service.scope[language].length} {t.serviceDetail.deliverables}
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-slate-200">
                  {service.scope[language].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-2.5 rounded bg-primary-dark/80 border border-surface-border/60"
                    >
                      <span className="text-xs font-mono font-bold text-[#00D2FF] mt-0.5">
                        0{idx + 1}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. APLICAÇÕES & COMPONENTES */}
      <section className="py-16 border-b border-surface-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Practical Applications */}
            <div className="tech-card p-6 sm:p-8 rounded-lg bg-surface-card border border-surface-border space-y-5">
              <div className="flex items-center gap-2 border-b border-surface-border pb-3">
                <Cpu className="w-4 h-4 text-[#F59E0B]" />
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                  {t.services.applicationsTitle}
                </h3>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                {service.applications[language].map((app, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded bg-primary-dark/70 border border-surface-border/50"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Components & Hardware */}
            <div className="tech-card p-6 sm:p-8 rounded-lg bg-surface-card border border-surface-border space-y-5">
              <div className="flex items-center gap-2 border-b border-surface-border pb-3">
                <Wrench className="w-4 h-4 text-[#00D2FF]" />
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                  {t.services.componentsTitle}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                {service.components[language].map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded bg-primary-dark/70 border border-surface-border/50 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] flex-shrink-0" />
                    <span className="font-mono text-[11px] leading-tight">{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESSO DE EXECUÇÃO */}
      <section className="py-16 border-b border-surface-border bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={t.serviceDetail.appliedMethodologyBadge}
            title={t.services.processTitle}
            subtitle={t.serviceDetail.stepByStepDesc}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.process.map((p) => (
              <div
                key={p.step}
                className="tech-card p-6 rounded-lg bg-surface-card border border-surface-border space-y-3"
              >
                <div className="flex items-center justify-between border-b border-surface-border pb-2">
                  <span className="text-xs font-mono font-bold text-[#F59E0B]">
                    {t.serviceDetail.stepPrefix} {p.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
                </div>
                <h4 className="text-base font-bold text-white">
                  {p.title[language]}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {p.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTÃO VOLTAR E CTA */}
      <div className="bg-surface/20 py-8 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-300 hover:text-[#00D2FF] transition-colors p-2 rounded border border-surface-border bg-surface-card"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.common.backToServices}</span>
          </Link>

          <Link
            href="/atendimento"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold px-4 py-2 rounded bg-[#F59E0B] text-[#060A17] hover:bg-[#FFB703] transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{t.serviceDetail.requestThisService}</span>
          </Link>
        </div>
      </div>

      <CTASection
        title={`${t.serviceDetail.readyToDeployTitle} ${service.title[language]}?`}
        subtitle={t.serviceDetail.readyToDeploySubtitle}
        buttonText={t.common.requestService}
        secondaryText={t.common.backToServices}
        secondaryHref="/servicos"
      />
    </div>
  );
}
