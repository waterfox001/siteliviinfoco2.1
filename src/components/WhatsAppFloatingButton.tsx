import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Camera, User, ArrowLeft, Check, Sparkles } from 'lucide-react';
import { COMPANY } from '../data/company';

import { OfficialReticleSymbol } from './BrandLogo';

const QUICK_SUGGESTIONS = [
  'Aniversário infantil',
  'Aniversário adulto',
  'Ensaio de 15 anos',
  'Ensaio gestante',
  'Formatura',
  'Ensaio em estúdio',
  'Fotografia externa',
  'Fotografia e vídeo',
  'Álbuns fotográficos',
  'Orçamento',
  'Outra dúvida'
] as const;

function LiveInFocoAvatar({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const isSm = size === 'sm';
  return (
    <div
      className={`rounded-full bg-[#141414] border border-[#2E2E2E] flex flex-col items-center justify-center shrink-0 shadow-sm overflow-hidden select-none ${
        isSm ? 'w-7 h-7 p-0.5' : 'w-9 h-9 p-1'
      }`}
      aria-label="Logo Live In Foco"
      title="Live In Foco"
    >
      <div className={`flex flex-col items-center justify-center leading-none origin-center ${isSm ? 'scale-[0.55]' : 'scale-[0.72]'}`}>
        <span className="font-['Montserrat',sans-serif] font-light text-[7px] tracking-[0.24em] text-white uppercase whitespace-nowrap">
          LIVE IN
        </span>
        <div className="flex items-center font-['Montserrat',sans-serif] font-extrabold text-[12px] tracking-[0.03em] text-white uppercase whitespace-nowrap mt-[0.5px]">
          <span>F</span>
          <span>O</span>
          <span>C</span>
          <span className="inline-flex items-center justify-center w-[0.84em] h-[0.84em] ml-[0.04em]">
            <OfficialReticleSymbol className="w-full h-full text-white" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [message, setMessage] = useState('');
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close when clicking outside modal
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleAdvanceToStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = nameInput.trim();
    if (!cleanName) {
      setError('Por favor, informe seu nome para continuarmos.');
      return;
    }
    setError(null);
    setName(cleanName);
    setStep(2);
  };

  const handleEditName = () => {
    setStep(1);
    setNameInput(name);
    setError(null);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setSelectedSuggestion(suggestion);
    if (!message.trim()) {
      setMessage(`Gostaria de saber informações e valores sobre ${suggestion}.`);
    } else if (!message.toLowerCase().includes(suggestion.toLowerCase())) {
      setMessage((prev) => `${prev} (Interesse em ${suggestion})`);
    }
    setError(null);
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanMessage = message.trim() || selectedSuggestion || 'informações sobre os serviços';

    // Format strictly as requested:
    // “Olá, Live In Foco! Vim pelo site da Live In Foco. Meu nome é [NOME INFORMADO] e gostaria de saber sobre [SERVIÇO OU DÚVIDA INFORMADA].”
    const prefilledText = `Olá, Live In Foco! Vim pelo site da Live In Foco. Meu nome é ${name} e gostaria de saber sobre ${cleanMessage}.`;
    const whatsappUrl = `https://wa.me/${COMPANY.whatsappRaw}?text=${encodeURIComponent(prefilledText)}`;

    // Open official WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Close window after opening
    setIsOpen(false);
  };

  return (
    <aside
      aria-label="Atendimento interativo via WhatsApp"
      className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end"
    >
      {/* Floating Interactive Chat Window */}
      {isOpen && (
        <div
          ref={modalRef}
          role="dialog"
          aria-labelledby="whatsapp-chat-title"
          className="mb-3 w-[94vw] max-w-[390px] bg-[#121212] text-white rounded-md shadow-2xl border border-[#2E2E2E] overflow-hidden transition-all animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          {/* Header */}
          <div className="bg-[#161616] text-white px-4 py-3.5 flex items-center justify-between border-b border-[#262626] relative">
            {/* Clean white top accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white via-[#CCCCCC] to-[#777777]" />

            <div className="flex items-center gap-2.5">
              <div className="relative">
                <LiveInFocoAvatar size="md" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full ring-2 ring-[#161616]" />
              </div>
              <div>
                <h3 id="whatsapp-chat-title" className="font-display text-sm font-bold tracking-wide text-white leading-tight">
                  Live In Foco
                </h3>
                <p className="text-[11px] text-[#A3A3A3] flex items-center gap-1.5 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  Atendimento oficial
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {step === 2 && (
                <button
                  type="button"
                  onClick={handleEditName}
                  className="text-xs text-[#A3A3A3] hover:text-white px-2 py-1 rounded-sm transition-colors cursor-pointer flex items-center gap-1"
                  title="Alterar meu nome"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Voltar</span>
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[#888888] hover:text-white p-1 rounded-sm transition-colors cursor-pointer"
                aria-label="Fechar atendimento"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive Chat Content */}
          <div className="p-4 space-y-3.5 max-h-[72vh] overflow-y-auto">
            {/* ETAPA 1: Boas-vindas e Pergunta do Nome */}
            <div className="flex items-start gap-2.5">
              <LiveInFocoAvatar size="sm" />
              <div className="bg-[#1A1A1A] text-white p-3 rounded-lg rounded-tl-none text-xs sm:text-sm leading-relaxed border border-[#262626] shadow-sm max-w-[85%]">
                <p className="font-medium text-white">
                  Olá, seja bem-vinda à Live In Foco!
                </p>
                <p className="text-[#D4D4D4] font-light mt-1">
                  Qual é o seu nome?
                </p>
              </div>
            </div>

            {/* FORMULÁRIO ETAPA 1 (Quando step === 1) */}
            {step === 1 && (
              <form onSubmit={handleAdvanceToStep2} className="space-y-2.5 pt-1">
                <div>
                  <label htmlFor="wa-input-name" className="sr-only">
                    Digite seu nome
                  </label>
                  <input
                    id="wa-input-name"
                    type="text"
                    value={nameInput}
                    onChange={(e) => {
                      setNameInput(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="Digite seu nome completo..."
                    autoFocus
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-sm bg-[#0A0A0A] text-white border border-[#333333] focus:border-white focus:outline-none transition-colors"
                  />
                  {error && (
                    <p className="text-xs text-red-400 font-medium mt-1">
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-[#E5E5E5] text-[#0A0A0A] px-4 py-2.5 rounded-sm text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer group"
                >
                  <span>Continuar</span>
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}

            {/* ETAPA 2: Resposta do Usuário com o Nome + Mensagem da Live In Foco */}
            {step === 2 && (
              <>
                {/* Balão do Visitante */}
                <div className="flex justify-end">
                  <div className="flex items-start gap-2 max-w-[85%]">
                    <div className="bg-[#242424] text-white px-3.5 py-2 rounded-lg rounded-tr-none text-xs sm:text-sm border border-[#3A3A3A] shadow-sm flex items-center justify-between gap-3">
                      <span className="font-medium">{name}</span>
                      <button
                        type="button"
                        onClick={handleEditName}
                        className="text-[10px] text-[#A3A3A3] hover:text-white underline cursor-pointer"
                      >
                        editar
                      </button>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#242424] border border-[#3A3A3A] flex items-center justify-center text-white shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Balão da Empresa - Etapa 2 */}
                <div className="flex items-start gap-2.5">
                  <LiveInFocoAvatar size="sm" />
                  <div className="bg-[#1A1A1A] text-white p-3 rounded-lg rounded-tl-none text-xs sm:text-sm leading-relaxed border border-[#262626] shadow-sm max-w-[88%]">
                    <p className="font-medium text-white">
                      Prazer em receber você!
                    </p>
                    <p className="text-[#D4D4D4] font-light mt-1">
                      Como podemos ajudar? Conte qual serviço você procura ou qual é a sua dúvida.
                    </p>
                  </div>
                </div>

                {/* Sugestões Rápidas */}
                <div className="pt-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888]">
                      Sugestões rápidas:
                    </span>
                    <span className="text-[10px] text-[#A3A3A3] italic">
                      clique para preencher
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
                    {QUICK_SUGGESTIONS.map((sug) => {
                      const isSelected = selectedSuggestion === sug;
                      return (
                        <button
                          key={sug}
                          type="button"
                          onClick={() => handleSelectSuggestion(sug)}
                          className={`text-[11px] px-2.5 py-1 rounded-sm border transition-all cursor-pointer flex items-center gap-1 ${
                            isSelected
                              ? 'bg-white border-white text-black font-semibold'
                              : 'bg-[#181818] border-[#333333] text-[#CCCCCC] hover:text-white hover:bg-[#222222]'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-black" />}
                          <span>{sug}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Campo de Texto Livre */}
                <form onSubmit={handleSendToWhatsApp} className="space-y-3 pt-1">
                  <div>
                    <label htmlFor="wa-message-text" className="block text-[11px] font-mono text-[#888888] uppercase tracking-wider mb-1">
                      Sua mensagem ou dúvida:
                    </label>
                    <textarea
                      id="wa-message-text"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ex: Gostaria de saber valores para ensaio em estúdio..."
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-sm bg-[#0A0A0A] text-white border border-[#2E2E2E] focus:border-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Botão Final: Enviar pelo WhatsApp */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA59] text-white px-4 py-3 rounded-sm text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-xl cursor-pointer group"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Enviar pelo WhatsApp</span>
                    <Send className="w-3.5 h-3.5 opacity-90 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <p className="text-[10px] text-center text-[#777777] leading-tight">
                    Você será direcionado ao WhatsApp oficial para confirmar o envio da mensagem.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button with Tranquil Halo Waves */}
      <div className="flex items-center gap-2.5">
        {!isOpen && (
          <span className="hidden sm:inline-block px-3.5 py-1.5 bg-[#121212]/95 backdrop-blur-sm text-white text-xs font-medium rounded-sm border border-[#2E2E2E] shadow-2xl pointer-events-none transition-opacity duration-200">
            Fale conosco no WhatsApp
          </span>
        )}

        <div className="relative">
          {/* Sutil pulsação com ondas circulares e halo suave em intervalos tranquilos */}
          {!isOpen && (
            <>
              {/* Onda circular suave expansiva */}
              <span
                className="absolute -inset-2.5 rounded-full border border-[#25D366]/40 animate-ping [animation-duration:3.2s] pointer-events-none motion-reduce:hidden"
                aria-hidden="true"
              />
              {/* Halo suave com pulso sereno */}
              <span
                className="absolute -inset-1 rounded-full bg-[#25D366]/25 blur-xs animate-pulse [animation-duration:2.8s] pointer-events-none motion-reduce:hidden"
                aria-hidden="true"
              />
            </>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar atendimento no WhatsApp' : 'Abrir atendimento no WhatsApp'}
            aria-expanded={isOpen}
            className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA59] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none cursor-pointer"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <MessageCircle className="w-7 h-7 text-white fill-white" />
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}

