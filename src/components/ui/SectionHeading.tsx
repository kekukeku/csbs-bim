import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badge?: string;
  slideTag?: string;
  title: string;
  gradientText?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  slideTag,
  title,
  gradientText,
  subtitle,
  align = 'center'
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center max-w-4xl mx-auto' : 'max-w-3xl'}`}>
      {(badge || slideTag) && (
        <div className={`flex items-center gap-2 mb-3.5 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          {badge && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-ocean-950/70 text-ocean-300 border border-ocean-800/50">
              {badge}
            </span>
          )}
          {slideTag && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono text-marine-400 bg-marine-900/60 border border-marine-800/50">
              {slideTag}
            </span>
          )}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
        {title}{' '}
        {gradientText && (
          <span className="gradient-text-ocean font-extrabold">{gradientText}</span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-3.5 text-sm sm:text-base text-marine-300 leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
