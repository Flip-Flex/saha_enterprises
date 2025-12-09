import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import workersImage from '@/assets/workers.png';

export const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-zinc-900/50 border-t border-white/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Thank You Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                        <HeartHandshake className="text-white w-8 h-8" />
                    </div>
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
                        Thank You <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">For Your Attention</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all duration-300 shadow-md">
                                    <Phone className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 font-medium mb-1">Call Us</div>
                                    <div className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors tracking-wide">63822 54029</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-all duration-300 shadow-md">
                                    <Mail className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 font-medium mb-1">Email Us</div>
                                    <div className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">contact@sahaenterprises.com</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all duration-300 shadow-md">
                                    <MapPin className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 font-medium mb-1">Visit Us</div>
                                    <div className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">123 Business Park, Tech City, India</div>
                                </div>
                            </div>
                        </div>

                        {/* Image Decoration */}
                        <div className="mt-12 rounded-3xl overflow-hidden border border-white/10 relative h-64 grayscale hover:grayscale-0 transition-all duration-700">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                            <img src={workersImage} alt="Workers" className="w-full h-full object-cover" />
                            <div className="absolute bottom-6 left-6 z-20">
                                <div className="text-orange-400 font-bold text-lg">Saha Enterprises</div>
                                <div className="text-white/80 text-sm">Empowering Workforce</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-black border border-white/10 shadow-2xl relative overflow-hidden"
                    >
                        {/* Decorative Gradient Blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send a Message</h3>

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-orange-900/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                Send Message
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
