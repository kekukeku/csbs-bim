import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'cyan' | 'emerald' | 'purple' | 'amber' | 'rose' | 'slate';
  slideTag?: string;
  title: string;
  subtitle?: string;
  gradientText?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeVariant = 'cyan',
  slideTag,
  title,
  subtitle,
  gradientText,
  align = 'center',
  className = ''
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center max-w-4xl mx-auto' : 'max-w-3xl'
      } ${className}`}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
        {slideTag && (
          <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
            {slideTag}
          </span>
        )}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}{' '}
        {gradientText && (
          <span className="gradient-text-rainbow block sm:inline mt-1 sm:mt-0">
            {gradientText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
