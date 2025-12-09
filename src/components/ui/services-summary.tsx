import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Search, ShieldCheck } from 'lucide-react';

const services = [
    {
        icon: <Users className="w-8 h-8" />,
        title: "Contract Staffing",
        description: "Flexible workforce solutions to meet fluctuating demand with skilled professionals.",
    },
    {
        icon: <Briefcase className="w-8 h-8" />,
        title: "Permanent Recruitment",
        description: "Finding long-term talent that fits your company culture and technical requirements.",
    },
    {
        icon: <Search className="w-8 h-8" />,
        title: "Executive Search",
        description: "Specialized headhunting for senior leadership roles across various industries.",
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "HR Consulting",
        description: "Strategic advice on workforce planning, compliance, and employee engagement.",
    },
];

export const ServicesSummary: React.FC = () => {
    return (
        <section id="services" className="py-24 relative bg-black">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        Comprehensive manpower solutions tailored to your unique requirements.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all group cursor-pointer"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-600/10 text-orange-500 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-red-600 group-hover:text-white transition-all duration-300 inline-block">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
