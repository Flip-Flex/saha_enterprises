import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Factory } from 'lucide-react';
import mobileMfgImage from '@/assets/mobile-manufacturing.png';

export const MobileManufacturing: React.FC = () => {
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-6">
                        <Factory className="w-4 h-4" />
                        <span className="text-sm font-medium uppercase tracking-wider">Industrial Sector</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        Mobile <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                            Manufacturing
                        </span> <br />
                        Industry
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Men Card */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-700 border border-orange-500 shadow-lg group hover:-translate-y-2 transition-transform duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                                <h3 className="text-xl font-bold text-white">Men</h3>
                            </div>
                            <div className="space-y-2">
                                <div className="px-4 py-2 bg-black/20 rounded-lg text-white font-medium text-center backdrop-blur-sm">
                                    Loading
                                </div>
                                <div className="px-4 py-2 bg-black/20 rounded-lg text-white font-medium text-center backdrop-blur-sm">
                                    Unloading
                                </div>
                            </div>
                        </div>

                        {/* Women Card */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 border border-red-500 shadow-lg group hover:-translate-y-2 transition-transform duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                                <h3 className="text-xl font-bold text-white">Women</h3>
                            </div>
                            <div className="w-full">
                                <div className="px-4 py-3 bg-black/20 rounded-lg text-white font-medium text-center backdrop-blur-sm">
                                    Assemble
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <img
                            src={mobileMfgImage}
                            alt="Mobile Manufacturing"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    {/* Graphical Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-600/20 rounded-full blur-3xl -z-10" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl -z-10" />
                </motion.div>

            </div>
        </section>
    );
};
