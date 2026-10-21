import { useState, useEffect, useMemo, useRef } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem, getWhatsAppUrl } from '../data/company';
import { BrandLogo } from './BrandLogo';
import { useTheme } from '../context/ThemeContext';
import {
  ArrowLeft,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Filter,
  Camera,
  Film,
  Play,
  Maximize2,
  Minimize2,
  Sun,
  Moon
} from 'lucide-react';

interface FullPortfolioPageProps {
  onBackToHome: () => void;
}

const CATEGORIES = [
  'TODOS',
  'CASAMENTOS',
  '15 ANOS',
  'FORMATURA',
  'INFANTIL',
  'FAMÍLIA',
  'RETRATOS',
  'ENSAIOS',
  'EVENTOS'
] as const;

interface VideoItem {
  id: string;
  title: string;
  category: string;
  categories: string[];
  videoSrc: string;
  poster: string;
  caption: string;
}

const PORTFOLIO_VIDEOS: VideoItem[] = [
  {
    id: 'video-aniversario-1',
    title: 'Cobertura Audiovisual — Aniversário & Eventos Infantis',
    category: 'INFANTIL',
    categories: ['TODOS', 'INFANTIL', 'EVENTOS', 'FAMÍLIA'],
    videoSrc: '/videos/aniversario_infantil.mp4',
    poster: '/videos/thumb_aniversario.jpg',
    caption: 'Captação dinâmica dos melhores momentos, alegria das crianças e celebração em família.'
  },
  {
    id: 'video-casamento-1',
    title: 'Casamento Civil ao Ar Livre — Emoção & Luz Natural',
    category: 'CASAMENTOS',
    categories: ['TODOS', 'CASAMENTOS', 'EVENTOS'],
    videoSrc: '/videos/casamento_ar_livre.mp4',
    poster: '/videos/thumb_casamento.jpg',
    caption: 'Celebração poética de casamento civil ao ar livre registrada com sensibilidade e espontaneidade.'
  },
  {
    id: 'video-estudio-1',
    title: 'Produção em Estúdio — Bastidores & Ensaio Fotográfico',
    category: 'ENSAIOS',
    categories: ['TODOS', 'ENSAIOS', 'RETRATOS'],
    videoSrc: '/videos/estudio_fotografico.mp4',
    poster: '/videos/thumb_estudio.jpg',
    caption: 'Iluminação técnica, direção acolhedora e atmosfera intimista no estúdio próprio em Caucaia.'
  },
  {
    id: 'video-album-formatura-1',
    title: 'Apresentação Real — Álbum de Formatura Infantil / ABC',
    category: 'FORMATURA',
    categories: ['TODOS', 'FORMATURA', 'INFANTIL', 'EVENTOS'],
    videoSrc: '/videos/formatura_infantil_abc.mp4',
    poster: '/videos/thumb_formatura_abc.jpg',
    caption: 'Lâminas fotográficas rígidas e acabamento primoroso registrando a formatura e turma escolar.'
  },
  {
    id: 'video-album-letivo-1',
    title: 'Apresentação Real — Álbum do Ano Letivo Infantil',
    category: 'INFANTIL',
    categories: ['TODOS', 'INFANTIL', 'EVENTOS'],
    videoSrc: '/videos/album_ano_letivo.mp4',
    poster: '/videos/thumb_album_letivo.jpg',
    caption: 'Memórias escolares completas com encadernação nobre e acompanhamento de todo o ano letivo.'
  },
  {
    id: 'video-album-artesanal-1',
    title: 'Apresentação Real — Álbum Fotográfico Artesanal',
    category: 'EVENTOS',
    categories: ['TODOS', 'EVENTOS', 'CASAMENTOS', '15 ANOS'],
    videoSrc: '/videos/album_fotografico.mp4',
    poster: '/videos/thumb_album.jpg',
    caption: 'Acabamento premium com lâminas rígidas, abertura panorâmica de 180° e estojo personalizado.'
  }
];

