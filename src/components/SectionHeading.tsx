import React from "react";
import { TechnicalBadge } from "./TechnicalBadge";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "cyan" | "amber" | "neutral";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "cyan",
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3 mb-10",
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {badge && (
        <div>
          <TechnicalBadge variant={badgeVariant}>{badge}</TechnicalBadge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
