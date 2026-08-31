import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowCard } from '../ui/GlowCard';
import { ESG_IFRS_DATA } from '../../data/proposalData';
import { ShieldCheck, FileCheck, DollarSign, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export const IfrsAccountingSection: React.FC = () => {
  return (
    <section id="esg-carbon" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="環會協會 ESG 核心優勢"
          slideTag="Slide 13 / 20"
          title="上市公司合規對接："
          gradientText="IFRS S1/S2 與重大資本支出（CAPEX）"
          subtitle="金管會要求上市公司全面接軌 IFRS 永續準則。協會將實體工程數據精算為合規會計師確信底稿，提供母公司董事會無法拒絕之合規審計理由！"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ESG_IFRS_DATA.map((item, idx) => (
            <GlowCard
              key={idx}
              glowColor={idx === 0 ? 'emerald' : 'purple'}
              className="space-y-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="px-3 py-1 rounded-full bg-esg-500/20 text-esg-300 text-xs font-mono font-bold uppercase">
                    {item.standard}
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 text-slate-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mt-4 leading-snug">
                  {item.title}
                </h3>

                <div className="mt-6 space-y-4">
                  {/* Regulatory Requirement */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                    <span className="text-[11px] font-mono text-slate-400 uppercase font-bold block">
                      國際準則揭露要求：
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.requirements}
                    </p>
                  </div>

                  {/* Association's concrete output */}
                  <div className="p-4 rounded-2xl bg-esg-950/40 border border-esg-500/30 space-y-1.5">
                    <span className="text-[11px] font-mono text-esg-400 uppercase font-bold block flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4" />
                      環會協會專業輸出（確信底稿）：
                    </span>
                    <p className="text-xs sm:text-sm text-esg-200 leading-relaxed font-medium">
                      {item.cemaOutput}
                    </p>
                  </div>
                </div>
              </div>

              {/* Value Proposition Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-ocean-950/40 to-esg-950/40 border border-white/10 text-xs text-slate-200">
                <strong className="text-ocean-300 block mb-0.5">💎 創造定價權核心：</strong>
                {item.valueProp}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
