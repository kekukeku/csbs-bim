import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ESG_IFRS_DATA } from '../../data/proposalData';
import { FileSpreadsheet, ShieldCheck, Scale, CheckCircle2, ArrowRight } from 'lucide-react';

export const IfrsAccountingSection: React.FC = () => {
  return (
    <section id="esg-carbon" className="py-20 relative bg-[#070D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="永續會計與法規"
          slideTag="環會協會專業賦能"
          title="IFRS S1/S2 永續揭露與"
          gradientText="重大資本支出 (CAPEX) 財務連結"
          subtitle="環境管理會計協會協助台船將工程防蝕與 BIM 監測數據，直接轉化為符合金管會規範的 S1/S2 氣候實體風險與職安內控底稿！"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ESG_IFRS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-marine-900/70 border border-white/10 space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-sage-950/80 text-sage-300 border border-sage-800/50">
                    {item.standard}
                  </span>
                  <Scale className="w-5 h-5 text-sage-400" />
                </div>

                <h3 className="text-lg font-bold text-white mt-3 leading-snug">
                  {item.title}
                </h3>

                <div className="mt-3 space-y-2.5">
                  <div className="p-3 rounded-lg bg-marine-950/80 border border-white/5 text-xs text-marine-300">
                    <strong className="text-sand-300 block font-mono text-[11px] mb-0.5">準則要求：</strong>
                    {item.requirements}
                  </div>

                  <div className="p-3 rounded-lg bg-sage-950/40 border border-sage-800/40 text-xs text-sage-300">
                    <strong className="text-sage-400 block font-mono text-[11px] mb-0.5">協會具體輸出底稿：</strong>
                    {item.cemaOutput}
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-ocean-950/40 border border-ocean-800/40 text-xs text-ocean-300 font-medium">
                🎯 財務價值：{item.valueProp}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
