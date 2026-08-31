import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowCard } from '../ui/GlowCard';
import { PARTNERS } from '../../data/proposalData';
import { Anchor, Building2, BookOpenCheck, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const GoldenTrianglePartners: React.FC = () => {
  const partnerIcons = [Anchor, Building2, BookOpenCheck];
  const glowColors: ('cyan' | 'purple' | 'emerald')[] = ['cyan', 'purple', 'emerald'];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="三方產學研金"
          slideTag="Slide 06 / 20"
          title="三方聯合陣容："
          gradientText="互補賦能的黃金三角"
          subtitle="結合產業施作龍頭、學術數位研發平臺與國際永續會計專業，形成台船無法替代的黃金三角體系。"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PARTNERS.map((partner, idx) => {
            const Icon = partnerIcons[idx];
            return (
              <GlowCard
                key={idx}
                glowColor={glowColors[idx]}
                className="flex flex-col justify-between space-y-6"
              >
                <div>
                  {/* Top Role & Icon */}
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${partner.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                        {partner.role}
                      </span>
                      <h3 className="text-lg font-black text-white leading-tight mt-0.5">
                        {partner.shortName}
                      </h3>
                    </div>
                  </div>

                  {/* Strengths */}
                  <div className="mt-6 space-y-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      專業定位與核心強項
                    </span>
                    <ul className="space-y-2">
                      {partner.strengths.map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${partner.iconColor}`} />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Specific Responsibilities */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-ocean-400 block flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    本專案具體負責任務
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {partner.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-ocean-400 font-bold">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
