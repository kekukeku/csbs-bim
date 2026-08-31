import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PresentationModeModal } from './components/layout/PresentationModeModal';
import { HeroSection } from './components/hero/HeroSection';
import { ExecutiveSummary } from './components/overview/ExecutiveSummary';
import { DoubleDilemmaSection } from './components/pain-points/DoubleDilemmaSection';
import { StrategyComparisonToggle } from './components/strategy/StrategyComparisonToggle';
import { GoldenTrianglePartners } from './components/strategy/GoldenTrianglePartners';
import { EngineeringTargetsSection } from './components/engineering/EngineeringTargetsSection';
import { MicrogridSection } from './components/engineering/MicrogridSection';
import { BimWebPlatform } from './components/tech-platform/BimWebPlatform';
import { IfrsAccountingSection } from './components/esg-compliance/IfrsAccountingSection';
import { CarbonLedgerCalculator } from './components/esg-compliance/CarbonLedgerCalculator';
import { RoiMetricCards } from './components/impact/RoiMetricCards';
import { StakeholderPitchGuides } from './components/execution/StakeholderPitchGuides';
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
        <HeroSection onOpenPresentation={() => setPresentationOpen(true)} />
        <ExecutiveSummary />
        <DoubleDilemmaSection />
        <StrategyComparisonToggle />
        <GoldenTrianglePartners />
        <EngineeringTargetsSection />
        <MicrogridSection />
        <BimWebPlatform />
        <IfrsAccountingSection />
        <CarbonLedgerCalculator />
        <RoiMetricCards />
        <StakeholderPitchGuides />
        <ModularContractPricing />
        <ProjectRoadmapTimeline />
        <RiskQnAAccordion />
        <ActionStepsChecklist />
      </main>

      {/* Footer */}
      <Footer />

      {/* 20-Slide Interactive Deck Modal */}
      <PresentationModeModal
        isOpen={presentationOpen}
        onClose={() => setPresentationOpen(false)}
      />
    </div>
  );
}

export default App;
