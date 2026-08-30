export interface Product {
  id: string;
  sku: string;
  name: string;
  category: 'juegos-full' | 'sellos-valvula' | 'culata-mls' | 'retenes' | 'multiple-carter';
  categoryLabel: string;
  summary: string;
  description: string;
  image: string;
  isNew?: boolean;
  isFeatured?: boolean;
  material: string;
  temperatureMax: string;
  pressureMax: string;
  compatibility: {
    make: string;
    model: string;
    years: string;
    engine: string;
  }[];
  oemNumbers: string[];
  packageContents: string[];
  specs: {
    label: string;
    value: string;
  }[];
  suggestedTorque: string;
}

export interface TechSpec {
  id: string;
  engineCode: string;
  brand: string;
  displacement: string;
  valves: string;
  cylinderCount: number;
  torqueStages: {
    stage: number;
    description: string;
    torqueMetric: string; // e.g. "40 Nm"
    torqueImperial: string; // e.g. "30 Lb-ft"
    angleDegrees?: string; // e.g. "+90°"
  }[];
  boltSequenceCount: number;
  notes: string;
  recommendedGasketSku: string;
  surfaceRoughnessRa: string; // e.g. "0.5 - 0.8 µm (MLS)"
}

export interface QuoteItem {
  product: Product;
  quantity: number;
}

export type ActiveTab = 'home' | 'products' | 'quality' | 'about' | 'tech-specs' | 'contact' | 'quote';
