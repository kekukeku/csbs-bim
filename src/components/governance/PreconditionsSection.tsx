import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowCard } from '../ui/GlowCard';
import { FIVE_PRECONDITIONS } from '../../data/proposalData';
import { AlertCircle, HelpCircle, FileSearch, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';

export const PreconditionsSection: React.FC = () => {
  return (
    <section id="preconditions" className="py-20 relative bg-gradient-to-b from-transparent via-[#0A1024]/60 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="六大升級亮點 06"
          slideTag="招標前提與邊界釐清"
          title="提列五大前提條件："
          gradientText="業主優先釐清事項與招標因應"
          subtitle="下列事項將實質影響本建議書之服務範圍、報價單價與可行性。部分事項之答案將決定特定工項之取捨，敬請台船招標單位優先協助釐清！"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {FIVE_PRECONDITIONS.map((item, idx) => (
            <GlowCard
              key={item.id}
              glowColor={idx === 0 ? 'rose' : idx === 1 ? 'purple' : idx === 2 ? 'cyan' : idx === 3 ? 'amber' : 'emerald'}
              className="space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold uppercase text-ocean-400">
                    前提條件 #{idx + 1}
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 text-slate-300">
                    <FileSearch className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-base font-black text-white mt-3 leading-snug">
                  {item.title}
                </h4>

                <div className="mt-3 space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">
                    待釐清關鍵問題：
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {item.keyQuestions.map((q, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300">
                  <strong className="text-rose-300 block font-mono text-[11px] mb-0.5">實質影響：</strong>
                  {item.impactOnScope}
                </div>
                <div className="p-2.5 rounded-xl bg-esg-950/30 text-xs text-esg-300 font-medium">
                  🎯 建議因應：{item.actionRequired}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
