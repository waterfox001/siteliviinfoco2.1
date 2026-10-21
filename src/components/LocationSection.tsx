import { MapPin, Navigation, Clock, Car, Globe } from 'lucide-react';
import { COMPANY } from '../data/company';

export function LocationSection() {
  return (
    <section
      id="localizacao"
      className="py-20 sm:py-28 bg-[#FFFFFF] dark:bg-[#0A0A0A] border-b border-[#E0E0E0] dark:border-[#1F1F1F] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#555555] dark:text-[#8A8A8A] font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Onde Estamos</span>
            <span aria-hidden="true" className="text-[#888888] dark:text-[#555555]">·</span>
            <span>Estúdio & Atendimento</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212] dark:text-white mb-4">
            Localização e Atendimento
          </h2>
          <p className="text-base text-[#4A4A4A] dark:text-[#A3A3A3] font-light leading-relaxed">
            Atendimento presencial no estúdio próprio em Caucaia e cobertura externa em Fortaleza e municípios vizinhos (mediante confirmação prévia conforme a data e local do evento).
          </p>
        </div>

        {/* 2-Column Grid: Location Details + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Details Card */}
          <div className="lg:col-span-5 bg-[#F9F9F9] dark:bg-[#121212] border border-[#E0E0E0] dark:border-[#262626] p-6 sm:p-8 space-y-6 rounded-sm shadow-xl">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#666666] dark:text-[#888888] block mb-1 font-semibold">
                Endereço do Estúdio
              </span>
              <h3 className="font-display text-xl font-bold text-[#121212] dark:text-white mb-3">
                {COMPANY.name}
              </h3>
              <div className="space-y-1 text-sm text-[#4A4A4A] dark:text-[#A3A3A3] font-light">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#121212] dark:text-white shrink-0 mt-1" />
                  <span>
                    {COMPANY.address.street}, {COMPANY.address.detail}<br />
                    {COMPANY.address.neighborhood}<br />
                    <strong className="text-[#121212] dark:text-white font-medium">
                      {COMPANY.address.city} — {COMPANY.address.state}
                    </strong>
                  </span>
                </p>
              </div>

              {/* Action Button: Como Chegar */}
              <div className="mt-5">
                <a
                  href={COMPANY.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#121212] hover:bg-[#262626] text-white dark:bg-white dark:hover:bg-[#E5E5E5] dark:text-[#0A0A0A] px-5 py-3 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-md cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Como chegar pelo Google Maps</span>
                </a>
              </div>
            </div>

            {/* Parking & Format notes */}
            <div className="pt-6 border-t border-[#EAEAEA] dark:border-[#262626] space-y-3.5">
              <div className="flex items-start gap-3 text-xs text-[#4A4A4A] dark:text-[#A3A3A3]">
                <Car className="w-4 h-4 text-[#121212] dark:text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#121212] dark:text-white block font-medium">Estacionamento:</strong>
                  <span>{COMPANY.address.parking}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-[#4A4A4A] dark:text-[#A3A3A3]">
                <Globe className="w-4 h-4 text-[#121212] dark:text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#121212] dark:text-white block font-medium">Cobertura Regional:</strong>
                  <span>Atendimento presencial no estúdio e eventos em Fortaleza e cidades vizinhas (a confirmar conforme o local do evento).</span>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="pt-6 border-t border-[#EAEAEA] dark:border-[#262626] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#666666] dark:text-[#888888] font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#121212] dark:text-white" />
                <span>Horário de Funcionamento</span>
              </div>
              <div className="text-sm text-[#4A4A4A] dark:text-[#A3A3A3] space-y-0.5">
                <p className="text-[#121212] dark:text-white font-medium">{COMPANY.hours.weekdaysText}</p>
                <p className="text-xs text-[#666666] dark:text-[#8A8A8A] italic">{COMPANY.hours.outOfHoursText}</p>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 bg-[#EFEFEF] dark:bg-[#121212] border border-[#E0E0E0] dark:border-[#262626] rounded-sm overflow-hidden shadow-xl aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:h-[480px]">
            <iframe
              src={COMPANY.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do estúdio Live In Foco no Google Maps"
              className="w-full h-full dark:filter dark:invert-[90%] dark:hue-rotate-180 dark:brightness-90 dark:contrast-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
