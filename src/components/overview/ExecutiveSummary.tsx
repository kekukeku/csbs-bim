import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowCard } from '../ui/GlowCard';
import { CORE_CHAPTERS } from '../../data/proposalData';
import { ArrowRight, Compass, ShieldAlert, Cpu, Calculator, Award } from 'lucide-react';

export const ExecutiveSummary: React.FC = () => {
  const icons = [Compass, ShieldAlert, Cpu, Calculator, Award];

  return (
    <section id="overview" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="五大戰略單元"
          slideTag="Slide 02 / 20"
          title="提案核心架構："
          gradientText="五大部戰略推進全景"
          subtitle="本提案自現況痛點出發，以 BIM 與 ESG 打造全新工程定價權，提供可立即落地實施的軟硬體規格、合規審計理由與模組化合約推動策略。"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {CORE_CHAPTERS.map((ch, idx) => {
            const Icon = icons[idx];
            return (
              <GlowCard
                key={ch.num}
                glowColor="cyan"
                className="flex flex-col justify-between group hover:border-ocean-400/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black font-mono text-ocean-400 group-hover:scale-110 transition-transform">
                      {ch.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-ocean-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {ch.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {ch.theme}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] font-mono text-ocean-400 uppercase font-bold block mb-1">
                    戰略目標
                  </span>
                  <p className="text-xs text-esg-300 font-semibold leading-relaxed">
                    {ch.strategy}
                  </p>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
