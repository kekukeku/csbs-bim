import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { COMMITMENT_TIERS, PARTNERS } from '../../data/proposalData';
import { Shield, CheckCircle2, AlertCircle, HelpCircle, Scale, Building2, BookOpenCheck, Anchor } from 'lucide-react';

export const CommitmentTiersSection: React.FC = () => {
  const [activeTierIdx, setActiveTierIdx] = useState(0);
  const tierIcons = [CheckCircle2, AlertCircle, HelpCircle];

  return (
    <section id="commitment-tiers" className="py-20 relative bg-[#070D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="責任分層"
          slideTag="法律邊界劃分"
          title="落實「承諾分層原則」與"
          gradientText="明確責任邊界"
          subtitle="將服務事項嚴格劃分為「核心承諾、選項服務、待確認事項」三層架構，避免在協力資源尚未到位前形成無條件履約義務。"
        />

        {/* 3 Clean Tier Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {COMMITMENT_TIERS.map((tier, idx) => {
            const Icon = tierIcons[idx];
            const isSelected = activeTierIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTierIdx(idx)}
                className={`p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? idx === 0
                      ? 'bg-marine-900 border-sage-500/50 shadow-subtle'
                      : idx === 1
                      ? 'bg-marine-900 border-ocean-500/50 shadow-subtle'
                      : 'bg-marine-900 border-amber-500/50 shadow-subtle'
                    : 'bg-marine-950/60 border-white/5 hover:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-medium border ${
                    idx === 0
                      ? 'bg-sage-950/60 text-sage-300 border-sage-800/60'
                      : idx === 1
                      ? 'bg-ocean-950/60 text-ocean-300 border-ocean-800/60'
                      : 'bg-amber-950/60 text-amber-300 border-amber-800/60'
                  }`}>
                    {tier.tier}
                  </span>
                  <Icon className={`w-4 h-4 ${
                    idx === 0 ? 'text-sage-400' : idx === 1 ? 'text-ocean-400' : 'text-amber-400'
                  }`} />
                </div>

                <h4 className="text-base font-bold text-white">
                  {tier.name}
                </h4>

                <p className="text-xs text-marine-400 line-clamp-2 leading-relaxed">
                  {tier.definition}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Tier Detailed Item Table */}
        {(() => {
          const tier = COMMITMENT_TIERS[activeTierIdx];
          return (
            <div className="rounded-2xl p-6 sm:p-8 bg-marine-900/90 border border-white/10 backdrop-blur-md mb-12 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-ocean-400 font-medium uppercase tracking-wider block mb-1">
                    {tier.tier} 範疇與效力
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{tier.name}</h3>
                </div>
                <div className="p-3 rounded-xl bg-marine-950/80 border border-white/5 text-xs text-marine-300 font-mono max-w-md">
                  <strong className="text-white block font-bold mb-0.5">⚖️ 契約效力：</strong>
                  {tier.legalEffect}
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {tier.items.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-marine-950/60 border border-white/5 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-ocean-400" />
                        {item.title}
                      </h5>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        item.status === '自辦'
                          ? 'bg-sage-950/60 text-sage-300 border-sage-800/60'
                          : item.status === '協力'
                          ? 'bg-ocean-950/60 text-ocean-300 border-ocean-800/60'
                          : item.status === '外購'
                          ? 'bg-marine-800/60 text-marine-300 border-marine-700/60'
                          : 'bg-amber-950/60 text-amber-300 border-amber-800/60'
                      }`}>
                        【{item.status}】
                      </span>
                    </div>

                    <p className="text-xs text-marine-300 leading-relaxed pl-3.5">
                      {item.desc}
                    </p>

                    <div className="pl-3.5 pt-1 text-[11px] font-mono text-marine-400">
                      執行主體：<span className="text-slate-300">{item.owner}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Legal Boundary Matrix Callout */}
        <div className="rounded-2xl p-6 sm:p-8 bg-marine-900/60 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-ocean-950/80 text-ocean-400 border border-ocean-800/50">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-medium text-ocean-400 block">
                法律與專業責任邊界
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                各團隊責任分工與邊界清楚劃定
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-marine-950/60 border border-white/5 space-y-2">
              <span className="font-semibold text-ocean-300 block text-sm flex items-center gap-1.5">
                <Anchor className="w-4 h-4" /> 主承攬（台蝕 ＋ 台營）
              </span>
              <p className="text-marine-300 leading-relaxed">
                負責工地安全衛生第一線雇主責任、工程完工保固責任與主標履約總責任。主導防蝕塗裝、抗鹽浪板與水下陽極。
              </p>
              <div className="p-2 rounded bg-marine-900/80 text-slate-300 font-mono text-[11px]">
                ✔ 承擔工程主標法律與保固責任
              </div>
            </div>

            <div className="p-4 rounded-xl bg-marine-950/60 border border-white/5 space-y-2">
              <span className="font-semibold text-ocean-200 block text-sm flex items-center gap-1.5">
                <Building2 className="w-4 h-4" /> BIM 數位協力 ＋ 中科大學研
              </span>
              <p className="text-marine-300 leading-relaxed">
                負責點雲掃描、現況基線盤查、淨空檢核與平台維運；<strong className="text-white">無工程變更核定權，亦不承擔結構計算與法定簽證責任</strong>。
              </p>
              <div className="p-2 rounded bg-marine-900/80 text-slate-300 font-mono text-[11px]">
                ✔ 技術分析與整合，無變更簽認權
              </div>
            </div>

            <div className="p-4 rounded-xl bg-marine-950/60 border border-white/5 space-y-2">
              <span className="font-semibold text-sage-300 block text-sm flex items-center gap-1.5">
                <BookOpenCheck className="w-4 h-4" /> 外部執業技師 ＋ 第三方查證
              </span>
              <p className="text-marine-300 leading-relaxed">
                天車承載與結構補強依法由<strong className="text-white">外聘執業結構技師</strong>簽證負責；碳盤查確信由獨立第三方查驗機構出具。
              </p>
              <div className="p-2 rounded bg-marine-900/80 text-slate-300 font-mono text-[11px]">
                ✔ 結構簽證與碳確信依法專業外購
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
