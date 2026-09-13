"use client";

import React from "react";
import Link from "next/link";
import { SolutionItem } from "@/content/solutions";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Factory, Home, SunMedium, Building2, ShieldAlert } from "lucide-react";
import { cn } from "@/utils/cn";

const solutionIcons: Record<string, React.ReactNode> = {
  Factory: <Factory className="w-5 h-5" />,
  Home: <Home className="w-5 h-5" />,
  SunMedium: <SunMedium className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
};

interface SolutionCardProps {
  solution: SolutionItem;
  className?: string;
}

export function SolutionCard({ solution, className }: SolutionCardProps) {
  const { language, t } = useLanguage();

  return (
    <div
      className={cn(
        "tech-card group p-6 rounded-md flex flex-col justify-between h-full bg-surface-card hover:border-[#F59E0B]/50 transition-all duration-200",
        className
      )}
    >
      <div className="space-y-4">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-surface-border/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#00D2FF] px-2 py-0.5 border border-[#00D2FF]/30 bg-[#00D2FF]/10 rounded">
              SOL-{solution.number}
            </span>
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
              INTEGRATED
            </span>
          </div>
          <div
            className="p-2 rounded bg-primary-dark border border-surface-border text-[#F59E0B] group-hover:text-white group-hover:bg-[#F59E0B]/20 group-hover:border-[#F59E0B]/40 transition-colors"
            aria-hidden="true"
          >
            {solutionIcons[solution.iconName] || <Factory className="w-5 h-5" />}
          </div>
        </div>

        {/* Title and description */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white group-hover:text-[#F59E0B] transition-colors">
            {solution.title[language]}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
            {solution.shortDescription[language]}
          </p>
        </div>

        {/* Applied Technologies Checklist */}
        <div className="space-y-1 pt-2">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
            {t.solutions.techTitle}:
          </span>
          <ul className="space-y-1 text-xs text-slate-300">
            {solution.technology[language].slice(0, 2).map((tech, idx) => (
              <li key={idx} className="flex items-center gap-1.5 truncate">
                <span className="w-1 h-1 rounded-full bg-[#00D2FF]" aria-hidden="true" />
                <span className="truncate">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action link */}
      <div className="pt-6 mt-4 border-t border-surface-border/40">
        <Link
          href={`/solucoes/${solution.slug}`}
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#F59E0B] hover:text-white transition-colors group-hover:translate-x-1 duration-150"
        >
          <span>{t.common.exploreSolution}</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
