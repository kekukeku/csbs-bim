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
}

export interface EngineeringTarget {
  id: string;
  title: string;
  subtitle: string;
  accentColor: string;
  glowColor: string;
  specs: { label: string; value: string }[];
  painPoints: string[];
  solutions: {
    title: string;
    description: string;
    benefit: string;
  }[];
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
