"use client";

import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/content/services";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Cpu, Home, Sun, Zap, Network, ShieldCheck, Code2, Wrench, Gauge } from "lucide-react";
import { cn } from "@/utils/cn";

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5" />,
  Gauge: <Gauge className="w-5 h-5" />,
  Home: <Home className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const { language, t } = useLanguage();

  return (
    <div
      className={cn(
        "tech-card group p-6 rounded-md flex flex-col justify-between h-full bg-surface-card hover:border-[#00D2FF]/50 transition-all duration-200",
        className
      )}
    >
      <div className="space-y-4">
        {/* Top bar with Service Number and Icon */}
        <div className="flex items-center justify-between pb-3 border-b border-surface-border/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#F59E0B] px-2 py-0.5 border border-[#F59E0B]/30 bg-[#F59E0B]/10 rounded">
              {service.number}
            </span>
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
              ENG-SERV
            </span>
          </div>
          <div
            className="p-2 rounded bg-primary-dark border border-surface-border text-[#00D2FF] group-hover:text-white group-hover:bg-[#00D2FF]/20 group-hover:border-[#00D2FF]/40 transition-colors"
            aria-hidden="true"
          >
            {iconMap[service.iconName] || <Cpu className="w-5 h-5" />}
          </div>
        </div>

        {/* Title & Short Description */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white group-hover:text-[#00D2FF] transition-colors line-clamp-2">
            {service.title[language]}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
            {service.shortDescription[language]}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {service.tags[language].slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono text-slate-400 bg-primary-dark/80 px-2 py-0.5 rounded border border-surface-border/60"
            >
              {tag}
            </span>
          ))}
          {service.tags[language].length > 4 && (
            <span className="text-[10px] font-mono text-slate-500 py-0.5">
              +{service.tags[language].length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Action link */}
      <div className="pt-6 mt-4 border-t border-surface-border/40">
        <Link
          href={`/servicos/${service.slug}`}
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#00D2FF] hover:text-white transition-colors group-hover:translate-x-1 duration-150"
        >
          <span>{t.common.viewSpecifications}</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
