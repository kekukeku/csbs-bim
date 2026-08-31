import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CORE_CHAPTERS } from '../../data/proposalData';
import { ShieldCheck, GitBranch, Layers, FileCheck } from 'lucide-react';

export const ExecutiveSummary: React.FC = () => {
  const icons = [ShieldCheck, GitBranch, Layers, FileCheck];

  return (
    <section id="overview" className="py-16 relative bg-[#070D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="架構全景"
          slideTag="四大核心主軸"
          title="建議書核心架構："
          gradientText="四大主軸戰略全景"
          subtitle="以客觀數據建立基線，透過四道決策 Gate 管制施工風險，並藉由 IFRS S1/S2 與碳帳本將工程轉化為高額永續資產。"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORE_CHAPTERS.map((ch, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={ch.num}
                className="p-5 rounded-2xl bg-marine-900/60 border border-white/5 hover:border-white/10 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-xs font-mono font-bold text-ocean-400">
                      主軸 0{idx + 1}
                    </span>
                    <Icon className="w-4 h-4 text-marine-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white mt-2 leading-snug">
                    {ch.title}
                  </h3>
                  <p className="text-xs text-marine-300 leading-relaxed mt-1.5">
                    {ch.theme}
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-marine-950/80 border border-white/5 text-xs text-sage-300 font-medium">
                  🎯 {ch.strategy}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
