export type ProductCategory = 'kit-empacadura' | 'kit-tiempo';

export interface Product {
  id: string;
  sku: string;
  name: string;
  nameEn?: string;
  category: ProductCategory;
  categoryLabel: string;
  categoryLabelEn?: string;
  summary: string;
  summaryEn?: string;
  description: string;
  descriptionEn?: string;
  image: string;
  isNew?: boolean;
  isFeatured?: boolean;
  material: string;
  materialEn?: string;
  temperatureMax: string;
  temperatureMaxEn?: string;
  pressureMax: string;
  pressureMaxEn?: string;
  compatibility: {
    make: string;
    model: string;
    years: string;
    engine: string;
  }[];
  oemNumbers: string[];
  packageContents: string[];
  packageContentsEn?: string[];
  specs: {
    label: string;
    labelEn?: string;
    value: string;
    valueEn?: string;
  }[];
  suggestedTorque: string;
  suggestedTorqueEn?: string;
}

export interface TechSpec {
  id: string;
  engineCode: string;
  brand: string;
  displacement: string;
  valves: string;
  valvesEn?: string;
  cylinderCount: number;
  torqueStages: {
    stage: number;
    description: string;
    descriptionEn?: string;
    torqueMetric: string;
    torqueImperial: string;
    angleDegrees?: string;
  }[];
  boltSequenceCount: number;
  notes: string;
  notesEn?: string;
  recommendedGasketSku: string;
  surfaceRoughnessRa: string;
  surfaceRoughnessRaEn?: string;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
}

export type ActiveTab = 'home' | 'products' | 'quality' | 'about' | 'tech-specs' | 'contact' | 'quote';
