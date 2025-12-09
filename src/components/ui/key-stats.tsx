import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import warehouseBg from '@/assets/warehouse-blurred-bg.png';

export const KeyStats: React.FC = () => {
    return (
        <section className="relative w-full bg-white py-20 overflow-hidden font-sans">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={warehouseBg}
                    alt="Warehouse Background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold text-black tracking-tight"
                    >
                        INTRODUCTION
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-xl text-justify"
                    >
                        Saha Enterprises is a trusted and dynamic service provider committed to
                        delivering excellence across every project we undertake. With a focus on
                        quality, reliability, and customer satisfaction, we provide end-to-end
                        manpower solutions
                    </motion.p>

                    {/* Dotted pattern decoration */}
                    <div className="hidden md:grid grid-cols-6 gap-2 w-24 opacity-30 mt-8">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-black rounded-full" />
                        ))}
                    </div>
                </div>

                {/* Right Content - Cards */}
                <div className="relative flex flex-col items-end space-y-6">
                    {/* Experience Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-[#FA4616] p-8 rounded-xl shadow-xl w-full max-w-md relative overflow-hidden group hover:scale-105 transition-transform duration-300"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <CheckCircle2 className="text-[#ccff00] w-6 h-6" />
                            <h3 className="text-xl font-bold text-[#ccff00] uppercase tracking-wider">Experience</h3>
                        </div>
                        <p className="text-5xl font-bold text-white mt-2">4 + Years</p>
                    </motion.div>

                    {/* Supply Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-[#FA4616] p-8 rounded-xl shadow-xl w-full max-w-md relative overflow-hidden group hover:scale-105 transition-transform duration-300"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <CheckCircle2 className="text-[#ccff00] w-6 h-6" />
                            <h3 className="text-xl font-bold text-[#ccff00] uppercase tracking-wider">Supply</h3>
                        </div>
                        <p className="text-4xl font-bold text-white mt-2 leading-tight">20+ <br /><span className="text-2xl font-normal">Manufacturing Units</span></p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Left Banner - Employees */}
            <motion.div
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
                className="absolute bottom-10 left-0 bg-[#FA4616] py-6 px-10 rounded-r-full shadow-lg z-20"
            >
                <div className="flex flex-col">
                    <span className="text-4xl font-bold text-[#ccff00]">2000 +</span>
                    <span className="text-2xl text-white font-medium">Employees</span>
                </div>
            </motion.div>
        </section>
    );
};
