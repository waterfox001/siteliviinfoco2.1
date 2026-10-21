import { useState } from 'react';
import { X, Calculator, MessageCircle, Check } from 'lucide-react';
import { COMPANY, getWhatsAppUrl } from '../data/company';

interface QuoteSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteSimulatorModal({ isOpen, onClose }: QuoteSimulatorModalProps) {
  const [serviceType, setServiceType] = useState<'evento' | 'estudio' | 'ensaio_infantil' | 'ensaio_adulto'>('evento');
  const [includePrints, setIncludePrints] = useState(false);
  const [printQuantity, setPrintQuantity] = useState(10);
  const [includeAlbum, setIncludeAlbum] = useState(false);
  const [includeVideo, setIncludeVideo] = useState(false);

  if (!isOpen) return null;

  // Estimation math
  let basePrice = 0;
  let baseDescription = '';

  switch (serviceType) {
    case 'evento':
      basePrice = 400; // starting base price
      baseDescription = 'Cobertura de evento externo com fotos digitais ilimitadas (a partir de R$ 400)';
      break;
    case 'estudio':
      basePrice = 180;
      baseDescription = 'Sessão em estúdio próprio no Parque das Nações em Caucaia';
      break;
    case 'ensaio_infantil':
      basePrice = 180;
      baseDescription = 'Ensaio infantil com direção sensível e paciência';
      break;
    case 'ensaio_adulto':
      basePrice = 180;
      baseDescription = 'Ensaio individual, casal ou formatura em estúdio ou externa';
      break;
  }

  const printsTotal = includePrints ? printQuantity * 20 : 0;
  const estimatedSubtotal = basePrice + printsTotal;

  // Build formatted WhatsApp message
  const serviceNames = {
    evento: 'Cobertura de Evento Externo (fotos ilimitadas)',
    estudio: 'Fotografia em Estúdio Próprio',
    ensaio_infantil: 'Ensaio Infantil Especial',
    ensaio_adulto: 'Ensaio Adulto / Retrato'
  };

  const messageLines = [
    `Olá! Simulei uma estimativa no site da Live In Foco:`,
    `• Serviço Principal: ${serviceNames[serviceType]}`,
    includePrints ? `• Fotos Impressas 15x21: ${printQuantity} unidades (R$ ${printsTotal})` : null,
    includeAlbum ? `• Gostaria de consultar modelos de Álbum de recordação` : null,
    includeVideo ? `• Desejo incluir Videomaker / Storymakers` : null,
    `• Valor base estimado: R$ ${estimatedSubtotal}${includeAlbum || includeVideo ? ' (+ adicionais sob consulta)' : ''}`,
    `Gostaria de verificar disponibilidade de data e fechar os detalhes!`
  ].filter(Boolean);

  const finalWhatsappText = messageLines.join('\n');
  const whatsappUrl = `https://wa.me/${COMPANY.whatsappRaw}?text=${encodeURIComponent(finalWhatsappText)}`;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-xl w-full bg-[#121212] border border-[#2E2E2E] shadow-2xl p-6 sm:p-8 rounded-sm overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#888888] hover:text-white transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-white text-[#0A0A0A] rounded-sm">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              Simulador de Orçamento
            </h3>
            <p className="text-xs text-[#8A8A8A]">
              Valores oficiais informados pela Live In Foco
            </p>
          </div>
        </div>

        {/* Step 1: Service Type */}
        <div className="space-y-4 mb-6">
          <label className="text-xs font-mono uppercase tracking-wider text-[#A0A0A0] block">
            1. Selecione o tipo de fotografia
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { id: 'evento', label: 'Evento Externo', desc: 'Fotos ilimitadas a partir de R$ 400' },
              { id: 'estudio', label: 'Estúdio Próprio', desc: 'Sessão estruturada em Caucaia' },
              { id: 'ensaio_infantil', label: 'Ensaio Infantil', desc: 'Paciência e acolhimento' },
              { id: 'ensaio_adulto', label: 'Ensaio Adulto', desc: 'Debutante, formatura, individual' }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setServiceType(item.id as any)}
                className={`p-3 text-left border rounded-sm transition-all cursor-pointer ${
                  serviceType === item.id
                    ? 'border-white bg-[#1E1E1E] text-white'
                    : 'border-[#262626] bg-[#161616] text-[#999999] hover:border-[#444444]'
                }`}
              >
                <div className="text-xs font-bold text-white mb-0.5">{item.label}</div>
                <div className="text-[11px] text-[#7A7A7A]">{item.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Extras */}
        <div className="space-y-4 mb-6 pt-4 border-t border-[#1F1F1F]">
          <label className="text-xs font-mono uppercase tracking-wider text-[#A0A0A0] block">
            2. Adicionais opcionais
          </label>

