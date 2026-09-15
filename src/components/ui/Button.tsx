import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 
      "group inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0";

    const variants = {
      primary: "bg-navy-800 hover:bg-navy-900 text-white shadow-md hover:shadow-navy-glow focus:ring-navy-700 border border-navy-700/50",
      secondary: "bg-academic-800 hover:bg-academic-900 text-white shadow-md focus:ring-academic-700",
      gold: "bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold shadow-md hover:shadow-gold-glow focus:ring-gold-500 border border-gold-400/50",
      outline: "border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white focus:ring-navy-800",
      ghost: "text-slate-700 hover:bg-slate-100 hover:text-navy-900 focus:ring-slate-400",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-2 rounded-lg gap-1.5",
      md: "text-sm px-5 py-2.5 rounded-xl gap-2",
      lg: "text-base px-7 py-3.5 rounded-xl gap-2.5 font-semibold",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : leftIcon ? (
          <span className="transition-transform duration-200 group-hover:-translate-x-0.5">{leftIcon}</span>
        ) : null}

        <span>{children}</span>

        {!isLoading && rightIcon && (
          <span className="transition-transform duration-200 group-hover:translate-x-1">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
