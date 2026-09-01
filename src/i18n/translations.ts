export type Language = 'es' | 'en';

export const TRANSLATIONS = {
  es: {
    // Header & Navigation
    nav: {
      home: 'INICIO',
      products: 'PRODUCTOS',
      quality: 'CALIDAD',
      about: 'NOSOTROS',
      techSpecs: 'FICHAS TÉCNICAS',
      quote: 'COTIZACIÓN',
      contact: 'CONTACTO',
      getQuote: 'COTIZAR',
      requestQuoteFull: 'SOLICITAR COTIZACIÓN RÁPIDA',
      topBannerText: 'Línea directa para talleres y rectificadoras automotrices | Envíos a nivel nacional e internacional',
      topBannerPhone: 'SOPORTE TÉCNICO: +58 (414) 441-6287 | info@sealpro.com',
      watchAnimation: 'INTRO',
      switchLang: 'Cambiar idioma',
    },
    // Home View
    home: {
      badge: 'LÍNEA PROFESIONAL DE GRADO INDUSTRIAL',
      heroTitle1: 'EMPACADURAS Y KITS DE TIEMPO',
      heroTitle2: 'CERO FUGAS. AJUSTE OEM EXACTO.',
      heroSubtitle: 'La solución definitiva para talleres mecánicos y rectificadoras automotrices. Ingeniería en acero multicapa MLS y elastómeros Viton® para resistir presiones extremas de combustión sin deformaciones ni re-torque.',
      exploreCatalog: 'VER CATÁLOGO Y COTIZAR',
      requestAdvisory: 'ASESORÍA TÉCNICA DIRECTA',
      oemGradeBadge: 'Estanqueidad de Grado OEM',
      guaranteedBadge: '100% GARANTIZADO',
      
      // Trust badges
      trustBadge1: 'Garantía 100% de Sellado Hermético',
      trustBadge2: 'Cotización Inmediata en < 15 Min',
      trustBadge3: 'Despacho Nacional e Internacional',

      // Fast Finder
      finderTitle: 'BUSCADOR RÁPIDO DE APLICACIÓN Y TORQUES',
      finderSubtitle: 'Ubique su kit de motor exacto, referencias OEM y tablas de apriete de fábrica',
      selectMake: 'Marca:',
      allMakes: 'Todas las Marcas',
      engineCodePlaceholder: 'Código Motor o Modelo (ej. 5.3 LS, Triton 5.4, HEMI 5.7, 4.0 SOHC...)',
      searchButton: 'CONSULTAR DISPONIBILIDAD',

      // Featured
      featuredTag: 'LÍNEA DESTACADA',
      featuredTitle: 'PRODUCTOS MÁS SOLICITADOS POR RECTIFICADORES',
      featuredSubtitle: 'Kits desarrollados con tecnología MLS multicapa y elastómeros FKM Viton® para cero fugas.',
      addToQuote: 'AGREGAR A COTIZACIÓN',
      addedToQuote: 'AGREGADO',
      viewDetails: 'VER DETALLE',
      viewAllProducts: 'VER TODO EL CATÁLOGO DE PRODUCTOS',

      // Pillars
      pillarsTag: 'CALIDAD INDUSTRIAL',
      pillarsTitle: 'INGENIERÍA DE PRECISIÓN PARA EL MÁXIMO RENDIMIENTO',
      pillarsSubtitle: 'Nuestras juntas y retenes resisten las presiones de combustión más extremas y temperaturas críticas de operación.',
      pillar1Title: 'ACERO MULTICAPA (MLS)',
      pillar1Desc: 'Láminas de acero inoxidable con recubrimiento de fluoroelastómero para un micro-sellado hermético en culatas de alta compresión.',
      pillar2Title: 'ELASTÓMEROS VITON® (FKM)',
      pillar2Desc: 'Sellos de vástago de válvula y retenes radiales con resistencia térmica de hasta 260°C contra aceites sintéticos agresivos.',
      pillar3Title: 'MICRO-SELLADO Y TORQUE',
      pillar3Desc: 'Diseño volumétrico optimizado para distribuir uniformemente la carga de apriete entre bloque y culata sin re-torque.',
      learnMoreQuality: 'SABER MÁS SOBRE NUESTRA CALIDAD Y MATERIALES',

      // CTA Banner
      ctaWorkshopTag: 'SOLUCIONES PARA PROFESIONALES',
      ctaWorkshopTitle: '¿ERES TALLER MECÁNICO O RECTIFICADORA AUTOMOTRIZ?',
      ctaWorkshopDesc: 'Accede a precios mayoristas preferenciales, soporte técnico de planta y fichas técnicas de torque oficiales para cada motor.',
      ctaRequestWholesale: 'SOLICITAR LISTA DE PRECIOS MAYORISTA',
      ctaViewTorqueTables: 'CONSULTAR TABLAS DE TORQUE',
    },

    // Products View
    products: {
      tag: 'CATÁLOGO INDUSTRIAL DE EMPACADURAS',
      title: 'GAMA DE PRODUCTOS SEAL-PRO',
      subtitle: 'Consulte nuestra línea completa de juegos de empacaduras, sellos Viton®, empaques de culata MLS multicapa y retenes de alta estanqueidad.',
      searchPlaceholder: 'Buscar por código, motor, OEM o modelo...',
      allCategories: 'TODAS LAS CATEGORÍAS',
      allMakes: 'Todas las Marcas',
      categories: {
        all: 'TODAS LAS CATEGORÍAS',
        'kit-empacadura': 'KIT DE EMPACADURA',
        'kit-tiempo': 'KIT DE TIEMPO',
      },
      showingCount: 'Mostrando {count} productos',
      clearFilters: 'Limpiar Filtros',
      noProductsFound: 'No se encontraron productos con los criterios seleccionados.',
      noProductsDesc: 'Intente buscar con otro término, marca o categoría.',
      viewSpecs: 'Ver Especificaciones',
      addToQuote: 'Agregar a Cotización',
      inQuote: 'En Cotización',
      tableHeaders: {
        skuProduct: 'SKU / PRODUCTO',
        category: 'CATEGORÍA',
        material: 'MATERIAL PRINCIPAL',
        application: 'APLICACIÓN PRINCIPAL',
        maxTemp: 'TEMPERATURA MÁX',
        action: 'ACCIÓN',
      },
      cardLabels: {
        material: 'Material:',
        torque: 'Torque Sugerido:',
        engines: 'Motores Compatibles:',
        temp: 'Temp Máx:',
        pressure: 'Presión Máx:',
      },
    },

    // Tech Specs View
    techSpecs: {
      tag: 'MANUALES DE TALLER & TABLAS DE TORQUE',
      title: 'ESPECIFICACIONES TÉCNICAS DE MOTORES',
      subtitle: 'Consulte secuencias de apriete oficiales, valores de torque en sistema métrico (Nm) e imperial (Lb-pie), grados angulares y rugosidad superficial (Ra).',
      printSheet: 'IMPRIMIR FICHA',
      searchEngine: 'BUSCAR MOTOR',
      searchPlaceholder: 'Código de motor (1ZZ, Vortec...)',
      allBrands: 'TODAS',
      brand: 'Marca:',
      displacement: 'Cilindrada:',
      valves: 'Válvulas:',
      cylinders: 'Cilindros:',
      surfaceFinish: 'Rugosidad Requerida (Ra):',
      tighteningStagesTableTitle: 'TABLA DE ETAPAS DE APRIETE (CULATA)',
      stage: 'Etapa',
      procedure: 'Procedimiento / Descripción',
      metric: 'Métrico (Nm)',
      imperial: 'Imperial (Lb-pie)',
      angle: 'Ángulo',
      sequenceTitle: 'SECUENCIA OFICIAL DE APRIETE (10 TORNILLOS)',
      sequenceSubtitle: 'Secuencia en espiral recomendada desde el centro hacia los extremos para asentamiento plano.',
      stepLabel: 'Paso #{num}',
      stepCenterLabel: 'Paso #{num} (Centro)',
      criticalNotesTitle: 'NOTAS CRÍTICAS DE MONTAJE Y RECTIFICACIÓN',
      recommendedGasket: 'EMPACADURA RECOMENDADA PARA ESTE MOTOR',
      viewProductSheet: 'Ver Ficha de Producto',
      requestTorqueSupport: 'Solicitar Asesoría de Torque',
      noSpecsFound: 'No se encontraron fichas para el motor seleccionado.',
    },

    // Quality View
    quality: {
      tag: 'INGENIERÍA & METROLOGÍA',
      title: 'SISTEMA DE GESTIÓN DE CALIDAD INDUSTRIAL',
      subtitle: 'Cada producto Seal-Pro es sometido a rigurosas pruebas de laboratorio bajo normas internacionales ASTM, ISO y SAE para garantizar cero fugas y máxima durabilidad.',
      pillars: {
        isoTitle: 'Normas ISO/TS 16949',
        isoDesc: 'Trazabilidad integral por número de lote desde la recepción de la materia prima virgen hasta el empaque al vacío final.',
        thermalTitle: 'Pruebas de Choque Térmico',
        thermalDesc: 'Ensayos continuos de ciclo frío-caliente de -20°C a 950°C para simular 200,000 kilómetros de estrés severo en motores de competición y trabajo pesado.',
        opticalTitle: 'Control Dimensional Óptico',
        opticalDesc: 'Medición de tolerancias por proyección láser 3D con precisión de ±0.005 mm en pasos de agua, conductos de aceite y orificios de cilindros.',
      },
      materialScienceTag: 'CIENCIA DE MATERIALES APLICADA',
      materialScienceTitle: 'COMPOSICIÓN Y ELASTICIDAD DE NUESTROS SELLOS',
      materials: {
        mls: {
          name: 'MLS (Multi-Layer Steel) Acero Multicapa',
          headline: 'Capacidad de sellado elástico para motores de alta compresión y turbo',
          desc: 'Formado por láminas de acero inoxidable martensítico estampadas con precisión micrométrica. Cada relieve actúa como una línea de sellado por resorte elástico independiente, recubierto por una película de polímero elastomérico fluoroestabilizado (FKM) de 0.02 mm para micro-sellado superficial.',
          specs: [
            { label: 'Resistencia Térmica', value: 'Hasta 950 °C continuo' },
            { label: 'Presión de Combustión', value: 'Hasta 280 Bar (4,060 PSI)' },
            { label: 'Rugosidad Requerida', value: 'Ra 0.5 - 0.8 µm' },
            { label: 'Resistencia a Combustibles', value: 'Gasolina, E85, Diésel Euro VI' }
          ]
        },
        viton: {
          name: 'Fluoroelastómero FKM (Viton® Grado Aeroespacial)',
          headline: 'Control microscópico de lubricación en vástagos de válvulas y retenes',
          desc: 'Formulación polimérica de fluorocarbono de alta pureza con aditivos anti-desgaste. Mantiene elasticidad y memoria dimensional aún tras 50,000 horas de operación a altas revoluciones, previniendo el endurecimiento y cristalización térmica típica de los sellos de nitrilo común.',
          specs: [
            { label: 'Rango de Temperatura', value: '-40 °C hasta +260 °C continuo' },
            { label: 'Resistencia Química', value: '100% inmune a aceites sintéticos 0W-20 y PAO' },
            { label: 'Dureza Shore A', value: '75 ± 3' },
            { label: 'Vida Útil Estimada', value: 'Superior a 150,000 Km' }
          ]
        },
        grafito: {
          name: 'Grafito Expandido Reforzado con Núcleo Inox',
          headline: 'Absorción de dilatación térmica diferencial en múltiples de escape y turbo',
          desc: 'Lámina de grafito flexible de 99.8% de carbono puro acoplada mecánicamente a un alma de acero perforado bidireccional. No requiere adhesivos orgánicos que se carbonicen, proporcionando estanqueidad en choques térmicos súbitos de 1100°C.',
          specs: [
            { label: 'Pico de Choque Térmico', value: '1,100 °C' },
            { label: 'Compresibilidad ASTM F36', value: '40 - 50%' },
            { label: 'Recuperación Elástica', value: '> 15%' },
            { label: 'Gases Ácidos / Sulfuros', value: 'Inerte y no corrosivo' }
          ]
        },
        acm: {
          name: 'Elastómero Poliacrílico (ACM) y Silicona RTV',
          headline: 'Sellado de fluidos a baja presión para tapas de válvulas y cárter',
          desc: 'Polímero diseñado para soportar niebla de aceite lubricante caliente y vapores de cárter (PCV) sin degradarse ni perder memoria elástica. Fabricado con topes metálicos limitadores de aplastamiento para garantizar el torque exacto de montaje.',
          specs: [
            { label: 'Temperatura de Trabajo', value: '-30 °C a +175 °C' },
            { label: 'Hinchamiento en Aceite', value: '< 2% tras 1000h a 150°C' },
            { label: 'Topes de Compresión', value: 'Acero embutido integrado' },
            { label: 'Elasticidad Residual', value: '92% tras fatiga continua' }
          ]
        }
      },
      testBenchTag: 'BANCO DE PRUEBAS & METROLOGÍA',
      testBenchTitle: 'COMPARATIVA DE RENDIMIENTO: SEAL-PRO VS. GENÉRICO',
      testBenchHeaders: {
        param: 'PARÁMETRO',
        sealPro: 'SEAL-PRO INDUSTRIAL',
        generic: 'EMPAQUE GENÉRICO',
        impact: 'IMPACTO EN EL MOTOR',
      },
      testBenchRows: [
        {
          param: 'Tolerancia de Espesor',
          sealPro: '± 0.015 mm (Láser 3D)',
          generic: '± 0.120 mm',
          impact: 'Garantiza relación de compresión exacta y apriete parejo',
        },
        {
          param: 'Pérdida de Torque (Relaxation)',
          sealPro: '< 4% tras 500h',
          generic: '> 22% tras 100h',
          impact: 'Elimina necesidad de re-torque y evita soplado de junta',
        },
        {
          param: 'Resistencia a Aceite Sintético',
          sealPro: 'Inmune (Viton® FKM)',
          generic: 'Degradación / Endurecimiento',
          impact: 'Cero humo azul en aceleración y sellado de válvulas continuo',
        },
        {
          param: 'Capa de Micro-Sellado',
          sealPro: 'Recubrimiento FKM 20µm',
          generic: 'Pintura o sin recubrimiento',
          impact: 'Sella micro-imperfecciones de rugosidad en bloque y culata',
        },
      ],
      guaranteeTitle: '100% GARANTÍA DE ESTANQUEIDAD Y CALIDAD',
      guaranteeDesc: 'Cada empaque Seal-Pro incluye garantía por escrito contra defectos de fabricación o fallo prematuro bajo condiciones correctas de apriete.',
      requestSpecsBtn: 'SOLICITAR CERTIFICADO DE CALIDAD DE LOTE',
    },

    // About View
    about: {
      tag: 'HISTORIA & VALORES CORPORATIVOS',
      title: 'SOBRE SEAL-PRO INDUSTRIAL SOLUTIONS',
      subtitle: 'Líderes en el desarrollo y manufactura de soluciones de estanqueidad automotriz e industrial de alto rendimiento.',
      storyTitle: 'EL ALIADO CONFIABLE DE LOS MECÁNICOS Y RECTIFICADORES',
      storyP1: 'Seal-Pro nació con la misión fundamental de erradicar los fallos prematuros de compresión y fugas de lubricante en la reconstrucción de motores automotrices.',
      storyP2: 'A través de la constante inversión en matricería de alta precisión, aleaciones de acero martensítico y elastómeros Viton® certificados, hemos consolidado una reputación intachable entre los talleres más exigentes.',
      storyQuote: '“No fabricamos empaques genéricos: diseñamos componentes de precisión que devuelven la compresión original de fábrica a cada motor intervenido.”',
      pillarsTitle: 'NUESTROS PILARES FUNDAMENTALES',
      p1Title: 'Calidad Sin Concesiones',
      p1Desc: 'Materiales 100% vírgenes y controles de espesor micrométrico en cada lote.',
      p2Title: 'Prestigio Técnico',
      p2Desc: 'Reconocidos por las principales asociaciones de rectificadores y preparadores de motores.',
      p3Title: 'Responsabilidad y Respaldo',
      p3Desc: 'Garantía directa con reposición inmediata y acompañamiento de ingenieros en planta.',
      stats: {
        workshops: 'Talleres Certificados',
        skus: 'Referencias y SKUs',
        countries: 'Países de Distribución',
        leakControl: 'Control de Fugas',
      },
      distributorCtaTitle: '¿DESEAS SER DISTRIBUIDOR AUTORIZADO SEAL-PRO?',
      distributorCtaDesc: 'Ofrecemos márgenes mayoristas competitivos, material de exhibición técnico y prioridad en despachos.',
      distributorCtaBtn: 'SOLICITAR DISTRIBUCIÓN',
    },

    // Quote Modal
    quoteModal: {
      title: 'SOLICITUD DE COTIZACIÓN FORMAL (TALLER / DISTRIBUIDOR)',
      emptyTitle: 'Su lista de cotización está vacía',
      emptyDesc: 'Explore nuestro catálogo y agregue las empacaduras, sellos o juegos completos que requiera para su taller.',
      goToCatalog: 'EXPLORAR CATÁLOGO',
      itemListTitle: 'REPUESTOS SELECCIONADOS ({count})',
      clearQuote: 'VACIAR LISTA',
      workshopInfoTitle: 'DATOS DE SU TALLER O EMPRESA',
      workshopName: 'Nombre del Taller o Empresa *',
      workshopPlaceholder: 'ej. Rectificadora Los Andes C.A.',
      contactName: 'Nombre del Responsable *',
      contactPlaceholder: 'ej. Juan Pérez (Jefe de Taller)',
      phone: 'Teléfono / WhatsApp *',
      phonePlaceholder: 'ej. +58 414-4416287',
      email: 'Correo Electrónico',
      emailPlaceholder: 'ej. contacto@taller.com',
      city: 'Ciudad y País *',
      cityPlaceholder: 'ej. Caracas, Venezuela',
      notes: 'Notas o Requerimientos Especiales',
      notesPlaceholder: 'ej. Indicar si requiere empaque de sobremedida (+0.5mm), disponibilidad inmediata o factura fiscal.',
      sendWhatsApp: 'ENVIAR POR WHATSAPP (RESPUESTA INMEDIATA)',
      sendEmail: 'ENVIAR SOLICITUD FORMAL',
      successTitle: '¡SOLICITUD DE COTIZACIÓN ENVIADA CON ÉXITO!',
      successDesc: 'Un asesor técnico de Seal-Pro revisará el inventario en planta para {name} y le enviará la propuesta oficial con descuentos por volumen.',
      backToCatalog: 'VOLVER AL CATÁLOGO',
      close: 'CERRAR',
    },

    // Contact Modal
    contactModal: {
      title: 'ASESORÍA TÉCNICA & ATENCIÓN AL CLIENTE',
      badge: 'Línea directa para rectificadores, mecánicos y distribuidores de autopartes.',
      fullName: 'Nombre Completo *',
      fullNamePlaceholder: 'Su nombre',
      company: 'Taller o Empresa',
      companyPlaceholder: 'Nombre del taller / rectificadora',
      email: 'Correo Electrónico *',
      emailPlaceholder: 'su.correo@ejemplo.com',
      phone: 'Teléfono / WhatsApp *',
      phonePlaceholder: '+58 414-4416287',
      topic: 'Motivo de Consulta *',
      topics: {
        advisory: 'Asesoría Técnica de Montaje y Torques',
        distribution: 'Distribución Mayorista / Nuevos Clientes',
        warranty: 'Garantía y Metrología',
        general: 'Consulta General sobre SKUs',
      },
      message: 'Detalle de su Consulta *',
      messagePlaceholder: 'Describa el modelo de motor, código de falla, o volumen estimado de compra...',
      submit: 'ENVIAR CONSULTA TÉCNICA',
      successTitle: '¡CONSULTA RECIBIDA!',
      successDesc: 'Nuestro equipo de soporte técnico y metrología se pondrá en contacto con usted en un plazo no mayor a 2 horas hábiles.',
      close: 'Entendido',
    },

    // Product Detail Modal
    productDetail: {
      industrialCert: 'Grado de Fabricación Industrial Certificado',
      maxTemp: 'Temperatura Máx',
      maxPressure: 'Presión Máxima',
      torqueRecommendation: 'Recomendación de Torque:',
      packageContents: 'Contenido del Paquete / Kit:',
      engineeringSpecs: 'Especificaciones de Ingeniería:',
      compatibleEngines: 'Motores y Vehículos Compatibles:',
      oemCodes: 'Códigos OEM y Cruce de Referencias:',
      addToQuote: 'AGREGAR A MI LISTA DE COTIZACIÓN',
      addedToQuote: 'PRODUCTO AGREGADO A COTIZACIÓN',
      make: 'Marca',
      model: 'Modelo',
      engine: 'Motor',
      years: 'Años',
    },

    // Footer
    footer: {
      description: 'Fabricación y distribución de juegos de empacaduras y sellos automotrices de nivel industrial. Alta ingeniería en estanqueidad para motores de alta exigencia.',
      isoCert: 'Certificación ISO/TS 16949',
      quickLinks: 'ENLACES RÁPIDOS',
      catalogLink: 'Catálogo Completo de Empacaduras',
      specsLink: 'Fichas Técnicas y Torques de Apriete',
      qualityLink: 'Garantía y Control de Calidad',
      aboutLink: 'Red de Distribuidores Autorizados',
      advisoryLink: 'Soporte Técnico Especializado',
      contactTitle: 'CONTACTO',
      address: 'Parque Industrial Automotriz, Sector Mecánico Central',
      talkToAdvisor: 'Escribir a Asesor de Planta →',
      newsletterTitle: 'BOLETÍN TÉCNICO',
      newsletterDesc: 'Reciba boletines mensuales de torques de motores nuevos, manuales de instalación y lanzamientos de SKUs.',
      emailPlaceholder: 'SU CORREO',
      subscribed: '¡Suscrito al boletín de ingeniería!',
      rights: '© 2026 SEAL PRO INDUSTRIAL SOLUTIONS. ALL RIGHTS RESERVED.',
      terms: 'Términos y Condiciones',
      warrantyPolicy: 'Políticas de Garantía',
    },

    // Toast
    toast: {
      addedToCart: '"{name}" agregado a la lista de cotización.',
    },

    // Intro Video Splash
    intro: {
      skip: 'SALTAR INTRO',
      skipKey: 'ESC',
      unmute: 'ACTIVAR AUDIO',
      mute: 'SILENCIAR',
      replay: 'Ver animación de bienvenida',
      brandSubtitle: 'INGENIERÍA EN SELLADO DE MOTORES',
    }
  },

  en: {
    // Header & Navigation
    nav: {
      home: 'HOME',
      products: 'PRODUCTS',
      quality: 'QUALITY',
      about: 'ABOUT US',
      techSpecs: 'TECH SPECS',
      quote: 'QUOTE',
      contact: 'CONTACT',
      getQuote: 'GET A QUOTE',
      requestQuoteFull: 'REQUEST FAST QUOTE',
      topBannerText: 'Direct hotline for automotive repair shops and engine rebuilders | Worldwide shipping available',
      topBannerPhone: 'TECHNICAL SUPPORT: +58 (414) 441-6287 | info@sealpro.com',
      watchAnimation: 'INTRO',
      switchLang: 'Change language',
    },
    // Home View
    home: {
      badge: 'INDUSTRIAL GRADE PROFESSIONAL LINE',
      heroTitle1: 'ENGINE GASKETS & TIMING KITS',
      heroTitle2: 'ZERO LEAKAGE. EXACT OEM FIT.',
      heroSubtitle: 'The definitive sealing solution for automotive repair shops and engine rebuilders. Engineered with Multi-Layer Steel (MLS) and Viton® elastomers to withstand extreme combustion pressures without warpage or retorquing.',
      exploreCatalog: 'VIEW CATALOG & QUOTE',
      requestAdvisory: 'DIRECT TECHNICAL ADVICE',
      oemGradeBadge: 'OEM-Grade Sealing Reliability',
      guaranteedBadge: '100% GUARANTEED',
      
      // Trust badges
      trustBadge1: '100% Airtight Sealing Guarantee',
      trustBadge2: 'Fast Quotes in < 15 Minutes',
      trustBadge3: 'Worldwide & Nationwide Shipping',

      // Fast Finder
      finderTitle: 'FAST ENGINE & TORQUE COMPATIBILITY FINDER',
      finderSubtitle: 'Search your exact engine kit, OEM cross references & factory bolt tightening charts',
      selectMake: 'Make:',
      allMakes: 'All Makes',
      engineCodePlaceholder: 'Engine Code or Model (e.g. 5.3 LS, Triton 5.4, HEMI 5.7, 4.0 SOHC...)',
      searchButton: 'CHECK AVAILABILITY',

      // Featured
      featuredTag: 'FEATURED LINE',
      featuredTitle: 'MOST REQUESTED PRODUCTS BY ENGINE REBUILDERS',
      featuredSubtitle: 'Kits engineered with Multi-Layer Steel (MLS) technology and Viton® FKM elastomers for zero leakage.',
      addToQuote: 'ADD TO QUOTE',
      addedToQuote: 'ADDED',
      viewDetails: 'VIEW DETAILS',
      viewAllProducts: 'VIEW FULL PRODUCT CATALOG',

      // Pillars
      pillarsTag: 'INDUSTRIAL QUALITY',
      pillarsTitle: 'PRECISION ENGINEERING FOR MAXIMUM PERFORMANCE',
      pillarsSubtitle: 'Our gaskets and seals withstand the most extreme combustion pressures and critical operating temperatures.',
      pillar1Title: 'MULTI-LAYER STEEL (MLS)',
      pillar1Desc: 'Stainless steel embossed layers with fluoroelastomer coating for airtight micro-sealing on high-compression cylinder heads.',
      pillar2Title: 'VITON® ELASTOMERS (FKM)',
      pillar2Desc: 'Valve stem seals and radial oil seals with thermal resistance up to 260°C against aggressive synthetic motor oils.',
      pillar3Title: 'MICRO-SEALING & TORQUE',
      pillar3Desc: 'Optimized volumetric design to evenly distribute clamp load across block and head without re-torquing requirements.',
      learnMoreQuality: 'LEARN MORE ABOUT OUR QUALITY & MATERIALS',

      // CTA Banner
      ctaWorkshopTag: 'SOLUTIONS FOR PROFESSIONALS',
      ctaWorkshopTitle: 'ARE YOU A REPAIR SHOP OR ENGINE REBUILDER?',
      ctaWorkshopDesc: 'Access preferential wholesale pricing, plant engineering support, and official torque spec sheets for every engine.',
      ctaRequestWholesale: 'REQUEST WHOLESALE PRICE LIST',
      ctaViewTorqueTables: 'VIEW TORQUE SPEC TABLES',
    },

    // Products View
    products: {
      tag: 'INDUSTRIAL GASKET CATALOG',
      title: 'SEAL-PRO PRODUCT RANGE',
      subtitle: 'Browse our complete line of gasket kits, Viton® seals, multi-layer MLS cylinder head gaskets, and heavy-duty radial seals.',
      searchPlaceholder: 'Search by SKU, engine, OEM number, or vehicle model...',
      allCategories: 'ALL CATEGORIES',
      allMakes: 'All Makes',
      categories: {
        all: 'ALL CATEGORIES',
        'kit-empacadura': 'GASKET KIT',
        'kit-tiempo': 'TIMING KIT',
      },
      showingCount: 'Showing {count} products',
      clearFilters: 'Reset Filters',
      noProductsFound: 'No products found matching your search criteria.',
      noProductsDesc: 'Try searching with another keyword, vehicle make, or category.',
      viewSpecs: 'View Specifications',
      addToQuote: 'Add to Quote',
      inQuote: 'In Quote',
      tableHeaders: {
        skuProduct: 'SKU / PRODUCT',
        category: 'CATEGORY',
        material: 'PRIMARY MATERIAL',
        application: 'PRIMARY APPLICATION',
        maxTemp: 'MAX TEMP',
        action: 'ACTION',
      },
      cardLabels: {
        material: 'Material:',
        torque: 'Suggested Torque:',
        engines: 'Compatible Engines:',
        temp: 'Max Temp:',
        pressure: 'Max Pressure:',
      },
    },

    // Tech Specs View
    techSpecs: {
      tag: 'WORKSHOP MANUALS & TORQUE TABLES',
      title: 'ENGINE TECHNICAL SPECIFICATIONS',
      subtitle: 'Check official bolt tightening sequences, torque values in metric (Nm) and imperial (Lb-ft) units, angle degrees, and surface roughness (Ra).',
      printSheet: 'PRINT SPEC SHEET',
      searchEngine: 'SEARCH ENGINE',
      searchPlaceholder: 'Engine code (1ZZ, Vortec...)',
      allBrands: 'ALL',
      brand: 'Brand:',
      displacement: 'Displacement:',
      valves: 'Valves:',
      cylinders: 'Cylinders:',
      surfaceFinish: 'Required Roughness (Ra):',
      tighteningStagesTableTitle: 'TIGHTENING STAGES TABLE (CYLINDER HEAD)',
      stage: 'Stage',
      procedure: 'Procedure / Description',
      metric: 'Metric (Nm)',
      imperial: 'Imperial (Lb-ft)',
      angle: 'Angle',
      sequenceTitle: 'OFFICIAL TIGHTENING SEQUENCE (10 BOLTS)',
      sequenceSubtitle: 'Recommended spiral sequence starting from the center outwards for uniform flat seating.',
      stepLabel: 'Step #{num}',
      stepCenterLabel: 'Step #{num} (Center)',
      criticalNotesTitle: 'CRITICAL MOUNTING & REBUILDING NOTES',
      recommendedGasket: 'RECOMMENDED GASKET FOR THIS ENGINE',
      viewProductSheet: 'View Product Page',
      requestTorqueSupport: 'Request Torque Assistance',
      noSpecsFound: 'No specifications found for the selected engine.',
    },

    // Quality View
    quality: {
      tag: 'ENGINEERING & METROLOGY',
      title: 'INDUSTRIAL QUALITY MANAGEMENT SYSTEM',
      subtitle: 'Every Seal-Pro product is subjected to rigorous laboratory tests under international ASTM, ISO, and SAE standards to guarantee zero leakage and maximum durability.',
      pillars: {
        isoTitle: 'ISO/TS 16949 Standards',
        isoDesc: 'Full batch traceability from raw material inspection to final airtight vacuum packaging.',
        thermalTitle: 'Thermal Shock Testing',
        thermalDesc: 'Continuous hot-cold cycling tests from -20°C to 950°C simulating 200,000 km of severe stress in racing and heavy-duty engines.',
        opticalTitle: '3D Optical Dimensional Control',
        opticalDesc: 'Laser projection tolerance measuring with ±0.005 mm precision across coolant passages, oil galleries, and combustion bores.',
      },
      materialScienceTag: 'APPLIED MATERIAL SCIENCE',
      materialScienceTitle: 'COMPOSITION & ELASTICITY OF OUR SEALS',
      materials: {
        mls: {
          name: 'MLS (Multi-Layer Steel) Technology',
          headline: 'Elastic sealing capability for high-compression and turbocharged engines',
          desc: 'Manufactured from martensitic stainless steel sheets stamped with micrometric precision. Each embossment acts as an independent elastic spring sealing line, coated with a 0.02 mm fluoroelastomer (FKM) polymer film for microscopic surface sealing.',
          specs: [
            { label: 'Thermal Resistance', value: 'Up to 950 °C continuous' },
            { label: 'Combustion Pressure', value: 'Up to 280 Bar (4,060 PSI)' },
            { label: 'Surface Roughness Req.', value: 'Ra 0.5 - 0.8 µm' },
            { label: 'Fuel Resistance', value: 'Gasoline, E85, Euro VI Diesel' }
          ]
        },
        viton: {
          name: 'FKM Fluoroelastomer (Aerospace Grade Viton®)',
          headline: 'Microscopic lubrication control on valve stems and radial shafts',
          desc: 'High-purity fluorocarbon polymer formulation with anti-wear additives. Retains elasticity and dimensional memory even after 50,000 operating hours at high RPM, preventing thermal hardening and crystallization typical of standard nitrile seals.',
          specs: [
            { label: 'Temperature Range', value: '-40 °C to +260 °C continuous' },
            { label: 'Chemical Resistance', value: '100% immune to 0W-20 & PAO synthetic oils' },
            { label: 'Shore A Hardness', value: '75 ± 3' },
            { label: 'Estimated Service Life', value: 'Exceeding 150,000 Km' }
          ]
        },
        grafito: {
          name: 'Expanded Graphite Reinforced with Stainless Core',
          headline: 'Differential thermal expansion absorption for exhaust manifolds and turbo flanges',
          desc: 'Flexible 99.8% pure carbon graphite sheet mechanically clinched to a bidirectional perforated stainless steel core. Eliminates organic binders that carbonize, delivering sealing integrity under sudden 1100°C thermal shocks.',
          specs: [
            { label: 'Thermal Shock Peak', value: '1,100 °C' },
            { label: 'ASTM F36 Compressibility', value: '40 - 50%' },
            { label: 'Elastic Recovery', value: '> 15%' },
            { label: 'Acid / Sulfur Gases', value: 'Inert and non-corrosive' }
          ]
        },
        acm: {
          name: 'Polyacrylic Elastomer (ACM) & RTV Silicone',
          headline: 'Low-pressure fluid sealing for valve covers and oil pans',
          desc: 'Specialized polymer engineered to withstand hot engine oil mist and blow-by crankcase gases (PCV) without degradation or memory loss. Molded with integrated steel compression limiters to ensure exact torque clamp load.',
          specs: [
            { label: 'Operating Temp', value: '-30 °C to +175 °C' },
            { label: 'Oil Swelling', value: '< 2% after 1000h at 150°C' },
            { label: 'Compression Limiters', value: 'Integrated drawn steel inserts' },
            { label: 'Residual Elasticity', value: '92% after continuous fatigue' }
          ]
        }
      },
      testBenchTag: 'TEST BENCH & METROLOGY',
      testBenchTitle: 'PERFORMANCE COMPARISON: SEAL-PRO VS. GENERIC GASKET',
      testBenchHeaders: {
        param: 'PARAMETER',
        sealPro: 'SEAL-PRO INDUSTRIAL',
        generic: 'GENERIC GASKET',
        impact: 'ENGINE IMPACT',
      },
      testBenchRows: [
        {
          param: 'Thickness Tolerance',
          sealPro: '± 0.015 mm (3D Laser)',
          generic: '± 0.120 mm',
          impact: 'Ensures exact compression ratio and even bolt clamping',
        },
        {
          param: 'Torque Loss (Relaxation)',
          sealPro: '< 4% after 500h',
          generic: '> 22% after 100h',
          impact: 'Eliminates re-torquing and prevents blown head gaskets',
        },
        {
          param: 'Synthetic Oil Resistance',
          sealPro: 'Immune (Viton® FKM)',
          generic: 'Degradation / Hardening',
          impact: 'Zero blue smoke on acceleration and continuous valve sealing',
        },
        {
          param: 'Micro-Sealing Coating',
          sealPro: '20µm FKM Polymer Layer',
          generic: 'Paint or bare metal',
          impact: 'Fills micro-roughness scratches in block and head deck',
        },
      ],
      guaranteeTitle: '100% SEALING & QUALITY GUARANTEE',
      guaranteeDesc: 'Every Seal-Pro gasket comes with a written warranty against manufacturing defects or premature failure under proper torque procedures.',
      requestSpecsBtn: 'REQUEST BATCH QUALITY CERTIFICATE',
    },

    // About View
    about: {
      tag: 'HISTORY & CORPORATE VALUES',
      title: 'ABOUT SEAL-PRO INDUSTRIAL SOLUTIONS',
      subtitle: 'Leaders in the development and manufacturing of high-performance automotive and industrial sealing solutions.',
      storyTitle: 'THE TRUSTED ALLY OF MECHANICS & ENGINE REBUILDERS',
      storyP1: 'Seal-Pro was founded with the core mission of eliminating premature compression failures and oil leaks during engine overhauls.',
      storyP2: 'Through continuous investment in high-precision tooling, martensitic steel alloys, and certified Viton® elastomers, we have built an unblemished reputation among demanding workshops.',
      storyQuote: '“We do not manufacture generic gaskets: we design precision components that restore original factory compression to every rebuilt engine.”',
      pillarsTitle: 'OUR CORE PILLARS',
      p1Title: 'Uncompromising Quality',
      p1Desc: '100% virgin materials and micrometric thickness checks on every production batch.',
      p2Title: 'Technical Prestige',
      p2Desc: 'Recognized by leading engine builder associations and professional racing teams.',
      p3Title: 'Responsibility & Support',
      p3Desc: 'Direct warranty with immediate replacement and direct access to plant engineers.',
      stats: {
        workshops: 'Certified Workshops',
        skus: 'References & SKUs',
        countries: 'Distribution Countries',
        leakControl: 'Leak Control',
      },
      distributorCtaTitle: 'WANT TO BECOME AN AUTHORIZED SEAL-PRO DISTRIBUTOR?',
      distributorCtaDesc: 'We offer competitive wholesale margins, technical showroom displays, and expedited shipping priority.',
      distributorCtaBtn: 'APPLY FOR DISTRIBUTION',
    },

    // Quote Modal
    quoteModal: {
      title: 'FORMAL QUOTE REQUEST (WORKSHOP / DISTRIBUTOR)',
      emptyTitle: 'Your quote list is empty',
      emptyDesc: 'Browse our catalog and add the gaskets, valve seals, or full overhaul kits required for your workshop.',
      goToCatalog: 'BROWSE CATALOG',
      itemListTitle: 'SELECTED PARTS ({count})',
      clearQuote: 'CLEAR LIST',
      workshopInfoTitle: 'YOUR WORKSHOP OR COMPANY DETAILS',
      workshopName: 'Workshop or Company Name *',
      workshopPlaceholder: 'e.g. Apex Engine Rebuilders Inc.',
      contactName: 'Contact Person *',
      contactPlaceholder: 'e.g. John Doe (Shop Foreman)',
      phone: 'Phone / WhatsApp *',
      phonePlaceholder: 'e.g. +58 414-4416287',
      email: 'Email Address',
      emailPlaceholder: 'e.g. contact@workshop.com',
      city: 'City & Country *',
      cityPlaceholder: 'e.g. Miami, USA / Caracas, Venezuela',
      notes: 'Notes or Special Requirements',
      notesPlaceholder: 'e.g. Indicate if you need oversize thickness (+0.5mm), immediate dispatch, or commercial invoice.',
      sendWhatsApp: 'SEND VIA WHATSAPP (INSTANT RESPONSE)',
      sendEmail: 'SEND FORMAL QUOTE REQUEST',
      successTitle: 'QUOTE REQUEST SENT SUCCESSFULLY!',
      successDesc: 'A Seal-Pro technical advisor will check plant inventory for {name} and reply with official volume pricing.',
      backToCatalog: 'BACK TO CATALOG',
      close: 'CLOSE',
    },

    // Contact Modal
    contactModal: {
      title: 'TECHNICAL ADVISORY & CUSTOMER SUPPORT',
      badge: 'Direct hotline for engine rebuilders, mechanics, and auto parts distributors.',
      fullName: 'Full Name *',
      fullNamePlaceholder: 'Your name',
      company: 'Workshop or Company',
      companyPlaceholder: 'Workshop / Rebuilding shop name',
      email: 'Email Address *',
      emailPlaceholder: 'your.email@example.com',
      phone: 'Phone / WhatsApp *',
      phonePlaceholder: '+58 414-4416287',
      topic: 'Inquiry Topic *',
      topics: {
        advisory: 'Technical Installation & Torque Guidance',
        distribution: 'Wholesale Distribution / New Accounts',
        warranty: 'Warranty & Metrology Inspection',
        general: 'General SKU & Inventory Inquiry',
      },
      message: 'Inquiry Details *',
      messagePlaceholder: 'Please describe engine model, failure symptoms, or estimated order volume...',
      submit: 'SEND TECHNICAL INQUIRY',
      successTitle: 'INQUIRY RECEIVED!',
      successDesc: 'Our technical support and metrology team will contact you within 2 business hours.',
      close: 'Understood',
    },

    // Product Detail Modal
    productDetail: {
      industrialCert: 'Certified Industrial Manufacturing Grade',
      maxTemp: 'Max Temp',
      maxPressure: 'Max Pressure',
      torqueRecommendation: 'Torque Recommendation:',
      packageContents: 'Kit / Package Contents:',
      engineeringSpecs: 'Engineering Specifications:',
      compatibleEngines: 'Compatible Engines & Vehicles:',
      oemCodes: 'OEM Numbers & Cross References:',
      addToQuote: 'ADD TO MY QUOTE LIST',
      addedToQuote: 'PRODUCT ADDED TO QUOTE',
      make: 'Make',
      model: 'Model',
      engine: 'Engine',
      years: 'Years',
    },

    // Footer
    footer: {
      description: 'Manufacturing and distribution of industrial-grade automotive gaskets and seals. High-precision sealing engineering for heavy-duty and performance engines.',
      isoCert: 'ISO/TS 16949 Certified',
      quickLinks: 'QUICK LINKS',
      catalogLink: 'Complete Gasket Catalog',
      specsLink: 'Tech Specs & Bolt Torque Sequences',
      qualityLink: 'Warranty & Quality Assurance',
      aboutLink: 'Authorized Distributor Network',
      advisoryLink: 'Specialized Technical Support',
      contactTitle: 'CONTACT',
      address: 'Automotive Industrial Park, Central Mechanical Sector',
      talkToAdvisor: 'Talk to Plant Engineer →',
      newsletterTitle: 'TECHNICAL NEWSLETTER',
      newsletterDesc: 'Receive monthly bulletins on new engine torque procedures, installation guides, and newly released SKUs.',
      emailPlaceholder: 'YOUR EMAIL',
      subscribed: 'Subscribed to engineering bulletin!',
      rights: '© 2026 SEAL PRO INDUSTRIAL SOLUTIONS. ALL RIGHTS RESERVED.',
      terms: 'Terms & Conditions',
      warrantyPolicy: 'Warranty Policies',
    },

    // Toast
    toast: {
      addedToCart: '"{name}" added to your quote list.',
    },

    // Intro Video Splash
    intro: {
      skip: 'SKIP INTRO',
      skipKey: 'ESC',
      unmute: 'UNMUTE AUDIO',
      mute: 'MUTE',
      replay: 'Watch welcome intro',
      brandSubtitle: 'ENGINE SEALING ENGINEERING',
    }
  }
};
