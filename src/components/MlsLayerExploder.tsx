import React, { useState } from 'react';
import { Layers, Flame, Shield, Cpu, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LayerInfo {
  id: number;
  nameEs: string;
  nameEn: string;
  materialEs: string;
  materialEn: string;
  thickness: string;
  temp: string;
  pressure: string;
  descEs: string;
  descEn: string;
  color: string;
  glowColor: string;
}

export const MlsLayerExploder: React.FC = () => {
  const { language } = useLanguage();
  const [explosionProgress, setExplosionProgress] = useState<number>(65); // 0 to 100
  const [activeLayer, setActiveLayer] = useState<number>(1);
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(false);

  const layers: LayerInfo[] = [
    {
      id: 0,
      nameEs: 'Capa Superior Activa con Viton®',
      nameEn: 'Top Active Sealing Layer with Viton®',
      materialEs: 'Acero Inoxidable AISI 301 Full Hard + Recubrimiento FKM',
      materialEn: 'AISI 301 Full Hard Stainless Steel + FKM Elastomer',
      thickness: '0.20 mm',
      temp: '280°C / 536°F',
      pressure: '2,200 PSI',
      descEs:
        'Capa externa con rebordes de estanqueidad micro-estampados y elastómero Viton® de 25 micras. Sella micro-porosidades y tolera dilataciones térmicas extremas de culatas de aluminio.',
      descEn:
        'Outer layer featuring micro-embossed sealing beads coated with 25-micron Viton® FKM elastomer. Seals micro-roughness and accommodates thermal expansion cycles in aluminum heads.',
      color: 'from-neutral-700 via-neutral-800 to-neutral-900 border-neutral-600',
      glowColor: 'rgba(223, 10, 26, 0.4)',
    },
    {
      id: 1,
      nameEs: 'Anillo de Fuego y Reborde Activo (Stopper)',
      nameEn: 'Active Combustion Stopper Ring',
      materialEs: 'Acero Templado Quirúrgico con Tecnología Stopper Laser',
      materialEn: 'Laser-Weld Tempered Steel with Active Stopper',
      thickness: '0.15 mm',
      temp: '320°C / 608°F',
      pressure: '2,800+ PSI',
      descEs:
        'Anillo perimetral de combustión que concentra la carga de los tornillos de culata alrededor del cilindro, previniendo soplados de compresión bajo alta detonación o turbo.',
      descEn:
        'High-density combustion perimeter ring that concentrates head bolt clamp load directly around the cylinder bore, preventing gasket blowouts under turbo boost or high knock.',
      color: 'from-red-950 via-[#1a1c1c] to-black border-[#df0a1a]',
      glowColor: 'rgba(223, 10, 26, 0.7)',
    },
    {
      id: 2,
      nameEs: 'Placa Central Espaciadora (Spacer Shim)',
      nameEn: 'Central Core Spacer Shim',
      materialEs: 'Acero Austenítico Recocido de Grado Aeronáutico',
      materialEn: 'Annealed Austenitic Stainless Aircraft-Grade Alloy',
      thickness: '0.40 - 0.75 mm',
      temp: '300°C / 572°F',
      pressure: '2,000 PSI',
      descEs:
        'Cuerpo central no recubierto que define el volumen de cámara de combustión exacto (relación de compresión OEM) y calibra los conductos de agua y galerías de lubricación.',
      descEn:
        'Uncoated solid core plate calibrated to achieve strict OEM compression ratio volume while metering precision coolant flow and pressurized oil feed passages.',
      color: 'from-neutral-800 via-neutral-900 to-neutral-950 border-neutral-600',
      glowColor: 'rgba(150, 150, 150, 0.3)',
    },
    {
      id: 3,
      nameEs: 'Capa Inferior de Bloque con Microrrelieve',
      nameEn: 'Bottom Block Sealing Layer with Micro-Emboss',
      materialEs: 'Acero Inoxidable AISI 301 con Barrera Elastomérica',
      materialEn: 'AISI 301 Stainless Steel with Dual Elastomeric Barrier',
      thickness: '0.20 mm',
      temp: '260°C / 500°F',
      pressure: '2,200 PSI',
      descEs:
        'Asienta directamente sobre la superficie mecanizada del bloque de cilindros, garantizando hermeticidad contra fugas de refrigerante y aceite incluso con rugosidades de rectificado.',
      descEn:
        'Seats directly onto the cylinder block deck finish, creating an impenetrable barrier against coolant-oil cross-contamination even on standard machinist deck Ra.',
      color: 'from-neutral-700 via-neutral-800 to-neutral-900 border-neutral-600',
      glowColor: 'rgba(223, 10, 26, 0.4)',
    },
  ];

  const currentLayer = layers[activeLayer];

  return (
    <div className="bg-[#111213] border-2 border-neutral-800 shadow-industrial-black text-white p-5 sm:p-8 relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#df0a1a_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04] pointer-events-none" />

      {/* Header with Title and Explode Toggle */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-6 border-b border-neutral-800 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[#df0a1a] uppercase tracking-widest mb-1">
            <Layers className="w-4 h-4 animate-pulse" />
            <span>{language === 'es' ? 'ANATOMÍA DE PRECISIÓN SEAL-PRO' : 'SEAL-PRO PRECISION ANATOMY'}</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
            <span>{language === 'es' ? 'Despiece Interactivo de Capas MLS' : 'Interactive MLS Layer Explosion'}</span>
          </h3>
          <p className="text-xs text-neutral-400 mt-1 max-w-xl">
            {language === 'es'
              ? 'Multi-Layer Steel de 4 capas: desplaza el control para separar las láminas y examinar la microingeniería metalúrgica de estanqueidad.'
              : '4-layer Multi-Layer Steel: drag the slider to separate the leaves and examine the metallurgical sealing micro-engineering.'}
          </p>
        </div>

        {/* Explosion Range Slider Controller */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-[#1a1c1c] p-2.5 sm:p-3 border border-neutral-800">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[11px] font-heading font-bold uppercase text-neutral-400 whitespace-nowrap">
              {language === 'es' ? 'DESPIECE:' : 'EXPLOSION:'}
            </span>
            <span className="font-heading font-extrabold text-xs text-[#df0a1a] min-w-[45px] text-right">
              {explosionProgress}%
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={explosionProgress}
            onChange={(e) => setExplosionProgress(Number(e.target.value))}
            className="w-full sm:w-40 accent-[#df0a1a] cursor-pointer"
          />

          <div className="flex gap-2">
            <button
              onClick={() => setExplosionProgress(explosionProgress > 50 ? 0 : 85)}
              className="text-[10px] font-heading font-bold uppercase px-2.5 py-1 bg-neutral-800 hover:bg-[#df0a1a] hover:text-white transition-colors cursor-pointer whitespace-nowrap border border-neutral-700"
            >
              {explosionProgress > 50 ? (language === 'es' ? 'UNIFICAR' : 'UNIFY') : (language === 'es' ? 'SEPARAR' : 'SEPARATE')}
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Stage: 3D Exploded Visual + Technical Specs Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8 relative z-10">
        
        {/* Left: 3D Perspective Graphic Stage */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[340px] sm:min-h-[400px] relative [perspective:1000px] py-6 select-none">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-72 h-72 bg-[#df0a1a]/10 rounded-full blur-3xl pointer-events-none" />

          {/* 3D Stack Container */}
          <div
            className="w-full max-w-md relative transition-transform duration-300 ease-out [transform-style:preserve-3d]"
            style={{
              transform: `rotateX(55deg) rotateZ(-25deg)`,
            }}
          >
            {layers.map((layer, idx) => {
              // Calculate separation based on explosionProgress
              // 0% -> all stacked tightly (gap 4px)
              // 100% -> exploded wide (gap 65px)
              const spread = (explosionProgress / 100) * 60 + 8;
              const offsetY = (idx - 1.5) * spread;
              const isSelected = activeLayer === idx;

              return (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayer(idx)}
                  className={`absolute inset-x-0 mx-auto w-[90%] sm:w-[95%] h-24 sm:h-28 rounded-md border-2 transition-all duration-300 cursor-pointer shadow-2xl flex items-center justify-between px-6 bg-gradient-to-r ${layer.color} ${
                    isSelected
                      ? 'border-[#df0a1a] scale-105 z-20 ring-2 ring-[#df0a1a]/50'
                      : 'border-neutral-700 opacity-90 hover:opacity-100 hover:border-neutral-400'
                  }`}
                  style={{
                    transform: `translateY(${offsetY}px) translateZ(${isSelected ? 30 : 0}px)`,
                    boxShadow: isSelected
                      ? `0 20px 30px -10px ${layer.glowColor}`
                      : '0 10px 20px -5px rgba(0,0,0,0.7)',
                  }}
                  title={language === 'es' ? 'Haz clic para inspeccionar esta lámina' : 'Click to inspect this layer'}
                >
                  {/* Visual Gasket Orifice Simulation Details */}
                  <div className="flex items-center gap-4">
                    {/* Simulated cylinder bore openings */}
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full border-2 border-neutral-600/70 bg-neutral-900/80 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-neutral-800" />
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-neutral-600/70 bg-neutral-900/80 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-neutral-800" />
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-neutral-600/70 bg-neutral-900/80 flex items-center justify-center hidden sm:flex">
                        <div className="w-3 h-3 rounded-full bg-neutral-800" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#df0a1a] text-white text-[10px] font-heading font-black flex items-center justify-center">
                          L{idx + 1}
                        </span>
                        <span className="font-heading font-bold text-xs sm:text-sm text-white uppercase tracking-wide">
                          {language === 'es' ? layer.nameEs : layer.nameEn}
                        </span>
                      </div>
                      <span className="text-[10px] text-neutral-400 font-mono block mt-0.5">
                        {layer.thickness} • {layer.temp}
                      </span>
                    </div>
                  </div>

                  {/* Active Indicator Pin */}
                  <div className="flex items-center">
                    {isSelected && (
                      <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#df0a1a] opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#df0a1a]" />
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Perspective Navigation Hint */}
          <div className="mt-8 text-center text-[11px] text-neutral-400 font-heading uppercase tracking-wider flex items-center gap-2">
            <Eye className="w-3.5 h-3.5 text-[#df0a1a]" />
            <span>
              {language === 'es'
                ? 'Haz clic en cualquier lámina o ajusta el deslizador para desglosar'
                : 'Click any layer or adjust the slider to inspect components'}
            </span>
          </div>
        </div>

        {/* Right: Technical Inspector Card */}
        <div className="lg:col-span-5 bg-[#1a1c1c] border border-neutral-700 p-5 sm:p-6 shadow-industrial-red">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="bg-[#df0a1a] text-white text-xs font-heading font-black px-2 py-0.5">
                LAYER 0{currentLayer.id + 1}
              </span>
              <span className="text-xs font-heading font-bold text-neutral-400 uppercase">
                {language === 'es' ? 'ESPECIFICACIÓN METALÚRGICA' : 'METALLURGIC SPECIFICATION'}
              </span>
            </div>
            <Sparkles className="w-4 h-4 text-[#df0a1a]" />
          </div>

          <h4 className="font-heading text-lg font-bold uppercase text-white mb-1">
            {language === 'es' ? currentLayer.nameEs : currentLayer.nameEn}
          </h4>

          <p className="text-xs font-mono text-[#df0a1a] mb-3">
            {language === 'es' ? currentLayer.materialEs : currentLayer.materialEn}
          </p>

          <p className="font-body text-xs text-neutral-300 leading-relaxed mb-5">
            {language === 'es' ? currentLayer.descEs : currentLayer.descEn}
          </p>

          {/* Dynamic Metrics Grid */}
          <div className="grid grid-cols-3 gap-2.5 bg-[#111213] p-3 border border-neutral-800 mb-4 text-center">
            <div className="p-1.5 border-r border-neutral-800">
              <div className="text-[10px] text-neutral-500 font-heading uppercase">{language === 'es' ? 'Espesor' : 'Thickness'}</div>
              <div className="font-heading font-extrabold text-sm text-white">{currentLayer.thickness}</div>
            </div>
            <div className="p-1.5 border-r border-neutral-800">
              <div className="text-[10px] text-neutral-500 font-heading uppercase">{language === 'es' ? 'Temp. Máx' : 'Max Temp'}</div>
              <div className="font-heading font-extrabold text-sm text-[#df0a1a]">{currentLayer.temp}</div>
            </div>
            <div className="p-1.5">
              <div className="text-[10px] text-neutral-500 font-heading uppercase">{language === 'es' ? 'Presión Sello' : 'Seal Clamp'}</div>
              <div className="font-heading font-extrabold text-sm text-white">{currentLayer.pressure}</div>
            </div>
          </div>

          {/* Layer Quick Select Tabs */}
          <div className="grid grid-cols-4 gap-1.5 pt-2">
            {layers.map((l, i) => (
              <button
                key={l.id}
                onClick={() => setActiveLayer(i)}
                className={`py-1.5 px-2 text-[10px] font-heading font-bold uppercase transition-all cursor-pointer border ${
                  activeLayer === i
                    ? 'bg-[#df0a1a] border-[#df0a1a] text-white shadow-sm'
                    : 'bg-neutral-800/80 border-neutral-700 text-neutral-400 hover:text-white'
                }`}
              >
                L0{i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