          {/* Prints */}
          <div className="bg-[#161616] border border-[#262626] p-4 rounded-sm space-y-3">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2.5 text-xs font-medium text-white cursor-pointer">
                <input
                  type="checkbox"
                  checked={includePrints}
                  onChange={(e) => setIncludePrints(e.target.checked)}
                  className="rounded border-[#444444] bg-[#0A0A0A] text-white accent-white"
                />
                <span>Incluir Fotos Impressas 15x21 (R$ 20/unidade)</span>
              </label>
            </div>

            {includePrints && (
              <div className="flex items-center gap-3 pt-2 pl-6">
                <span className="text-xs text-[#888888]">Quantidade:</span>
                <select
                  value={printQuantity}
                  onChange={(e) => setPrintQuantity(Number(e.target.value))}
                  className="bg-[#0A0A0A] border border-[#333333] text-white text-xs px-2.5 py-1.5 rounded-sm"
                >
                  {[5, 10, 15, 20, 30, 50].map((num) => (
                    <option key={num} value={num}>
                      {num} fotos (+ R$ {num * 20})
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Album */}
          <label className="flex items-center gap-2.5 bg-[#161616] border border-[#262626] p-3 rounded-sm text-xs font-medium text-white cursor-pointer">
            <input
              type="checkbox"
              checked={includeAlbum}
              onChange={(e) => setIncludeAlbum(e.target.checked)}
              className="rounded border-[#444444] bg-[#0A0A0A] text-white accent-white"
            />
            <span>Desejo consultar modelos e valores de Álbuns Fotográficos</span>
          </label>

          {/* Video */}
          <label className="flex items-center gap-2.5 bg-[#161616] border border-[#262626] p-3 rounded-sm text-xs font-medium text-white cursor-pointer">
            <input
              type="checkbox"
              checked={includeVideo}
              onChange={(e) => setIncludeVideo(e.target.checked)}
              className="rounded border-[#444444] bg-[#0A0A0A] text-white accent-white"
            />
            <span>Desejo incluir Videomaker / Storymakers para o evento</span>
          </label>
        </div>

        {/* Calculation Summary Box */}
        <div className="bg-[#181818] border border-[#2E2E2E] p-4 rounded-sm mb-6 space-y-2">
          <div className="flex items-center justify-between text-xs text-[#888888]">
            <span>Estimativa aproximada:</span>
            <span className="font-mono uppercase text-[10px] tracking-wider text-[#AAAAAA]">
              {serviceType === 'evento' ? 'Valor Base' : 'Valor de Referência'}
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-display text-2xl font-bold text-white">
              {serviceType === 'evento' ? 'A partir de ' : '~ '}R$ {estimatedSubtotal}
            </span>
            {(includeAlbum || includeVideo) && (
              <span className="text-[11px] text-[#A0A0A0] italic">
                + adicionais sob consulta
              </span>
            )}
          </div>
          <p className="text-[11px] text-[#7A7A7A] leading-relaxed">
            {baseDescription}. Valores confirmados diretamente pela fotógrafa responsável conforme data, local e especificidades do evento.
          </p>
        </div>

        {/* Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-white text-[#0A0A0A] hover:bg-[#EAEAEA] py-3.5 px-4 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-lg font-mono"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Enviar esta simulação no WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
