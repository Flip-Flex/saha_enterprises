import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ExchangeItem {
    id: number;
    name: string;
}

const giveData: ExchangeItem[] = [
    { id: 1, name: "Kimil Padapai" },
    { id: 2, name: "Motherson Oragadam" },
    { id: 3, name: "Sparkmenda Pillaipakam" },
    { id: 4, name: "Venu Engineering Pillaipakam" },
    { id: 5, name: "PPAP Automotive Vallam" },
    { id: 6, name: "Gokul Engineering Oragadam" },
];

const askData: ExchangeItem[] = [
    { id: 1, name: "Foxcon Sunguvachathram" },
    { id: 2, name: "Samsung Sunguvachathram" },
    { id: 3, name: "Salcamp Sriperumbandur" },
    { id: 4, name: "unomenda Vallam" },
    { id: 5, name: "Yamaha Vallam" },
    { id: 6, name: "Apptive Vallam" },
];

export const ClientNetwork: React.FC = () => {
    return (
        <section className="py-24 bg-transparent border-t border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Client Network
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
                        Facilitating seamless manpower exchange and deployment across key industrial hubs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    {/* GIVE SECTION */}
                    <div className="space-y-6">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-center text-white mb-8"
                        >
                            GIVE
                        </motion.h3>

                        <div className="space-y-4">
                            {giveData.map((item, index) => (
                                <motion.div
                                    key={`give-${item.id}`}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-5 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 shadow-lg border border-orange-400/30 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-orange-700" strokeWidth={3} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-yellow-300 text-xs font-bold uppercase tracking-wider mb-0.5">Give</div>
                                        <div className="text-white text-lg font-medium leading-snug">{item.name}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ASK SECTION */}
                    <div className="space-y-6">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-center text-white mb-8"
                        >
                            ASK
                        </motion.h3>

                        <div className="space-y-4">
                            {askData.map((item, index) => (
                                <motion.div
                                    key={`ask-${item.id}`}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-5 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 shadow-lg border border-orange-400/30 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-orange-700" strokeWidth={3} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-yellow-300 text-xs font-bold uppercase tracking-wider mb-0.5">Ask</div>
                                        <div className="text-white text-lg font-medium leading-snug">{item.name}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
