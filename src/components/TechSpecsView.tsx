import React, { useState } from 'react';
import { TECH_SPECS_DATA } from '../data/techSpecs';
import { TechSpec, Product } from '../types';
import { Search, Wrench, AlertTriangle, CheckCircle2, RotateCw, Layers, Printer, FileDown } from 'lucide-react';

interface TechSpecsViewProps {
  products: Product[];
  onSelectProductBySku: (sku: string) => void;
  onOpenContact: () => void;
}

export const TechSpecsView: React.FC<TechSpecsViewProps> = ({
  products,
  onSelectProductBySku,
  onOpenContact,
}) => {
  const [selectedSpecId, setSelectedSpecId] = useState<string>(TECH_SPECS_DATA[0].id);
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');

  const selectedSpec = TECH_SPECS_DATA.find((s) => s.id === selectedSpecId) || TECH_SPECS_DATA[0];

  const filteredSpecs = TECH_SPECS_DATA.filter((spec) => {
    const matchesBrand = selectedBrand === 'all' || spec.brand.toLowerCase().includes(selectedBrand.toLowerCase());
    const term = searchFilter.toLowerCase();
    const matchesSearch =
      term === '' ||
      spec.engineCode.toLowerCase().includes(term) ||
      spec.brand.toLowerCase().includes(term) ||
      spec.displacement.toLowerCase().includes(term);
    return matchesBrand && matchesSearch;
  });

  const brands = ['all', 'Toyota', 'Chevrolet', 'Volkswagen', 'Nissan', 'Honda', 'Mitsubishi'];

  // Tightening bolt order generator for a 10-bolt head
  // Standard spiral sequence: 
  // Top row:    [ 8, 4, 1, 5, 9 ]
  // Bottom row: [ 7, 3, 2, 6, 10 ]
  const boltLayout10 = [
    { num: 8, x: '10%', y: '25%', label: 'Paso #8' },
    { num: 4, x: '30%', y: '25%', label: 'Paso #4' },
    { num: 1, x: '50%', y: '25%', label: 'Paso #1 (Centro)' },
    { num: 5, x: '70%', y: '25%', label: 'Paso #5' },
    { num: 9, x: '90%', y: '25%', label: 'Paso #9' },
    { num: 7, x: '10%', y: '75%', label: 'Paso #7' },
    { num: 3, x: '30%', y: '75%', label: 'Paso #3' },
    { num: 2, x: '50%', y: '75%', label: 'Paso #2 (Centro)' },
    { num: 6, x: '70%', y: '75%', label: 'Paso #6' },
    { num: 10, x: '90%', y: '75%', label: 'Paso #10' },
  ];

  return (
    <div className="w-full bg-[#f9f9f9] min-h-screen py-10 px-4 md:px-16 text-[#1a1c1c]">
      <div className="max-w-[1280px] mx-auto">
        {/* Page Header */}
        <div className="border-b-2 border-[#dadada] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase text-[#df0a1a] tracking-widest mb-1">
              <span>MANUALES DE TALLER & TABLAS DE TORQUE</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#1a1c1c]">
              ESPECIFICACIONES TÉCNICAS DE MOTORES
            </h1>
            <p className="font-body text-sm text-[#5e3f3b] mt-1 max-w-2xl">
              Consulte secuencias de apriete oficiales, valores de torque en sistema métrico (Nm) e imperial (Lb-pie), grados angulares y rugosidad superficial (Ra).
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => window.print()}
              className="bg-white border border-neutral-300 hover:border-neutral-500 text-neutral-800 font-heading text-xs font-bold uppercase px-4 py-2.5 flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>IMPRIMIR FICHA</span>
            </button>
          </div>
        </div>

        {/* Search & Engine Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Engine List */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white border border-[#dadada] p-4 shadow-sm space-y-3">
              <h3 className="font-heading text-xs font-bold uppercase text-[#1a1c1c] tracking-wider border-b border-neutral-200 pb-2">
                BUSCAR MOTOR
              </h3>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  placeholder="Código de motor (1ZZ, Vortec...)"
                  className="w-full pl-9 pr-3 py-2 bg-[#f9f9f9] border border-neutral-300 text-xs focus:border-[#df0a1a] focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBrand(b)}
                    className={`font-heading text-[11px] font-bold uppercase px-2.5 py-1 ${
                      selectedBrand === b
                        ? 'bg-[#1a1c1c] text-white'
                        : 'bg-[#eeeeee] text-neutral-700 hover:bg-neutral-300'
                    }`}
                  >
                    {b === 'all' ? 'TODOS' : b}
                  </button>
                ))}
              </div>
            </div>

            {/* List of Available Engines */}
            <div className="bg-white border border-[#dadada] shadow-sm divide-y divide-neutral-200 max-h-[500px] overflow-y-auto">
              {filteredSpecs.map((spec) => {
                const isSelected = spec.id === selectedSpec.id;
                return (
                  <button
                    key={spec.id}
                    onClick={() => setSelectedSpecId(spec.id)}
                    className={`w-full p-3.5 text-left transition-colors flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#1a1c1c] text-white border-l-4 border-[#df0a1a]'
                        : 'hover:bg-neutral-50 text-neutral-800'
                    }`}
                  >
                    <div>
                      <div className="font-heading font-bold text-xs uppercase tracking-wide">
                        {spec.brand} • {spec.engineCode}
                      </div>
                      <div className={`text-[11px] mt-0.5 ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        {spec.displacement}
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-heading font-bold px-2 py-0.5 uppercase ${
                        isSelected ? 'bg-[#df0a1a] text-white' : 'bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      {spec.cylinderCount} CIL
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quality Note */}
            <div className="bg-[#2f3131] text-white p-4 border border-neutral-600 text-xs space-y-2">
              <div className="font-heading font-bold text-[#df0a1a] uppercase flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                NOTA IMPORTANTE DE INGENIERÍA
              </div>
              <p className="text-neutral-300 leading-relaxed font-body">
                Para empaques MLS, el acabado de rectificado debe ser inferior a <strong>Ra 0.8 µm</strong>. No use cepillos de alambre o abrasivos gruesos que rayen el plano de la culata.
              </p>
            </div>
          </div>

          {/* Right Column: Selected Engine Detail */}
          <div className="lg:col-span-8 space-y-6">
            {/* Engine Overview Card */}
            <div className="bg-white border-2 border-[#1a1c1c] p-6 shadow-industrial-black bg-white">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-neutral-200 pb-4 mb-4">
                <div>
                  <span className="font-heading text-xs font-bold text-[#df0a1a] uppercase tracking-wider">
                    {selectedSpec.brand} OEM SPECS
                  </span>
                  <h2 className="font-heading text-2xl font-extrabold text-[#1a1c1c] uppercase">
                    MOTOR {selectedSpec.engineCode}
                  </h2>
                  <p className="font-body text-xs text-neutral-600">{selectedSpec.displacement}</p>
                </div>
                <div className="bg-[#eeeeee] px-3 py-1.5 border border-neutral-300 text-xs font-heading font-bold text-neutral-800 uppercase">
                  Rugosidad Ra: {selectedSpec.surfaceRoughnessRa}
                </div>
              </div>

              {/* Torque Table */}
              <div className="mb-6">
                <h3 className="font-heading text-xs font-bold uppercase text-[#1a1c1c] mb-3 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#df0a1a]" />
                  PASOS Y SECUENCIA DE APRIETE DE CULATA
                </h3>
                <div className="border border-neutral-300 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#1a1c1c] text-white font-heading text-xs uppercase">
                        <th className="p-3">Paso</th>
                        <th className="p-3">Descripción de la Fase</th>
                        <th className="p-3">Torque Métrico</th>
                        <th className="p-3">Torque Imperial</th>
                        <th className="p-3">Giro Angular</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 text-xs font-body">
                      {selectedSpec.torqueStages.map((stage) => (
                        <tr key={stage.stage} className="bg-white hover:bg-neutral-50">
                          <td className="p-3 font-heading font-bold text-[#df0a1a]">
                            Paso {stage.stage}
                          </td>
                          <td className="p-3 font-semibold text-neutral-900">
                            {stage.description}
                          </td>
                          <td className="p-3 font-heading font-bold text-neutral-800">
                            {stage.torqueMetric}
                          </td>
                          <td className="p-3 text-neutral-600">
                            {stage.torqueImperial}
                          </td>
                          <td className="p-3">
                            {stage.angleDegrees ? (
                              <span className="inline-flex items-center gap-1 font-heading font-bold text-[#df0a1a] bg-red-50 px-2 py-0.5 border border-red-200">
                                <RotateCw className="w-3 h-3" />
                                {stage.angleDegrees}
                              </span>
                            ) : (
                              <span className="text-neutral-400">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Visual Bolt Tightening Pattern Spiral Diagram */}
              <div className="bg-[#1a1c1c] text-white p-5 border border-neutral-700 mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#df0a1a]"></span>
                    PATRÓN DE APRIETE ESPIRAL (DESDE EL CENTRO HACIA AFUERA)
                  </h4>
                  <span className="text-[11px] text-neutral-400 font-heading">
                    {selectedSpec.boltSequenceCount} Tornillos de Culata
                  </span>
                </div>

                <div className="relative w-full h-44 bg-[#111213] border border-neutral-700 p-4 flex flex-col justify-between rounded-sm">
                  {/* Cylinder Head Outline SVG background representation */}
                  <div className="absolute inset-0 flex items-center justify-around opacity-15 pointer-events-none px-6">
                    <div className="w-16 h-16 rounded-full border-2 border-white"></div>
                    <div className="w-16 h-16 rounded-full border-2 border-white"></div>
                    <div className="w-16 h-16 rounded-full border-2 border-white"></div>
                    <div className="w-16 h-16 rounded-full border-2 border-white"></div>
                  </div>

                  {/* Bolt markers in 2 rows */}
                  <div className="relative w-full h-full">
                    {boltLayout10.map((bolt) => (
                      <div
                        key={bolt.num}
                        style={{ left: bolt.x, top: bolt.y }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                        title={bolt.label}
                      >
                        <div
                          className={`w-8 h-8 flex items-center justify-center font-heading font-extrabold text-xs transition-transform group-hover:scale-125 border ${
                            bolt.num === 1 || bolt.num === 2
                              ? 'bg-[#df0a1a] text-white border-white shadow-lg'
                              : 'bg-neutral-800 text-white border-neutral-500 group-hover:border-[#df0a1a]'
                          }`}
                        >
                          {bolt.num}
                        </div>
                        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-heading font-bold text-neutral-400 whitespace-nowrap hidden group-hover:block bg-black px-1">
                          {bolt.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-[11px] text-neutral-400 mt-2 flex justify-between">
                  <span>Lado Distribución / Cadena</span>
                  <span>Secuencia: 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 5 &rarr; 6 &rarr; 7 &rarr; 8 &rarr; 9 &rarr; 10</span>
                  <span>Lado Volante / Caja</span>
                </div>
              </div>

              {/* Workshop Notes & Recommended Part */}
              <div className="bg-[#f9f9f9] border border-neutral-300 p-4 space-y-2">
                <div className="text-xs font-heading font-bold uppercase text-[#1a1c1c]">
                  RECOMENDACIÓN DEL FABRICANTE:
                </div>
                <p className="font-body text-xs text-neutral-700 leading-relaxed">
                  {selectedSpec.notes}
                </p>
                <div className="pt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-t border-neutral-200">
                  <div className="text-xs text-neutral-800">
                    <span className="font-bold text-[#df0a1a]">SKU Recomendado:</span> {selectedSpec.recommendedGasketSku}
                  </div>
                  <button
                    onClick={() => onSelectProductBySku('SP-HG-MLS')}
                    className="bg-[#df0a1a] hover:bg-[#b20010] text-white font-heading text-xs font-bold uppercase px-3 py-1.5 clip-slant-right cursor-pointer"
                  >
                    VER EMPAQUE COMPATIBLE &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
