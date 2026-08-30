import { Product } from '../types';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'sp-fgs-100',
    sku: 'SP-FGS-100',
    name: 'JUEGO DE EMPACADURAS FULL',
    category: 'juegos-full',
    categoryLabel: 'Juego Completo',
    summary: 'Kit completo para reconstrucción de motor, materiales de alta resistencia térmica.',
    description: 'Juego de empacaduras y sellos integral diseñado específicamente para reconstrucción completa de motores de alto kilometraje y rendimiento severo. Incluye empacadura de culata MLS multicapa, sellos de válvulas en fluoroelastómero Viton®, retenes de cigüeñal delantero/trasero con perfil de labio optimizado, empacaduras de admisión, escape, tapa válvulas y cárter.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmwPuatLladtW3Oq3BmhDm805KONFc43yqcKSEJhxpq1l3nJWeqfMMvpeW0g1kQ6vFFLQ-Dq7bGe1rAZNGyEOgSGxctk-LL-CBVk8quMW69icSTE4Q4nudUttM_QnPuZdnsO8YHCx4CixAioOUL6KzoAIlI_9gPLcMVYWSm8f-ORkxBzQNnauzp1rnSvDen8PLZfuFLpYVQvCht_uHNwANLox0PJulo1Eh-OuUJsuHinhzXW-Ck_7eKtRJfXCrdmcU3Fw',
    isNew: true,
    isFeatured: true,
    material: 'Multi-Layer Steel (MLS) + Viton® + Nitrilo Reforzado',
    temperatureMax: '850 °C (Culata) / 230 °C (Sellos)',
    pressureMax: '220 Bar / 3190 PSI',
    suggestedTorque: '35 Nm + 90° + 90°',
    compatibility: [
      { make: 'Toyota', model: 'Corolla / Matrix / Celica', years: '2000 - 2014', engine: '1.8L 1ZZ-FE / 3ZZ-FE' },
      { make: 'Toyota', model: 'Hilux / Fortuner', years: '2005 - 2022', engine: '2.7L 2TR-FE' },
      { make: 'Chevrolet', model: 'Aveo / Optra Design', years: '2005 - 2017', engine: '1.6L F16D3 / E-TEC II' },
      { make: 'Nissan', model: 'Sentra B15 / B16', years: '2002 - 2018', engine: '1.8L QG18DE / MR20DE' }
    ],
    oemNumbers: ['04111-22060', '04111-0C030', '93740232', '10101-4M525'],
    packageContents: [
      '1x Empacadura de Culata MLS Triple Capa',
      '16x Sellos de Válvula Viton® Seal-Pro',
      '1x Retén de Cigüeñal Delantero Viton',
      '1x Retén de Cigüeñal Trasero con Carcasa',
      '1x Empacadura Tapa de Válvulas con O-Rings de Bujía',
      '1x Juego Empacaduras de Múltiple de Admisión',
      '1x Empacadura Múltiple de Escape Grafitada',
      '1x Empacadura de Cárter de Aceite',
      '8x O-Rings y Arandelas de Inyectores',
      '1x Sellos de Bomba de Agua y Termostato'
    ],
    specs: [
      { label: 'Grosor Nominal Culata', value: '1.20 mm comprimida' },
      { label: 'Diámetro de Cilindro', value: '80.0 mm - 86.5 mm' },
      { label: 'Revestimiento Superficial', value: 'FKM Polímero Anti-Fricción' },
      { label: 'Resistencia a Combustible', value: 'Gasolina, E85, Diésel Ultra-Bajo Azufre' }
    ]
  },
  {
    id: 'sp-vs-250',
    sku: 'SP-VS-250',
    name: 'SELLOS DE VÁLVULA VITON',
    category: 'sellos-valvula',
    categoryLabel: 'Sellos de Válvula',
    summary: 'Sellos premium de fluorocarbono para control óptimo de aceite en altas RPM.',
    description: 'Sellos de vástago de válvula fabricados con elastómero Viton® grado aeroespacial con resorte helicoidal en acero inoxidable. Proporcionan una dosificación microscópica precisa de lubricante a la guía de válvula sin permitir fugas de aceite a la cámara de combustión, eliminando humo azul en el arranque y depósitos de carbón.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq0r-QyNgT4FbvtPtdV8o_xavxouAJYXRn-C7XFZHeDTQlbPTpZmw_4GfVjzhIg69BS9UEs_GTUGHRbjRjjy6klXnJjJiA9F5kcBh1bdAAtlhKgoPANk9zabPXn8WTQ0mvjYCWgUGdvWVn6D6I5a3wYy-qo9iC4YnBl8bK5ZytcJYzraCEXsKcfZpp7II5Hl3i9Eh5WCETo557o2onIwI96WmkukgyW-gglGvViuln9rfmNhYlkJv3Z5c26NLvCCTIn5M',
    isNew: false,
    isFeatured: true,
    material: 'Fluoroelastómero FKM (Viton®) + Resorte Inox 302',
    temperatureMax: '260 °C continuo (picos de 300 °C)',
    pressureMax: 'Resistencia a vacío extremo -0.9 Bar',
    suggestedTorque: 'Inserción a presión calibrada 18-22 mm',
    compatibility: [
      { make: 'Universal / Multi-Marca', model: 'Vástago 5.5mm / 6.0mm / 7.0mm', years: '2000 - 2024', engine: '16V / 24V DOHC & SOHC' },
      { make: 'Honda', model: 'Civic / Accord / CR-V', years: '2002 - 2020', engine: '1.8L R18A / 2.4L K24A' },
      { make: 'Chevrolet', model: 'Silverado / Tahoe / Suburban', years: '1999 - 2021', engine: 'Vortec 5.3L / 6.0L / 6.2L' },
      { make: 'Ford', model: 'F-150 / Explorer / Mustang', years: '2004 - 2019', engine: 'Triton 4.6L / 5.4L 3V' }
    ],
    oemNumbers: ['12210-PZ1-004', '12533586', 'F85Z-6571-AA', '90913-02090'],
    packageContents: [
      '16x Sellos de Válvula Admisión (Viton® Café / Verde)',
      '16x Sellos de Válvula Escape (Viton® Negro Alta Temperatura)',
      '1x Manga protectora de instalación para vástago'
    ],
    specs: [
      { label: 'Diámetro de Vástago', value: '5.5 mm / 6.0 mm / 7.0 mm / 8.0 mm' },
      { label: 'Diámetro Exterior Guía', value: '11.0 mm - 13.2 mm' },
      { label: 'Material del Labio', value: 'FKM Fluorocarbon 100% Virgen' },
      { label: 'Tolerancia al Aceite Sintético', value: 'Excelente con ésteres y PAO' }
    ]
  },
  {
    id: 'sp-hg-mls',
    sku: 'SP-HG-MLS',
    name: 'EMPACADURA DE CULATA MLS',
    category: 'culata-mls',
    categoryLabel: 'Empacadura de Culata',
    summary: 'Multi-Layer Steel para sellado superior bajo presiones extremas de combustión.',
    description: 'Empacadura de culata de acero multicapa (MLS) con ingeniería de relieve conformada por troqueles de precisión y recubrimiento de fluoroelastómero micro-sellante. Diseñada para soportar las altas presiones de compresión de motores turboalimentados, inyección directa y aspirados de alto régimen.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3ktciaWEKwdFrKYf_jboINUZ-iflKgFp-pfLy84ZI8jD-Tz5fmuqcyY42AS1aafY3iD4_GNZZdqxYMQXLUpiOjUIQeDqhmw5QEnND4pscwkvotY_U_g1PretscBI9CIPahQxxqO4HVu7ZWRNfbdXgYzN3DiMSNSiFrOmLL_anFcyXVG2bWI8fzz1l6D0Hdwox3RqZ2nEl6GQ8wairSdkSKg3izGwE3-HYlhB3yRGS4z4DJo3NdYnKsffjQlk-x9t99RA',
    isNew: false,
    isFeatured: true,
    material: 'Acero Inoxidable Martensítico + Revestimiento FKM Elastómero',
    temperatureMax: '950 °C en anillo de combustión',
    pressureMax: '280 Bar / 4060 PSI',
    suggestedTorque: 'Paso 1: 40 Nm | Paso 2: 70 Nm | Paso 3: +90°',
    compatibility: [
      { make: 'Volkswagen / Audi', model: 'Golf GTI / Jetta / A4', years: '2008 - 2023', engine: '2.0L TSI EA888 Gen 1/2/3' },
      { make: 'Mitsubishi', model: 'Lancer Evolution / Montero', years: '1998 - 2018', engine: '2.0L 4G63T / 3.0L 6G72' },
      { make: 'Hyundai / Kia', model: 'Tucson / Sportage / Elantra', years: '2010 - 2022', engine: '2.0L Nu / 2.4L Theta II' },
      { make: 'Ford', model: 'Ranger / Focus / Fusion', years: '2006 - 2020', engine: '2.3L / 2.5L Duratec' }
    ],
    oemNumbers: ['06H 103 383 AF', 'MD346741', '22311-25000', '1S7Z-6051-AA'],
    packageContents: [
      '1x Empacadura de Culata MLS Sellada al Vacío',
      '1x Ficha Técnica con Secuencia y Torques de Apriete',
      '1x Guía de Rugosidad Superficial Recomendada (Ra)'
    ],
    specs: [
      { label: 'Construcción', value: '3 a 5 Capas de Acero Inoxidable Elástico' },
      { label: 'Espesor Comprimido', value: '0.85 mm a 1.40 mm' },
      { label: 'Tratamiento Térmico', value: 'Temple Criogénico Anti-Deformación' },
      { label: 'Rugosidad Requerida', value: 'Ra 0.5 - 0.8 µm (Rectificado Fino)' }
    ]
  },
  {
    id: 'sp-os-410',
    sku: 'SP-OS-410',
    name: 'RETÉN DE CIGÜEÑAL TRASERO HD',
    category: 'retenes',
    categoryLabel: 'Retenes y Sellos Radiales',
    summary: 'Retén con carcasa de aluminio reforzada y labio hidrodinámico en PTFE/Viton.',
    description: 'Sello de cigüeñal trasero de alta durabilidad con labio de sellado con estrías helicoidales para retorno continuo de lubricante. Resiste desalineación radial y vibraciones armónicas extremas en motores V6, V8 y 4 cilindros de trabajo pesado.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmwPuatLladtW3Oq3BmhDm805KONFc43yqcKSEJhxpq1l3nJWeqfMMvpeW0g1kQ6vFFLQ-Dq7bGe1rAZNGyEOgSGxctk-LL-CBVk8quMW69icSTE4Q4nudUttM_QnPuZdnsO8YHCx4CixAioOUL6KzoAIlI_9gPLcMVYWSm8f-ORkxBzQNnauzp1rnSvDen8PLZfuFLpYVQvCht_uHNwANLox0PJulo1Eh-OuUJsuHinhzXW-Ck_7eKtRJfXCrdmcU3Fw',
    isNew: false,
    isFeatured: false,
    material: 'PTFE Teflon / Fluoroelastómero + Brida de Aluminio Fundido',
    temperatureMax: '240 °C',
    pressureMax: '4.5 Bar',
    suggestedTorque: 'Tornillos de brida: 12 Nm en cruz',
    compatibility: [
      { make: 'Chevrolet', model: 'Silverado 1500/2500, Tahoe', years: '2001 - 2022', engine: '5.3L / 6.0L / 6.2L Gen III/IV/V LS' },
      { make: 'Ford', model: 'Super Duty F-250, E-350', years: '2000 - 2018', engine: '6.0L / 6.4L / 6.7L Powerstroke' },
      { make: 'Toyota', model: 'Land Cruiser / 4Runner / Prado', years: '2003 - 2021', engine: '4.0L 1GR-FE V6' }
    ],
    oemNumbers: ['12639250', '3C3Z-6701-B', '90311-92008'],
    packageContents: [
      '1x Retén de Cigüeñal Trasero Ensamblado en Brida',
      '1x Protector plástico de centrado para montaje en muñón',
      '1x Cordón perimetral de silicona sellante premontada'
    ],
    specs: [
      { label: 'Diámetro Eje', value: '92.0 mm' },
      { label: 'Diseño de Labio', value: 'Perfil Hidrodinámico Bidireccional' },
      { label: 'Velocidad Periférica', value: 'Hasta 38 m/s' }
    ]
  },
  {
    id: 'sp-ms-88',
    sku: 'SP-MS-88',
    name: 'EMPACADURA MÚLTIPLE DE ESCAPE GRAFITO',
    category: 'multiple-carter',
    categoryLabel: 'Múltiple y Escape',
    summary: 'Lámina de grafito flexible armado con alma de acero perforado para choque térmico.',
    description: 'Empacadura diseñada para sellar la unión entre la culata y el múltiple de escape o turbo. El núcleo de acero perforado con doble capa de grafito expandido absorbe la dilatación térmica diferencial entre el bloque y el escape sin quemarse ni cuartearse.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3ktciaWEKwdFrKYf_jboINUZ-iflKgFp-pfLy84ZI8jD-Tz5fmuqcyY42AS1aafY3iD4_GNZZdqxYMQXLUpiOjUIQeDqhmw5QEnND4pscwkvotY_U_g1PretscBI9CIPahQxxqO4HVu7ZWRNfbdXgYzN3DiMSNSiFrOmLL_anFcyXVG2bWI8fzz1l6D0Hdwox3RqZ2nEl6GQ8wairSdkSKg3izGwE3-HYlhB3yRGS4z4DJo3NdYnKsffjQlk-x9t99RA',
    isNew: true,
    isFeatured: false,
    material: 'Grafito Expandido 99% Pureza + Núcleo Acero Inox Perforado',
    temperatureMax: '1100 °C continuo',
    pressureMax: '65 Bar',
    suggestedTorque: '35 - 45 Nm desde el centro hacia los extremos',
    compatibility: [
      { make: 'Nissan', model: 'Navara / Frontier / NP300', years: '2008 - 2023', engine: '2.5L YD25DDTi / YS23DDT' },
      { make: 'Toyota', model: 'Hilux Vigo / Revo', years: '2005 - 2024', engine: '2.5L 2KD-FTV / 3.0L 1KD-FTV / 2.8L 1GD' },
      { make: 'Mitsubishi', model: 'L200 / Sportero', years: '2006 - 2022', engine: '2.5L 4D56 Di-D / 2.4L 4N15' }
    ],
    oemNumbers: ['14036-EB70A', '17173-30020', '1555A185'],
    packageContents: [
      '1x Empacadura Múltiple de Escape Grafitada de 4 o 6 Puertos',
      '4x Anillos sellantes de brida de bajante/turbo'
    ],
    specs: [
      { label: 'Densidad de Grafito', value: '1.0 g/cm³' },
      { label: 'Grosor Nominal', value: '1.75 mm' },
      { label: 'Resistencia a Gases de Escape', value: 'Inmune a sulfuros y NOx' }
    ]
  },
  {
    id: 'sp-vc-120',
    sku: 'SP-VC-120',
    name: 'EMPACADURA TAPA VÁLVULAS ACM-SILICONE',
    category: 'multiple-carter',
    categoryLabel: 'Tapa Válvulas y Cárter',
    summary: 'Empacadura moldeada con polímero poliacrílico (ACM) con memoria elástica superior.',
    description: 'Empacadura de tapa de válvulas (culatín) con perfiles en D de compresión controlada y topes integrados para evitar el sobreapriete. Mantiene el sellado hermético contra vapores de aceite calientes y vibraciones constantes de los árboles de levas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq0r-QyNgT4FbvtPtdV8o_xavxouAJYXRn-C7XFZHeDTQlbPTpZmw_4GfVjzhIg69BS9UEs_GTUGHRbjRjjy6klXnJjJiA9F5kcBh1bdAAtlhKgoPANk9zabPXn8WTQ0mvjYCWgUGdvWVn6D6I5a3wYy-qo9iC4YnBl8bK5ZytcJYzraCEXsKcfZpp7II5Hl3i9Eh5WCETo557o2onIwI96WmkukgyW-gglGvViuln9rfmNhYlkJv3Z5c26NLvCCTIn5M',
    isNew: false,
    isFeatured: false,
    material: 'Caucho Poliacrílico ACM Grado Automotriz OEM',
    temperatureMax: '175 °C continuo',
    pressureMax: 'Sellado de vacío cárter PCV',
    suggestedTorque: '9 - 11 Nm en secuencia espiral',
    compatibility: [
      { make: 'Chevrolet', model: 'Cruze / Sonic / Tracker', years: '2011 - 2020', engine: '1.8L Ecotec LUW/LWE / 1.4L Turbo LUJ' },
      { make: 'Ford', model: 'Fiesta / Focus / Ecosport', years: '2008 - 2019', engine: '1.6L Sigma Ti-VCT' },
      { make: 'Hyundai', model: 'Accent / Rio / Creta', years: '2012 - 2022', engine: '1.4L / 1.6L Gamma G4FC/G4FD' }
    ],
    oemNumbers: ['55354237', 'CN15-6584-AA', '22441-2B000'],
    packageContents: [
      '1x Empacadura Perimetral de Tapa de Válvulas ACM',
      '4x Sellos circulares para tubos de bujías integrados'
    ],
    specs: [
      { label: 'Dureza Shore A', value: '65 ± 5' },
      { label: 'Resistencia a Aceite Sintético', value: '0% hinchamiento a 150°C' },
      { label: 'Topes de Compresión', value: 'Integrados para limitar aplastamiento' }
    ]
  }
];
