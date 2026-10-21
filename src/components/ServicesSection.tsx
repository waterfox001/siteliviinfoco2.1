import { SERVICES, getWhatsAppUrl } from '../data/company';
import { ArrowUpRight, Check, MessageCircle } from 'lucide-react';

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="py-20 sm:py-28 bg-[#FFFFFF] dark:bg-[#0A0A0A] border-b border-[#E0E0E0] dark:border-[#1F1F1F] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#555555] dark:text-[#8A8A8A] font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#121212] dark:bg-white" />
              <span>Nossos Serviços</span>
              <span aria-hidden="true" className="text-[#888888] dark:text-[#555555]">·</span>
              <span>Fotografia & Audiovisual</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212] dark:text-white leading-tight">
              Soluções completas para eternizar momentos
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#4A4A4A] dark:text-[#A3A3A3] font-light leading-relaxed mb-3">
              Atendimento presencial em nosso estúdio próprio em Caucaia ou em eventos externos por Fortaleza e região metropolitana.
            </p>
            <p className="text-xs font-mono text-[#222222] dark:text-white/80 font-medium">
              Consulte um orçamento personalizado de acordo com o seu momento.
            </p>
          </div>
        </div>

        {/* The 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className="group bg-[#F9F9F9] dark:bg-[#121212] border border-[#E0E0E0] dark:border-[#262626] hover:border-[#AAAAAA] dark:hover:border-[#444444] rounded-sm transition-all duration-300 flex flex-col overflow-hidden shadow-sm hover:shadow-xl"
            >
              {/* Card Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#EAEAEA] dark:bg-[#1A1A1A]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-[50%_20%] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 text-[11px] font-mono tracking-wider uppercase text-white bg-black/85 backdrop-blur-sm px-3 py-1 rounded-sm border border-white/20 shadow-sm">
                  {service.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-[#666666] dark:text-[#888888] uppercase tracking-wider font-semibold">
                    {String(index + 1).padStart(2, '0')}. Serviço
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#121212] dark:text-white group-hover:text-[#333333] dark:group-hover:text-[#D4D4D4] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#4A4A4A] dark:text-[#A3A3A3] font-light leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-2 pt-3 border-t border-[#EAEAEA] dark:border-[#262626] text-xs text-[#4A4A4A] dark:text-[#A3A3A3]">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#121212] dark:text-white mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Action: WhatsApp Quote Consultation */}
                <div className="pt-4 border-t border-[#EAEAEA] dark:border-[#262626]">
                  <a
                    href={getWhatsAppUrl('general', `Olá, Live In Foco! Gostaria de consultar um orçamento personalizado para o serviço de ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#121212] dark:text-white py-3 px-4 bg-white dark:bg-transparent hover:bg-[#121212] hover:text-white dark:hover:bg-white dark:hover:text-black border border-[#CCCCCC] dark:border-[#333333] hover:border-[#121212] dark:hover:border-white rounded-sm transition-all duration-200 group/btn shadow-xs cursor-pointer"
                  >
                    <span>Consultar orçamento</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
