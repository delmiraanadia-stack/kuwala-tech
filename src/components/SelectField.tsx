import React from "react";
import { cn } from "@/utils/cn";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  hint?: string;
  required?: boolean;
}

export const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, options, placeholder, error, hint, required, className, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor={inputId}
            className="text-xs font-mono font-medium text-slate-200 uppercase tracking-wide flex items-center gap-1"
          >
            {label}
            {required && <span className="text-[#F59E0B] font-bold">*</span>}
          </label>
          {hint && <span className="text-[11px] text-slate-400 font-mono">{hint}</span>}
        </div>

        <select
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          required={required}
          className={cn(
            "w-full px-3.5 py-2.5 rounded bg-primary-dark/90 border text-sm text-slate-100",
            "focus:outline-none focus:ring-1 focus:ring-[#00D2FF] focus:border-[#00D2FF] transition-all cursor-pointer",
            error
              ? "border-red-500/80 focus:border-red-500 focus:ring-red-500"
              : "border-surface-border hover:border-slate-500",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled className="bg-primary-dark text-slate-500">
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-primary-dark text-slate-100">
              {opt.label}
            </option>
          ))}
        </select>

        {error && (
          <p
            id={`${inputId}-error`}
            role="alert"
            className="text-xs text-red-400 font-mono flex items-center gap-1 pt-0.5"
          >
            <span>⚠</span>
            <span>{error}</span>
          </p>
        )}
      </div>
    );
  }
);

SelectField.displayName = "SelectField";
