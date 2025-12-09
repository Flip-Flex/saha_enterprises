import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, ShieldCheck } from 'lucide-react';
import aboutImage from '@/assets/about-team.png';

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Image Container */}
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img src={aboutImage} alt="About Saha Enterprises" className="w-full h-full object-cover" />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* Floating Stats Card */}
                        <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-3xl font-bold text-white">4+</div>
                                    <div className="text-sm text-slate-300">Years Industry Experience</div>
                                </div>
                                <div className="h-10 w-[1px] bg-white/20" />
                                <div>
                                    <div className="text-3xl font-bold text-white">100%</div>
                                    <div className="text-sm text-slate-300">Compliance Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-600/20 rounded-full blur-3xl -z-10" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 mb-6">
                        <Users className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-medium uppercase tracking-wider">About Us</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Bridging the Gap Between <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                            Talent & Opportunity
                        </span>
                    </h2>

                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        At Saha Enterprises, we believe that the right people are the catalyst for business growth. Established with a vision to redefine manpower solutions, we specialize in connecting industry leaders with skilled professionals who drive results.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                                    <Target className="w-5 h-5 text-orange-500" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                                <p className="text-slate-400">To empower businesses with workforce agility and provide individuals with meaningful career pathways.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                                    <ShieldCheck className="w-5 h-5 text-red-500" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Why Choose Us?</h3>
                                <p className="text-slate-400">Rigorous vetting, rapid deployment, and a commitment to 100% statutory compliance.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
