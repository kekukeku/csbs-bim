import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { FIVE_PRECONDITIONS } from '../../data/proposalData';
import { FileSearch } from 'lucide-react';

export const PreconditionsSection: React.FC = () => {
  return (
    <section id="preconditions" className="py-20 relative bg-[#070D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="招標前提"
          slideTag="五大優先釐清事項"
          title="提列五大前提條件："
          gradientText="業主優先釐清事項與招標因應"
          subtitle="下列事項將實質影響本建議書之服務範圍、報價單價與可行性。部分事項之答案將決定特定工項之取捨，敬請台船招標單位優先協助釐清。"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FIVE_PRECONDITIONS.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-marine-900/70 border border-white/10 space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                  <span className="text-xs font-mono font-medium text-ocean-400">
                    前提條件 #{idx + 1}
                  </span>
                  <FileSearch className="w-4 h-4 text-marine-400" />
                </div>

                <h4 className="text-sm font-bold text-white mt-2 leading-snug">
                  {item.title}
                </h4>

                <div className="mt-3 space-y-1.5">
                  <span className="text-[10px] font-mono text-marine-400 uppercase font-medium block">
                    待釐清關鍵問題：
                  </span>
                  <ul className="space-y-1 text-xs text-marine-300">
                    {item.keyQuestions.map((q, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-ocean-400 font-bold">•</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs">
                <div className="p-2.5 rounded-lg bg-marine-950/80 border border-white/5 text-marine-300">
                  <strong className="text-sand-300 block font-mono text-[11px] mb-0.5">實質影響：</strong>
                  {item.impactOnScope}
                </div>
                <div className="p-2 rounded-lg bg-sage-950/40 border border-sage-800/40 text-sage-300 font-medium">
                  🎯 建議因應：{item.actionRequired}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
