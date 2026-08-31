import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'esg' | 'purple' | 'amber' | 'emerald' | 'blue' | 'ocean' | 'sage';
  hoverEffect?: boolean;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowColor = 'ocean',
  hoverEffect = true,
}) => {
  const borderStyles = {
    cyan: 'hover:border-ocean-400/40',
    esg: 'hover:border-sage-400/40',
    purple: 'hover:border-slate-400/40',
    amber: 'hover:border-amber-400/40',
    emerald: 'hover:border-sage-400/40',
    blue: 'hover:border-ocean-500/40',
    ocean: 'hover:border-ocean-400/40',
    sage: 'hover:border-sage-400/40',
  };

  return (
    <div
      className={`rounded-2xl bg-marine-900/80 border border-white/[0.08] p-6 backdrop-blur-md transition-all duration-200 ${
        hoverEffect ? `hover:bg-marine-800/80 hover:-translate-y-0.5 ${borderStyles[glowColor] || 'hover:border-ocean-400/40'}` : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
