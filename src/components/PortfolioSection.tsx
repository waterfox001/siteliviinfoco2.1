import { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem, getWhatsAppUrl } from '../data/company';
import {
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ArrowRight,
  Maximize2,
  Minimize2
} from 'lucide-react';

interface PortfolioSectionProps {
  onOpenFullPortfolio: () => void;
}

export function PortfolioSection({ onOpenFullPortfolio }: PortfolioSectionProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<PortfolioItem | null>(null);
  const [isCoverMode, setIsCoverMode] = useState<boolean>(false);

  // 6 Curated Showcase Highlights
  const showcaseIds = useMemo(() => [
    'casamento-1',
    'retratos-1',
    'infantil-1',
    '15anos-1',
    'formatura-1',
    'familia-1'
  ], []);

  const showcaseItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => showcaseIds.includes(item.id));
  }, [showcaseIds]);

  const currentIndex = selectedPhoto
    ? showcaseItems.findIndex((item) => item.id === selectedPhoto.id)
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < showcaseItems.length - 1) {
      setSelectedPhoto(showcaseItems[currentIndex + 1]);
    } else if (showcaseItems.length > 0) {
      setSelectedPhoto(showcaseItems[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedPhoto(showcaseItems[currentIndex - 1]);
    } else if (showcaseItems.length > 0) {
      setSelectedPhoto(showcaseItems[showcaseItems.length - 1]);
    }
  };

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-28 bg-[#FFFFFF] dark:bg-[#0A0A0A] border-b border-[#E0E0E0] dark:border-[#1F1F1F] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#555555] dark:text-[#8A8A8A] font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#121212] dark:bg-white" />
            <span>Portfólio em Destaque</span>
            <span aria-hidden="true" className="text-[#888888] dark:text-[#555555]">·</span>
            <span>Registros Reais</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#121212] dark:text-white mb-4 leading-snug [text-wrap:balance]">
            Fotografia autêntica, iluminação cuidadosa e momentos eternizados em mais de três décadas de história.
          </h2>

          <p className="text-sm sm:text-base text-[#4A4A4A] dark:text-[#A3A3A3] font-light leading-relaxed">
            Seis destaques do nosso acervo com ensaios e coberturas reais de casamentos, 15 anos, formaturas, crianças e famílias.
          </p>
        </div>

        {/* Visual Grid with 6 curated cards, 100% preenchidos without black borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              style={{ contentVisibility: 'auto', containIntrinsicSize: '350px 260px' }}
              className="group relative overflow-hidden aspect-[4/3] w-full bg-[#EAEAEA] dark:bg-[#121212] rounded-sm border border-[#E0E0E0] dark:border-[#262626] hover:border-[#AAAAAA] dark:hover:border-[#555555] transition-all duration-300 cursor-pointer shadow-md hover:shadow-2xl"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedPhoto(item);
                }
              }}
              aria-label={`Ver foto ampliada: ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover ${item.objectPosition || 'object-[50%_15%]'} group-hover:scale-105 transition-transform duration-500`}
              />

              {/* Gradient Scrim & Hover Metadata */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#CCCCCC] block mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="font-display text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#D4D4D4] font-light mt-0.5 line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                  <div className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm shrink-0 ml-2">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ver Mais / Ver Portfólio Completo Action */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <button
            onClick={onOpenFullPortfolio}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#121212] hover:bg-[#262626] text-white dark:bg-white dark:hover:bg-[#E5E5E5] dark:text-[#0A0A0A] text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-sm transition-all shadow-xl group cursor-pointer"
          >
            <span>Conheça nosso portfólio completo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </button>
          <p className="text-xs text-[#555555] dark:text-[#8A8A8A] font-mono">
            Acesse todas as categorias organizadas com fotos e vídeos reais
          </p>
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedPhoto(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-5xl w-full bg-[#121212] border border-[#2E2E2E] rounded-sm overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#262626] bg-[#141414]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#888888]">
                    {selectedPhoto.category}
                  </span>
                  <span className="text-[#555555]" aria-hidden="true">·</span>
                  <h4 className="text-sm font-semibold text-white">
                    {selectedPhoto.title}
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsCoverMode(!isCoverMode)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#D4D4D4] hover:text-white bg-[#1E1E1E] hover:bg-[#2A2A2A] rounded-sm transition-colors cursor-pointer border border-[#333333]"
                    title={isCoverMode ? "Ajustar à tela" : "Preencher todo o quadro"}
                  >
                    {isCoverMode ? (
                      <>
                        <Minimize2 className="w-3.5 h-3.5 text-white" />
                        <span className="hidden sm:inline">Ajustar</span>
                      </>
                    ) : (
                      <>
                        <Maximize2 className="w-3.5 h-3.5 text-white" />
                        <span className="hidden sm:inline">Preencher</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="p-1.5 text-[#888888] hover:text-white transition-colors cursor-pointer"
                    aria-label="Fechar visualização"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Image View with Ambient Background */}
              <div className="relative flex-1 bg-[#0A0A0A] flex items-center justify-center min-h-[300px] sm:min-h-[500px] overflow-hidden p-2 sm:p-4">
                <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                  <img
                    src={selectedPhoto.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover blur-3xl opacity-25 scale-125"
                  />
                  <div className="absolute inset-0 bg-[#0A0A0A]/60" />
                </div>

                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className={
                    isCoverMode
                      ? "relative z-10 w-full h-full max-h-[75vh] object-cover rounded-sm shadow-2xl transition-all duration-300"
                      : "relative z-10 max-h-[75vh] w-auto max-w-full object-contain rounded-sm shadow-2xl transition-all duration-300"
                  }
                  referrerPolicy="no-referrer"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-black/70 hover:bg-white hover:text-black text-white transition-colors border border-white/20 rounded-full cursor-pointer shadow-lg"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-black/70 hover:bg-white hover:text-black text-white transition-colors border border-white/20 rounded-full cursor-pointer shadow-lg"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Bottom Bar */}
              <div className="px-6 py-4 border-t border-[#262626] bg-[#141414] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-[#D4D4D4] font-light">
                    {selectedPhoto.caption}
                  </p>
                  <span className="text-[11px] text-[#888888] font-mono mt-0.5 block">
                    Foto {currentIndex + 1} de {showcaseItems.length} no destaque
                  </span>
                </div>

                <a
                  href={getWhatsAppUrl('general', `Olá! Gostei muito das fotos de ${selectedPhoto.category} ("${selectedPhoto.title}") no portfólio da Live In Foco e gostaria de consultar informações e disponibilidade.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20BA59] px-4 py-2.5 rounded-sm transition-colors shrink-0 shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Consultar esse estilo</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
