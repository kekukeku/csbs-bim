export interface NavItem {
  id: string;
  label: string;
  badge?: string;
  icon: string;
}

export interface PartnerInfo {
  name: string;
  shortName: string;
  role: string;
  gradient: string;
  iconColor: string;
  strengths: string[];
  responsibilities: string[];
  legalBoundary: string;
}

export interface EngineeringTarget {
  id: string;
  title: string;
  subtitle: string;
  accentColor: string;
  glowColor: string;
  specs: { label: string; value: string }[];
  scientificMechanism: string;
  painPoints: string[];
  commercialReality: string;
  solutions: {
    title: string;
    description: string;
    benefit: string;
  }[];
  clearanceChecks: string[];
  sensorTypes: {
    name: string;
    location: string;
    purpose: string;
    alertThreshold: string;
  }[];
  csbsRole: string;
}

export interface StakeholderPersona {
  id: string;
  title: string;
  roleDescription: string;
  avatarIcon: string;
  color: string;
  coreConcerns: string[];
  pitchHook: string;
  persuasiveDetails: string[];
  counterFears: string;
}

export interface CarbonStage {
  stage: string;
  title: string;
  color: string;
  dataInputs: string[];
  carbonOutputs: string[];
  isoStandard: string;
  reductionTech: string[];
  boundaryClarification: string;
}

export interface RoadmapPhase {
  phase: string;
  duration: string;
  title: string;
  badgeColor: string;
  keyActions: string[];
  deliverables: string[];
}

export interface QAItem {
  question: string;
  category: string;
  answer: string;
  highlight: string;
}

export interface ActionStep {
  step: number;
  timeframe: string;
  title: string;
  owner: string;
  description: string;
  deliverable: string;
}

export interface CommitmentTier {
  tier: string;
  name: string;
  definition: string;
  legalEffect: string;
  badgeColor: string;
  items: {
    title: string;
    owner: string;
    status: '自辦' | '協力' | '外購' | '待覓';
    desc: string;
  }[];
}

export interface DecisionGate {
  gateId: string;
  name: string;
  timeline: string;
  triggerCondition: string;
  keyDeliverables: string[];
  billingMilestone: string;
  color: string;
}

export interface ChangeGovernanceType {
  type: string;
  name: string;
  definition: string;
  evidenceRequired: string;
  approvalProcess: string;
  impactControl: string;
}

export interface ObjectiveKPI {
  indicator: string;
  target: string;
  significance: string;
  verificationMethod: string;
}

export interface PreconditionItem {
  id: string;
  title: string;
  keyQuestions: string[];
  impactOnScope: string;
  actionRequired: string;
}
