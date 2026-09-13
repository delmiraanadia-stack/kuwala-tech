import React from "react";
import { cn } from "@/utils/cn";

interface TechnicalBadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "amber" | "neutral" | "dark";
  className?: string;
  dot?: boolean;
}

export function TechnicalBadge({
  children,
  variant = "cyan",
  className,
  dot = true,
}: TechnicalBadgeProps) {
  const variantStyles = {
    cyan: "bg-[#00D2FF]/10 text-[#00D2FF] border-[#00D2FF]/30",
    amber: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30",
    neutral: "bg-surface-light/60 text-slate-300 border-surface-border",
    dark: "bg-primary-dark text-slate-400 border-surface-border",
  };

  const dotColors = {
    cyan: "bg-[#00D2FF]",
    amber: "bg-[#F59E0B]",
    neutral: "bg-slate-400",
    dark: "bg-slate-500",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium tracking-wide uppercase rounded-sm border",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full animate-pulse", dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
