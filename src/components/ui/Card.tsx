import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  goldAccent?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  hoverEffect = true,
  goldAccent = false,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-slate-200/80 p-6 shadow-premium transition-all duration-300 relative overflow-hidden",
        hoverEffect && "hover:shadow-premium-hover hover:-translate-y-1 hover:border-academic-500/30",
        goldAccent && "before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-gold-400 before:to-gold-600",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
