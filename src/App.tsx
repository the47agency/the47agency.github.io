import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { WorkPage } from './pages/WorkPage';
import { InsightsPage } from './pages/InsightsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const getInitialPath = () => {
    const hash = window.location.hash.replace(/^#/, '');
    if (hash) return hash;
    const pathname = window.location.pathname;
    return pathname && pathname !== '/' ? pathname : '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Sync state on hashchange & popstate
  useEffect(() => {
    const handleRouteSync = () => {
      const path = getInitialPath();
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleRouteSync);
    window.addEventListener('popstate', handleRouteSync);
    return () => {
      window.removeEventListener('hashchange', handleRouteSync);
      window.removeEventListener('popstate', handleRouteSync);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route Dispatcher
  const renderRoute = () => {
    const cleanPath = currentPath.toLowerCase();

    if (cleanPath === '/' || cleanPath === '') {
      return <HomePage onNavigate={navigateTo} />;
    }

    if (cleanPath.startsWith('/about')) {
      const sub = cleanPath.split('/')[2] || 'story';
      return <AboutPage initialTab={sub} onNavigate={navigateTo} />;
    }

    if (cleanPath.startsWith('/capabilities')) {
      return <CapabilitiesPage currentPath={currentPath} onNavigate={navigateTo} />;
    }

    if (cleanPath.startsWith('/industries')) {
      return <IndustriesPage currentPath={currentPath} onNavigate={navigateTo} />;
    }

    if (cleanPath.startsWith('/work')) {
      return <WorkPage currentPath={currentPath} onNavigate={navigateTo} />;
    }

    if (cleanPath.startsWith('/insights')) {
      return <InsightsPage currentPath={currentPath} onNavigate={navigateTo} />;
    }

    if (cleanPath.startsWith('/resources')) {
      return <ResourcesPage currentPath={currentPath} onNavigate={navigateTo} />;
    }

    if (cleanPath.startsWith('/contact')) {
      return <ContactPage currentPath={currentPath} onNavigate={navigateTo} />;
    }

    return <HomePage onNavigate={navigateTo} />;
  };

  return (
    <div className="min-h-screen bg-[#08080A] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <main className="flex-1 w-full flex flex-col">
        {renderRoute()}
      </main>

      <Footer onNavigate={navigateTo} />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
