import { useState } from 'react';
import { FAQS, getWhatsAppUrl } from '../data/company';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-[#0A0A0A] border-b border-[#1F1F1F]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A] font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed">
            Respostas diretas e transparentes sobre orçamentos, agendamentos, formatos de entrega e coberturas.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5 mb-12">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-[#121212] border transition-colors rounded-sm overflow-hidden ${
                  isOpen ? 'border-[#555555] shadow-md' : 'border-[#262626] hover:border-[#404040]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFaq(index);
                    }
                  }}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display text-sm sm:text-base font-semibold transition-colors ${
                    isOpen ? 'text-white' : 'text-[#EEEEEE]'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-white' : 'text-[#888888]'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#D4D4D4] font-light leading-relaxed border-t border-[#1F1F1F]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note & Contact */}
        <div className="p-6 bg-[#121212] border border-[#262626] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
          <div>
            <h4 className="font-display text-sm font-bold text-white">
              Sua dúvida não está listada acima?
            </h4>
            <p className="text-xs text-[#8A8A8A] font-light mt-0.5">
              Estamos prontos para atender você diretamente pelo WhatsApp.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('general', 'Olá! Gostaria de tirar uma dúvida que não encontrei no site da Live In Foco.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA59] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Tirar dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
