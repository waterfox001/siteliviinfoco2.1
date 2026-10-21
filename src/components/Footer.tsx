import { COMPANY, getWhatsAppUrl } from '../data/company';
import { Instagram, MessageCircle, Facebook, MapPin, Phone, Clock } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useTheme } from '../context/ThemeContext';

export function Footer() {
  const { theme } = useTheme();
  const currentYear = 2026;

  const footerLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre a Empresa', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Álbuns Artesanais', href: '#albuns' },
    { label: 'Por Que a Live In Foco', href: '#diferenciais' },
    { label: 'Perguntas Frequentes', href: '#faq' },
    { label: 'Localização', href: '#localizacao' }
  ];

  return (
    <footer className="bg-[#F5F5F5] dark:bg-[#0A0A0A] text-[#555555] dark:text-[#8A8A8A] border-t border-[#E0E0E0] dark:border-[#1F1F1F] pt-14 pb-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-10">
          {/* Brand & Brief Presentation (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3.5">
            <BrandLogo size="lg" theme={theme} />

            <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A3A3A3] font-light leading-relaxed max-w-sm">
              Mais de três décadas contando histórias através da fotografia. Cuidado, iluminação precisa e afeto para eternizar as memórias mais valiosas da sua família.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#EAEAEA] hover:bg-[#121212] hover:text-white dark:bg-[#141414] dark:hover:bg-white dark:hover:text-black text-[#333333] dark:text-[#A3A3A3] border border-[#D5D5D5] dark:border-[#262626] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Instagram oficial da Live In Foco"
                title="Instagram oficial"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={COMPANY.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#EAEAEA] hover:bg-[#121212] hover:text-white dark:bg-[#141414] dark:hover:bg-white dark:hover:text-black text-[#333333] dark:text-[#A3A3A3] border border-[#D5D5D5] dark:border-[#262626] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Facebook da Live In Foco"
                title="Facebook oficial"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#EAEAEA] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] dark:bg-[#141414] dark:hover:bg-[#25D366] dark:hover:text-white text-[#333333] dark:text-[#A3A3A3] border border-[#D5D5D5] dark:border-[#262626] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="WhatsApp oficial da Live In Foco"
                title="WhatsApp oficial"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#121212] dark:text-white">
              Navegação
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#555555] hover:text-[#121212] dark:text-[#8A8A8A] dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact Info (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#121212] dark:text-white">
              Atendimento
            </h4>
            <div className="space-y-2.5 text-[#555555] dark:text-[#8A8A8A] font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#121212] dark:text-white shrink-0 mt-0.5" />
                <span>
                  {COMPANY.address.street}, {COMPANY.address.detail}<br />
                  {COMPANY.address.neighborhood} — {COMPANY.address.city}, {COMPANY.address.state}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span className="text-[#121212] dark:text-[#E5E5E5] font-medium">WhatsApp: {COMPANY.phoneDisplay}</span>
              </p>
              
              {/* Horários com alto contraste e ícone de relógio */}
              <div className="pt-2 border-t border-[#E0E0E0] dark:border-[#1F1F1F] space-y-1">
                <p className="flex items-start gap-2 text-xs text-[#222222] dark:text-[#E5E5E5]">
                  <Clock className="w-3.5 h-3.5 text-[#121212] dark:text-white shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#121212] dark:text-white block font-medium">Horário de Atendimento:</strong>
                    <span className="text-[#444444] dark:text-[#D4D4D4]">{COMPANY.hours.weekdaysText}</span>
                  </span>
                </p>
                <p className="text-[11px] text-[#666666] dark:text-[#A3A3A3] italic pl-5.5">
                  {COMPANY.hours.outOfHoursText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Credit Row: Centralizado na parte mais inferior */}
        <div className="pt-8 border-t border-[#E0E0E0] dark:border-[#1F1F1F] flex flex-col items-center justify-center text-center space-y-2.5">
          <p className="text-xs text-[#666666] dark:text-[#8A8A8A] font-light">
            © {currentYear} Live In Foco. Todos os direitos reservados.
          </p>

          <p className="text-xs text-[#555555] dark:text-[#A3A3A3] font-light inline-flex items-center gap-1.5 pt-1">
            <span>Feito por</span>
            <a
              href="https://localway.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#121212] hover:text-black dark:text-white dark:hover:text-[#D4D4D4] font-semibold tracking-wide transition-colors cursor-pointer hover:underline underline-offset-4 decoration-current"
            >
              Localway
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
