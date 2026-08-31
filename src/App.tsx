import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PresentationModeModal } from './components/layout/PresentationModeModal';
import { HeroSection } from './components/hero/HeroSection';
import { ExecutiveSummary } from './components/overview/ExecutiveSummary';
import { CommitmentTiersSection } from './components/governance/CommitmentTiersSection';
import { DecisionGatesAndChanges } from './components/governance/DecisionGatesAndChanges';
import { StrategyComparisonToggle } from './components/strategy/StrategyComparisonToggle';
import { GoldenTrianglePartners } from './components/strategy/GoldenTrianglePartners';
import { EngineeringTargetsSection } from './components/engineering/EngineeringTargetsSection';
import { MicrogridSection } from './components/engineering/MicrogridSection';
import { IfrsAccountingSection } from './components/esg-compliance/IfrsAccountingSection';
import { CarbonLedgerCalculator } from './components/esg-compliance/CarbonLedgerCalculator';
import { RoiMetricCards } from './components/impact/RoiMetricCards';
import { StakeholderPitchGuides } from './components/execution/StakeholderPitchGuides';
import { PreconditionsSection } from './components/governance/PreconditionsSection';
import { ModularContractPricing } from './components/execution/ModularContractPricing';
import { ProjectRoadmapTimeline } from './components/execution/ProjectRoadmapTimeline';
import { RiskQnAAccordion } from './components/execution/RiskQnAAccordion';
import { ActionStepsChecklist } from './components/execution/ActionStepsChecklist';

export function App() {
  const [presentationOpen, setPresentationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060A17] text-slate-100 selection:bg-ocean-500 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenPresentation={() => setPresentationOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. 首頁與戰略總覽 */}
        <HeroSection onOpenPresentation={() => setPresentationOpen(true)} />
        <ExecutiveSummary />
        <StrategyComparisonToggle />
        <GoldenTrianglePartners />

        {/* 2. 責任邊界與主軸 A 施工風險治理 */}
        <CommitmentTiersSection />
        <DecisionGatesAndChanges />

        {/* 3. 主軸 B 標的工程與快拆工法 */}
        <EngineeringTargetsSection />
        <MicrogridSection />

        {/* 4. ⭐ 台灣環境管理會計協會核心：IFRS S1/S2 財務對接、碳帳本與 ROI（維持完整深度） */}
        <IfrsAccountingSection />
        <CarbonLedgerCalculator />
        <RoiMetricCards />

        {/* 5. 高層溝通、5大前提與推進行動 */}
        <StakeholderPitchGuides />
        <PreconditionsSection />
        <ModularContractPricing />
        <ProjectRoadmapTimeline />
        <RiskQnAAccordion />
        <ActionStepsChecklist />
      </main>

      {/* Footer */}
      <Footer />

      {/* 10-Slide High-Impact Executive Deck Modal */}
      <PresentationModeModal
        isOpen={presentationOpen}
        onClose={() => setPresentationOpen(false)}
      />
    </div>
  );
}

export default App;
