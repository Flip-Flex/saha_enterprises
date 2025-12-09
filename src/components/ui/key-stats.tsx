import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Successful Placements", value: "10,000+" },
    { label: "Partner Companies", value: "500+" },
    { label: "Industries Served", value: "25+" },
    { label: "Years of Excellence", value: "12+" },
];

export const KeyStats: React.FC = () => {
    return (
        <div className="w-full bg-black/50 backdrop-blur-sm border-y border-white/5 py-12 relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center group"
                    >
                        <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                            {stat.value}
                        </h3>
                        <p className="text-slate-400 font-medium tracking-wide uppercase text-sm">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange-600 rounded-full blur-[100px]"></div>
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-red-600 rounded-full blur-[100px]"></div>
            </div>
        </div>
    );
};
