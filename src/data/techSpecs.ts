import { TechSpec } from '../types';

export const TECH_SPECS_DATA: TechSpec[] = [
  {
    id: 'toyota-1zz',
    engineCode: '1ZZ-FE / 3ZZ-FE',
    brand: 'Toyota',
    displacement: '1.8L DOHC 16V VVT-i',
    valves: '16 Válvulas',
    cylinderCount: 4,
    torqueStages: [
      { stage: 1, description: 'Apriete uniforme inicial', torqueMetric: '49 Nm', torqueImperial: '36 Lb-pie' },
      { stage: 2, description: 'Apriete angular paso 1', torqueMetric: 'Giro angular', torqueImperial: 'Giro angular', angleDegrees: '+90°' },
      { stage: 3, description: 'Apriete angular final', torqueMetric: 'Giro angular', torqueImperial: 'Giro angular', angleDegrees: '+90°' }
    ],
    boltSequenceCount: 10,
    surfaceRoughnessRa: '0.5 - 0.8 µm (Recomendado para MLS)',
    recommendedGasketSku: 'SP-FGS-100',
    notes: 'Reemplazar siempre los tornillos de culata por nuevos TTY (Torque-to-Yield). Limpiar y lubricar ligeramente las roscas y la cara inferior de la cabeza del tornillo con aceite limpio de motor.'
  },
  {
    id: 'toyota-2tr',
    engineCode: '2TR-FE',
    brand: 'Toyota',
    displacement: '2.7L DOHC 16V Dual VVT-i',
    valves: '16 Válvulas',
    cylinderCount: 4,
    torqueStages: [
      { stage: 1, description: 'Primer paso en secuencia espiral', torqueMetric: '39 Nm', torqueImperial: '29 Lb-pie' },
      { stage: 2, description: 'Segundo paso angular', torqueMetric: 'Giro angular', torqueImperial: 'Giro angular', angleDegrees: '+90°' },
      { stage: 3, description: 'Tercer paso angular final', torqueMetric: 'Giro angular', torqueImperial: 'Giro angular', angleDegrees: '+90°' }
    ],
    boltSequenceCount: 10,
    surfaceRoughnessRa: '0.6 µm Max',
    recommendedGasketSku: 'SP-HG-MLS',
    notes: 'Asegurar que las guías de centrado de culata en el bloque estén libres de óxido o rebabas antes del asentamiento.'
  },
  {
    id: 'chevy-vortec-53',
    engineCode: 'Vortec 5.3L / LM7 / LC9',
    brand: 'Chevrolet',
    displacement: '5.3L OHV V8 Gen III/IV',
    valves: '16 Válvulas OHV',
    cylinderCount: 8,
    torqueStages: [
      { stage: 1, description: 'Paso 1 (Tornillos M11 del 1 al 10)', torqueMetric: '30 Nm', torqueImperial: '22 Lb-pie' },
      { stage: 2, description: 'Paso 2 (Tornillos M11 del 1 al 10)', torqueMetric: 'Giro angular', torqueImperial: 'Giro angular', angleDegrees: '+90°' },
      { stage: 3, description: 'Paso 3 (Tornillos 1-8 / 9-10)', torqueMetric: 'Giro angular final', torqueImperial: 'Giro angular final', angleDegrees: '1-8: +90° | 9-10: +50°' },
      { stage: 4, description: 'Paso 4 (Tornillos superiores M8 del 11 al 15)', torqueMetric: '30 Nm', torqueImperial: '22 Lb-pie' }
    ],
    boltSequenceCount: 15,
    surfaceRoughnessRa: '0.8 µm Max',
    recommendedGasketSku: 'SP-VS-250 / SP-OS-410',
    notes: 'No reutilizar tornillos de culata de fábrica. Sellar los orificios ciegos del bloque con aire comprimido para remover residuos de refrigerante/aceite.'
  },
  {
    id: 'vw-ea888',
    engineCode: '2.0 TSI EA888 (Gen 1, 2, 3)',
    brand: 'Volkswagen / Audi',
    displacement: '2.0L Turbo DOHC 16V',
    valves: '16 Válvulas Direct Injection',
    cylinderCount: 4,
    torqueStages: [
      { stage: 1, description: 'Apriete base en cruz', torqueMetric: '40 Nm', torqueImperial: '30 Lb-pie' },
      { stage: 2, description: 'Primer ángulo de deformación elástica', torqueMetric: 'Giro angular', torqueImperial: 'Giro angular', angleDegrees: '+90°' },
      { stage: 3, description: 'Segundo ángulo final', torqueMetric: 'Giro angular', torqueImperial: 'Giro angular', angleDegrees: '+90°' }
    ],
    boltSequenceCount: 10,
    surfaceRoughnessRa: '0.4 - 0.7 µm (Espejo rectificado)',
    recommendedGasketSku: 'SP-HG-MLS',
    notes: 'Para motores con presiones de turbo superiores a 1.5 Bar, verificar la planitud de la superficie del bloque con galga de espesores (límite 0.03 mm).'
  },
  {
    id: 'nissan-qr25',
    engineCode: 'QR25DE',
    brand: 'Nissan',
    displacement: '2.5L DOHC 16V',
    valves: '16 Válvulas',
    cylinderCount: 4,
    torqueStages: [
      { stage: 1, description: 'Apriete inicial', torqueMetric: '50 Nm', torqueImperial: '37 Lb-pie' },
      { stage: 2, description: 'Afloje completo de todos los tornillos', torqueMetric: '0 Nm', torqueImperial: '0 Lb-pie' },
      { stage: 3, description: 'Reapriete base', torqueMetric: '39 Nm', torqueImperial: '29 Lb-pie' },
      { stage: 4, description: 'Giro angular 1', torqueMetric: 'Giro angular', torqueImperial: 'Giro angular', angleDegrees: '+75° a 80°' },
      { stage: 5, description: 'Giro angular 2', torqueMetric: 'Giro angular', torqueImperial: 'Giro angular', angleDegrees: '+75° a 80°' }
    ],
    boltSequenceCount: 10,
    surfaceRoughnessRa: '0.5 µm',
    recommendedGasketSku: 'SP-FGS-100',
    notes: 'Seguir estrictamente el proceso de afloje intermedio para normalizar tensiones del material en culatas de aleación de aluminio.'
  },
  {
    id: 'honda-k24',
    engineCode: 'K24A / K24Z / K20A',
    brand: 'Honda',
    displacement: '2.4L / 2.0L i-VTEC DOHC',
    valves: '16 Válvulas',
    cylinderCount: 4,
    torqueStages: [
      { stage: 1, description: 'Paso 1 orden en espiral', torqueMetric: '39 Nm', torqueImperial: '29 Lb-pie' },
      { stage: 2, description: 'Paso 2 ángulo', torqueMetric: 'Giro angular', torqueImperial: 'Giro angular', angleDegrees: '+90°' },
      { stage: 3, description: 'Paso 3 ángulo final (si son tornillos nuevos)', torqueMetric: 'Giro angular', torqueImperial: 'Giro angular', angleDegrees: '+90°' }
    ],
    boltSequenceCount: 10,
    surfaceRoughnessRa: '0.4 - 0.6 µm',
    recommendedGasketSku: 'SP-HG-MLS',
    notes: 'Verificar la posición de los pasadores de espiga. No aplicar sellador de silicona líquida adicional sobre las caras de la empacadura MLS.'
  },
  {
    id: 'mitsubishi-4g63',
    engineCode: '4G63 / 4G63T',
    brand: 'Mitsubishi',
    displacement: '2.0L DOHC 16V Turbo',
    valves: '16 Válvulas',
    cylinderCount: 4,
    torqueStages: [
      { stage: 1, description: 'Paso 1 apriete en cruz', torqueMetric: '78 Nm', torqueImperial: '58 Lb-pie' },
      { stage: 2, description: 'Afloje total a 0 Nm', torqueMetric: '0 Nm', torqueImperial: '0 Lb-pie' },
      { stage: 3, description: 'Paso 2 re-apriete', torqueMetric: '20 Nm', torqueImperial: '15 Lb-pie' },
      { stage: 4, description: 'Paso 3 ángulo', torqueMetric: 'Giro angular', torqueImperial: 'Giro angular', angleDegrees: '+90°' },
      { stage: 5, description: 'Paso 4 ángulo final', torqueMetric: 'Giro angular', torqueImperial: 'Giro angular', angleDegrees: '+90°' }
    ],
    boltSequenceCount: 10,
    surfaceRoughnessRa: '0.5 µm',
    recommendedGasketSku: 'SP-HG-MLS',
    notes: 'Soporta hasta 2.2 Bar de presión de sobrealimentación con empacadura Seal-Pro SP-HG-MLS y tornillos de alta tensión 12.9.'
  }
];
