"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FOUNDERS } from "@/content/founders";
import { useLanguage } from "@/context/LanguageContext";
import { TechnicalBadge } from "./TechnicalBadge";
import { ChevronLeft, ChevronRight, CheckCircle2, Zap, BookOpen } from "lucide-react";
import { cn } from "@/utils/cn";

export function FounderCarousel() {
  const { language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const prevIndex = (activeIndex - 1 + FOUNDERS.length) % FOUNDERS.length;
  const nextIndex = (activeIndex + 1) % FOUNDERS.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + FOUNDERS.length) % FOUNDERS.length);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % FOUNDERS.length);
  }, []);

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  const activeFounder = FOUNDERS[activeIndex];

  return (
    <section
      className="py-12 relative"
      aria-label={t.founders.title}
      role="region"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls & Indicator Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-surface-border">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#F59E0B] tracking-wider uppercase">
              {t.founders.badge} ({activeIndex + 1} / {FOUNDERS.length})
            </span>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              · {t.founders.instructions}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 rounded border border-surface-border bg-surface-card hover:bg-surface-light text-slate-200 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              aria-label={t.founders.previousFounderAria}
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5 px-2">
              {FOUNDERS.map((founder, idx) => (
                <button
                  key={founder.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    idx === activeIndex
                      ? "bg-[#00D2FF] w-7"
                      : "bg-slate-700 hover:bg-slate-500"
                  )}
                  aria-label={`${founder.name} (${idx + 1})`}
                  aria-pressed={idx === activeIndex}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 rounded border border-surface-border bg-surface-card hover:bg-surface-light text-slate-200 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              aria-label={t.founders.nextFounderAria}
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Desktop 3-Card Interactive Carousel Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-6 items-stretch mb-10">
          {/* Previous Founder (Left Preview) */}
          <div
            onClick={() => setActiveIndex(prevIndex)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActiveIndex(prevIndex)}
            tabIndex={0}
            role="button"
            aria-label={`${FOUNDERS[prevIndex].name} (${t.founders.previous})`}
            className="col-span-3 p-5 rounded-lg border border-surface-border bg-surface-card/50 opacity-70 hover:opacity-100 transition-all cursor-pointer flex flex-col items-center text-center justify-center space-y-3"
          >
            <div className="relative w-20 h-24 rounded border border-surface-border overflow-hidden bg-primary-dark shadow-inner">
              <Image
                src={FOUNDERS[prevIndex].image}
                alt={FOUNDERS[prevIndex].name}
                fill
                sizes="80px"
                className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                {t.founders.previous}
              </span>
              <h4 className="text-sm font-bold text-slate-200 line-clamp-1">{FOUNDERS[prevIndex].name}</h4>
            </div>
          </div>

          {/* Central Active Founder (Detailed Showcase) */}
          <div className="col-span-6 p-8 rounded-lg border-2 border-[#00D2FF] bg-surface-card shadow-[0_0_35px_rgba(0,210,255,0.15)] flex flex-col md:flex-row gap-6 items-start">
            <div className="relative w-44 h-56 rounded-md border-2 border-[#F59E0B] overflow-hidden bg-primary-dark flex-shrink-0 shadow-lg">
              <Image
                src={activeFounder.image}
                alt={activeFounder.imageAlt}
                fill
                sizes="180px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 bg-primary-dark/90 backdrop-blur-xs text-[10px] font-mono text-center py-1 text-[#F59E0B] font-bold border-t border-surface-border">
                {activeFounder.titleTag[language]}
              </div>
            </div>

            <div className="space-y-3 flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <TechnicalBadge variant="cyan">{t.founders.officialProfileBadge}</TechnicalBadge>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                {activeFounder.name}
              </h3>

              <p className="text-xs font-mono text-[#00D2FF] font-medium leading-relaxed">
                {activeFounder.role[language]}
              </p>

              <p className="text-xs text-slate-300 leading-relaxed">
                {activeFounder.bio[language]}
              </p>
            </div>
          </div>

          {/* Next Founder (Right Preview) */}
          <div
            onClick={() => setActiveIndex(nextIndex)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActiveIndex(nextIndex)}
            tabIndex={0}
            role="button"
            aria-label={`${FOUNDERS[nextIndex].name} (${t.founders.next})`}
            className="col-span-3 p-5 rounded-lg border border-surface-border bg-surface-card/50 opacity-70 hover:opacity-100 transition-all cursor-pointer flex flex-col items-center text-center justify-center space-y-3"
          >
            <div className="relative w-20 h-24 rounded border border-surface-border overflow-hidden bg-primary-dark shadow-inner">
              <Image
                src={FOUNDERS[nextIndex].image}
                alt={FOUNDERS[nextIndex].name}
                fill
                sizes="80px"
                className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                {t.founders.next}
              </span>
              <h4 className="text-sm font-bold text-slate-200 line-clamp-1">{FOUNDERS[nextIndex].name}</h4>
            </div>
          </div>
        </div>

        {/* Mobile Single Card View */}
        <div className="block lg:hidden mb-8">
          <div className="p-6 rounded-lg border-2 border-[#00D2FF] bg-surface-card space-y-5">
            <div className="flex items-center gap-4">
              <div className="relative w-28 h-36 rounded border border-[#F59E0B] overflow-hidden bg-primary-dark flex-shrink-0">
                <Image
                  src={activeFounder.image}
                  alt={activeFounder.imageAlt}
                  fill
                  sizes="112px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="space-y-1.5 min-w-0">
                <TechnicalBadge variant="amber">{activeFounder.titleTag[language]}</TechnicalBadge>
                <h3 className="text-lg font-bold text-white tracking-tight">{activeFounder.name}</h3>
                <p className="text-xs font-mono text-[#00D2FF] leading-snug line-clamp-2">
                  {activeFounder.role[language]}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {activeFounder.bio[language]}
            </p>
          </div>
        </div>

        {/* In-depth Competencies Panel for the Active Founder */}
        <div className="p-6 sm:p-8 rounded-lg border border-surface-border bg-primary-card/70 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#00D2FF]" />
                {t.founders.technicalFrameworkTitle}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeFounder.extendedBio[language]}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#F59E0B]" />
                {t.founders.competenciesTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                {activeFounder.competencies[language].map((comp, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded bg-surface-card/60 border border-surface-border/60"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] flex-shrink-0" />
                    <span className="font-medium">{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
