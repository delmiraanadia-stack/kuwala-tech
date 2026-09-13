import React from "react";
import { cn } from "@/utils/cn";

interface TechnicalLabelProps {
  label: string;
  value: string;
  className?: string;
}

export function TechnicalLabel({ label, value, className }: TechnicalLabelProps) {
  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
        {label}
      </span>
      <span className="text-sm font-mono text-slate-100 font-semibold">{value}</span>
    </div>
  );
}
