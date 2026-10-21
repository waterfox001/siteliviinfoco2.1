interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  theme?: 'dark' | 'light';
  align?: 'start' | 'center';
}

/**
 * Componente oficial de reprodução vetorial da marca LIVE IN FOCO | Estúdio Fotográfico
 * 
 * Baseado fielmente na imagem de referência original (Logo Fotográfico em Círculo Aberto.png):
 * - Primeira linha: "LIVE IN" em letras maiúsculas, fonte geométrica sem serifa (Montserrat), elegante e fina.
 * - Segunda linha: "FOCO" em letras maiúsculas equilibradas (Montserrat ExtraBold 800).
 *   O último "O" é o símbolo vetorial de foco fotográfico integrado e espessado:
 *   anel com 4 segmentos curvos com cortes diagonais e cruz central alinhada.
 * - Terceira linha: "Estúdio Fotográfico" em fonte sem serifa, mais fina e menor.
 */
/**
 * Símbolo vetorial oficial do foco fotográfico da LIVE IN FOCO:
 * 4 segmentos curvos formando um círculo interrompido nos 4 eixos
 * com sinal de mais centralizado (+) com espessura compatível com as letras.
 */
export function OfficialReticleSymbol({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="270 260 715 725"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="translate(0, 1254) scale(0.1, -0.1)">
        {/* Quadrante Superior Direito */}
        <path d="M6600 9653 c0 -136 -3 -372 -7 -524 l-6 -276 111 -17 c657 -101 1192 -443 1569 -1006 74 -110 205 -377 253 -515 54 -155 103 -350 125 -495 10 -63 21 -118 25 -123 3 -4 257 -4 564 0 l558 6 -7 66 c-11 118 -75 412 -121 566 -179 591 -532 1172 -968 1593 -97 93 -197 179 -342 293 -97 77 -315 215 -467 297 -405 218 -812 344 -1209 377 l-78 6 0 -248z" />
        {/* Quadrante Superior Esquerdo */}
        <path d="M5745 9870 c-648 -100 -1222 -367 -1750 -815 -455 -386 -804 -882 -1035 -1470 -91 -231 -177 -579 -204 -826 l-6 -56 383 -6 c210 -4 454 -7 542 -7 l160 0 23 138 c84 524 327 1000 693 1357 177 172 333 289 523 392 236 128 530 226 766 256 l105 13 3 439 c2 242 0 477 -3 523 l-7 82 -36 -1 c-21 0 -91 -9 -157 -19z" />
        {/* Sinal de Mais Centralizado (+) com espessura compatível com as letras */}
        <path d="M5914 7580 c-12 -5 -26 -15 -30 -22 -5 -7 -9 -211 -9 -453 0 -242 -4 -446 -8 -452 -6 -10 -103 -13 -428 -13 l-420 0 -24 -25 -25 -24 0 -331 c0 -328 3 -362 34 -382 6 -4 201 -8 433 -8 326 0 424 -3 430 -12 4 -7 8 -205 8 -439 0 -406 1 -428 19 -448 19 -21 26 -21 373 -21 l354 0 25 25 25 25 -5 411 c-3 237 -1 421 4 435 l10 24 425 0 c412 0 426 1 445 20 19 19 20 33 20 359 0 319 -1 340 -19 362 l-19 24 -426 3 -427 3 -9 23 c-5 13 -7 216 -6 452 l3 428 -23 23 -23 23 -343 -1 c-189 0 -353 -4 -364 -9z" />
        {/* Quadrante Inferior Esquerdo */}
        <path d="M2944 5842 l-201 -2 4 -48 c19 -187 96 -524 163 -712 109 -304 233 -545 423 -819 445 -642 1129 -1165 1841 -1406 234 -80 601 -151 732 -143 l49 3 0 170 c0 94 -2 351 -3 573 l-2 402 -24 0 c-102 0 -439 82 -601 147 -459 183 -884 535 -1142 948 -158 252 -281 551 -332 802 l-18 88 -344 0 c-189 0 -435 -1 -545 -3z" />
        {/* Quadrante Inferior Direito */}
        <path d="M8668 5844 c-5 -4 -8 -21 -8 -37 0 -117 -103 -449 -200 -645 -134 -268 -263 -445 -482 -658 -324 -314 -727 -526 -1165 -613 -54 -10 -126 -22 -160 -26 l-63 -7 0 -574 0 -574 53 0 c29 0 107 7 172 16 957 124 1860 715 2438 1594 289 441 483 971 540 1478 l5 42 -246 0 c-136 0 -389 3 -562 6 -173 4 -318 3 -322 -2z" />
      </g>
    </svg>
  );
}

