import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { XCircle, CheckCircle2, ArrowRight, Sparkles, TrendingUp, DollarSign, ShieldAlert, Cpu } from 'lucide-react';

export const StrategyComparisonToggle: React.FC = () => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-transparent via-[#0A1024]/60 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="戰略思維升級"
          slideTag="Slide 05 / 20"
          title="戰略解法："
          gradientText="工程預算升級為「ESG 資本投資」"
          subtitle="中科大、協會攜手台蝕，向台船高層轉變邏輯：不是台蝕幫台船修繕，而是共同創造「符合金管會規範的韌性永續資產」！"
        />

        {/* Comparison Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Traditional Way */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#110E18]/80 border border-rose-500/30 backdrop-blur-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider">
                  傳統工程分包思維 (Old Way)
                </span>
                <span className="text-xs font-mono text-slate-500">易被砍價 / 沉沒成本</span>
              </div>

              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-black text-slate-200">
                  塢壁填縫、鋼筋防蝕、更換浪板
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  純勞力與材料施作，無數位資產累積，停留在工程預算單純比價。
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/10">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-rose-200 block font-bold">易被總廠採購比價大砍</strong>
                    <p className="text-xs text-slate-400">採購單位習慣貨比三家，利潤空間被無限壓縮至 3~5%。</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/10">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-rose-200 block font-bold">被視為沉沒維護費用（OPEX）</strong>
                    <p className="text-xs text-slate-400">董事會審查時被視為消耗性支出，爭取大筆預算極度困難。</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/10">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-rose-200 block font-bold">完全無法列入 ESG 治理績效</strong>
                    <p className="text-xs text-slate-400">修繕完畢無數據確信憑據，對金管會 IFRS S1/S2 與外資評等零加分。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 text-center text-xs text-slate-400 font-mono">
              結果：台蝕淪為純工班，保固一過責任自負，難獲長約。
            </div>
          </div>

          {/* New Transformed Way */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0E1C38] to-[#0A1428] border border-esg-500/40 shadow-glow-esg backdrop-blur-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            {/* Top decorative glow badge */}
            <div className="absolute top-0 right-0 px-6 py-1 bg-gradient-to-l from-esg-400 to-ocean-400 text-slate-950 text-[10px] font-black uppercase tracking-widest rounded-bl-xl">
              推薦提案戰略
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="px-3 py-1 rounded-full bg-esg-500/20 text-esg-300 text-xs font-mono font-bold uppercase tracking-wider border border-esg-500/30">
                  加值策略：BIM ＋ ESG (New Way)
                </span>
                <span className="text-xs font-mono text-ocean-300 font-bold">溢價定價權 / 專款支持</span>
              </div>

              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-esg-400" />
                  數位雙生防災監測 ＋ S1/S2 合規帳本
                </h3>
                <p className="text-xs text-slate-300 mt-2">
                  將修繕升級為母公司董事會層級之重大資本支出（CAPEX）與資產延壽示範案。
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-esg-950/40 border border-esg-500/30">
                  <CheckCircle2 className="w-5 h-5 text-esg-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-esg-200 block font-bold">董事會層級專款支持（CAPEX 資本化）</strong>
                    <p className="text-xs text-slate-300">直接對接金管會法規審計正當性，預算不受採購常規砍價限制。</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-esg-950/40 border border-esg-500/30">
                  <CheckCircle2 className="w-5 h-5 text-esg-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-esg-200 block font-bold">換算氣候財務風險，避免千萬級停工損失</strong>
                    <p className="text-xs text-slate-300">以情境分析精算「未修復預期停工損失」，投入 1 元獲取數倍風險防護。</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-esg-950/40 border border-esg-500/30">
                  <CheckCircle2 className="w-5 h-5 text-esg-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-esg-200 block font-bold">鎖定台蝕長期運維服務與專利塗料（O&M 長約）</strong>
                    <p className="text-xs text-slate-300">掌握 3D 數位雙生數據資產，每年穩健收取年度監測與維護服務費。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Proposal Winning Formula Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-ocean-500/20 to-esg-500/20 border border-ocean-500/30 text-xs text-slate-200 leading-relaxed">
              <strong className="text-ocean-300 font-bold block mb-1">💡 提案制勝法門：</strong>
              既有招標底定案（海軍庫房/廠房）做「低碳加值追加案（Option-in）」；在即將招標之大塢、小塢與碼頭案，直接以「BIM 數位雙生 ＋ 結構防災系統」納入投標規格首選！
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
