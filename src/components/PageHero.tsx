import React from "react";
import { TechnicalBadge } from "./TechnicalBadge";
import { CircuitBackground } from "./CircuitBackground";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";
import { cn } from "@/utils/cn";

interface PageHeroProps {
  badge?: string;
  badgeVariant?: "cyan" | "amber" | "neutral";
  number?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({
  badge,
  badgeVariant = "cyan",
  number,
  title,
  subtitle,
  breadcrumbs,
  children,
  className,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        "relative pt-8 pb-14 md:py-16 border-b border-surface-border bg-gradient-to-b from-primary-dark via-primary/30 to-primary-dark",
        className
      )}
    >
      <CircuitBackground variant="light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              {number && (
                <span className="text-sm font-mono font-bold text-[#F59E0B] px-2 py-0.5 border border-[#F59E0B]/30 bg-[#F59E0B]/10 rounded">
                  {number}
                </span>
              )}
              {badge && <TechnicalBadge variant={badgeVariant}>{badge}</TechnicalBadge>}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {title}
            </h1>

            {subtitle && (
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {children && <div className="flex-shrink-0">{children}</div>}
        </div>
      </div>
    </div>
  );
}
