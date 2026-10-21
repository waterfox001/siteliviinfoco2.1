import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Award, Users } from 'lucide-react';
import { STORY_CAROUSEL_IMAGES } from '../data/company';

export function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play carousel every 4.2 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % STORY_CAROUSEL_IMAGES.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % STORY_CAROUSEL_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + STORY_CAROUSEL_IMAGES.length) % STORY_CAROUSEL_IMAGES.length);
  };

  const currentItem = STORY_CAROUSEL_IMAGES[currentIndex];

  return (
    <section
      id="sobre"
      className="py-20 sm:py-28 bg-[#FFFFFF] dark:bg-[#0A0A0A] border-b border-[#E0E0E0] dark:border-[#1F1F1F] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brief, Human, Authentic Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#555555] dark:text-[#8A8A8A] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#121212] dark:bg-white" />
              <span>Nossa História</span>
              <span aria-hidden="true" className="text-[#888888] dark:text-[#555555]">·</span>
              <span>Desde 1989</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212] dark:text-white leading-[1.15]">
              Uma trajetória familiar construída com amor pela fotografia
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#4A4A4A] dark:text-[#A3A3A3] font-light leading-relaxed">
              <p>
                Tudo começou em <strong className="font-medium text-[#121212] dark:text-white">1989</strong>, quando o pai da família, com coragem e uma simples câmera da época, iniciou o ofício de registrar casamentos e celebrações populares. Com dedicação, respeito a cada cliente e o apoio incansável da mãe, o que era um trabalho tornou-se o propósito de uma vida inteira.
              </p>
              <p>
                Com o passar dos anos, esse legado floresceu. Há <strong className="font-medium text-[#121212] dark:text-white">13 anos</strong>, a filha <strong className="font-medium text-[#121212] dark:text-white">Lina Mara Costa de Matos</strong> assumiu a continuidade dos registros com inovação, técnica refinada e olhar contemporâneo, mantendo intacto o mesmo calor humano dos primeiros dias.
              </p>
              <p>
                Hoje, com sede no Parque das Nações em Caucaia e atendimento itinerante em Fortaleza e cidades vizinhas, a Live In Foco une a experiência de mais de três décadas à doçura de registrar quem você mais ama.
              </p>
            </div>

            {/* Quiet human values highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EAEAEA] dark:border-[#262626]">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#121212] dark:text-white flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#555555] dark:text-[#CCCCCC]" />
                  Desde 1989
                </span>
                <p className="text-xs text-[#555555] dark:text-[#8A8A8A]">Mais de 3 décadas de história contínua.</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#121212] dark:text-white flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#555555] dark:text-[#CCCCCC]" />
                  Legado Familiar
                </span>
                <p className="text-xs text-[#555555] dark:text-[#8A8A8A]">Duas gerações unidas pela mesma paixão.</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#121212] dark:text-white flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#121212] dark:text-white" />
                  Olhar Afetuoso
                </span>
                <p className="text-xs text-[#555555] dark:text-[#8A8A8A]">Respeito e carinho com cada cliente.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Smooth Automatic Carousel with Real Photographs */}
          <div
            className="lg:col-span-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative bg-[#F9F9F9] dark:bg-[#121212] p-3 sm:p-4 rounded-sm border border-[#E0E0E0] dark:border-[#262626] shadow-xl">
              {/* Carousel Container in Vertical Rectangle */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-[#EAEAEA] dark:bg-[#1A1A1A]">
                {STORY_CAROUSEL_IMAGES.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-[50%_20%]"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    {/* Dark gradient for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* Active photo info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                      <p className="font-display text-base sm:text-lg font-bold text-white drop-shadow-md">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Left/Right manual arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-black/70 hover:bg-white hover:text-black text-white rounded-full border border-white/20 transition-colors cursor-pointer shadow-lg"
                  aria-label="Foto anterior da história"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-black/70 hover:bg-white hover:text-black text-white rounded-full border border-white/20 transition-colors cursor-pointer shadow-lg"
                  aria-label="Próxima foto da história"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Progress dots */}
              <div className="flex items-center justify-center px-2 pt-3">
                <div className="flex items-center gap-1.5">
                  {STORY_CAROUSEL_IMAGES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentIndex(dotIdx)}
                      aria-label={`Ir para a foto ${dotIdx + 1}`}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        dotIdx === currentIndex
                          ? 'w-6 bg-[#121212] dark:bg-white'
                          : 'w-1.5 bg-[#CCCCCC] dark:bg-[#404040] hover:bg-[#999999]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
