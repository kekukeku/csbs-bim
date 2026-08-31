import React from 'react';
import { clsx } from 'clsx';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'emerald' | 'purple' | 'amber' | 'rose' | 'rainbow' | 'none';
  interactive?: boolean;
  onClick?: () => void;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowColor = 'none',
  interactive = false,
  onClick
}) => {
  const glowStyles = {
    none: 'border-white/10 hover:border-white/20',
    cyan: 'border-ocean-500/20 hover:border-ocean-400/50 hover:shadow-glow-ocean',
    emerald: 'border-esg-500/20 hover:border-esg-400/50 hover:shadow-glow-esg',
    purple: 'border-digital-500/20 hover:border-digital-400/50 hover:shadow-glow-digital',
    amber: 'border-sun-500/20 hover:border-sun-400/50 hover:shadow-glow-sun',
    rose: 'border-fire-500/20 hover:border-fire-400/50 hover:shadow-glow-fire',
    rainbow: 'border-transparent glow-border-rainbow'
  };

  return (
    <div
      onClick={onClick}
      className={clsx(
        'relative rounded-2xl bg-[#0B132B]/80 backdrop-blur-xl border p-6 sm:p-8 transition-all duration-300',
        glowStyles[glowColor],
        interactive && 'cursor-pointer hover:-translate-y-1 hover:bg-[#0E1A3D]/90',
        className
      )}
    >
      {children}
    </div>
  );
};
