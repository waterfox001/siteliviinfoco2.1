import { MessageCircle } from 'lucide-react';
import { COMPANY, getWhatsAppUrl } from '../data/company';

export function FinalCTASection() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#FFFFFF] dark:bg-[#0A0A0A] overflow-hidden border-b border-[#E0E0E0] dark:border-[#1F1F1F] transition-colors duration-200">
      {/* Background with adjusted natural photographic lighting and smooth monochrome gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/images/IMG_6533.JPG.jpeg"
          alt="Celebração comemorativa registrada pela Live In Foco"
          className="w-full h-full object-cover object-[50%_35%] opacity-30 dark:opacity-45 brightness-105 contrast-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Soft atmospheric gradient in pure neutral monochrome */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/80 to-[#FFFFFF]/65 dark:from-[#0A0A0A] dark:via-[#0A0A0A]/80 dark:to-[#0A0A0A]/65" />
        {/* Subtle, visible bottom transition gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F0F0F0] dark:from-[#050505] to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#555555] dark:text-[#8A8A8A] mb-4 font-semibold bg-[#F5F5F5] dark:bg-[#141414] border border-[#E0E0E0] dark:border-[#262626] px-3.5 py-1 rounded-full shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#121212] dark:bg-white" />
          <span>Atendimento Direto & Acolhedor</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212] dark:text-white mb-6 leading-tight [text-wrap:balance]">
          {COMPANY.slogans.ctaFinalHeadline}
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#4A4A4A] dark:text-[#A3A3A3] font-light leading-relaxed mb-10 [text-wrap:balance]">
          {COMPANY.slogans.ctaFinalSubtitle}
        </p>

        <div className="flex items-center justify-center">
          <a
            href={getWhatsAppUrl('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA59] text-white px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] rounded-sm transition-all shadow-xl hover:scale-102 cursor-pointer group"
          >
            <MessageCircle className="w-4 h-4 fill-white transition-transform group-hover:scale-110" />
            <span>Falar pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
