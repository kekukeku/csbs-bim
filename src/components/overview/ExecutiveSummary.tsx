import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CORE_CHAPTERS } from '../../data/proposalData';
import { ShieldCheck, Cpu, Anchor, FileSpreadsheet, CheckCircle2, ArrowRight } from 'lucide-react';

export const ExecutiveSummary: React.FC = () => {
  return (
    <section id="overview" className="py-20 relative bg-[#090E1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="提案架構"
          slideTag="五大部戰略全景"
          title="建議書核心章節與"
          gradientText="五大推進主軸"
          subtitle="將傳統修繕工程升級為具備數位雙生與 ESG 合規價值的重大資本專案，兼顧施工現實與法律責任。"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CORE_CHAPTERS.map((chapter, idx) => (
            <div
              key={chapter.num}
              className="p-6 rounded-2xl bg-marine-900/60 border border-white/[0.08] hover:border-ocean-500/30 hover:bg-marine-800/60 transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="text-xl font-bold font-mono text-ocean-400 block mb-2">
                  {chapter.num}
                </span>

                <h3 className="text-base font-bold text-white leading-snug mb-2">
                  {chapter.title}
                </h3>

                <p className="text-xs text-marine-300 leading-relaxed">
                  {chapter.theme}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5">
                <span className="text-[11px] font-mono text-sage-400 block font-medium">
                  戰略亮點：
                </span>
                <p className="text-xs text-slate-200 mt-0.5 leading-snug">
                  {chapter.strategy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
