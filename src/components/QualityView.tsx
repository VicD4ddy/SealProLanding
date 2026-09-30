import React, { useState } from 'react';
import { ShieldCheck, Flame, Gauge, CheckCircle2, Award, Beaker, FileCheck } from 'lucide-react';
import { ActiveTab } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { RevealOnScroll } from './RevealOnScroll';
import { MlsLayerExploder } from './MlsLayerExploder';
import { AnimatedCounter } from './AnimatedCounter';

interface QualityViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenContact: () => void;
}

export const QualityView: React.FC<QualityViewProps> = ({ onOpenContact }) => {
  const { t, language } = useLanguage();
  const [selectedMaterial, setSelectedMaterial] = useState<'mls' | 'viton' | 'grafito' | 'acm'>('mls');

  const materials = t.quality.materials;

  return (
    <div className="w-full bg-[#f9f9f9] min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-12 text-[#1a1c1c]">
      <div className="max-w-[1280px] mx-auto space-y-8 sm:space-y-12">
        {/* Header */}
        <RevealOnScroll direction="up" duration={600}>
          <div className="border-b-2 border-[#dadada] pb-5 sm:pb-6">
            <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase text-[#df0a1a] tracking-widest mb-1">
              <span>{t.quality.tag}</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#1a1c1c]">
              {t.quality.title}
            </h1>
            <p className="font-body text-xs sm:text-sm text-[#5e3f3b] mt-1 max-w-3xl">
              {t.quality.subtitle}
            </p>
          </div>
        </RevealOnScroll>

        {/* 3 Pillars of Quality */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RevealOnScroll direction="up" delay={0} duration={600}>
            <div className="bg-white border-2 border-[#1a1c1c] p-6 shadow-industrial-black-sm hover-lift h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#df0a1a] text-white flex items-center justify-center font-bold clip-slant-right">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="font-heading font-extrabold text-2xl text-[#1a1c1c]">
                    <AnimatedCounter end={100} suffix="%" duration={1600} />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold uppercase text-[#1a1c1c] mb-2">
                  {t.quality.pillars.isoTitle}
                </h3>
                <p className="font-body text-xs text-neutral-600 leading-relaxed">
                  {t.quality.pillars.isoDesc}
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-100 text-[10px] font-heading font-bold text-[#df0a1a] uppercase tracking-wider">
                ISO/TS 16949 COMPLIANT
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={150} duration={600}>
            <div className="bg-white border-2 border-[#1a1c1c] p-6 shadow-industrial-black-sm hover-lift h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#1a1c1c] text-white flex items-center justify-center font-bold clip-slant-right">
                    <Flame className="w-6 h-6 text-[#df0a1a]" />
                  </div>
                  <div className="font-heading font-extrabold text-2xl text-[#df0a1a]">
                    <AnimatedCounter end={280} prefix="+" suffix="°C" duration={1800} />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold uppercase text-[#1a1c1c] mb-2">
                  {t.quality.pillars.thermalTitle}
                </h3>
                <p className="font-body text-xs text-neutral-600 leading-relaxed">
                  {t.quality.pillars.thermalDesc}
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-100 text-[10px] font-heading font-bold text-neutral-600 uppercase tracking-wider">
                VITON® FKM ELASTOMER
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={300} duration={600}>
            <div className="bg-white border-2 border-[#1a1c1c] p-6 shadow-industrial-black-sm hover-lift h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#df0a1a] text-white flex items-center justify-center font-bold clip-slant-right">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <div className="font-heading font-extrabold text-2xl text-[#1a1c1c]">
                    <AnimatedCounter end={0.05} prefix="< " suffix=" mm" decimals={2} duration={2000} />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold uppercase text-[#1a1c1c] mb-2">
                  {t.quality.pillars.opticalTitle}
                </h3>
                <p className="font-body text-xs text-neutral-600 leading-relaxed">
                  {t.quality.pillars.opticalDesc}
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-100 text-[10px] font-heading font-bold text-[#df0a1a] uppercase tracking-wider">
                CMM 3D SCAN VERIFIED
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Interactive Material Science Explorer */}
        <RevealOnScroll direction="up" duration={700}>
          <div className="bg-[#1a1c1c] text-white p-6 md:p-10 border border-neutral-700 shadow-industrial-red">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-neutral-700 pb-6 mb-6">
              <div>
                <span className="text-xs font-heading font-bold text-[#df0a1a] uppercase tracking-wider block">
                  {t.quality.materialScienceTag}
                </span>
                <h2 className="font-heading text-2xl font-bold uppercase text-white">
                  {t.quality.materialScienceTitle}
                </h2>
              </div>

              {/* Material Selector Buttons */}
              <div className="flex flex-wrap gap-2">
                {(['mls', 'viton', 'grafito', 'acm'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedMaterial(key)}
                    className={`font-heading text-xs font-bold uppercase px-3 py-2 transition-all cursor-pointer ${
                      selectedMaterial === key
                        ? 'bg-[#df0a1a] text-white clip-slant-right shadow-md'
                        : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                    }`}
                  >
                    {key === 'mls' && (language === 'es' ? 'ACERO MLS' : 'MLS STEEL')}
                    {key === 'viton' && 'VITON® FKM'}
                    {key === 'grafito' && (language === 'es' ? 'GRAFITO ARMADO' : 'GRAPHITE')}
                    {key === 'acm' && (language === 'es' ? 'POLÍMERO ACM' : 'ACM POLYMER')}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Material Specs Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-heading text-xl font-bold text-white uppercase text-[#df0a1a]">
                  {materials[selectedMaterial].name}
                </h3>
                <p className="font-heading text-sm font-semibold text-neutral-200">
                  {materials[selectedMaterial].headline}
                </p>
                <p className="font-body text-xs md:text-sm text-neutral-400 leading-relaxed">
                  {materials[selectedMaterial].desc}
                </p>
              </div>

              <div className="lg:col-span-5 bg-[#111213] p-5 border border-neutral-700 space-y-3">
                <h4 className="font-heading text-xs font-bold uppercase text-white tracking-wider border-b border-neutral-800 pb-2 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#df0a1a]" />
                  {language === 'es' ? 'PARÁMETROS TÉCNICOS ENSAYADOS' : 'TESTED TECHNICAL PARAMETERS'}
                </h4>
                <div className="space-y-2 text-xs">
                  {materials[selectedMaterial].specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center py-1.5 border-b border-neutral-800/60">
                      <span className="text-neutral-400 font-medium">{spec.label}:</span>
                      <span className="font-heading font-bold text-white text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Interactive 3D MLS Layer Explosion Anatomy */}
        <RevealOnScroll direction="up" duration={700}>
          <MlsLayerExploder />
        </RevealOnScroll>

        {/* Test Bench Comparison Table */}
        <div className="bg-white border border-[#dadada] p-6 md:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-xs font-heading font-bold text-[#df0a1a] uppercase tracking-wider block mb-1">
              {t.quality.testBenchTag}
            </span>
            <h3 className="font-heading text-2xl font-bold uppercase text-[#1a1c1c]">
              {t.quality.testBenchTitle}
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-body text-xs">
              <thead>
                <tr className="bg-[#1a1c1c] text-white font-heading uppercase text-xs">
                  <th className="p-3.5 border-b border-neutral-700">{t.quality.testBenchHeaders.param}</th>
                  <th className="p-3.5 border-b border-neutral-700 text-[#df0a1a] bg-[#111213]">{t.quality.testBenchHeaders.sealPro}</th>
                  <th className="p-3.5 border-b border-neutral-700">{t.quality.testBenchHeaders.generic}</th>
                  <th className="p-3.5 border-b border-neutral-700">{t.quality.testBenchHeaders.impact}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {t.quality.testBenchRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#fcfcfc]'}>
                    <td className="p-3.5 font-heading font-bold text-neutral-900">{row.param}</td>
                    <td className="p-3.5 font-heading font-extrabold text-[#df0a1a] bg-red-50/50">{row.sealPro}</td>
                    <td className="p-3.5 text-neutral-500">{row.generic}</td>
                    <td className="p-3.5 text-neutral-800 font-medium">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Rectificadoras & Machining Standards */}
        <div className="bg-white border border-[#dadada] p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold uppercase text-[#1a1c1c]">
              {language === 'es' ? 'GUÍA DE ACABADO SUPERFICIAL (Ra) PARA RECTIFICADORAS' : 'SURFACE FINISH (Ra) GUIDE FOR ENGINE MACHINISTS'}
            </h3>
            <p className="font-body text-xs md:text-sm text-neutral-600 leading-relaxed">
              {language === 'es'
                ? 'La correcta estanqueidad de una empacadura de culata depende en un 50% de la calidad del producto y en un 50% del acabado superficial del bloque y la culata de aluminio o fundición de hierro.'
                : 'Proper head gasket sealing depends 50% on product quality and 50% on precision surface finish across the aluminum or cast iron cylinder head and block deck.'}
            </p>
            <ul className="space-y-2 text-xs font-body text-neutral-800">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#df0a1a] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>{language === 'es' ? 'Empaques MLS:' : 'MLS Gaskets:'}</strong> {language === 'es' ? 'Requieren rugosidad Ra entre 0.5 y 0.8 µm con rectificado plano continuo.' : 'Require Ra surface roughness between 0.5 and 0.8 µm with flat continuous milling.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#df0a1a] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>{language === 'es' ? 'Empaques Grafitados:' : 'Graphite Gaskets:'}</strong> {language === 'es' ? 'Toleran acabados de Ra hasta 1.5 µm gracias a la compresibilidad del grafito.' : 'Tolerate surface roughness up to Ra 1.5 µm thanks to flexible graphite conformability.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#df0a1a] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>{language === 'es' ? 'Desviación de Planitud Máxima:' : 'Maximum Deck Warpage Limit:'}</strong> 0.05 mm (4 Cyl) / 0.08 mm (V6/V8).
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#f3f3f4] p-6 border border-neutral-300 text-center space-y-3">
            <Beaker className="w-10 h-10 text-[#df0a1a] mx-auto" />
            <h4 className="font-heading text-sm font-bold uppercase text-[#1a1c1c]">
              {language === 'es' ? 'Laboratorio de Homologación Seal-Pro' : 'Seal-Pro Testing & Certification Lab'}
            </h4>
            <p className="text-xs text-neutral-600 font-body max-w-sm mx-auto">
              {language === 'es'
                ? '¿Requiere certificación de estanqueidad para una flota comercial o desarrollo de empacaduras especiales?'
                : 'Need sealing validation reports for commercial fleets or custom gasket batch developments?'}
            </p>
            <button
              onClick={onOpenContact}
              className="bg-[#1a1c1c] hover:bg-[#df0a1a] text-white font-heading text-xs font-bold uppercase px-4 py-2.5 transition-colors cursor-pointer"
            >
              {language === 'es' ? 'Contactar al Dpto. de Ingeniería' : 'Contact Engineering Department'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
