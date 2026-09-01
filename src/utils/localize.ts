import { Product, TechSpec } from '../types';
import { Language } from '../i18n/translations';

export const getLocalizedProduct = (product: Product, lang: Language): Product => {
  if (lang === 'es') return product;

  return {
    ...product,
    name: product.nameEn || product.name,
    categoryLabel: product.categoryLabelEn || product.categoryLabel,
    summary: product.summaryEn || product.summary,
    description: product.descriptionEn || product.description,
    material: product.materialEn || product.material,
    temperatureMax: product.temperatureMaxEn || product.temperatureMax,
    pressureMax: product.pressureMaxEn || product.pressureMax,
    suggestedTorque: product.suggestedTorqueEn || product.suggestedTorque,
    packageContents: product.packageContentsEn || product.packageContents,
    specs: product.specs.map((s) => ({
      label: s.labelEn || s.label,
      value: s.valueEn || s.value,
    })),
  };
};

export const getLocalizedTechSpec = (spec: TechSpec, lang: Language): TechSpec => {
  if (lang === 'es') return spec;

  return {
    ...spec,
    valves: spec.valvesEn || spec.valves,
    notes: spec.notesEn || spec.notes,
    surfaceRoughnessRa: spec.surfaceRoughnessRaEn || spec.surfaceRoughnessRa,
    torqueStages: spec.torqueStages.map((stage) => ({
      ...stage,
      description: stage.descriptionEn || stage.description,
    })),
  };
};
