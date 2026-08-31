import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle2, XCircle, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';

export const StrategyComparisonToggle: React.FC = () => {
  return (
    <section className="py-20 relative bg-[#0A0F1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="戰略定位"
          slideTag="商業模式升級"
          title="戰略解法："
          gradientText="工程修繕預算升級為「ESG 資本投資」"
          subtitle="將傳統被視為費用的修補工項，升級為符合金管會規範、能爭取董事會專款支持的數位雙生資產！"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left: Traditional */}
          <div className="p-6 rounded-2xl bg-marine-900/50 border border-white/5 space-y-4">
            <div className="pb-3 border-b border-white/5">
              <span className="text-xs font-mono text-marine-400 uppercase font-medium">
                傳統思維 (Traditional)
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                傳統修繕純工班 ｜ 被動削價競爭
              </h3>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-marine-300">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-marine-400 shrink-0 mt-0.5" />
                <span><strong>被動修補：</strong>裂縫填縫、鋼筋除銹、更換鐵皮，難以證明耐久效益</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-marine-400 shrink-0 mt-0.5" />
                <span><strong>採購比價：</strong>被總廠視為「沉沒費用（Expense）」，習慣性大幅砍價</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-marine-400 shrink-0 mt-0.5" />
                <span><strong>保固到期無延伸：</strong>缺乏數位資產與連續數據，無法形成長約保護</span>
              </li>
            </ul>

            <div className="p-3 rounded-xl bg-marine-950/60 text-xs text-marine-400 font-mono">
              ❌ 陷入低毛利代工與內部議價泥淖
            </div>
          </div>

          {/* Right: Modern BIM + ESG */}
          <div className="p-6 rounded-2xl bg-marine-900/90 border border-ocean-500/30 space-y-4 shadow-ocean-soft">
            <div className="pb-3 border-b border-white/5">
              <span className="text-xs font-mono text-ocean-400 uppercase font-medium">
                加值轉型 (Transformation)
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                BIM 數位雙生 ＋ ESG 資本投資溢價
              </h3>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sage-400 shrink-0 mt-0.5" />
                <span><strong>固定資產資本化：</strong>以 IFRS S2 氣候實體風險精算，爭取重大資本支出（CAPEX）</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-ocean-400 shrink-0 mt-0.5" />
                <span><strong>四道決策 Gate 控制：</strong>G01~G04 階段獨立計價，0 件未核定變更</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sage-400 shrink-0 mt-0.5" />
                <span><strong>鎖定長期運維（O&M）：</strong>交付 G04 數位雙生模型與水下陽極趨勢清冊，建立長約</span>
              </li>
            </ul>

            <div className="p-3 rounded-xl bg-sage-950/50 border border-sage-800/50 text-xs text-sage-300 font-mono">
              ✔ 建立台蝕定價權與長期技術護城河
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
