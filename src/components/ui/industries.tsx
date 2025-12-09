import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Hammer, HeartPulse, HardHat, ShoppingBag, Utensils } from 'lucide-react';

const industries = [
    { name: 'Information Technology', icon: <Monitor />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Manufacturing', icon: <Hammer />, color: 'from-orange-500 to-red-500' },
    { name: 'Healthcare', icon: <HeartPulse />, color: 'from-green-500 to-emerald-500' },
    { name: 'Construction', icon: <HardHat />, color: 'from-yellow-500 to-amber-500' },
    { name: 'Retail', icon: <ShoppingBag />, color: 'from-pink-500 to-rose-500' },
    { name: 'Hospitality', icon: <Utensils />, color: 'from-purple-500 to-violet-500' },
];

export const Industries: React.FC = () => {
    return (
        <section id="industries" className="py-24 bg-transparent border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Industries We Serve
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Specialized talent acquisition across diverse sectors.
                        </p>
                    </div>
                    <button className="px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors">
                        View All Sectors
                    </button>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {industries.map((ind, index) => (
                        <motion.a
                            key={index}
                            href={`#${ind.name.toLowerCase().replace(' ', '-')}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-white/20 transition-all overflow-hidden aspect-square"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${ind.color} transition-opacity duration-500`} />

                            <div className={`mb-4 p-3 rounded-full bg-white/5 text-white group-hover:bg-gradient-to-br ${ind.color} group-hover:scale-110 transition-all duration-300`}>
                                {React.cloneElement(ind.icon as React.ReactElement<any>, { size: 28 })}
                            </div>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-white text-center z-10">
                                {ind.name}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};
