import React from 'react';
import { cn } from '../../utils/cn';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  ariaLabel: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = 'ghost', size = 'md', ariaLabel, children, ...props }, ref) => {
    const baseStyles = 
      "inline-flex items-center justify-center rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 cursor-pointer";

    const variants = {
      primary: "bg-navy-800 text-white hover:bg-navy-900 focus:ring-navy-700",
      gold: "bg-gold-500 text-navy-950 hover:bg-gold-400 focus:ring-gold-500",
      outline: "border border-slate-300 text-slate-700 hover:bg-slate-100 focus:ring-slate-400",
      ghost: "text-slate-200 hover:bg-white/10 hover:text-white focus:ring-slate-400",
    };

    const sizes = {
      sm: "p-1.5 text-xs",
      md: "p-2.5 text-sm",
      lg: "p-3.5 text-base",
    };

    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