export function BrandLogo({
  className = '',
  size = 'md',
  showSubtitle = true,
  theme = 'dark',
  align = 'start'
}: BrandLogoProps) {
  const sizeConfigs = {
    sm: {
      liveInText: 'text-[9.5px]',
      liveInTracking: 'tracking-[0.20em]',
      focoText: 'text-[19px]',
      focoTracking: 'tracking-[0.03em]',
      reticleSize: 'w-[0.82em] h-[0.82em]',
      subText: 'text-[8.5px]',
      subTracking: 'tracking-[0.08em]',
      gapLiveInFoco: 'mt-[1px]',
      gapSubtitle: 'mt-[2px]'
    },
    md: {
      liveInText: 'text-[11px] sm:text-[12px]',
      liveInTracking: 'tracking-[0.22em]',
      focoText: 'text-[24px] sm:text-[27px]',
      focoTracking: 'tracking-[0.04em]',
      reticleSize: 'w-[0.82em] h-[0.82em]',
      subText: 'text-[10px] sm:text-[11px]',
      subTracking: 'tracking-[0.10em]',
      gapLiveInFoco: 'mt-[1.5px]',
      gapSubtitle: 'mt-[2.5px]'
    },
    lg: {
      liveInText: 'text-sm sm:text-base',
      liveInTracking: 'tracking-[0.24em]',
      focoText: 'text-3xl sm:text-[38px]',
      focoTracking: 'tracking-[0.05em]',
      reticleSize: 'w-[0.82em] h-[0.82em]',
      subText: 'text-xs sm:text-sm',
      subTracking: 'tracking-[0.10em]',
      gapLiveInFoco: 'mt-1',
      gapSubtitle: 'mt-1.5'
    },
    xl: {
      liveInText: 'text-lg sm:text-2xl md:text-3xl',
      liveInTracking: 'tracking-[0.28em]',
      focoText: 'text-5xl sm:text-7xl md:text-8xl lg:text-9xl',
      focoTracking: 'tracking-[0.04em]',
      reticleSize: 'w-[0.82em] h-[0.82em]',
      subText: 'text-sm sm:text-lg md:text-xl',
      subTracking: 'tracking-[0.16em]',
      gapLiveInFoco: 'mt-2 sm:mt-3',
      gapSubtitle: 'mt-3 sm:mt-4'
    }
  };

  const cfg = sizeConfigs[size];
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-[#121212]';
  const subColor = isDark ? 'text-[#D4D4D4]' : 'text-[#4A4A4A]';
  const alignClass = align === 'start' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div
      className={`inline-flex flex-col ${alignClass} select-none transition-opacity ${className}`}
      role="img"
      aria-label="LIVE IN FOCO — Estúdio Fotográfico"
    >
      {/* Linha 1: "LIVE IN" em letras maiúsculas finas e elegantes */}
      <div
        className={`font-['Montserrat',sans-serif] font-light uppercase ${cfg.liveInText} ${cfg.liveInTracking} ${textColor} leading-none whitespace-nowrap`}
      >
        LIVE IN
      </div>

      {/* Linha 2: "FOCO" — Montserrat ExtraBold 800, com o último "O" substituído pelo símbolo exato de foco */}
      <div
        className={`flex items-center font-['Montserrat',sans-serif] font-extrabold uppercase ${cfg.focoText} ${cfg.focoTracking} ${textColor} leading-none whitespace-nowrap ${cfg.gapLiveInFoco}`}
      >
        <span>F</span>
        <span>O</span>
        <span>C</span>

        {/* Símbolo oficial de foco fotográfico substituindo o último O com 4 segmentos curvos e cruz central engrossada */}
        <span
          className={`inline-flex items-center justify-center shrink-0 ml-[0.04em] ${cfg.reticleSize}`}
          aria-hidden="true"
        >
          <OfficialReticleSymbol className="w-full h-full" />
        </span>
      </div>

      {/* Linha 3: "Estúdio Fotográfico" abaixo, em fonte mais fina, menor */}
      {showSubtitle && (
        <div
          className={`font-['Montserrat',sans-serif] font-light ${cfg.subText} ${cfg.subTracking} ${subColor} leading-none whitespace-nowrap ${cfg.gapSubtitle}`}
        >
          Estúdio Fotográfico
        </div>
      )}
    </div>
  );
}

