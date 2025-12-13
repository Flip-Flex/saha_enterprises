import React from 'react';
import { motion } from 'framer-motion';
import dieCastingImage from '@/assets/die-casting.png';

export const DieCastingFeature: React.FC = () => {
    return (
        <section className="relative h-[70vh] flex items-center overflow-hidden bg-black">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={dieCastingImage}
                    alt="Die Casting"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl"
                >
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
                        Die <br />
                        <span className="text-orange-500">Casting</span> <br />
                        Industry
                    </h2>
                    <div className="h-2 w-32 bg-red-600 rounded-full mb-8" />
                    <p className="text-slate-300 text-xl leading-relaxed max-w-lg">
                        Precision engineering and high-quality casting solutions for automotive and industrial components.
                    </p>
                </motion.div>
            </div>

            {/* Decorative SVG */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 opacity-20 pointer-events-none">
                <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M300 0L600 300L300 600L0 300L300 0Z" stroke="#EA580C" strokeWidth="2" />
                    <path d="M300 50L550 300L300 550L50 300L300 50Z" stroke="#DC2626" strokeWidth="2" />
                    <path d="M300 100L500 300L300 500L100 300L300 100Z" stroke="#EA580C" strokeWidth="2" />
                </svg>
            </div>
        </section>
    );
};
