import { DIFFERENTIALS, HOW_IT_WORKS, getWhatsAppUrl } from '../data/company';
import { Award, Eye, BookOpen, MessageCircle, ArrowRight } from 'lucide-react';

export function DifferentialsSection() {
  const pilarIcons = [
    <Award className="w-5 h-5 text-[#121212] dark:text-white" />,
    <Eye className="w-5 h-5 text-[#121212] dark:text-white" />,
    <BookOpen className="w-5 h-5 text-[#121212] dark:text-white" />
  ];

  return (
    <section
      id="diferenciais"
      className="py-20 sm:py-28 bg-[#FFFFFF] dark:bg-[#0A0A0A] border-b border-[#E0E0E0] dark:border-[#1F1F1F] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Por que escolher a Live In Foco (Exact 3 pillars) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#555555] dark:text-[#8A8A8A] font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#121212] dark:bg-white" />
            <span>Por Que Escolher a Live In Foco</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212] dark:text-white mb-4">
            Pilares de confiança, sensibilidade e dedicação
          </h2>

          <p className="text-sm sm:text-base text-[#4A4A4A] dark:text-[#A3A3A3] font-light leading-relaxed">
            Mais do que capturar imagens, entregamos a serenidade de saber que suas memórias estarão em mãos dedicadas e experientes.
          </p>
        </div>

        {/* 3 Compact Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-24 max-w-5xl mx-auto">
          {DIFFERENTIALS.map((diff, index) => (
            <div
              key={index}
              className="bg-[#F9F9F9] dark:bg-[#121212] border border-[#E0E0E0] dark:border-[#262626] p-6 sm:p-7 rounded-sm transition-all duration-300 hover:border-[#AAAAAA] dark:hover:border-[#444444] flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="w-10 h-10 rounded-sm bg-[#EFEFEF] dark:bg-[#1A1A1A] border border-[#D5D5D5] dark:border-[#333333] flex items-center justify-center mb-5 text-[#121212] dark:text-white">
                  {pilarIcons[index] || <Award className="w-5 h-5 text-[#121212] dark:text-white" />}
                </div>

                <span className="text-[10px] font-mono tracking-widest text-[#666666] dark:text-[#888888] uppercase block mb-1 font-semibold">
                  Pilar {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="font-display text-lg font-bold text-[#121212] dark:text-white mb-2">
                  {diff.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A3A3A3] font-light leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Como funciona (Exact 4 simple steps) */}
        <div className="pt-16 border-t border-[#EAEAEA] dark:border-[#262626]">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#555555] dark:text-[#8A8A8A] font-semibold block mb-2">
              Passo a Passo
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#121212] dark:text-white mb-3">
              Como funciona o atendimento
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A3A3A3] font-light">
              Do primeiro contato à entrega das suas memórias, tudo acontece com clareza, transparência e acolhimento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {HOW_IT_WORKS.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F9F9F9] dark:bg-[#121212] border border-[#E0E0E0] dark:border-[#262626] p-6 rounded-sm relative flex flex-col justify-between hover:border-[#AAAAAA] dark:hover:border-[#404040] transition-colors shadow-xs"
              >
                <div>
                  <span className="text-3xl font-display font-bold text-black/15 dark:text-white/20 block mb-3">
                    {step.step}
                  </span>
                  <h4 className="font-display text-sm sm:text-base font-bold text-[#121212] dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#555555] dark:text-[#8A8A8A] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-[#888888] dark:text-[#555555]">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick CTA to start Step 1 */}
          <div className="text-center">
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA59] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md group cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white transition-transform group-hover:scale-110" />
              <span>Iniciar conversa no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
