import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, MapPin, Wrench } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('asesoria-tecnica');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white border-2 border-[#1a1c1c] shadow-industrial-black w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden text-[#1a1c1c]">
        {/* Header */}
        <div className="bg-[#1a1c1c] text-white px-6 py-4 flex justify-between items-center border-b-2 border-[#df0a1a]">
          <div className="flex items-center gap-3">
            <Wrench className="w-5 h-5 text-[#df0a1a]" />
            <h2 className="font-heading text-base md:text-lg font-bold uppercase tracking-wider">
              ASESORÍA TÉCNICA & ATENCIÓN AL CLIENTE
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white hover:bg-neutral-800 p-1 transition-colors cursor-pointer"
            aria-label="Cerrar modal de contacto"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase text-[#1a1c1c]">
                ¡CONSULTA RECIBIDA!
              </h3>
              <p className="font-body text-sm text-neutral-600 max-w-md mx-auto">
                Nuestro equipo de soporte técnico y metrología se pondrá en contacto con usted en un plazo no mayor a 2 horas hábiles.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="bg-[#df0a1a] hover:bg-[#b20010] text-white font-heading text-xs font-bold uppercase px-8 py-3 clip-slant-right"
                >
                  Entendido
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#f3f3f4] p-3 border-l-4 border-[#df0a1a] text-xs text-neutral-700">
                Línea directa para rectificadores, mecánicos y distribuidores de autopartes.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-heading font-bold uppercase text-neutral-700 mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Su nombre"
                    className="w-full p-2.5 bg-[#f9f9f9] border border-neutral-300 focus:border-[#df0a1a] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-heading font-bold uppercase text-neutral-700 mb-1">
                    Taller o Empresa
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nombre del taller / rectificadora"
                    className="w-full p-2.5 bg-[#f9f9f9] border border-neutral-300 focus:border-[#df0a1a] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-heading font-bold uppercase text-neutral-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="correo@ejemplo.com"
                    className="w-full p-2.5 bg-[#f9f9f9] border border-neutral-300 focus:border-[#df0a1a] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-heading font-bold uppercase text-neutral-700 mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full p-2.5 bg-[#f9f9f9] border border-neutral-300 focus:border-[#df0a1a] focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-heading font-bold uppercase text-neutral-700 mb-1">
                    Motivo de la Consulta *
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full p-2.5 bg-[#f9f9f9] border border-neutral-300 focus:border-[#df0a1a] focus:outline-none font-heading font-semibold text-xs uppercase"
                  >
                    <option value="asesoria-tecnica">Asesoría Técnica de Torques / Instalación</option>
                    <option value="cotizacion-mayorista">Cotización Mayorista para Distribuidor</option>
                    <option value="pedido-taller">Pedido para Taller Mecánico</option>
                    <option value="garantia">Garantía / Asistencia de Producto</option>
                    <option value="desarrollo-especial">Desarrollo de Empacadura Especial / Competición</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-heading font-bold uppercase text-neutral-700 mb-1">
                    Detalle del Mensaje o Vehículo *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escriba su consulta técnica, modelo de motor, año o requerimiento..."
                    className="w-full p-2.5 bg-[#f9f9f9] border border-neutral-300 focus:border-[#df0a1a] focus:outline-none font-body"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="border border-neutral-300 bg-white text-neutral-800 font-heading text-xs font-bold uppercase px-4 py-2.5"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-[#df0a1a] hover:bg-[#b20010] text-white font-heading text-xs font-bold uppercase px-6 py-2.5 clip-slant-right flex items-center gap-2 cursor-pointer"
                >
                  <span>ENVIAR MENSAJE</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
