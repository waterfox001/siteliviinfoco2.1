import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../data/company';
import { BrandLogo } from './BrandLogo';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onExploreWork?: () => void;
}

export function Hero({ onExploreWork }: HeroProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-28 pb-16 sm:py-24 border-b border-[#E0E0E0] dark:border-[#1F1F1F] bg-[#FFFFFF] dark:bg-[#0A0A0A] overflow-hidden"
    >
      {/* Fundo elegante adaptável: escuro atmosférico no Dark Mode e claro sólido limpo no Light Mode */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {isDark ? (
          <>
            {/* Orbes monocromáticos sutis no Dark Mode otimizados via GPU */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] bg-white/[0.035] rounded-full blur-3xl transform-gpu pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-neutral-400/[0.02] rounded-full blur-3xl transform-gpu pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral-300/[0.025] rounded-full blur-3xl transform-gpu pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#181818_0%,#0A0A0A_75%)] opacity-85" />
          </>
        ) : (
          <>
            {/* Fundo claro real e sólido sem transparências indesejadas no Light Mode */}
            <div className="absolute inset-0 bg-[#FFFFFF]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#FFFFFF_0%,#F5F5F5_85%)] opacity-100" />
            <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:32px_32px] opacity-60" />
          </>
        )}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        {/* Subtle Brand Kicker - Ajustado com CSS responsivo para proporção perfeita no celular */}
        <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.08em] sm:tracking-[0.22em] text-[#555555] dark:text-[#A3A3A3] font-semibold bg-[#F0F0F0] dark:bg-[#141414] border border-[#D5D5D5] dark:border-[#2A2A2A] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-5 sm:mb-8 shadow-sm max-w-[92vw] sm:max-w-none text-center">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#121212] dark:text-white shrink-0" />
          <span className="leading-tight">
            Tradição Familiar desde 1989 <span className="text-[#888888] dark:text-[#666666]">•</span> Caucaia & Fortaleza
          </span>
        </div>

        {/* Logo LIVE IN FOCO Centralizado Horizontal e Verticalmente */}
        <div className="my-3 flex flex-col items-center justify-center">
          <BrandLogo
            size="xl"
            align="center"
            showSubtitle={true}
            theme={theme}
            className="transform hover:scale-[1.01] transition-transform duration-300"
          />
        </div>

        {/* Main Requested Headline */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#121212] dark:text-white leading-[1.15] mt-8 mb-4 [text-wrap:balance]">
          Histórias passam. <br className="hidden sm:inline" />
          <span className="text-[#121212] dark:text-white">
            Memórias ficam.
          </span>
        </h1>

        {/* Official Supporting Text in Neutral Silver */}
        <p className="text-base sm:text-lg md:text-xl text-[#262626] dark:text-[#D4D4D4] font-medium leading-snug max-w-2xl mx-auto mb-3">
          Mais de três décadas contando histórias através da fotografia.
        </p>

        {/* Concise and Warm Context */}
        <p className="text-xs sm:text-sm md:text-base text-[#555555] dark:text-[#A3A3A3] font-light leading-relaxed max-w-xl mx-auto mb-8">
          Cuidamos de cada registro com a sensibilidade de quem ama eternizar momentos reais de famílias, casamentos, debutantes e celebrações. Atendimento no estúdio próprio em Caucaia e cobertura em Fortaleza e cidades vizinhas.
        </p>

        {/* Two Clear, Functional Calls to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#portfolio"
            onClick={(e) => {
              if (onExploreWork) {
                e.preventDefault();
                onExploreWork();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#121212] hover:bg-[#262626] text-white dark:bg-white dark:hover:bg-[#E5E5E5] dark:text-[#0A0A0A] px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-200 rounded-sm shadow-xl focus:outline-none cursor-pointer group"
          >
            <span>Conhecer o portfólio</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={getWhatsAppUrl('general', 'Olá! Vi o site da Live In Foco e gostaria de falar com a equipe sobre fotografia.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA59] text-white px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-200 rounded-sm shadow-xl focus:outline-none cursor-pointer group"
          >
            <MessageCircle className="w-4 h-4 fill-white transition-transform group-hover:scale-110" />
            <span>Entrar em contato</span>
          </a>
        </div>
      </div>
    </section>
  );
}

