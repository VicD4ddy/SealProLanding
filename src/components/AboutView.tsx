import React from 'react';
import { ShieldCheck, Target, Users, Wrench, Globe, Building2, PhoneCall } from 'lucide-react';
import { ActiveTab } from '../types';

interface AboutViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenContact: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab, onOpenContact }) => {
  return (
    <div className="w-full bg-[#f9f9f9] min-h-screen py-10 px-4 md:px-16 text-[#1a1c1c]">
      <div className="max-w-[1280px] mx-auto space-y-12">
        {/* Header */}
        <div className="border-b-2 border-[#dadada] pb-6">
          <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase text-[#df0a1a] tracking-widest mb-1">
            <span>HISTORIA & VALORES CORPORATIVOS</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#1a1c1c]">
            SOBRE SEAL-PRO INDUSTRIAL SOLUTIONS
          </h1>
          <p className="font-body text-sm text-[#5e3f3b] mt-1 max-w-3xl">
            Líderes en el desarrollo y manufactura de soluciones de estanqueidad automotriz e industrial de alto rendimiento.
          </p>
        </div>

        {/* Brand Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-heading text-2xl font-bold uppercase text-[#1a1c1c]">
              EL ALIADO CONFIABLE DE LOS MECÁNICOS Y RECTIFICADORES
            </h2>
            <p className="font-body text-sm text-neutral-700 leading-relaxed">
              Seal-Pro nació con la misión fundamental de erradicar los fallos prematuros de compresión y fugas de lubricante en la reconstrucción de motores automotrices.
            </p>
            <p className="font-body text-sm text-neutral-700 leading-relaxed">
              A través de la constante inversión en matricería de alta precisión, aleaciones de acero martensítico y elastómeros Viton® certificados, hemos consolidado una reputación intachable entre los talleres más exigentes.
            </p>
            <div className="pt-2 border-l-4 border-[#df0a1a] pl-4 italic text-xs font-body text-neutral-800">
              &ldquo;No fabricamos empaques genéricos: diseñamos componentes de precisión que devuelven la compresión original de fábrica a cada motor intervenido.&rdquo;
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#1a1c1c] text-white p-6 md:p-8 border-2 border-[#1a1c1c] shadow-industrial-black">
              <h3 className="font-heading text-lg font-bold uppercase text-[#df0a1a] mb-4">
                NUESTROS PILARES FUNDAMENTALES
              </h3>
              <div className="space-y-4 text-xs font-body">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#df0a1a] text-white flex items-center justify-center font-bold flex-shrink-0 clip-slant-right">
                    1
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white uppercase text-sm mb-0.5">Calidad Sin Concesiones</h4>
                    <p className="text-neutral-300">Materiales 100% vírgenes y controles de espesor micrométrico en cada lote.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#df0a1a] text-white flex items-center justify-center font-bold flex-shrink-0 clip-slant-right">
                    2
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white uppercase text-sm mb-0.5">Prestigio Técnico</h4>
                    <p className="text-neutral-300">Reconocidos por las principales asociaciones de rectificadores y preparadores de motores.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#df0a1a] text-white flex items-center justify-center font-bold flex-shrink-0 clip-slant-right">
                    3
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white uppercase text-sm mb-0.5">Responsabilidad y Respaldo</h4>
                    <p className="text-neutral-300">Garantía directa con reposición inmediata y acompañamiento de ingenieros en planta.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Distribution & Workshop Network */}
        <div className="bg-white border border-[#dadada] p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            <div className="p-4">
              <Building2 className="w-8 h-8 text-[#df0a1a] mx-auto mb-2" />
              <div className="font-heading text-2xl font-extrabold text-[#1a1c1c]">+500</div>
              <div className="text-xs font-heading font-semibold text-neutral-500 uppercase">Talleres Certificados</div>
            </div>

            <div className="p-4">
              <Wrench className="w-8 h-8 text-[#df0a1a] mx-auto mb-2" />
              <div className="font-heading text-2xl font-extrabold text-[#1a1c1c]">+1,200</div>
              <div className="text-xs font-heading font-semibold text-neutral-500 uppercase">Referencias y SKUs</div>
            </div>

            <div className="p-4">
              <Globe className="w-8 h-8 text-[#df0a1a] mx-auto mb-2" />
              <div className="font-heading text-2xl font-extrabold text-[#1a1c1c]">14</div>
              <div className="text-xs font-heading font-semibold text-neutral-500 uppercase">Países de Distribución</div>
            </div>

            <div className="p-4">
              <ShieldCheck className="w-8 h-8 text-[#df0a1a] mx-auto mb-2" />
              <div className="font-heading text-2xl font-extrabold text-[#1a1c1c]">100%</div>
              <div className="text-xs font-heading font-semibold text-neutral-500 uppercase">Control de Fugas</div>
            </div>
          </div>
        </div>

        {/* CTA to join as distributor */}
        <div className="bg-[#2f3131] text-white p-8 border-t-4 border-[#df0a1a] flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-heading text-xl font-bold uppercase text-white mb-1">
              ¿DESEAS SER DISTRIBUIDOR AUTORIZADO SEAL-PRO?
            </h3>
            <p className="font-body text-xs md:text-sm text-neutral-300">
              Ofrecemos márgenes mayoristas competitivos, material de exhibición técnico y prioridad en despachos.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="bg-[#df0a1a] hover:bg-[#b20010] text-white font-heading text-xs font-bold uppercase px-6 py-3 clip-slant-right whitespace-nowrap cursor-pointer"
          >
            SOLICITAR DISTRIBUCIÓN
          </button>
        </div>
      </div>
    </div>
  );
};
