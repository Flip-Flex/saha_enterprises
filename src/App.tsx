import { HeroSection } from '@/components/ui/hero-odyssey';
import { KeyStats } from '@/components/ui/key-stats';
import { ServicesSummary } from '@/components/ui/services-summary';
import { Industries } from '@/components/ui/industries';
import { SuccessStory } from '@/components/ui/success-story';
import { MobileManufacturing } from '@/components/ui/mobile-manufacturing';
import { DieCastingFeature } from '@/components/ui/die-casting-feature';
import { ClientNetwork } from '@/components/ui/client-network';
import { ContactSection } from '@/components/ui/contact-section';

function App() {
  console.log("Saha Enterprises - Full Site v1.0");
  return (
    <div className="bg-black min-h-screen text-slate-300 selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md border-b border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-br from-orange-400 to-red-600 bg-clip-text text-transparent">
            Saha Enterprises
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-orange-400 transition-colors">Services</a>
            <a href="#sectors" className="hover:text-orange-400 transition-colors">Sectors</a>
            <a href="#network" className="hover:text-orange-400 transition-colors">Network</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
            <button className="px-5 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Key Stats */}
      <KeyStats />

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

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10 text-center text-slate-600 text-sm">
        <p>&copy; 2024 Saha Enterprises. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
