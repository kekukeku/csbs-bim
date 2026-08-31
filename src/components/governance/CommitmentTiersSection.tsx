import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowCard } from '../ui/GlowCard';
import { COMMITMENT_TIERS, PARTNERS } from '../../data/proposalData';
import { Shield, CheckCircle2, AlertCircle, HelpCircle, Scale, Building2, BookOpenCheck, Anchor, ArrowRight } from 'lucide-react';

export const CommitmentTiersSection: React.FC = () => {
  const [activeTierIdx, setActiveTierIdx] = useState(0);

  const tierIcons = [CheckCircle2, AlertCircle, HelpCircle];

  return (
    <section id="commitment-tiers" className="py-20 relative bg-gradient-to-b from-transparent via-[#0B1530]/60 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="六大升級亮點 01"
          slideTag="責任與邊界精準劃分"
          title="落實「承諾分層原則」與"
          gradientText="明確法律責任邊界"
          subtitle="為避免在協力資源尚未到位前形成無條件履約義務，本案將服務事項明確區分為「核心承諾、選項服務、待確認事項」三層架構，並嚴格劃定各團隊法律責任邊界！"
        />

        {/* 3 Commitment Tier Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {COMMITMENT_TIERS.map((tier, idx) => {
            const Icon = tierIcons[idx];
            const isSelected = activeTierIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTierIdx(idx)}
                className={`p-5 rounded-3xl border text-left transition-all duration-300 flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? idx === 0
                      ? 'bg-[#0A2438] border-esg-400 shadow-glow-esg scale-[1.02]'
                      : idx === 1
                      ? 'bg-[#291D0E] border-sun-400 shadow-glow-sun scale-[1.02]'
                      : 'bg-[#291118] border-rose-400 shadow-glow-fire scale-[1.02]'
                    : 'bg-[#080E21]/80 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${tier.badgeColor}`}>
                    {tier.tier}
                  </span>
                  <Icon className={`w-5 h-5 ${
                    idx === 0 ? 'text-esg-400' : idx === 1 ? 'text-sun-400' : 'text-rose-400'
                  }`} />
                </div>

                <h4 className="text-base font-bold text-white leading-tight">
                  {tier.name}
                </h4>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
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
            <div className="rounded-3xl p-6 sm:p-10 bg-[#091129]/95 border border-white/15 backdrop-blur-2xl mb-16 space-y-6 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-ocean-400 block mb-1">
                    {tier.tier} 服務範疇與契約效力
                  </span>
                  <h3 className="text-2xl font-black text-white">{tier.name}</h3>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 font-mono max-w-md">
                  <strong className="text-white block font-bold mb-0.5">⚖️ 契約效力：</strong>
                  {tier.legalEffect}
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tier.items.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-bold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-ocean-400" />
                        {item.title}
                      </h5>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        item.status === '自辦'
                          ? 'bg-esg-500/20 text-esg-300 border border-esg-500/30'
                          : item.status === '協力'
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          : item.status === '外購'
                          ? 'bg-sun-500/20 text-sun-300 border border-sun-500/30'
                          : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      }`}>
                        【{item.status}】
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed pl-3.5">
                      {item.desc}
                    </p>

                    <div className="pl-3.5 pt-1 text-[11px] font-mono text-slate-400">
                      執行主體：<span className="text-slate-200">{item.owner}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Legal Boundary Matrix Callout */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#0C1733]/90 border border-ocean-500/30 backdrop-blur-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-ocean-500/20 text-ocean-300">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-ocean-400 block">
                法律與專業責任邊界矩陣
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                各合作單位法律責任邊界與職責切割
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-4 rounded-2xl bg-black/40 border border-cyan-500/30 space-y-2">
              <span className="font-bold text-cyan-300 block text-sm flex items-center gap-1.5">
                <Anchor className="w-4 h-4" /> 主承攬（台蝕 ＋ 台營）
              </span>
              <p className="text-slate-300 leading-relaxed">
                負責工地安全衛生第一線雇主責任、工程完工保固責任與主標履約總責任。主導防蝕塗裝、抗鹽浪板更換與水下陽極板安裝。
              </p>
              <div className="p-2 rounded bg-cyan-950/40 text-cyan-200 font-mono text-[11px]">
                ✔ 承擔工程主標法律與保固責任
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-purple-500/30 space-y-2">
              <span className="font-bold text-purple-300 block text-sm flex items-center gap-1.5">
                <Building2 className="w-4 h-4" /> BIM 數位協力 ＋ 中科大學研
              </span>
              <p className="text-slate-300 leading-relaxed">
                負責三維點雲掃描、現況基線盤查、淨空衝突檢核與平台維運；<strong className="text-white">無工程變更核定權，亦不承擔結構計算與法定簽證責任</strong>。
              </p>
              <div className="p-2 rounded bg-purple-950/40 text-purple-200 font-mono text-[11px]">
                ✔ 技術分析與整合，無變更簽認權
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/30 space-y-2">
              <span className="font-bold text-emerald-300 block text-sm flex items-center gap-1.5">
                <BookOpenCheck className="w-4 h-4" /> 外部執業技師 ＋ 第三方查證
              </span>
              <p className="text-slate-300 leading-relaxed">
                天車承載與結構補強依法由<strong className="text-white">外聘具執業執照之結構技師</strong>簽證負責；碳盤查確信證書依法由第三方查驗機構出具。
              </p>
              <div className="p-2 rounded bg-emerald-950/40 text-emerald-200 font-mono text-[11px]">
                ✔ 結構簽證與碳確信依法專業外購
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
