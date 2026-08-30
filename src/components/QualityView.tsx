import React, { useState } from 'react';
import { ShieldCheck, Flame, Gauge, CheckCircle2, Award, Zap, Beaker, FileCheck } from 'lucide-react';
import { ActiveTab } from '../types';

interface QualityViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenContact: () => void;
}

export const QualityView: React.FC<QualityViewProps> = ({ setActiveTab, onOpenContact }) => {
  const [selectedMaterial, setSelectedMaterial] = useState<'mls' | 'viton' | 'grafito' | 'acm'>('mls');

  const materials = {
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
  };

  return (
    <div className="w-full bg-[#f9f9f9] min-h-screen py-10 px-4 md:px-16 text-[#1a1c1c]">
      <div className="max-w-[1280px] mx-auto space-y-12">
        {/* Header */}
        <div className="border-b-2 border-[#dadada] pb-6">
          <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase text-[#df0a1a] tracking-widest mb-1">
            <span>INGENIERÍA & METROLOGÍA</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#1a1c1c]">
            SISTEMA DE GESTIÓN DE CALIDAD INDUSTRIAL
          </h1>
          <p className="font-body text-sm text-[#5e3f3b] mt-1 max-w-3xl">
            Cada producto Seal-Pro es sometido a rigurosas pruebas de laboratorio bajo normas internacionales ASTM, ISO y SAE para garantizar cero fugas y máxima durabilidad.
          </p>
        </div>

        {/* 3 Pillars of Quality */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-[#1a1c1c] p-6 shadow-industrial-black-sm">
            <div className="w-12 h-12 bg-[#df0a1a] text-white flex items-center justify-center font-bold mb-4 clip-slant-right">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold uppercase text-[#1a1c1c] mb-2">
              Normas ISO/TS 16949
            </h3>
            <p className="font-body text-xs text-neutral-600 leading-relaxed">
              Trazabilidad integral por número de lote desde la recepción de la materia prima virgen hasta el empaque al vacío final.
            </p>
          </div>

          <div className="bg-white border-2 border-[#1a1c1c] p-6 shadow-industrial-black-sm">
            <div className="w-12 h-12 bg-[#1a1c1c] text-white flex items-center justify-center font-bold mb-4 clip-slant-right">
              <Flame className="w-6 h-6 text-[#df0a1a]" />
            </div>
            <h3 className="font-heading text-lg font-bold uppercase text-[#1a1c1c] mb-2">
              Pruebas de Choque Térmico
            </h3>
            <p className="font-body text-xs text-neutral-600 leading-relaxed">
              Ensayos continuos de ciclo frío-caliente de -20°C a 950°C para simular 200,000 kilómetros de estrés severo en motores de competición y trabajo pesado.
            </p>
          </div>

          <div className="bg-white border-2 border-[#1a1c1c] p-6 shadow-industrial-black-sm">
            <div className="w-12 h-12 bg-[#df0a1a] text-white flex items-center justify-center font-bold mb-4 clip-slant-right">
              <Gauge className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold uppercase text-[#1a1c1c] mb-2">
              Control Dimensional Óptico
            </h3>
            <p className="font-body text-xs text-neutral-600 leading-relaxed">
              Medición de tolerancias por proyección láser 3D con precisión de ±0.005 mm en pasos de agua, conductos de aceite y orificios de cilindros.
            </p>
          </div>
        </div>

        {/* Interactive Material Science Explorer */}
        <div className="bg-[#1a1c1c] text-white p-6 md:p-10 border border-neutral-700 shadow-industrial-red">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-neutral-700 pb-6 mb-6">
            <div>
              <span className="text-xs font-heading font-bold text-[#df0a1a] uppercase tracking-wider block">
                CIENCIA DE MATERIALES APLICADA
              </span>
              <h2 className="font-heading text-2xl font-bold uppercase text-white">
                EXPLORADOR DE POLÍMEROS Y METALES SEAL-PRO
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
                  {key === 'mls' && 'ACERO MLS'}
                  {key === 'viton' && 'VITON® FKM'}
                  {key === 'grafito' && 'GRAFITO ARMADO'}
                  {key === 'acm' && 'POLÍMERO ACM'}
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
                PARÁMETROS TÉCNICOS ENSAYADOS
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

        {/* Rectificadoras & Machining Standards */}
        <div className="bg-white border border-[#dadada] p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold uppercase text-[#1a1c1c]">
              GUÍA DE ACABADO SUPERFICIAL (Ra) PARA RECTIFICADORAS
            </h3>
            <p className="font-body text-xs md:text-sm text-neutral-600 leading-relaxed">
              La correcta estanqueidad de una empacadura de culata depende en un 50% de la calidad del producto y en un 50% del acabado superficial del bloque y la culata de aluminio o fundición de hierro.
            </p>
            <ul className="space-y-2 text-xs font-body text-neutral-800">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#df0a1a] flex-shrink-0 mt-0.5" />
                <span><strong>Empaques MLS:</strong> Requieren rugosidad Ra entre 0.5 y 0.8 µm con rectificado plano continuo.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#df0a1a] flex-shrink-0 mt-0.5" />
                <span><strong>Empaques Grafitados:</strong> Toleran acabados de Ra hasta 1.5 µm gracias a la compresibilidad del grafito.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#df0a1a] flex-shrink-0 mt-0.5" />
                <span><strong>Desviación de Planitud Máxima:</strong> 0.05 mm en 4 cilindros / 0.08 mm en V6 y V8.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#f3f3f4] p-6 border border-neutral-300 text-center space-y-3">
            <Beaker className="w-10 h-10 text-[#df0a1a] mx-auto" />
            <h4 className="font-heading text-sm font-bold uppercase text-[#1a1c1c]">
              Laboratorio de Homologación Seal-Pro
            </h4>
            <p className="text-xs text-neutral-600 font-body max-w-sm mx-auto">
              ¿Requiere certificación de estanqueidad para una flota comercial o desarrollo de empacaduras especiales?
            </p>
            <button
              onClick={onOpenContact}
              className="bg-[#1a1c1c] hover:bg-[#df0a1a] text-white font-heading text-xs font-bold uppercase px-4 py-2.5 transition-colors cursor-pointer"
            >
              Contactar al Dpto. de Ingeniería
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
