
import { HeroSection } from '@/components/ui/hero-odyssey';
import { Briefcase, Users, CheckCircle, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

function App() {
  console.log("Saha Enterprises - v2.0 Hero Odyssey");
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md border-b border-slate-800/50 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-br from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Saha Enterprises
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            <button className="px-5 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent mb-6">
              Our Expertise
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive manpower solutions tailored to your unique requirements across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-cyan-400" />,
                title: "Bulk Hiring",
                desc: "Rapid deployment of skilled workforce for large-scale projects and operations."
              },
              {
                icon: <Briefcase className="w-8 h-8 text-cyan-400" />,
                title: "Executive Search",
                desc: "Identifying and securing top-tier leadership talent for your organization."
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-cyan-400" />,
                title: "Background Verification",
                desc: "Thorough vetting processes to ensure trust, safety, and compliance."
              }
            ].map((service, index) => (
              <div key={index} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all group">
                <div className="mb-6 p-4 rounded-xl bg-slate-950 inline-block group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900/20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to transform your workforce?
              </h2>
              <p className="text-slate-400 mb-8 text-lg">
                Connect with Saha Enterprises today. Whether you're an employer looking for talent or a professional seeking opportunities, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">Call Us</div>
                    <div className="font-medium">+91 98765 43210</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">Email Us</div>
                    <div className="font-medium">contact@sahaenterprises.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">Visit Us</div>
                    <div className="font-medium">123 Business Park, Tech City, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">First Name</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-600 text-sm">
        <p>&copy; 2024 Saha Enterprises. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
