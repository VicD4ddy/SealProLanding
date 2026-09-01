import { Product } from '../types';

export const PRODUCTS_DATA: Product[] = [
  // 1. Ford Explorer / Ranger 4.0L SOHC V6
  {
    id: 'sp-hs9293pt',
    sku: 'SP-HS9293PT',
    name: 'JUEGO COMPLETO DE EMPACADURAS CON TORNILLOS FORD 4.0L SOHC',
    nameEn: 'FULL ENGINE GASKET SET WITH HEAD BOLTS FORD 4.0L SOHC',
    category: 'kit-empacadura',
    categoryLabel: 'Kit de Empacadura',
    categoryLabelEn: 'Gasket Kit',
    summary: 'Juego integral con empacaduras MLS y tornillos de culata TTY para motores Ford 4.0 SOHC V6.',
    summaryEn: 'Complete overhaul set with MLS head gaskets and TTY head bolts for Ford 4.0 SOHC V6 engines.',
    description: 'Kit de reconstrucción completo de motor diseñado para Ford Explorer, Ranger y Mazda B4000 4.0L SOHC. Incluye empacaduras de culata MLS multicapa de alta resiliencia térmica, juego completo de tornillos de culata de apriete angular TTY (ES72171), sellos de válvulas en fluoroelastómero Viton®, juntas de admisión superior/inferior, múltiples de escape grafitados y retenes radiales de cigüeñal.',
    descriptionEn: 'Complete engine overhaul kit engineered for Ford Explorer, Ranger, and Mazda B4000 4.0L SOHC. Includes multi-layer steel (MLS) head gaskets, high-tensile TTY cylinder head bolts (ES72171), Viton® valve stem seals, upper/lower intake manifold gaskets, armored graphite exhaust manifold gaskets, and front/rear crankshaft seals.',
    image: '/images/products/explorer-4-0.png',
    isNew: true,
    isFeatured: true,
    material: 'Multi-Layer Steel (MLS) + Tornillos Grado 10.9 + Viton® FKM + Elastómero ACM',
    materialEn: 'Multi-Layer Steel (MLS) + Grade 10.9 Bolts + Viton® FKM + ACM Rubber',
    temperatureMax: '880 °C (Culata) / 260 °C (Sellos)',
    temperatureMaxEn: '880 °C (Head) / 260 °C (Seals)',
    pressureMax: '240 Bar / 3480 PSI',
    pressureMaxEn: '240 Bar / 3480 PSI',
    suggestedTorque: 'Paso 1: 35 Nm | Paso 2: +90° | Paso 3: +90°',
    suggestedTorqueEn: 'Step 1: 35 Nm | Step 2: +90° | Step 3: +90°',
    compatibility: [
      { make: 'Ford', model: 'Explorer / Sport Trac', years: '2000 - 2010', engine: '4.0L SOHC V6 (T40VSEX / 99EA)' },
      { make: 'Ford', model: 'Ranger', years: '2001 - 2011', engine: '4.0L SOHC V6' },
      { make: 'Ford', model: 'Mustang', years: '2005 - 2010', engine: '4.0L SOHC V6' },
      { make: 'Mazda', model: 'B4000', years: '2001 - 2010', engine: '4.0L SOHC V6' },
      { make: 'Mercury', model: 'Mountaineer', years: '2000 - 2010', engine: '4.0L SOHC V6' }
    ],
    oemNumbers: ['HS9293PT-2', 'CS9293', 'ES72171', '08-04-0206', '10-02-0305', '1L2Z-6079-AA'],
    packageContents: [
      '2x Empacaduras de Culata MLS Triple Capa con Revestimiento Micro-Sellante',
      '16x Tornillos de Culata TTY de Alta Tracción (Kit ES72171)',
      '12x Sellos de Vástago de Válvula Viton® Seal-Pro',
      '2x Empacaduras de Tapa de Válvulas con Ojales Aislantes',
      '1x Juego Completo de Empacaduras de Admisión (Superior e Inferior)',
      '2x Empacaduras de Múltiple de Escape Grafitadas Blindadas',
      '1x Retén de Cigüeñal Delantero y Trasero',
      '1x Empacadura de Cárter de Aceite y Bomba de Agua',
      'Juego de O-Rings, Arandelas de Inyector y Sellos de Termostato'
    ],
    packageContentsEn: [
      '2x Triple-Layer MLS Cylinder Head Gaskets with Micro-Sealing Coating',
      '16x High-Tensile TTY Cylinder Head Bolts (ES72171 Kit)',
      '12x Viton® Seal-Pro Valve Stem Seals',
      '2x Valve Cover Gaskets with Spark Plug Tube Seals',
      '1x Complete Upper & Lower Intake Manifold Gasket Set',
      '2x Armored Graphite Exhaust Manifold Gaskets',
      '1x Front & Rear Crankshaft Radial Oil Seals',
      '1x Oil Pan Gasket and Water Pump Seal',
      'Full Set of O-Rings, Injector Seals, and Thermostat Housing Gaskets'
    ],
    specs: [
      { label: 'Espesor Comprimido', labelEn: 'Compressed Thickness', value: '1.25 mm', valueEn: '1.25 mm' },
      { label: 'Diámetro de Cilindro (Bore)', labelEn: 'Cylinder Bore', value: '101.5 mm', valueEn: '101.5 mm' },
      { label: 'Grado de Tornillos', labelEn: 'Head Bolt Grade', value: 'Acero Aleado Clase 10.9 Templado', valueEn: 'Heat-Treated Class 10.9 Alloy Steel' },
      { label: 'Acabado Superficial Requerido', labelEn: 'Surface Finish Req.', value: 'Ra 0.6 - 0.9 µm', valueEn: 'Ra 0.6 - 0.9 µm' }
    ]
  },

  // 2. Dodge / Jeep 4.7L PowerTech V8
  {
    id: 'sp-hs26157pt',
    sku: 'SP-HS26157PT',
    name: 'JUEGO COMPLETO DE EMPACADURAS JEEP / DODGE 4.7L V8 POWERTECH',
    nameEn: 'FULL ENGINE OVERHAUL GASKET SET JEEP / DODGE 4.7L V8 POWERTECH',
    category: 'kit-empacadura',
    categoryLabel: 'Kit de Empacadura',
    categoryLabelEn: 'Gasket Kit',
    summary: 'Juego completo de reconstrucción con culatas MLS para motores Chrysler/Jeep 4.7L PowerTech V8.',
    summaryEn: 'Complete overhaul gasket set with MLS head gaskets for Chrysler/Jeep 4.7L PowerTech V8 engines.',
    description: 'Juego integral de juntas y sellos para motores 4.7L PowerTech V8 utilizados en Jeep Grand Cherokee, Commander, Dodge Ram 1500, Dakota y Durango. Fabricado con empaques de culata MLS multicapa resistentes a sobrecalentamiento, retenes radiales de alta velocidad y sellos de vástago de válvula en Viton® FKM.',
    descriptionEn: 'Comprehensive gasket and seal kit for 4.7L PowerTech V8 engines found in Jeep Grand Cherokee, Commander, Dodge Ram 1500, Dakota, and Durango. Features multi-layer steel (MLS) head gaskets engineered for high thermal tolerance, high-speed crankshaft seals, and Viton® valve stem seals.',
    image: '/images/products/jeep-4-7.png',
    isNew: false,
    isFeatured: true,
    material: 'Acero Inoxidable MLS + Elastómeros Viton® FKM + Silicona RTV Alta Temperatura',
    materialEn: 'MLS Stainless Steel + Viton® FKM Elastomers + High-Temp RTV Silicone',
    temperatureMax: '900 °C (Culata) / 260 °C (Sellos)',
    temperatureMaxEn: '900 °C (Head) / 260 °C (Seals)',
    pressureMax: '250 Bar / 3625 PSI',
    pressureMaxEn: '250 Bar / 3625 PSI',
    suggestedTorque: 'Paso 1: 27 Nm | Paso 2: 47 Nm | Paso 3: +90°',
    suggestedTorqueEn: 'Step 1: 27 Nm | Step 2: 47 Nm | Step 3: +90°',
    compatibility: [
      { make: 'Jeep', model: 'Grand Cherokee (WJ / WK)', years: '1999 - 2009', engine: '4.7L PowerTech SOHC V8 (EVA / EVE)' },
      { make: 'Jeep', model: 'Commander (XK)', years: '2006 - 2009', engine: '4.7L SOHC V8' },
      { make: 'Dodge', model: 'Ram 1500', years: '2002 - 2008', engine: '4.7L Magnum V8' },
      { make: 'Dodge', model: 'Dakota', years: '2000 - 2008', engine: '4.7L V8' },
      { make: 'Dodge', model: 'Durango', years: '2000 - 2008', engine: '4.7L V8' }
    ],
    oemNumbers: ['HS26157PT', 'CS26157', '5012363AB', '53020675', '05012363AB', '53020677'],
    packageContents: [
      '2x Empacaduras de Culata MLS Multi-Capa con Anillo de Fuego Reforzado',
      '16x Sellos de Válvula de Precisión en Viton® Genuino',
      '2x Empacaduras de Tapa de Válvulas con Arandelas de Aislamiento',
      '1x Empacadura de Múltiple de Admisión de Flujo Continuo',
      '2x Empacaduras de Múltiple de Escape de Alta Temperatura',
      '1x Retén de Cigüeñal Delantero y Trasero con Brida',
      '1x Empacadura de Cárter de Aceite y Sello de Bomba de Agua',
      'Juego de O-Rings y Sellos de Tapa de Distribución'
    ],
    packageContentsEn: [
      '2x Multi-Layer Steel (MLS) Head Gaskets with Reinforced Fire Rings',
      '16x Genuine Viton® High-Temperature Valve Stem Seals',
      '2x Molded Valve Cover Gaskets with Grommets',
      '1x High-Flow Intake Manifold Gasket Set',
      '2x Heavy-Duty Exhaust Manifold Gaskets',
      '1x Front & Rear Crankshaft Seals with Flange',
      '1x Engine Oil Pan Gasket and Water Pump Housing O-Ring',
      'Timing Cover Seal Kit and Complete O-Ring Assortment'
    ],
    specs: [
      { label: 'Configuración de Motor', labelEn: 'Engine Configuration', value: 'V8 SOHC 16 Válvulas 287ci', valueEn: 'V8 SOHC 16-Valve 287ci' },
      { label: 'Grosor Comprimido', labelEn: 'Compressed Thickness', value: '1.20 mm', valueEn: '1.20 mm' },
      { label: 'Diámetro de Cilindro', labelEn: 'Cylinder Bore', value: '94.0 mm', valueEn: '94.0 mm' },
      { label: 'Rugosidad Requerida (Ra)', labelEn: 'Required Roughness (Ra)', value: 'Ra 0.5 - 0.8 µm', valueEn: 'Ra 0.5 - 0.8 µm' }
    ]
  },

  // 3. Chrysler / Dodge / Jeep 5.7L HEMI V8
  {
    id: 'sp-hs26284pt',
    sku: 'SP-HS26284PT',
    name: 'JUEGO COMPLETO DE EMPACADURAS CHRYSLER / DODGE / JEEP 5.7L HEMI',
    nameEn: 'FULL GASKET SET CHRYSLER / DODGE / JEEP 5.7L HEMI V8',
    category: 'kit-empacadura',
    categoryLabel: 'Kit de Empacadura',
    categoryLabelEn: 'Gasket Kit',
    summary: 'Juego integral de alto rendimiento para motores 5.7L HEMI V8 (Chrysler 300, Charger, Ram, Grand Cherokee).',
    summaryEn: 'High-performance complete gasket kit for 5.7L HEMI V8 engines (Chrysler 300, Charger, Ram, Grand Cherokee).',
    description: 'Juego completo de juntas de motor diseñado para resistir las presiones y temperaturas extremas de los motores 5.7L HEMI V8 de Chrysler, Dodge, Jeep y Ram. Incorpora juntas de culata MLS de acero inoxidable elástico con revestimiento de fluoroelastómero micro-sellante, sellos de válvulas en Viton® para altas RPM y retenes de cigüeñal de perfil hidrodinámico.',
    descriptionEn: 'Complete engine gasket overhaul kit engineered to withstand extreme combustion pressures and temperatures in Chrysler, Dodge, Jeep, and Ram 5.7L HEMI V8 engines. Features spring-tempered MLS head gaskets with micro-sealing fluoroelastomer coating, high-RPM Viton® valve seals, and hydrodynamic crankshaft oil seals.',
    image: '/images/products/jeep-5-7.png',
    isNew: false,
    isFeatured: true,
    material: 'Acero Inoxidable Martensítico MLS (4 Capas) + Viton® FKM + PTFE',
    materialEn: 'Martensitic MLS Stainless Steel (4-Layer) + Viton® FKM + PTFE',
    temperatureMax: '950 °C (Anillo de fuego) / 260 °C (Sellos)',
    temperatureMaxEn: '950 °C (Fire Ring) / 260 °C (Seals)',
    pressureMax: '280 Bar / 4060 PSI',
    pressureMaxEn: '280 Bar / 4060 PSI',
    suggestedTorque: 'Paso 1: 34 Nm | Paso 2: 61 Nm | Paso 3: +90°',
    suggestedTorqueEn: 'Step 1: 34 Nm | Step 2: 61 Nm | Step 3: +90°',
    compatibility: [
      { make: 'Chrysler', model: '300 / 300C', years: '2005 - 2015', engine: '5.7L HEMI V8 (EZB / EZD / EZH / EZA)' },
      { make: 'Dodge', model: 'Charger / Challenger / Magnum R/T', years: '2005 - 2015', engine: '5.7L HEMI V8' },
      { make: 'Dodge', model: 'Ram 1500 / 2500 / 3500', years: '2003 - 2015', engine: '5.7L HEMI V8' },
      { make: 'Jeep', model: 'Grand Cherokee (WK / WK2)', years: '2005 - 2015', engine: '5.7L HEMI V8' },
      { make: 'Jeep', model: 'Commander (XK)', years: '2006 - 2010', engine: '5.7L HEMI V8' }
    ],
    oemNumbers: ['HS26284PT', 'HS26284PT-1', 'CS26284', 'CS26284-1', '53021570AE', '05037531AA', '943.230'],
    packageContents: [
      '2x Empacaduras de Culata MLS Especiales para Alta Compresión HEMI',
      '16x Sellos de Válvulas Viton® Grado Competición',
      '2x Empacaduras de Tapa de Válvulas con Sellos de Bobinas Integrados',
      '8x Sellos Individuales de Múltiple de Admisión',
      '2x Empacaduras de Múltiple de Escape Grafitadas Reforzadas',
      '1x Retén de Cigüeñal Delantero y Trasero con Brida de Aluminio',
      '1x Empacadura de Cárter de Aceite y Sello de Bomba de Aceite/Agua',
      'Juego Completo de Juntas Tóricas, Sellos MDS y Tapas de Distribución'
    ],
    packageContentsEn: [
      '2x Heavy-Duty MLS Head Gaskets for High-Compression HEMI Chambers',
      '16x Competition-Grade Viton® Valve Stem Seals',
      '2x Valve Cover Gaskets with Integrated Ignition Coil Tube O-Rings',
      '8x High-Flow Intake Manifold Port Gaskets',
      '2x Armored Graphite Exhaust Manifold Gaskets',
      '1x Front & Rear Crankshaft Main Seals with Aluminum Flange',
      '1x Engine Oil Pan Gasket and Water/Oil Pump Seals',
      'Complete Set of O-Rings, MDS Solenoid Seals, and Timing Cover Gaskets'
    ],
    specs: [
      { label: 'Cilindrada / Motor', labelEn: 'Displacement / Engine', value: '5.7L 345ci HEMI V8 (MDS y Non-MDS)', valueEn: '5.7L 345ci HEMI V8 (MDS & Non-MDS)' },
      { label: 'Grosor Comprimido', labelEn: 'Compressed Thickness', value: '0.98 mm', valueEn: '0.98 mm' },
      { label: 'Diámetro de Cilindro', labelEn: 'Bore Diameter', value: '100.5 mm', valueEn: '100.5 mm' },
      { label: 'Compatibilidad de Combustible', labelEn: 'Fuel Compatibility', value: 'Gasolina comercial, E85 y GNV', valueEn: 'Commercial Gasoline, E85, and CNG' }
    ]
  },

  // 4. Chevrolet Silverado / Tahoe 4.8L / 5.3L / 6.0L LS
  {
    id: 'sp-hs26282pt',
    sku: 'SP-HS26282PT',
    name: 'JUEGO COMPLETO DE EMPACADURAS CON TORNILLOS CHEVROLET 4.8L / 5.3L LS',
    nameEn: 'FULL ENGINE GASKET SET WITH HEAD BOLTS GM CHEVROLET 4.8L / 5.3L LS',
    category: 'kit-empacadura',
    categoryLabel: 'Kit de Empacadura',
    categoryLabelEn: 'Gasket Kit',
    summary: 'Kit completo de reconstrucción con culatas MLS y tornillos de culata ES72173 para motores GM LS / Vortec.',
    summaryEn: 'Complete overhaul set with MLS head gaskets and ES72173 head bolts for GM LS / Vortec engines.',
    description: 'Juego integral de empacaduras y tornillos de culata para la legendaria familia de motores GM Vortec Gen III/IV LS (4.8L, 5.3L, 5.7L y 6.0L). Incluye empacaduras de culata de acero multicapa (MLS), juego completo de 30 tornillos de culata TTY (ES72173), sellos de válvulas en Viton® con sombrero de acero incorporado, empaques de tapa de válvulas, múltiple de admisión individual y retén trasero con carcasa.',
    descriptionEn: 'Complete engine overhaul gasket set and cylinder head bolts for GM Vortec Gen III/IV LS engine family (4.8L, 5.3L, 5.7L, and 6.0L). Features multi-layer steel (MLS) head gaskets, a complete 30-piece TTY cylinder head bolt set (ES72173), top-hat Viton® valve stem seals, intake manifold port seals, valve cover gaskets, and rear main seal in aluminum carrier.',
    image: '/images/products/silverado-5-3.png',
    isNew: true,
    isFeatured: true,
    material: 'Multi-Layer Steel (MLS) + Tornillos Grado 10.9 + Viton® FKM + Goma ACM',
    materialEn: 'Multi-Layer Steel (MLS) + Grade 10.9 Bolts + Viton® FKM + ACM Rubber',
    temperatureMax: '920 °C (Culata) / 260 °C (Sellos)',
    temperatureMaxEn: '920 °C (Head) / 260 °C (Seals)',
    pressureMax: '270 Bar / 3915 PSI',
    pressureMaxEn: '270 Bar / 3915 PSI',
    suggestedTorque: 'Paso 1: 30 Nm | Paso 2: +90° | Paso 3: +90° (Pernos largos) / +50° (Pernos medianos)',
    suggestedTorqueEn: 'Step 1: 30 Nm | Step 2: +90° | Step 3: +90° (Long) / +50° (Medium)',
    compatibility: [
      { make: 'Chevrolet', model: 'Silverado 1500 / 2500', years: '2002 - 2014', engine: '4.8L / 5.3L / 6.0L Vortec Gen III/IV LS' },
      { make: 'Chevrolet', model: 'Tahoe / Suburban / Avalanche', years: '2002 - 2014', engine: '5.3L / 6.0L / 6.2L Vortec' },
      { make: 'Chevrolet', model: 'Express 1500 / 2500 / 3500', years: '2003 - 2017', engine: '4.8L / 5.3L / 6.0L' },
      { make: 'GMC', model: 'Sierra / Yukon / Yukon XL / Savana', years: '2002 - 2014', engine: '4.8L / 5.3L / 6.0L Vortec' },
      { make: 'Cadillac', model: 'Escalade / Escalade EXT', years: '2002 - 2013', engine: '5.3L / 6.0L / 6.2L Vortec' }
    ],
    oemNumbers: ['HS26282PT', 'CS26282', 'ES72173', '12558573', '12589226', '12610046', '12639250'],
    packageContents: [
      '2x Empacaduras de Culata MLS Triple Capa LS (Bore 3.910")',
      '30x Tornillos de Culata TTY de Grado Automotriz (Kit ES72173)',
      '16x Sellos de Vástago de Válvula Viton® Seal-Pro con Sombrero Metálico',
      '2x Empacaduras de Tapa de Válvulas con Ojales de Compresión',
      '8x Empacaduras Individuales de Múltiple de Admisión (Perfiles Port)',
      '2x Empacaduras de Múltiple de Escape Grafitadas de Alta Resistencia',
      '1x Empacadura de Cárter de Aceite con Limitadores de Torque de Aluminio',
      '1x Retén de Cigüeñal Delantero y Trasero Ensamblado en Brida',
      'Juego de Juntas de Bomba de Agua, Tapa de Distribución y Sensores Knock'
    ],
    packageContentsEn: [
      '2x Triple-Layer MLS Cylinder Head Gaskets (Bore 3.910")',
      '30x High-Tensile TTY Cylinder Head Bolts (ES72173 Kit)',
      '16x Viton® Top-Hat Integrated Valve Stem Seals',
      '2x Molded Valve Cover Gaskets with Crush Limiters',
      '8x Individual Intake Manifold Port Gaskets',
      '2x Heavy-Duty Multi-Layer Exhaust Manifold Gaskets',
      '1x Engine Oil Pan Gasket with Integrated Aluminum Torque Limiters',
      '1x Front & Pre-Assembled Rear Main Crankshaft Seal in Flange',
      'Water Pump Gaskets, Front Timing Cover Seal, and Knock Sensor Grommets'
    ],
    specs: [
      { label: 'Grosor Nominal Culata', labelEn: 'Nominal Head Thickness', value: '1.20 mm comprimida', valueEn: '1.20 mm compressed' },
      { label: 'Diámetro Máximo de Cilindro', labelEn: 'Max Bore Diameter', value: '99.3 mm (3.910 in)', valueEn: '99.3 mm (3.910 in)' },
      { label: 'Compatibilidad de Motores', labelEn: 'Engine Compatibility', value: 'LM7, L59, LM4, L33, LY5, LMG, LC9, LR4, LY2, L20, LQ4, LQ9', valueEn: 'LM7, L59, LM4, L33, LY5, LMG, LC9, LR4, LY2, L20, LQ4, LQ9' },
      { label: 'Rugosidad Requerida', labelEn: 'Surface Finish Req.', value: 'Ra 0.5 - 0.8 µm', valueEn: 'Ra 0.5 - 0.8 µm' }
    ]
  },

  // 5. Ford / Lincoln 5.4L Triton 3V SOHC V8
  {
    id: 'sp-hs26306pt',
    sku: 'SP-HS26306PT',
    name: 'JUEGO DE EMPACADURAS DE CULATA Y MOTOR FORD 5.4L TRITON 3V',
    nameEn: 'CYLINDER HEAD & ENGINE GASKET SET FORD 5.4L TRITON 3V',
    category: 'kit-empacadura',
    categoryLabel: 'Kit de Empacadura',
    categoryLabelEn: 'Gasket Kit',
    summary: 'Juego especializado para motores Ford 5.4L Triton 3-Válvulas (F-150, Expedition, Navigator).',
    summaryEn: 'Specialized gasket set for Ford 5.4L Triton 3-Valve engines (F-150, Expedition, Navigator).',
    description: 'Kit de empacaduras de culata y motor de alta precisión diseñado para resolver las fallas comunes de temperatura en motores Ford 5.4L Triton 3V. Cuenta con empacaduras de culata MLS multicapa de acero inoxidable elástico con relieve de estanqueidad optimizado, sellos de válvulas en Viton® para 24 válvulas y juntas de tapa de válvulas con sellos especiales para los solenoides VCT de tiempo variable.',
    descriptionEn: 'High-precision cylinder head and engine gasket kit engineered to resolve common sealing challenges on Ford 5.4L Triton 3V engines. Features spring-tempered multi-layer steel (MLS) head gaskets with optimized combustion embossment, 24 Viton® valve stem seals, and valve cover gaskets with integrated VCT variable cam timing solenoid seals.',
    image: '/images/products/triton-5-4.png',
    isNew: false,
    isFeatured: true,
    material: 'Acero Inoxidable MLS de 4 Capas + Sellos Viton® + Silicona Moldeada VCT',
    materialEn: '4-Layer Stainless MLS + Viton® Seals + Molded VCT Silicone',
    temperatureMax: '930 °C (Culata) / 260 °C (Sellos)',
    temperatureMaxEn: '930 °C (Head) / 260 °C (Seals)',
    pressureMax: '260 Bar / 3770 PSI',
    pressureMaxEn: '260 Bar / 3770 PSI',
    suggestedTorque: 'Paso 1: 40 Nm | Paso 2: +90° | Paso 3: +90°',
    suggestedTorqueEn: 'Step 1: 40 Nm | Step 2: +90° | Step 3: +90°',
    compatibility: [
      { make: 'Ford', model: 'F-150 (FX4, Lariat, King Ranch, XLT)', years: '2004 - 2010', engine: '5.4L Triton 3V SOHC V8 (T54USEM)' },
      { make: 'Ford', model: 'Expedition', years: '2005 - 2014', engine: '5.4L Triton 3V V8' },
      { make: 'Ford', model: 'F-250 / F-350 Super Duty', years: '2005 - 2010', engine: '5.4L Triton 3V V8' },
      { make: 'Lincoln', model: 'Navigator', years: '2005 - 2014', engine: '5.4L Triton 3V V8' },
      { make: 'Lincoln', model: 'Mark LT', years: '2006 - 2008', engine: '5.4L Triton 3V V8' }
    ],
    oemNumbers: ['HS26306PT', 'CS26306', '3L3Z-6079-AA', '4L3Z-6079-AA', 'HSHB8-21200', 'ES72220', '738614917338'],
    packageContents: [
      '2x Empacaduras de Culata MLS Especiales para Bloque Triton 3V',
      '24x Sellos de Vástago de Válvula Viton® Seal-Pro (16 Admisión / 8 Escape)',
      '2x Empacaduras de Tapa de Válvulas con Ojales y Sellos VCT',
      '1x Juego de Sellos de Múltiple de Admisión Superior e Inferior',
      '2x Empacaduras de Múltiple de Escape Grafitadas Blindadas',
      '1x Retén de Cigüeñal Delantero y Trasero',
      '1x Empacadura de Cárter de Aceite y Sello de Bomba de Aceite',
      'Juego de Sellos de Bomba de Agua, Tapa de Distribución y Líneas de Enfriamiento'
    ],
    packageContentsEn: [
      '2x Multi-Layer Steel (MLS) Head Gaskets Optimized for Triton 3V Blocks',
      '24x Viton® Seal-Pro Valve Stem Seals (16 Intake / 8 Exhaust)',
      '2x Molded Valve Cover Gaskets with VCT Solenoid Pass-Through Seals',
      '1x Upper & Lower Intake Manifold Gasket Set',
      '2x Armored Graphite Exhaust Manifold Gaskets',
      '1x Front & Rear Crankshaft Main Seals',
      '1x Engine Oil Pan Gasket and Oil Pump Pick-up O-Ring',
      'Water Pump O-Ring, Front Timing Cover Gaskets, and Coolant Passage Seals'
    ],
    specs: [
      { label: 'Estructura de Capas', labelEn: 'Layer Structure', value: '4 Capas de Acero Inoxidable Tratado Térmicamente', valueEn: '4-Layer Heat-Treated Stainless Steel' },
      { label: 'Espesor Comprimido', labelEn: 'Compressed Thickness', value: '1.15 mm', valueEn: '1.15 mm' },
      { label: 'Diámetro de Cilindro', labelEn: 'Bore Diameter', value: '91.5 mm', valueEn: '91.5 mm' },
      { label: 'Sellado VCT', labelEn: 'VCT Sealing', value: 'Polímero Resistente a Fugas de Presión de Aceite', valueEn: 'High-Pressure Oil Leak Resistant Polymer' }
    ]
  },

  // 6. Ford Super Duty F-250 / F-350 / F-450 / F-550 6.8L V10 / 6.2L V8
  {
    id: 'sp-hs26302pt',
    sku: 'SP-HS26302PT',
    name: 'JUEGO COMPLETO DE EMPACADURAS FORD SUPER DUTY F250 / F350 / F450 / F550',
    nameEn: 'HEAVY DUTY FULL ENGINE GASKET SET FORD SUPER DUTY F250 / F350 / F450 / F550',
    category: 'kit-empacadura',
    categoryLabel: 'Kit de Empacadura',
    categoryLabelEn: 'Gasket Kit',
    summary: 'Juego reforzado para trabajo pesado y remolque en camiones Ford Super Duty 6.8L V10 / 6.2L V8.',
    summaryEn: 'Heavy-duty commercial gasket set for Ford Super Duty trucks 6.8L V10 / 6.2L V8.',
    description: 'Juego de empacaduras de alta resistencia industrial desarrollado para flotas comerciales y camiones Ford Super Duty F-250 a F-550 sometidos a trabajo severo y arrastre continuo. Las empacaduras de culata MLS cuentan con refuerzos de acero inoxidable martensítico y sellos de alta temperatura para soportar cargas prolongadas sin perder estanqueidad.',
    descriptionEn: 'Industrial heavy-duty engine gasket kit engineered for commercial fleets and Ford Super Duty F-250 through F-550 trucks subjected to severe towing and continuous payload demands. Multi-layer steel (MLS) head gaskets feature martensitic stainless reinforcements and high-temperature polymers to endure prolonged thermal stress.',
    image: '/images/products/superduty-6-2.png',
    isNew: true,
    isFeatured: false,
    material: 'Acero Inoxidable Martensítico MLS Heavy-Duty + Viton® + Nitrilo Reforzado',
    materialEn: 'Heavy-Duty Martensitic Stainless MLS + Viton® + Reinforced Nitrile',
    temperatureMax: '960 °C (Culata) / 270 °C (Sellos)',
    temperatureMaxEn: '960 °C (Head) / 270 °C (Seals)',
    pressureMax: '290 Bar / 4205 PSI',
    pressureMaxEn: '290 Bar / 4205 PSI',
    suggestedTorque: 'Paso 1: 45 Nm | Paso 2: 75 Nm | Paso 3: +90°',
    suggestedTorqueEn: 'Step 1: 45 Nm | Step 2: 75 Nm | Step 3: +90°',
    compatibility: [
      { make: 'Ford', model: 'F-250 Super Duty', years: '2005 - 2016', engine: '6.8L Triton V10 (T68USEM) / 6.2L Boss V8' },
      { make: 'Ford', model: 'F-350 Super Duty', years: '2005 - 2016', engine: '6.8L Triton V10 / 6.2L Boss V8' },
      { make: 'Ford', model: 'F-450 Super Duty', years: '2005 - 2016', engine: '6.8L Triton V10' },
      { make: 'Ford', model: 'F-550 Super Duty', years: '2005 - 2016', engine: '6.8L Triton V10' },
      { make: 'Ford', model: 'E-350 / E-450 Econoline Super Duty', years: '2005 - 2019', engine: '6.8L Triton V10' },
      { make: 'Ford', model: 'F-53 / F-59 Commercial Stripped Chassis', years: '2005 - 2019', engine: '6.8L Triton V10' }
    ],
    oemNumbers: ['HS26302PT', 'CS26162', '7C3Z-6079-A', '5C3Z-6079-AA', 'ES72221', '3C3Z-6079-BA'],
    packageContents: [
      '2x Empacaduras de Culata MLS Blindadas para Trabajo Pesado y Alto Torque',
      '30x Sellos de Válvula Viton® Alta Temperatura',
      '2x Empacaduras de Tapa de Válvulas de Perfil D Reforzadas',
      '1x Juego Completo de Juntas de Múltiple de Admisión',
      '2x Empacaduras de Múltiple de Escape Grafitadas de Alto Calibre',
      '1x Retén de Cigüeñal Delantero y Trasero HD con Brida',
      '1x Empacadura de Cárter de Aceite y Sello de Bomba de Aceite',
      'Juego Completo de Juntas de Distribución, Bomba de Agua y Termostato'
    ],
    packageContentsEn: [
      '2x Armored Heavy-Duty Multi-Layer Steel Head Gaskets for Commercial Service',
      '30x High-Temperature Viton® Valve Stem Seals',
      '2x Heavy-Duty D-Profile Molded Valve Cover Gaskets',
      '1x Complete Intake Manifold Gasket Set',
      '2x Thick Heavy-Gauge Armored Graphite Exhaust Manifold Gaskets',
      '1x Front & Pre-Assembled Rear Crankshaft Main Seals',
      '1x Engine Oil Pan Gasket and High-Flow Oil Pump Gasket',
      'Complete Timing Cover, Water Pump Housing, and Thermostat Gasket Kit'
    ],
    specs: [
      { label: 'Aplicación', labelEn: 'Application Grade', value: 'Grado Comercial / Servicio Severo / Flotas', valueEn: 'Commercial Heavy-Duty / Severe Service' },
      { label: 'Grosor Comprimido', labelEn: 'Compressed Thickness', value: '1.25 mm', valueEn: '1.25 mm' },
      { label: 'Diámetro de Cilindro', labelEn: 'Cylinder Bore', value: '91.0 mm', valueEn: '91.0 mm' },
      { label: 'Resistencia a Cargas Térmicas', labelEn: 'Thermal Load Resistance', value: 'Inmune a deformación por sobrecarga de remolque', valueEn: 'Immune to warpage under heavy towing loads' }
    ]
  },

  // 7. KIT DE TIEMPO: Cadena de Distribución Completo
  {
    id: 'sp-tk-101',
    sku: 'SP-TK-101',
    name: 'KIT DE CADENA DE TIEMPO COMPLETO',
    nameEn: 'COMPLETE ENGINE TIMING CHAIN KIT',
    category: 'kit-tiempo',
    categoryLabel: 'Kit de Tiempo',
    categoryLabelEn: 'Timing Kit',
    summary: 'Kit completo de distribución con tensores hidráulicos, guías de teflón y cadena silenciosa.',
    summaryEn: 'Complete timing distribution kit with hydraulic tensioners, guide rails, and silent chain.',
    description: 'Kit de cadena de distribución de alta precisión diseñado para sincronización exacta entre árbol de levas y cigüeñal. Incluye cadenas de eslabones reforzados tratados térmicamente, tensores hidráulicos calibrados a presión de aceite OEM, patines guías en polímero antidesgaste y piñones dentados de alta resistencia.',
    descriptionEn: 'High-precision timing chain kit designed for exact camshaft-to-crankshaft synchronization. Includes heat-treated reinforced link chains, OEM oil-pressure calibrated hydraulic tensioners, low-friction wear-resistant polymer guide rails, and hardened sprockets.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmwPuatLladtW3Oq3BmhDm805KONFc43yqcKSEJhxpq1l3nJWeqfMMvpeW0g1kQ6vFFLQ-Dq7bGe1rAZNGyEOgSGxctk-LL-CBVk8quMW69icSTE4Q4nudUttM_QnPuZdnsO8YHCx4CixAioOUL6KzoAIlI_9gPLcMVYWSm8f-ORkxBzQNnauzp1rnSvDen8PLZfuFLpYVQvCht_uHNwANLox0PJulo1Eh-OuUJsuHinhzXW-Ck_7eKtRJfXCrdmcU3Fw',
    isNew: true,
    isFeatured: true,
    material: 'Acero Cromomolibdeno Tratado Térmicamente + Guías Nylon 66/PTFE',
    materialEn: 'Heat-Treated Chromoly Steel + Nylon 66/PTFE Guide Rails',
    temperatureMax: '220 °C continuo',
    temperatureMaxEn: '220 °C continuous',
    pressureMax: 'Resistencia a la tracción 15 kN',
    pressureMaxEn: '15 kN Tensile Strength',
    suggestedTorque: 'Tornillos de piñón: 65 Nm | Tensores: 22 Nm',
    suggestedTorqueEn: 'Sprocket bolts: 65 Nm | Tensioners: 22 Nm',
    compatibility: [
      { make: 'Toyota', model: 'Hilux / Fortuner / 4Runner', years: '2005 - 2026', engine: '2.7L 2TR-FE / 4.0L 1GR-FE' },
      { make: 'Chevrolet', model: 'Silverado / Tahoe / Suburban', years: '2000 - 2023', engine: '5.3L / 6.0L / 6.2L Vortec LS' },
      { make: 'Ford', model: 'F-150 / Mustang / Explorer', years: '2005 - 2022', engine: '4.6L / 5.4L 3V / 5.0L Coyote' },
      { make: 'Jeep', model: 'Grand Cherokee / Wrangler', years: '2011 - 2023', engine: '3.6L Pentastar V6' }
    ],
    oemNumbers: ['13506-31010', '12680750', '9-0398SB', 'AT4Z-6268-A'],
    packageContents: [
      '2x Cadenas de Tiempo Principales Reforzadas',
      '2x Tensores Hidráulicos de Presión de Aceite',
      '4x Patines y Guías de Deslizamiento Anti-Fricción',
      '2x Piñones de Árbol de Levas con Tratamiento Térmico',
      '1x Piñón de Cigüeñal con Marcas de Puesta a Punto'
    ],
    packageContentsEn: [
      '2x Heavy-Duty Reinforced Main Timing Chains',
      '2x Oil-Pressure Calibrated Hydraulic Tensioners',
      '4x Anti-Friction Polymeric Guide Rails & Dampers',
      '2x Heat-Treated Camshaft Sprockets',
      '1x Crankshaft Sprocket with Precision Timing Marks'
    ],
    specs: [
      { label: 'Tipo de Cadena', labelEn: 'Chain Type', value: 'Eslabones Silenciosos Multi-Placa', valueEn: 'Silent Multi-Plate Inverted Tooth' },
      { label: 'Tratamiento Superficial', labelEn: 'Surface Finish', value: 'Nitrurado Antidesgaste', valueEn: 'Wear-Resistant Nitriding' },
      { label: 'Tolerancia de Elongación', labelEn: 'Elongation Tolerance', value: '< 0.05% a 200,000 km', valueEn: '< 0.05% at 200,000 km' }
    ]
  },

  // 8. KIT DE TIEMPO: Correa de Distribución con Bomba de Agua
  {
    id: 'sp-tb-202',
    sku: 'SP-TB-202',
    name: 'KIT DE CORREA DE TIEMPO CON BOMBA DE AGUA',
    nameEn: 'TIMING BELT KIT WITH WATER PUMP',
    category: 'kit-tiempo',
    categoryLabel: 'Kit de Tiempo',
    categoryLabelEn: 'Timing Kit',
    summary: 'Correa de HNBR de alta resistencia térmica con rodamiento tensor y bomba de agua de alto caudal.',
    summaryEn: 'High-temperature HNBR belt with tensioner bearing and high-flow water pump.',
    description: 'Kit completo de correa de sincronización que previene fallas catastróficas de interferencia valvular. Fabricado con cordones de tracción en fibra de vidrio y cuerpo de elastómero HNBR resistente a altas temperaturas y vapores de lubricante. Incluye tensor automático y bomba de agua con turbina fundida.',
    descriptionEn: 'Complete timing belt replacement kit engineered to prevent catastrophic valve-to-piston interference. Built with fiberglass tensile cords and high-temperature HNBR elastomeric compound. Includes automatic tensioner pulley, idlers, and cast-impeller water pump.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq0r-QyNgT4FbvtPtdV8o_xavxouAJYXRn-C7XFZHeDTQlbPTpZmw_4GfVjzhIg69BS9UEs_GTUGHRbjRjjy6klXnJjJiA9F5kcBh1bdAAtlhKgoPANk9zabPXn8WTQ0mvjYCWgUGdvWVn6D6I5a3wYy-qo9iC4YnBl8bK5ZytcJYzraCEXsKcfZpp7II5Hl3i9Eh5WCETo557o2onIwI96WmkukgyW-gglGvViuln9rfmNhYlkJv3Z5c26NLvCCTIn5M',
    isNew: true,
    isFeatured: true,
    material: 'HNBR (Nitrilo Hidrogenado Reforzado) + Rodamientos GCr15',
    materialEn: 'HNBR (Hydrogenated Nitrile) + GCr15 Precision Bearings',
    temperatureMax: '160 °C continuo',
    temperatureMaxEn: '160 °C continuous',
    pressureMax: '12,000 RPM límite de operación',
    pressureMaxEn: '12,000 RPM Operating Limit',
    suggestedTorque: 'Perno de tensor: 25 Nm | Bomba de agua: 15 Nm',
    suggestedTorqueEn: 'Tensioner bolt: 25 Nm | Water pump: 15 Nm',
    compatibility: [
      { make: 'Chevrolet', model: 'Aveo / Optra / Cruze / Sonic', years: '2005 - 2020', engine: '1.6L F16D3 / 1.8L Ecotec' },
      { make: 'Toyota', model: 'Corolla / Yaris / Matrix', years: '2000 - 2018', engine: '1.8L 1ZZ-FE / 2ZR-FE' },
      { make: 'Ford', model: 'Focus / Fiesta / EcoSport', years: '2005 - 2019', engine: '2.0L Duratec / 1.6L Sigma' },
      { make: 'Jeep', model: 'Cherokee / Grand Cherokee', years: '1998 - 2015', engine: '4.0L PowerTech / 3.7L PowerTech' }
    ],
    oemNumbers: ['96350550', '96350526', '13568-19046', '24410-26000'],
    packageContents: [
      '1x Correa de Tiempo Dentada HNBR Reforzada',
      '1x Tensor Automático con Rodamiento Sellado GCr15',
      '1x Polea Guía / Loca de Precisión',
      '1x Bomba de Agua con Empaque Metálico y Turbina Fundida'
    ],
    packageContentsEn: [
      '1x Reinforced HNBR Toothed Timing Belt',
      '1x Automatic Tensioner with Sealed GCr15 Bearing',
      '1x Precision Idler Pulley',
      '1x Heavy-Duty Water Pump with Gasket and Cast Impeller'
    ],
    specs: [
      { label: 'Perfil Dentado', labelEn: 'Tooth Profile', value: 'Curvilíneo RPP / STS Antiruido', valueEn: 'Curvilinear RPP / STS Low-Noise' },
      { label: 'Vida Útil Estimada', labelEn: 'Service Interval', value: '100,000 km bajo condiciones severas', valueEn: '100,000 km under severe duty' },
      { label: 'Tracción de Cordón', labelEn: 'Tensile Cord', value: 'Fibra de Vidrio de Alta Resistencia', valueEn: 'High-Tensile Fiberglass Cords' }
    ]
  }
];
