import React, { useEffect } from 'react';
import { ActiveTab } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS_DATA } from '../data/products';

interface SEOHeadProps {
  activeTab: ActiveTab;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ activeTab }) => {
  const { language } = useLanguage();

  useEffect(() => {
    // Dynamic Page Titles and Descriptions based on active tab and language
    const seoData: Record<ActiveTab, { titleEs: string; titleEn: string; descEs: string; descEn: string }> = {
      home: {
        titleEs: 'Seal Pro | Empacaduras de Motor y Kits de Tiempo de Grado OEM',
        titleEn: 'Seal Pro | OEM-Grade Engine Gaskets & Timing Kits',
        descEs: 'Fabricación y distribución de juegos de empacaduras de culata MLS, sellos Viton® y kits de tiempo para talleres mecánicos y rectificadoras. Cero fugas y ajuste OEM garantizado.',
        descEn: 'Manufacturing and distribution of Multi-Layer Steel (MLS) cylinder head gaskets, Viton® seals, and timing kits for automotive repair shops and engine rebuilders. 100% airtight fit.',
      },
      products: {
        titleEs: 'Catálogo de Empacaduras y Kits de Tiempo | Seal Pro',
        titleEn: 'Engine Gasket & Timing Kit Catalog | Seal Pro',
        descEs: 'Explore nuestra gama completa de empacaduras MLS, juegos completos para Ford, Chevrolet, Jeep, Dodge y kits de tiempo con especificaciones técnicas de fábrica.',
        descEn: 'Explore our complete range of MLS gaskets, engine rebuild kits for Ford, Chevrolet, Jeep, Dodge, and timing component kits with OEM specs.',
      },
      quality: {
        titleEs: 'Ingeniería y Control de Calidad de Materiales | Seal Pro',
        titleEn: 'Engineering & Materials Quality Control | Seal Pro',
        descEs: 'Conozca nuestros estándares de fabricación en acero inoxidable martensítico MLS, elastómeros Viton® FKM y pruebas de estanqueidad de alta compresión.',
        descEn: 'Learn about our precision manufacturing standards in Multi-Layer Steel MLS, Viton® FKM elastomers, and high-compression airtightness testing.',
      },
      about: {
        titleEs: 'Sobre Nosotros - Historia y Compromiso con el Taller | Seal Pro',
        titleEn: 'About Us - History & Workshop Commitment | Seal Pro',
        descEs: 'Más de 15 años brindando soluciones de sellado industrial a rectificadoras, talleres mecánicos y distribuidores de repuestos automotrices.',
        descEn: 'Over 15 years providing heavy-duty sealing solutions to automotive rebuilders, engine shops, and parts distributors.',
      },
      'tech-specs': {
        titleEs: 'Centro Técnico y Tablas Oficiales de Torque | Seal Pro',
        titleEn: 'Technical Center & Official Torque Spec Tables | Seal Pro',
        descEs: 'Consulte tablas de torque, secuencias de apriete angular en espiral y rugosidad superficial recomendada para motores Ford 4.0/5.4, GM 5.3 LS, HEMI 5.7 y más.',
        descEn: 'Look up cylinder head bolt torque sequences, angle tightening steps, and surface finish Ra specs for Ford, GM LS, HEMI 5.7, and more.',
      },
    };

    const currentSeo = seoData[activeTab] || seoData.home;
    const pageTitle = language === 'es' ? currentSeo.titleEs : currentSeo.titleEn;
    const pageDesc = language === 'es' ? currentSeo.descEs : currentSeo.descEn;

    // Update document title
    document.title = pageTitle;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDesc);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', pageDesc);
      document.head.appendChild(metaDescription);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDesc);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', pageTitle);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', pageDesc);

    // Update html lang attribute
    document.documentElement.lang = language;

    // Inject / Update JSON-LD Structured Data
    const existingJsonLd = document.getElementById('sealpro-schema-jsonld');
    if (existingJsonLd) {
      existingJsonLd.remove();
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['AutoPartsStore', 'Organization', 'Brand'],
          '@id': 'https://sealpro.com/#organization',
          name: 'Seal Pro Industrial Solutions',
          alternateName: 'Seal Pro',
          url: 'https://sealpro.com',
          logo: 'https://sealpro.com/assets/logo.png',
          description:
            'Fabricante y distribuidor especializado en juegos de empacaduras de culata MLS, sellos de válvulas Viton® y kits de tiempo para motores automotrices.',
          telephone: '+58-414-4416287',
          email: 'info@sealpro.com',
          sameAs: [
            'https://wa.me/584144416287',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+58-414-4416287',
            contactType: 'technical support',
            availableLanguage: ['Spanish', 'English'],
            areaServed: 'Worldwide',
          },
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'VE',
            addressLocality: 'Valencia',
            addressRegion: 'Carabobo',
          },
          priceRange: '$$',
        },
        {
          '@type': 'WebSite',
          '@id': 'https://sealpro.com/#website',
          url: 'https://sealpro.com',
          name: 'Seal Pro',
          publisher: {
            '@id': 'https://sealpro.com/#organization',
          },
          inLanguage: language === 'es' ? 'es-VE' : 'en-US',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://sealpro.com/?tab=products&search={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'ItemList',
          '@id': 'https://sealpro.com/#product-catalog',
          name: language === 'es' ? 'Catálogo de Empacaduras Seal Pro' : 'Seal Pro Gasket Catalog',
          description:
            language === 'es'
              ? 'Línea completa de kits de empacaduras de motor y componentes de distribución'
              : 'Complete line of engine gasket kits and timing components',
          numberOfItems: PRODUCTS_DATA.length,
          itemListElement: PRODUCTS_DATA.slice(0, 6).map((product, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'Product',
              name: product.name,
              sku: product.sku,
              mpn: product.sku,
              image: `https://sealpro.com${product.image}`,
              description: product.description,
              brand: {
                '@type': 'Brand',
                name: 'Seal Pro',
              },
              offers: {
                '@type': 'Offer',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
                url: 'https://sealpro.com/?tab=products',
                seller: {
                  '@id': 'https://sealpro.com/#organization',
                },
              },
            },
          })),
        },
      ],
    };

    const script = document.createElement('script');
    script.id = 'sealpro-schema-jsonld';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [activeTab, language]);

  return null;
};
