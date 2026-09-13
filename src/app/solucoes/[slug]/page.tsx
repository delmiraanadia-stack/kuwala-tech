"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SOLUTIONS } from "@/content/solutions";
import { useLanguage } from "@/context/LanguageContext";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TechnicalBadge } from "@/components/TechnicalBadge";
import { CTASection } from "@/components/CTASection";
import {
  ArrowLeft,
  PhoneCall,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Cpu,
  Wrench,
  Zap,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface SolutionDetailPageProps {
  params: {
    slug: string;
  };
}

export default function SolutionDetailPage({ params }: SolutionDetailPageProps) {
  const { language, t } = useLanguage();
  const solution = SOLUTIONS.find((s) => s.slug === params.slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      {/* PAGE HERO */}
      <PageHero
        number={`SOL-${solution.number}`}
        badge={t.solutionDetail.integratedSolutionBadge}
        badgeVariant="amber"
        title={solution.title[language]}
        subtitle={solution.shortDescription[language]}
        breadcrumbs={[
          { label: t.nav.solutions, href: "/solucoes" },
          { label: solution.title[language] },
        ]}
      />

      {/* 1. CONTEXTO & PROBLEMA / NECESSIDADE */}
      <section className="py-16 border-b border-surface-border bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge={t.solutionDetail.operationalContextTitle}
                title={t.solutionDetail.systemPresentationTitle}
                subtitle={solution.fullDescription[language]}
              />

              <div className="tech-card p-6 rounded-lg bg-surface-card border border-surface-border space-y-3">
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#00D2FF] flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  {t.solutions.contextTitle}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {solution.context[language]}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="tech-card p-6 rounded-lg bg-surface-card border border-red-500/30 space-y-3">
                <div className="flex items-center gap-2 text-red-400">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider">
                    {t.solutions.problemTitle}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {solution.problem[language]}
                </p>
              </div>

              {/* Benefits Box */}
              <div className="tech-card p-6 rounded-lg bg-surface-card border border-surface-border space-y-3">
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#F59E0B] flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  {t.solutionDetail.benefitsTitle}
                </h3>
                <ul className="space-y-2 text-xs text-slate-200">
                  {solution.benefits[language].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARQUITECTURA DA SOLUÇÃO & EQUIPAMENTOS / COMPONENTES */}
      <section className="py-16 border-b border-surface-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Architecture / Technologies */}
            <div className="tech-card p-6 sm:p-8 rounded-lg bg-surface-card border border-surface-border space-y-5">
              <div className="flex items-center gap-2 border-b border-surface-border pb-3">
                <Cpu className="w-4 h-4 text-[#00D2FF]" />
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                  {t.solutions.architectureTitle}
                </h3>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                {solution.technology[language].map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded bg-primary-dark/80 border border-surface-border/60 flex items-start gap-2.5"
                  >
                    <span className="text-xs font-mono font-bold text-[#00D2FF] mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hardware & Components */}
            <div className="tech-card p-6 sm:p-8 rounded-lg bg-surface-card border border-surface-border space-y-5">
              <div className="flex items-center gap-2 border-b border-surface-border pb-3">
                <Wrench className="w-4 h-4 text-[#F59E0B]" />
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                  {t.solutionDetail.hardwareTitle}
                </h3>
              </div>

              <div className="space-y-3 text-xs text-slate-200">
                {solution.components[language].map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded bg-primary-dark/80 border border-surface-border/60 flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                    <span className="font-mono text-xs font-medium">{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERCURSO PASSO A PASSO (6 PASSOS: Levantamento, Selecção, Instalação, Configuração, Integração, Testes e Continuidade) */}
      <section className="py-16 border-b border-surface-border bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={t.solutionDetail.implementationJourneyTitle}
            title={t.solutions.journeyTitle}
            subtitle={t.solutionDetail.journeySubtitle}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.steps.map((step) => (
              <div
                key={step.number}
                className="tech-card p-6 rounded-lg bg-surface-card border border-surface-border space-y-3"
              >
                <div className="flex items-center justify-between border-b border-surface-border pb-2">
                  <span className="text-xs font-mono font-bold text-[#F59E0B]">
                    {t.solutionDetail.stepPrefix} {step.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
                </div>
                <h4 className="text-base font-bold text-white">
                  {step.title[language]}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VOLTAR E CTA */}
      <div className="bg-surface/20 py-8 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/solucoes"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-300 hover:text-[#F59E0B] transition-colors p-2 rounded border border-surface-border bg-surface-card"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.common.backToSolutions}</span>
          </Link>

          <Link
            href="/atendimento"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold px-4 py-2 rounded bg-[#F59E0B] text-[#060A17] hover:bg-[#FFB703] transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{t.solutionDetail.requestThisSolution}</span>
          </Link>
        </div>
      </div>

      <CTASection
        title={`${t.solutionDetail.ctaTitle} ${solution.title[language]}?`}
        subtitle={t.solutionDetail.ctaSubtitle}
        buttonText={t.common.requestService}
        secondaryText={t.common.backToSolutions}
        secondaryHref="/solucoes"
      />
    </div>
  );
}
