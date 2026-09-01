import { TechSpec } from '../types';

export const TECH_SPECS_DATA: TechSpec[] = [
  {
    id: 'ford-explorer-40',
    engineCode: 'Ford 4.0L SOHC V6 (T40VSEX / 99EA)',
    brand: 'Ford',
    displacement: '4.0L SOHC V6 12V Cologne',
    valves: '12 Válvulas',
    valvesEn: '12 Valves',
    cylinderCount: 6,
    torqueStages: [
      { stage: 1, description: 'Apriete uniforme inicial en espiral', descriptionEn: 'Initial uniform torque in spiral pattern', torqueMetric: '35 Nm', torqueImperial: '26 Lb-ft' },
      { stage: 2, description: 'Primer giro angular', descriptionEn: 'First angle turn', torqueMetric: 'Giro angular', torqueImperial: 'Angle turn', angleDegrees: '+90°' },
      { stage: 3, description: 'Segundo giro angular final', descriptionEn: 'Second final angle turn', torqueMetric: 'Giro angular', torqueImperial: 'Angle turn', angleDegrees: '+90°' }
    ],
    boltSequenceCount: 8,
    surfaceRoughnessRa: '0.6 - 0.9 µm (Recomendado para MLS)',
    surfaceRoughnessRaEn: '0.6 - 0.9 µm (Recommended for MLS)',
    recommendedGasketSku: 'SP-HS9293PT',
    notes: 'Reemplazar siempre los tornillos de culata por nuevos TTY (Kit ES72171). Limpiar y lubricar ligeramente las roscas y la cara inferior de la cabeza del tornillo con aceite limpio de motor.',
    notesEn: 'Always replace cylinder head bolts with new Torque-to-Yield TTY bolts (ES72171 Kit). Thoroughly clean and lightly lubricate bolt threads with clean engine oil.'
  },
  {
    id: 'jeep-powertech-47',
    engineCode: 'PowerTech 4.7L V8 (EVA / EVE)',
    brand: 'Jeep',
    displacement: '4.7L SOHC V8 16V 287ci',
    valves: '16 Válvulas',
    valvesEn: '16 Valves',
    cylinderCount: 8,
    torqueStages: [
      { stage: 1, description: 'Paso 1: Todos los tornillos M11', descriptionEn: 'Step 1: All M11 bolts', torqueMetric: '27 Nm', torqueImperial: '20 Lb-ft' },
      { stage: 2, description: 'Paso 2: Todos los tornillos M11', descriptionEn: 'Step 2: All M11 bolts', torqueMetric: '47 Nm', torqueImperial: '35 Lb-ft' },
      { stage: 3, description: 'Paso 3: Giro angular M11', descriptionEn: 'Step 3: M11 angle turn', torqueMetric: 'Giro angular', torqueImperial: 'Angle turn', angleDegrees: '+90°' },
      { stage: 4, description: 'Paso 4: Tornillos pequeños M8', descriptionEn: 'Step 4: Small M8 bolts', torqueMetric: '28 Nm', torqueImperial: '21 Lb-ft' }
    ],
    boltSequenceCount: 14,
    surfaceRoughnessRa: '0.5 - 0.8 µm',
    surfaceRoughnessRaEn: '0.5 - 0.8 µm',
    recommendedGasketSku: 'SP-HS26157PT',
    notes: 'Asegurar que las guías de centrado de culata en el bloque estén libres de óxido o rebabas antes del asentamiento de la empacadura MLS.',
    notesEn: 'Ensure head alignment dowel pins in the engine block are free from corrosion or burrs prior to MLS gasket seating.'
  },
  {
    id: 'chrysler-hemi-57',
    engineCode: '5.7L HEMI V8 (EZB / EZD / EZH / EZA)',
    brand: 'Chrysler',
    displacement: '5.7L OHV 16V V8 345ci',
    valves: '16 Válvulas OHV',
    valvesEn: '16 Valves OHV',
    cylinderCount: 8,
    torqueStages: [
      { stage: 1, description: 'Paso 1 (Tornillos M12 del 1 al 10)', descriptionEn: 'Step 1 (M12 bolts 1 through 10)', torqueMetric: '34 Nm', torqueImperial: '25 Lb-ft' },
      { stage: 2, description: 'Paso 2 (Tornillos M12 del 1 al 10)', descriptionEn: 'Step 2 (M12 bolts 1 through 10)', torqueMetric: '61 Nm', torqueImperial: '45 Lb-ft' },
      { stage: 3, description: 'Paso 3 (Giro angular final M12)', descriptionEn: 'Step 3 (Final angle turn M12)', torqueMetric: 'Giro angular', torqueImperial: 'Angle turn', angleDegrees: '+90°' },
      { stage: 4, description: 'Paso 4 (Tornillos superiores M8 del 11 al 15)', descriptionEn: 'Step 4 (Top M8 bolts 11 through 15)', torqueMetric: '20 Nm', torqueImperial: '15 Lb-ft' }
    ],
    boltSequenceCount: 15,
    surfaceRoughnessRa: '0.5 - 0.8 µm',
    surfaceRoughnessRaEn: '0.5 - 0.8 µm',
    recommendedGasketSku: 'SP-HS26284PT',
    notes: 'No reutilizar tornillos de culata de fábrica. Sellar los orificios ciegos del bloque con aire comprimido para remover residuos de refrigerante/aceite.',
    notesEn: 'Do not reuse factory head bolts. Blow out blind bolt holes in block deck with compressed air to remove liquid coolant/oil prior to bolt installation.'
  },
  {
    id: 'chevy-vortec-53',
    engineCode: 'GM Vortec 4.8L / 5.3L / 6.0L Gen III/IV LS',
    brand: 'Chevrolet',
    displacement: '4.8L / 5.3L / 6.0L OHV V8 LS Family',
    valves: '16 Válvulas OHV',
    valvesEn: '16 Valves OHV',
    cylinderCount: 8,
    torqueStages: [
      { stage: 1, description: 'Paso 1 (Tornillos M11 del 1 al 10)', descriptionEn: 'Step 1 (M11 bolts 1 through 10)', torqueMetric: '30 Nm', torqueImperial: '22 Lb-ft' },
      { stage: 2, description: 'Paso 2 (Tornillos M11 del 1 al 10)', descriptionEn: 'Step 2 (M11 bolts 1 through 10)', torqueMetric: 'Giro angular', torqueImperial: 'Angle turn', angleDegrees: '+90°' },
      { stage: 3, description: 'Paso 3 (Tornillos 1-8 / 9-10)', descriptionEn: 'Step 3 (Bolts 1-8 / 9-10)', torqueMetric: 'Giro angular final', torqueImperial: 'Final angle turn', angleDegrees: '1-8: +90° | 9-10: +50°' },
      { stage: 4, description: 'Paso 4 (Tornillos superiores M8 del 11 al 15)', descriptionEn: 'Step 4 (Top M8 bolts 11 through 15)', torqueMetric: '30 Nm', torqueImperial: '22 Lb-ft' }
    ],
    boltSequenceCount: 15,
    surfaceRoughnessRa: '0.5 - 0.8 µm',
    surfaceRoughnessRaEn: '0.5 - 0.8 µm',
    recommendedGasketSku: 'SP-HS26282PT',
    notes: 'Utilizar el juego de tornillos TTY ES72173. Asegurarse de que el bloque esté perfectamente rectificado y desengrasado con limpiador de frenos sin residuos.',
    notesEn: 'Use ES72173 TTY bolt set. Ensure deck surface is precision machined and degreased with residue-free brake cleaner.'
  },
  {
    id: 'ford-triton-54',
    engineCode: 'Ford 5.4L Triton 3V SOHC V8 (T54USEM)',
    brand: 'Ford',
    displacement: '5.4L Triton 3-Válvulas Modular V8',
    valves: '24 Válvulas',
    valvesEn: '24 Valves',
    cylinderCount: 8,
    torqueStages: [
      { stage: 1, description: 'Paso 1 apriete en secuencia espiral', descriptionEn: 'Step 1 spiral sequence torque', torqueMetric: '40 Nm', torqueImperial: '30 Lb-ft' },
      { stage: 2, description: 'Paso 2 giro angular', descriptionEn: 'Step 2 angle turn', torqueMetric: 'Giro angular', torqueImperial: 'Angle turn', angleDegrees: '+90°' },
      { stage: 3, description: 'Paso 3 giro angular final', descriptionEn: 'Step 3 final angle turn', torqueMetric: 'Giro angular', torqueImperial: 'Angle turn', angleDegrees: '+90°' }
    ],
    boltSequenceCount: 10,
    surfaceRoughnessRa: '0.5 - 0.7 µm',
    surfaceRoughnessRaEn: '0.5 - 0.7 µm',
    recommendedGasketSku: 'SP-HS26306PT',
    notes: 'Verificar que las caras de contacto del bloque y culata estén completamente secas y desengrasadas antes del montaje MLS. Instalar sellos VCT nuevos en las tapas.',
    notesEn: 'Ensure mating surfaces of block and cylinder head are completely clean and dry before MLS gasket installation. Install new VCT seals in covers.'
  },
  {
    id: 'ford-superduty-68',
    engineCode: 'Ford Super Duty 6.8L V10 / 6.2L Boss V8',
    brand: 'Ford',
    displacement: '6.8L Triton V10 SOHC / 6.2L V8 Super Duty',
    valves: '20/30 Válvulas',
    valvesEn: '20/30 Valves',
    cylinderCount: 10,
    torqueStages: [
      { stage: 1, description: 'Paso 1 apriete base en secuencia cruzada', descriptionEn: 'Step 1 base torque in cross sequence', torqueMetric: '45 Nm', torqueImperial: '33 Lb-ft' },
      { stage: 2, description: 'Paso 2 segundo apriete', descriptionEn: 'Step 2 intermediate torque', torqueMetric: '75 Nm', torqueImperial: '55 Lb-ft' },
      { stage: 3, description: 'Paso 3 giro angular final', descriptionEn: 'Step 3 final angle turn', torqueMetric: 'Giro angular', torqueImperial: 'Angle turn', angleDegrees: '+90°' }
    ],
    boltSequenceCount: 12,
    surfaceRoughnessRa: '0.5 - 0.8 µm',
    surfaceRoughnessRaEn: '0.5 - 0.8 µm',
    recommendedGasketSku: 'SP-HS26302PT',
    notes: 'Recomendado para camiones comerciales F-250 a F-550 con uso severo de arrastre. Aplicar el torque exacto y no reutilizar tornillos de culata.',
    notesEn: 'Recommended for commercial F-250 through F-550 trucks in severe towing service. Adhere strictly to torque sequence and do not reuse head bolts.'
  }
];
