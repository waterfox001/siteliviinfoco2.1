import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { FullPortfolioPage } from './components/FullPortfolioPage';
import { ProductsSection } from './components/ProductsSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'portfolio'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#portfolio-completo') {
        setCurrentView('portfolio');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (currentView === 'portfolio' && !window.location.hash.startsWith('#portfolio-completo')) {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentView]);

  const handleOpenFullPortfolio = () => {
    window.location.hash = '#portfolio-completo';
    setCurrentView('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = (targetHash: string = '#portfolio') => {
    window.location.hash = targetHash;
    setCurrentView('home');
    setTimeout(() => {
      const id = targetHash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-[#121212] dark:text-white selection:bg-[#121212] selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-200">
        {currentView === 'portfolio' ? (
          <FullPortfolioPage onBackToHome={() => handleBackToHome('#portfolio')} />
        ) : (
          <>
            {/* Top Navigation with Theme Toggle and Direct WhatsApp Action */}
            <Navbar onNavigateHome={handleBackToHome} />

            {/* Main Page Content */}
            <main>
              {/* 1. Hero: Requested Slogan, 2 CTAs, 3 Relevant Differentials */}
              <Hero onExploreWork={handleOpenFullPortfolio} />

              {/* 2. Sobre: "Nossa história" with Smooth Automatic Carousel of Real Photos */}
              <AboutSection />

              {/* 3. Serviços: 6 Services preserved, "Consulte um orçamento personalizado" */}
              <ServicesSection />

              {/* 4. Portfólio: 6 Curated Showcase Highlights & Full Portfolio Trigger */}
              <PortfolioSection onOpenFullPortfolio={handleOpenFullPortfolio} />

              {/* 5. Álbuns: Craft Albums Section with Two Demonstration Videos Side-by-Side */}
              <ProductsSection />

              {/* 6. Por Que Escolher a Live em Foco (3 Pillars) & Como Funciona (4 Steps) */}
              <DifferentialsSection />

              {/* 7. Perguntas Frequentes (Useful, Non-Redundant Questions) */}
              <FaqSection />

              {/* 8. Localização e Atendimento (Map, Street Parking, Regional Coverage Note, No Personal Email) */}
              <LocationSection />

              {/* 9. Final CTA Section */}
              <FinalCTASection />
            </main>

            {/* Compact Professional Footer with Localway Credit */}
            <Footer />
          </>
        )}

        {/* Interactive Floating WhatsApp Button with Dedicated Consultation Window */}
        <WhatsAppFloatingButton />
      </div>
    </ThemeProvider>
  );
}
