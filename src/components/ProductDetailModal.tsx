import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { X, Check, Wrench, Thermometer, Gauge, Box, Layers, Maximize2, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedProduct } from '../utils/localize';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (product: Product) => void;
  isInQuote: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product: rawProduct,
  onClose,
  onAddToQuote,
  isInQuote,
}) => {
  const { t, language } = useLanguage();
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Reset zoom when opening/closing
  useEffect(() => {
    setZoomLevel(1);
  }, [isLightboxOpen, rawProduct]);

  // Handle ESC key for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  if (!rawProduct) return null;

  const product = getLocalizedProduct(rawProduct, language);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.3, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.3, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <>
      {/* 1. Main Product Detail Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
        <div className="bg-white border-2 border-[#1a1c1c] shadow-industrial-black w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden text-[#1a1c1c]">
          {/* Modal Header */}
          <div className="bg-[#1a1c1c] text-white px-4 sm:px-6 py-3.5 sm:py-4 flex justify-between items-center border-b-2 border-[#df0a1a]">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-heading text-xs font-bold bg-[#df0a1a] text-white px-2.5 py-1">
                SKU: {product.sku}
              </span>
              <span className="font-heading text-xs uppercase text-neutral-300 font-semibold tracking-wider truncate max-w-[150px] sm:max-w-none">
                {product.categoryLabel}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white hover:bg-neutral-800 p-1 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Image side with Full View & Click-to-Zoom */}
              <div className="md:col-span-5 space-y-2">
                <div
                  onClick={() => setIsLightboxOpen(true)}
                  className="bg-white border border-neutral-300 p-3 relative group/img cursor-pointer overflow-hidden flex items-center justify-center min-h-[260px] shadow-sm hover:border-[#df0a1a] transition-all"
                  title={language === 'es' ? 'Haga clic para abrir la galería a pantalla completa' : 'Click to open full-screen gallery'}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto max-h-[280px] object-contain transition-transform duration-300 group-hover/img:scale-105"
                  />
                  {/* Hover Hint */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-[#1a1c1c]/90 text-white text-xs font-heading font-bold px-3 py-1.5 flex items-center gap-1.5 shadow-lg border border-neutral-700">
                      <Maximize2 className="w-4 h-4 text-[#df0a1a]" />
                      {language === 'es' ? 'AMPLIAR GALERÍA' : 'EXPAND GALLERY'}
                    </span>
                  </div>
                </div>

                <div className="bg-[#1a1c1c] text-white text-[11px] p-2 text-center font-heading font-semibold flex items-center justify-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-[#df0a1a]" />
                  <span>{language === 'es' ? 'Clic en la imagen para pantalla completa' : 'Click image for full-screen view'}</span>
                </div>
              </div>

              {/* Main info side */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <h2 className="font-heading text-2xl font-extrabold uppercase text-[#1a1c1c] leading-tight">
                    {product.name}
                  </h2>
                  <p className="font-body text-xs md:text-sm text-[#5e3f3b] mt-1 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Technical indicators */}
                <div className="grid grid-cols-2 gap-3 bg-[#f9f9f9] border border-neutral-300 p-3">
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-heading font-bold text-neutral-500 uppercase flex items-center gap-1">
                      <Thermometer className="w-3.5 h-3.5 text-[#df0a1a]" />
                      {t.productDetail.maxTemp}
                    </div>
                    <div className="font-heading font-bold text-xs text-[#1a1c1c]">{product.temperatureMax}</div>
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-[10px] font-heading font-bold text-neutral-500 uppercase flex items-center gap-1">
                      <Gauge className="w-3.5 h-3.5 text-[#df0a1a]" />
                      {t.productDetail.maxPressure}
                    </div>
                    <div className="font-heading font-bold text-xs text-[#1a1c1c]">{product.pressureMax}</div>
                  </div>
                </div>

                {/* Torque Note */}
                <div className="bg-[#fff1ef] border-l-4 border-[#df0a1a] p-3 text-xs">
                  <span className="font-heading font-bold text-[#df0a1a] uppercase block">
                    {t.productDetail.torqueRecommendation}
                  </span>
                  <span className="font-body text-neutral-800 font-semibold">{product.suggestedTorque}</span>
                </div>
              </div>
            </div>

            {/* Detailed Specs & Materials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-200">
              {/* Left: Package Contents */}
              <div className="space-y-2">
                <h3 className="font-heading text-xs font-bold uppercase text-[#1a1c1c] flex items-center gap-1.5 border-b border-neutral-200 pb-1.5">
                  <Box className="w-4 h-4 text-[#df0a1a]" />
                  {t.productDetail.packageContents}
                </h3>
                <ul className="space-y-1.5 text-xs font-body text-neutral-700">
                  {product.packageContents.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#df0a1a] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Technical Specs Attributes */}
              <div className="space-y-2">
                <h3 className="font-heading text-xs font-bold uppercase text-[#1a1c1c] flex items-center gap-1.5 border-b border-neutral-200 pb-1.5">
                  <Wrench className="w-4 h-4 text-[#df0a1a]" />
                  {t.productDetail.engineeringSpecs}
                </h3>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500 font-heading font-medium">Material:</span>
                    <span className="text-[#1a1c1c] font-bold text-right max-w-[240px]">{product.material}</span>
                  </div>
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between py-1 border-b border-neutral-100">
                      <span className="text-neutral-500 font-heading font-medium">{spec.label}:</span>
                      <span className="text-[#1a1c1c] font-bold text-right max-w-[240px]">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Compatible Vehicles List */}
            <div className="space-y-2 pt-4 border-t border-neutral-200">
              <h3 className="font-heading text-xs font-bold uppercase text-[#1a1c1c] flex items-center gap-1.5 border-b border-neutral-200 pb-1.5">
                <Layers className="w-4 h-4 text-[#df0a1a]" />
                {t.productDetail.compatibleEngines}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-[#eeeeee] font-heading font-bold text-[#1a1c1c]">
                      <th className="p-2 border border-neutral-300">{t.productDetail.make}</th>
                      <th className="p-2 border border-neutral-300">{t.productDetail.model}</th>
                      <th className="p-2 border border-neutral-300">{t.productDetail.engine}</th>
                      <th className="p-2 border border-neutral-300">{t.productDetail.years}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.compatibility.map((c, idx) => (
                      <tr key={idx} className="hover:bg-neutral-50 border-b border-neutral-200">
                        <td className="p-2 font-bold text-[#df0a1a] border border-neutral-200">{c.make}</td>
                        <td className="p-2 font-medium border border-neutral-200">{c.model}</td>
                        <td className="p-2 font-mono text-[11px] border border-neutral-200">{c.engine}</td>
                        <td className="p-2 text-neutral-600 border border-neutral-200">{c.years}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* OEM Numbers */}
            <div className="pt-2">
              <span className="text-xs font-heading font-bold text-neutral-600 mr-2">
                {t.productDetail.oemCodes}
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {product.oemNumbers.map((oem, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs bg-[#eeeeee] text-[#1a1c1c] px-2 py-0.5 border border-neutral-300 font-semibold"
                  >
                    {oem}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="bg-[#f9f9f9] border-t border-neutral-300 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto font-heading text-xs font-bold uppercase px-5 py-2.5 border border-neutral-400 hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              {language === 'es' ? 'CERRAR' : 'CLOSE'}
            </button>

            <button
              onClick={() => onAddToQuote(rawProduct)}
              className={`w-full sm:w-auto font-heading text-xs font-bold uppercase px-6 py-2.5 transition-all flex items-center justify-center gap-2 cursor-pointer clip-slant-right shadow-md ${
                isInQuote
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-[#df0a1a] hover:bg-[#b20010] text-white'
              }`}
            >
              {isInQuote ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>{t.productDetail.addedToQuote}</span>
                </>
              ) : (
                <span>{t.productDetail.addToQuote}</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Fullscreen Interactive Lightbox / Image Gallery */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-6 animate-in fade-in duration-200 select-none"
          role="dialog"
          aria-label="Galería a pantalla completa"
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between text-white border-b border-neutral-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-heading text-xs font-bold bg-[#df0a1a] text-white px-2.5 py-1">
                SKU: {product.sku}
              </span>
              <span className="font-heading text-sm uppercase font-bold text-white tracking-wide">
                {product.name}
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomIn}
                className="bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white p-2 border border-neutral-700 transition-colors cursor-pointer"
                title="Acercar (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomOut}
                className="bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white p-2 border border-neutral-700 transition-colors cursor-pointer"
                title="Alejar (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white p-2 border border-neutral-700 transition-colors cursor-pointer"
                title="Restablecer tamaño (100%)"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="bg-[#df0a1a] hover:bg-[#b20010] text-white p-2 transition-colors cursor-pointer ml-2"
                title="Cerrar galería (ESC)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Center Image View */}
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsLightboxOpen(false);
            }}
            className="flex-1 flex items-center justify-center overflow-auto p-4 cursor-zoom-out"
          >
            <div
              style={{ transform: `scale(${zoomLevel})` }}
              className="transition-transform duration-200 ease-out bg-white p-4 rounded-xs shadow-2xl max-w-5xl max-h-[80vh] flex items-center justify-center cursor-default"
            >
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[75vh] max-w-full object-contain"
              />
            </div>
          </div>

          {/* Lightbox Footer */}
          <div className="flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-800 pt-3">
            <span className="font-body">
              {language === 'es' ? 'Presione ESC o haga clic fuera para cerrar' : 'Press ESC or click outside to close'}
            </span>
            <span className="font-mono text-neutral-400 bg-neutral-900 px-2 py-1 border border-neutral-800">
              Zoom: {Math.round(zoomLevel * 100)}%
            </span>
          </div>
        </div>
      )}
    </>
  );
};
