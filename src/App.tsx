import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { EligibilityModal } from './components/EligibilityModal';
import { StartupDetailModal } from './components/StartupDetailModal';
import { TourBookingModal } from './components/TourBookingModal';

import { HomeScreen } from './views/HomeScreen';
import { AboutScreen } from './views/AboutScreen';
import { IncubationScreen } from './views/IncubationScreen';
import { ProgramsScreen } from './views/ProgramsScreen';
import { StartupsScreen } from './views/StartupsScreen';
import { PartnershipsScreen } from './views/PartnershipsScreen';
import { ContactScreen } from './views/ContactScreen';

import { Toaster } from 'react-hot-toast';

import { STARTUPS_DATA, Startup, Program } from './data/mockData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);
  const [prefillData, setPrefillData] = useState<{ trl: string; stage: string; grants: string } | null>(null);
  const [highlightTeamId, setHighlightTeamId] = useState<string | null>(null);

  // Global keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenStartupById = (id: string) => {
    const startup = STARTUPS_DATA.find((s) => s.id === id);
    if (startup) {
      setSelectedStartup(startup);
    }
  };

  const handleSelectStartupFromSearch = (id: string) => {
    handleOpenStartupById(id);
  };

  const handleSelectProgramFromSearch = (_programId: string) => {
    setCurrentTab('programs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTeamFromSearch = (teamId: string) => {
    setHighlightTeamId(teamId);
    setCurrentTab('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApplyWithAssessment = (data: { trl: string; stage: string; grants: string }) => {
    setPrefillData(data);
    setCurrentTab('incubation');
    setTimeout(() => {
      const el = document.getElementById('htic-mti-incubation-application');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  const handleApplyForProgram = (_program: Program) => {
    setCurrentTab('incubation');
    setTimeout(() => {
      const el = document.getElementById('htic-mti-incubation-application');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-[#111c2d]">
      {/* Top Fixed Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenEligibility={() => setIsEligibilityOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-16 sm:pt-20 xl:pt-[160px]">
        {currentTab === 'home' && (
          <HomeScreen
            onNavigateTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenStartup={handleOpenStartupById}
            onOpenEligibility={() => setIsEligibilityOpen(true)}
            onOpenTour={() => setIsTourOpen(true)}
          />
        )}

        {currentTab === 'about' && (
          <AboutScreen
            onNavigateTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenTour={() => setIsTourOpen(true)}
            selectedTeamId={highlightTeamId}
          />
        )}

        {currentTab === 'incubation' && (
          <IncubationScreen
            onOpenEligibility={() => setIsEligibilityOpen(true)}
            prefillData={prefillData}
          />
        )}

        {currentTab === 'programs' && (
          <ProgramsScreen
            onApplyForProgram={handleApplyForProgram}
            onNavigateTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'startups' && (
          <StartupsScreen
            onOpenStartupModal={(startup) => setSelectedStartup(startup)}
            onNavigateTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'partnerships' && (
          <PartnershipsScreen
            onNavigateTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'contact' && (
          <ContactScreen onOpenTour={() => setIsTourOpen(true)} />
        )}
      </main>

      {/* Global Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectStartup={handleSelectStartupFromSearch}
        onSelectProgram={handleSelectProgramFromSearch}
        onSelectTeam={handleSelectTeamFromSearch}
      />

      <EligibilityModal
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
        onApplyWithData={handleApplyWithAssessment}
      />

      <StartupDetailModal
        startup={selectedStartup}
        onClose={() => setSelectedStartup(null)}
      />

      <TourBookingModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
      />

      {/* Global Institutional Footer */}
      <Footer
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenTourModal={() => setIsTourOpen(true)}
      />

      {/* Global Toaster for Notifications */}
      <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
    </div>
  );
}
