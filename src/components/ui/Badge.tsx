import React from 'react';
import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'emerald' | 'purple' | 'amber' | 'rose' | 'slate';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  className = ''
}) => {
  const variantStyles = {
    cyan: 'bg-ocean-500/15 text-ocean-300 border-ocean-500/30',
    emerald: 'bg-esg-500/15 text-esg-300 border-esg-500/30',
    purple: 'bg-digital-500/15 text-digital-300 border-digital-500/30',
    amber: 'bg-sun-500/15 text-sun-300 border-sun-500/30',
    rose: 'bg-fire-500/15 text-fire-300 border-fire-500/30',
    slate: 'bg-slate-800/80 text-slate-300 border-slate-700/50'
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-md transition-all duration-200',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
