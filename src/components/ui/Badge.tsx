import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'navy' | 'academic' | 'neutral';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'gold',
  size = 'md',
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center font-semibold uppercase tracking-wider rounded-full border";

  const variants = {
    gold: "bg-gold-50/90 border-gold-400/40 text-gold-700",
    navy: "bg-navy-900/90 border-navy-700 text-gold-300",
    academic: "bg-academic-100 border-academic-500/30 text-academic-800",
    neutral: "bg-slate-100 border-slate-200 text-slate-700",
  };

  const sizes = {
    sm: "text-[10px] px-2.5 py-0.5 gap-1",
    md: "text-xs px-3.5 py-1 gap-1.5",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
};