function PortfolioVideoCard({ video }: { video: VideoItem }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 50);
  };

  return (
    <div className="w-full max-w-[320px] sm:max-w-[340px] bg-[#121212] border border-[#262626] rounded-sm overflow-hidden shadow-2xl flex flex-col">
      {/* Player vertical com proporção exata 9:16 e carregamento sob demanda */}
      <div className="relative aspect-[9/16] w-full bg-black flex items-center justify-center overflow-hidden group">
        {!isPlaying ? (
          <div
            onClick={handlePlayClick}
            className="relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePlayClick();
              }
            }}
            aria-label={`Reproduzir vídeo: ${video.title}`}
          >
            <img
              src={video.poster}
              alt={video.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors flex flex-col items-center justify-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-[#121212] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
              </div>
              <span className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider bg-black/85 text-white rounded-sm border border-white/20 shadow-md">
                Assistir Vídeo
              </span>
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="w-full h-full object-contain"
          >
            <source src={video.videoSrc} type="video/mp4" />
            Seu navegador não suporta a reprodução deste vídeo.
          </video>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#888888] block mb-1">
            {video.category}
          </span>
          <h3 className="font-display text-base font-bold text-white mb-1.5 leading-snug">
            {video.title}
          </h3>
          <p className="text-xs text-[#A3A3A3] font-light leading-relaxed">
            {video.caption}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-[#262626]">
          <a
            href={getWhatsAppUrl('general', `Olá, Live In Foco! Gostei do teaser de "${video.title}" e gostaria de consultar informações sobre cobertura em vídeo.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#D4D4D4] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Consultar cobertura em vídeo</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function FullPortfolioPage({ onBackToHome }: FullPortfolioPageProps) {
  const { theme, toggleTheme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>('TODOS');
  const [selectedPhoto, setSelectedPhoto] = useState<PortfolioItem | null>(null);
  const [isCoverMode, setIsCoverMode] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Filtered photos with useMemo
  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'TODOS') return PORTFOLIO_ITEMS;
    if (activeCategory === 'VÍDEOS (ENSAIOS & EVENTOS)') return [];
    return PORTFOLIO_ITEMS.filter((item) =>
      item.category === activeCategory ||
      item.categories?.includes(activeCategory)
    );
  }, [activeCategory]);

  // Filtered videos with useMemo
  const filteredVideos = useMemo(() => {
    if (activeCategory === 'TODOS') return PORTFOLIO_VIDEOS;
    return PORTFOLIO_VIDEOS.filter((vid) =>
      vid.category === activeCategory || vid.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  const showVideos = filteredVideos.length > 0;

  const currentIndex = selectedPhoto
    ? filteredPhotos.findIndex((item) => item.id === selectedPhoto.id)
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filteredPhotos.length - 1) {
      setSelectedPhoto(filteredPhotos[currentIndex + 1]);
    } else if (filteredPhotos.length > 0) {
      setSelectedPhoto(filteredPhotos[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedPhoto(filteredPhotos[currentIndex - 1]);
    } else if (filteredPhotos.length > 0) {
      setSelectedPhoto(filteredPhotos[filteredPhotos.length - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1F1F1F] py-3.5 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#D4D4D4] hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Voltar ao Início</span>
          </button>

          {/* Wordmark Center */}
          <div className="flex items-center gap-2">
            <BrandLogo size="sm" showSubtitle={false} theme={theme} />
            <span className="text-[10px] font-mono tracking-widest text-[#888888] uppercase hidden md:inline ml-2 border-l border-[#262626] pl-2">
              Portfólio Completo
            </span>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button - Somente Ícone */}
            <button
              onClick={toggleTheme}
              type="button"
              aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
              title={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
              className="p-2 sm:p-2.5 rounded-sm border border-[#D5D5D5] dark:border-[#2E2E2E] bg-[#F5F5F5] dark:bg-[#141414] hover:bg-[#EAEAEA] dark:hover:bg-[#202020] text-neutral-800 dark:text-[#D4D4D4] hover:text-black dark:hover:text-white transition-all cursor-pointer shadow-sm flex items-center justify-center"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#FDE047] transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-[#121212] transition-transform hover:-rotate-12" />
              )}
            </button>

            <a
              href={getWhatsAppUrl('general', 'Olá! Vi o portfólio completo da Live In Foco e gostaria de consultar disponibilidade e orçamento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA59] text-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span className="hidden sm:inline">Pedir Orçamento</span>
              <span className="sm:hidden">Contato</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Banner of Portfolio Page */}
      <div className="py-12 sm:py-16 bg-gradient-to-b from-[#121212] to-[#0A0A0A] border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8A8A8A] font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Galeria Completa de Ensaios & Eventos</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Nosso Portfólio de Histórias Reais
          </h1>

          <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed">
            Navegue por nossas categorias e veja a delicadeza dos ensaios em estúdio, a imponência das formaturas, a emoção dos casamentos e a alegria das celebrações em família.
          </p>
        </div>
      </div>

      {/* Category Filter Pills Bar */}
      <div className="sticky top-[57px] z-30 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1F1F1F] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#888888] pr-2 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Filtrar:</span>
            </div>

            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-white text-[#0A0A0A] border-white shadow-md'
                      : 'bg-[#121212] text-[#8A8A8A] border-[#262626] hover:text-white hover:border-[#555555]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content: Videos Section (if applicable) + Photos Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Videos Showcase Section */}
        {showVideos && filteredVideos.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Film className="w-4 h-4 text-white" />
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Vídeos de Cobertura & Ensaios
              </h2>
              <span className="text-xs font-mono text-[#888888] ml-2">
                ({filteredVideos.length} {filteredVideos.length === 1 ? 'vídeo' : 'vídeos'})
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {filteredVideos.map((video) => (
                <PortfolioVideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        )}

        {/* Photographs Grid Header */}
        {filteredPhotos.length > 0 && (
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#1F1F1F]">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-white" />
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Fotografias
              </h2>
            </div>
            <span className="text-xs font-mono text-[#888888]">
              {filteredPhotos.length} {filteredPhotos.length === 1 ? 'registro' : 'registros'} exibidos
            </span>
          </div>
        )}

        {/* 100% Preenchido Photographs Grid com content-visibility para alta performance */}
        {filteredPhotos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredPhotos.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                style={{ contentVisibility: 'auto', containIntrinsicSize: '300px 225px' }}
                className="group relative overflow-hidden aspect-[4/3] w-full bg-[#121212] rounded-sm border border-[#262626] hover:border-[#666666] transition-all duration-300 cursor-pointer shadow-md hover:shadow-2xl"
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

                {/* Dark Scrim on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#888888] block mb-0.5">
                        {item.category}
                      </span>
                      <h3 className="font-display text-sm font-bold text-white line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#D4D4D4] font-light mt-0.5 line-clamp-1">
                        {item.caption}
                      </p>
                    </div>
                    <div className="p-1.5 rounded-full bg-white/20 text-white backdrop-blur-sm shrink-0 ml-2">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !showVideos && (
            <div className="text-center py-20 bg-[#121212] border border-[#262626] rounded-sm max-w-md mx-auto">
              <Camera className="w-8 h-8 text-[#888888] mx-auto mb-3" />
              <p className="font-display text-base font-semibold text-white mb-1">
                Nenhuma foto encontrada nesta categoria
              </p>
              <p className="text-xs text-[#8A8A8A] mb-4">
                Selecione outra categoria ou veja todos os registros.
              </p>
              <button
                onClick={() => setActiveCategory('TODOS')}
                className="px-4 py-2 bg-white text-[#0A0A0A] rounded-sm text-xs font-semibold uppercase tracking-wider"
              >
                Ver Todas as Fotos
              </button>
            </div>
          )
        )}
      </main>

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
                  Foto {currentIndex + 1} de {filteredPhotos.length} nesta visualização
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
  );
}
