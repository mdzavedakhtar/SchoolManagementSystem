import React from 'react';
import { Badge } from './Badge';
import { cn } from '../../utils/cn';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
  dark = false,
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12 sm:mb-16', alignClasses[align], className)}>
      {badge && (
        <Badge variant={dark ? 'navy' : 'gold'} className="mb-3">
          {badge}
        </Badge>
      )}

      <h2 className={cn(
        'text-section-title font-extrabold font-heading tracking-tight',
        dark ? 'text-white' : 'text-navy-900'
      )}>
        {title}
      </h2>

      {subtitle && (
        <p className={cn(
          'mt-3 text-base sm:text-lg font-sans leading-relaxed',
          dark ? 'text-slate-300' : 'text-slate-600'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
