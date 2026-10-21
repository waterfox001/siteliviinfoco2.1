import { getWhatsAppUrl } from '../data/company';
import { MessageCircle, BookOpen, Layers, Sparkles, GraduationCap } from 'lucide-react';

export function ProductsSection() {
  return (
    <section
      id="albuns"
      className="py-20 sm:py-28 bg-[#FFFFFF] dark:bg-[#0A0A0A] border-b border-[#E0E0E0] dark:border-[#1F1F1F] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#555555] dark:text-[#8A8A8A] font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#121212] dark:text-white" />
            <span>Álbuns Artesanais</span>
            <span aria-hidden="true" className="text-[#888888] dark:text-[#555555]">·</span>
            <span>Memórias Palpáveis</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212] dark:text-white mb-4">
            Álbuns fotográficos em diversos modelos
          </h2>

          <p className="text-sm sm:text-base text-[#4A4A4A] dark:text-[#A3A3A3] font-light leading-relaxed">
            A Live In Foco oferece álbuns artesanais em variados formatos, papéis nobres e encadernações personalizadas para eternizar sua história com a durabilidade que um livro físico de memórias merece.
          </p>
        </div>

        {/* 2 Vídeos de Álbuns: Lado a lado em telas grandes e empilhados em celulares */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16 max-w-4xl mx-auto">
          {/* Vídeo 1: Álbum de Formatura Infantil / ABC */}
          <div className="bg-[#F9F9F9] dark:bg-[#121212] border border-[#E0E0E0] dark:border-[#262626] rounded-sm overflow-hidden shadow-xl flex flex-col mx-auto w-full max-w-[330px] sm:max-w-[350px]">
            <div className="p-3.5 sm:p-4 border-b border-[#E0E0E0] dark:border-[#262626] flex items-center justify-between bg-[#F0F0F0] dark:bg-[#161616]">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#121212] dark:text-white" />
                <h3 className="font-display text-xs sm:text-sm font-bold text-[#121212] dark:text-white tracking-wide">
                  Álbum Formatura Infantil / ABC
                </h3>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#666666] dark:text-[#888888]">
                Apresentação Real
              </span>
            </div>

            {/* Player vertical ajustado em proporção 9:16 exata sem bordas pretas excessivas */}
            <div className="relative aspect-[9/16] w-full bg-black flex items-center justify-center overflow-hidden">
              <video
                controls
                playsInline
                preload="none"
                poster="/videos/thumb_formatura_abc.jpg"
                className="w-full h-full object-contain"
              >
                <source src="/videos/formatura_infantil_abc.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>

            <div className="p-4 sm:p-5 bg-[#F9F9F9] dark:bg-[#141414] border-t border-[#E0E0E0] dark:border-[#262626] flex-1 flex flex-col justify-between gap-3 text-xs text-[#4A4A4A] dark:text-[#A3A3A3]">
              <p className="font-light leading-relaxed">
                Lâminas fotográficas rígidas e acabamento primoroso registrando a formatura e turma escolar com abertura contínua.
              </p>
              <div className="pt-2 border-t border-[#EAEAEA] dark:border-[#222222]">
                <a
                  href={getWhatsAppUrl('products', 'Olá! Vi o vídeo do álbum de formatura infantil / ABC no site da Live In Foco e gostaria de consultar valores.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#121212] dark:text-white hover:text-black dark:hover:text-[#D4D4D4] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Consultar álbum ABC</span>
                </a>
              </div>
            </div>
          </div>

          {/* Vídeo 2: Álbum do Ano Letivo Infantil */}
          <div className="bg-[#F9F9F9] dark:bg-[#121212] border border-[#E0E0E0] dark:border-[#262626] rounded-sm overflow-hidden shadow-xl flex flex-col mx-auto w-full max-w-[330px] sm:max-w-[350px]">
            <div className="p-3.5 sm:p-4 border-b border-[#E0E0E0] dark:border-[#262626] flex items-center justify-between bg-[#F0F0F0] dark:bg-[#161616]">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#121212] dark:text-white" />
                <h3 className="font-display text-xs sm:text-sm font-bold text-[#121212] dark:text-white tracking-wide">
                  Álbum do Ano Letivo Infantil
                </h3>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#666666] dark:text-[#888888]">
                Apresentação Real
              </span>
            </div>

            {/* Player vertical ajustado em proporção 9:16 exata sem bordas pretas excessivas */}
            <div className="relative aspect-[9/16] w-full bg-black flex items-center justify-center overflow-hidden">
              <video
                controls
                playsInline
                preload="none"
                poster="/videos/thumb_album_letivo.jpg"
                className="w-full h-full object-contain"
              >
                <source src="/videos/album_ano_letivo.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>

            <div className="p-4 sm:p-5 bg-[#F9F9F9] dark:bg-[#141414] border-t border-[#E0E0E0] dark:border-[#262626] flex-1 flex flex-col justify-between gap-3 text-xs text-[#4A4A4A] dark:text-[#A3A3A3]">
              <p className="font-light leading-relaxed">
                Memórias escolares completas com encadernação nobre, diagramação temática e acompanhamento do ano escolar.
              </p>
              <div className="pt-2 border-t border-[#EAEAEA] dark:border-[#222222]">
                <a
                  href={getWhatsAppUrl('products', 'Olá! Vi o vídeo do álbum do ano letivo infantil no site da Live In Foco e gostaria de consultar informações.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#121212] dark:text-white hover:text-black dark:hover:text-[#D4D4D4] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Consultar álbum letivo</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Informações dos Modelos de Álbuns: Apenas Informações Textuais Confirmadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {/* Modelo 01 */}
          <div className="bg-[#F9F9F9] dark:bg-[#121212] border border-[#E0E0E0] dark:border-[#262626] rounded-sm p-6 sm:p-7 shadow-lg flex flex-col justify-between group hover:border-[#AAAAAA] dark:hover:border-[#404040] transition-colors">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666] dark:text-[#888888] font-semibold">
                  Modelo 01 · Linha Clássica & Premium
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase text-[#121212] dark:text-white bg-[#EAEAEA] dark:bg-white/10 px-2.5 py-0.5 rounded-sm border border-[#CCCCCC] dark:border-white/15">
                  <Layers className="w-3 h-3 text-[#121212] dark:text-white" />
                  <span>Panorâmica 180°</span>
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-[#121212] dark:text-white mb-3">
                Álbum Encadernado em Lâminas Rígidas
              </h3>

              <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A3A3A3] font-light leading-relaxed mb-4">
                Lâminas fotográficas espessas com abertura panorâmica contínua sem cortes centrais. Impressão química em papel fotográfico de alta durabilidade e estojo protetor personalizado.
              </p>

              <ul className="space-y-2 text-xs text-[#333333] dark:text-[#D4D4D4] mb-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#121212] dark:bg-white shrink-0" />
                  <span>Tipo de encadernação: Lâminas rígidas de gramatura nobre</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#121212] dark:bg-white shrink-0" />
                  <span>Abertura 180° sem vinco central cortando as imagens</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#121212] dark:bg-white shrink-0" />
                  <span>Estojo protetor ou caixa personalizada inclusa</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 mt-2 border-t border-[#EAEAEA] dark:border-[#262626] flex items-center justify-between text-xs text-[#4A4A4A] dark:text-[#D4D4D4]">
              <span className="font-mono text-[11px] text-[#666666] dark:text-[#A3A3A3]">Medidas confirmadas: 20x20cm, 25x25cm e 30x30cm</span>
              <Sparkles className="w-3.5 h-3.5 text-[#121212] dark:text-white shrink-0 ml-2" />
            </div>
          </div>

          {/* Modelo 02 */}
          <div className="bg-[#F9F9F9] dark:bg-[#121212] border border-[#E0E0E0] dark:border-[#262626] rounded-sm p-6 sm:p-7 shadow-lg flex flex-col justify-between group hover:border-[#AAAAAA] dark:hover:border-[#404040] transition-colors">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666] dark:text-[#888888] font-semibold">
                  Modelo 02 · Linha Celebrativa & Família
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase text-[#121212] dark:text-white bg-[#EAEAEA] dark:bg-white/10 px-2.5 py-0.5 rounded-sm border border-[#CCCCCC] dark:border-white/15">
                  <BookOpen className="w-3 h-3 text-[#121212] dark:text-white" />
                  <span>Personalizado</span>
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-[#121212] dark:text-white mb-3">
                Álbum Comemorativo com Diagramação Exclusiva
              </h3>

              <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A3A3A3] font-light leading-relaxed mb-4">
                Diagramação artística individual para cada celebração, com capas fotográficas laminadas ou em couro sintético nobre, pensadas para serem folheadas com carinho por décadas.
              </p>

              <ul className="space-y-2 text-xs text-[#333333] dark:text-[#D4D4D4] mb-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#121212] dark:bg-white shrink-0" />
                  <span>Acabamento personalizado com laminação fosca ou brilho</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#121212] dark:bg-white shrink-0" />
                  <span>Diagramação sob medida para batizados, aniversários e turmas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#121212] dark:bg-white shrink-0" />
                  <span>Opção de fotos impressas 15x21cm avulsas</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 mt-2 border-t border-[#EAEAEA] dark:border-[#262626] flex items-center justify-between text-xs text-[#4A4A4A] dark:text-[#D4D4D4]">
              <span className="font-mono text-[11px] text-[#666666] dark:text-[#A3A3A3]">Modelos comemorativos e ampliações sob consulta</span>
              <Sparkles className="w-3.5 h-3.5 text-[#121212] dark:text-white shrink-0 ml-2" />
            </div>
          </div>
        </div>

        {/* Action to Request Album Options on WhatsApp */}
        <div className="max-w-3xl mx-auto bg-[#F9F9F9] dark:bg-[#121212] border border-[#E0E0E0] dark:border-[#262626] p-6 sm:p-8 rounded-sm text-center space-y-4 shadow-xl">
          <h3 className="font-display text-lg sm:text-xl font-bold text-[#121212] dark:text-white">
            Deseja ver mais modelos ou encomendar seu álbum?
          </h3>
          <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A3A3A3] font-light max-w-xl mx-auto">
            Dispomos de mostruários físicos com diversos tamanhos, papéis fotográficos e opções de caixas personalizadas. Fale conosco pelo WhatsApp para consultar valores e prazos.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl('products')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA59] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md group cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white transition-transform group-hover:scale-110" />
              <span>Consultar modelos de álbuns pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

