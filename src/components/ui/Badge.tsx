import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'ocean' | 'sage' | 'marine' | 'sand' | 'warning' | 'danger';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'ocean',
  className = '',
  size = 'md'
}) => {
  const variantStyles = {
    ocean: 'bg-ocean-950/60 text-ocean-300 border-ocean-800/60',
    sage: 'bg-sage-950/60 text-sage-300 border-sage-800/60',
    marine: 'bg-marine-800/60 text-marine-300 border-marine-700/60',
    sand: 'bg-sand-900/40 text-sand-300 border-sand-800/40',
    warning: 'bg-amber-950/50 text-amber-300 border-amber-800/50',
    danger: 'bg-rose-950/50 text-rose-300 border-rose-800/50',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-md border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
