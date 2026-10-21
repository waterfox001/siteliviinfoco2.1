import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Menu, X, Sun, Moon, MoreHorizontal } from 'lucide-react';
import { getWhatsAppUrl } from '../data/company';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onNavigateHome?: (targetHash?: string) => void;
}

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Álbuns', href: '#albuns' },
  { label: 'Por Que Nós', href: '#diferenciais' },
  { label: 'Dúvidas', href: '#faq' },
  { label: 'Localização', href: '#localizacao' }
];

export function Navbar({ onNavigateHome }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { theme, toggleTheme } = useTheme();

  // Scroll listener fluido com requestAnimationFrame e listener passivo
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled((prev) => {
            const next = window.scrollY > 20;
            return prev !== next ? next : prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ao abrir o site, expande automaticamente o menu para apresentar os links disponíveis
  useEffect(() => {
    setMenuOpen(true);
    const timer = setTimeout(() => {
      setMenuOpen((current) => {
        // Se o usuário ainda não interagiu, recolhe suavemente
        return hasInteracted ? current : false;
      });
    }, 5000);

    return () => {
      clearTimeout(timer);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, [hasInteracted]);

  // Fechar ao tocar fora ou pressionar ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setHasInteracted(true);
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setHasInteracted(true);
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    // Não fecha abruptamente em hover para evitar fechamento indesejado
  };

  const handleToggleMenu = () => {
    setHasInteracted(true);
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (href: string) => {
    setHasInteracted(true);
    if (onNavigateHome) {
      onNavigateHome(href);
    }
    setMobileMenuOpen(false);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFFFF]/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#E0E0E0] dark:border-[#1F1F1F] shadow-sm py-3'
          : 'bg-[#FFFFFF]/90 dark:bg-[#0A0A0A]/90 backdrop-blur-xs border-b border-[#E0E0E0]/60 dark:border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Desktop Navigation: Botão de três tracinhos horizontais (☰) com todos os links */}
          <nav className="hidden lg:flex items-center" aria-label="Navegação principal">
            <div
              ref={menuRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative inline-flex items-center"
            >
              <button
                type="button"
                onClick={handleToggleMenu}
                aria-expanded={menuOpen}
                aria-haspopup="true"
                aria-label="Menu de navegação"
                title="Menu de navegação"
                className={`p-2 sm:p-2.5 rounded-sm transition-all cursor-pointer border flex items-center justify-center ${
                  menuOpen
                    ? 'bg-[#121212] text-white border-[#121212] dark:bg-white dark:text-[#0A0A0A] dark:border-white shadow-md'
                    : 'text-[#444444] dark:text-[#CCCCCC] hover:text-[#121212] dark:hover:text-white bg-[#F5F5F5] dark:bg-[#141414] border-[#D5D5D5] dark:border-[#2E2E2E] hover:border-[#AAAAAA] dark:hover:border-[#555555]'
                }`}
              >
                <Menu className="w-4 h-4" aria-hidden="true" />
              </button>

              {/* Menu com todos os destinos existentes */}
              {menuOpen && (
                <div
                  role="menu"
                  aria-label="Destinos de navegação"
                  className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-[#141414] border border-[#E0E0E0] dark:border-[#2E2E2E] rounded-sm shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150 motion-reduce:animate-none"
                >
                  <div className="px-3.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[#777777] dark:text-[#888888] border-b border-[#EAEAEA] dark:border-[#222222] mb-1 flex items-center justify-between">
                    <span>Navegação</span>
                    <span className="text-[9px] text-[#999999]">8 seções</span>
                  </div>
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      role="menuitem"
                      tabIndex={0}
                      onClick={() => handleLinkClick(link.href)}
                      className="block px-3.5 py-2 text-xs font-medium uppercase tracking-wider text-[#333333] dark:text-[#D4D4D4] hover:text-black dark:hover:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#1E1E1E] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Indicador mobile para home */}
          <div className="lg:hidden flex items-center">
            <a
              href="#inicio"
              onClick={(e) => {
                if (onNavigateHome) {
                  e.preventDefault();
                  onNavigateHome('#inicio');
                }
              }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-[#555555] dark:text-[#888888] hover:text-black dark:hover:text-white transition-colors"
            >
              Estúdio Fotográfico
            </a>
          </div>

          {/* Right Actions: Theme Toggle (Somente Ícone) + Primary WhatsApp CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme Toggle Button - Somente Ícone com Descrição Acessível */}
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

            {/* Desktop WhatsApp CTA */}
            <div className="hidden sm:flex items-center">
              <a
                href={getWhatsAppUrl('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA59] text-white px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md group whitespace-nowrap cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white transition-transform group-hover:scale-110" />
                <span>Fale Conosco</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#121212] dark:text-white bg-[#F5F5F5] dark:bg-[#141414] border border-[#D5D5D5] dark:border-[#262626] rounded-sm transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#121212] border-b border-[#E0E0E0] dark:border-[#262626] px-6 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#888888] pb-1 border-b border-[#EEEEEE] dark:border-[#222222]">
              Menu de Navegação
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm uppercase tracking-wider font-medium text-[#222222] dark:text-[#D4D4D4] hover:text-black dark:hover:text-white py-2 border-b border-[#EEEEEE] dark:border-[#1F1F1F] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 flex flex-col gap-3">
            <button
              onClick={toggleTheme}
              type="button"
              aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
              title={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm border border-[#D5D5D5] dark:border-[#2E2E2E] bg-[#F5F5F5] dark:bg-[#1A1A1A] text-xs font-semibold uppercase tracking-wider text-[#121212] dark:text-white transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#FDE047]" />
              ) : (
                <Moon className="w-4 h-4 text-[#121212]" />
              )}
            </button>

            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA59] text-white py-3 px-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Fale Conosco no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

