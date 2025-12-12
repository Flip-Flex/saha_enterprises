import { HeroSection } from '@/components/ui/hero-odyssey';
import { KeyStats } from '@/components/ui/key-stats';
import { ServicesSummary } from '@/components/ui/services-summary';
import { Industries } from '@/components/ui/industries';
import { SuccessStory } from '@/components/ui/success-story';
import { MobileManufacturing } from '@/components/ui/mobile-manufacturing';
import { DieCastingFeature } from '@/components/ui/die-casting-feature';
import { ClientNetwork } from '@/components/ui/client-network';
import { ContactSection } from '@/components/ui/contact-section';
import { AboutSection } from '@/components/ui/about-section';


import { NavBar } from '@/components/ui/tubelight-navbar';
import { Home, User, Briefcase, Layers, Network, Phone } from 'lucide-react';

function App() {
  console.log("Saha Enterprises - Full Site v1.1");

  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About Us', url: '#about', icon: User },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Sectors', url: '#sectors', icon: Layers },
    { name: 'Network', url: '#network', icon: Network },
    { name: 'Contact', url: '#contact', icon: Phone }
  ];

  return (
    <div className="bg-black min-h-screen text-slate-300 selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <NavBar items={navItems} />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content with Animated Background */}
      <div className="relative w-full overflow-hidden bg-transparent">


        {/* Content Layer */}
        <div className="relative z-10">
          {/* Key Stats */}
          <KeyStats />

          {/* About Section */}
          <AboutSection />

          {/* Services Section */}
          <ServicesSummary />

          <div id="sectors">
            {/* Industries Section */}
            <Industries />

            {/* New Mobile Manufacturing Section */}
            <MobileManufacturing />

            {/* New Die Casting Section */}
            <DieCastingFeature />
          </div>

          <div id="network">
            {/* New Client Network (Give/Ask) Section */}
            <ClientNetwork />
          </div>

          {/* Success Story */}
          <SuccessStory />

          {/* Contact Section */}
          <ContactSection />
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10 text-center text-slate-600 text-sm relative z-20">
        <p>&copy; 2024 Saha Enterprises. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
