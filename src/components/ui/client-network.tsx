import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2 } from 'lucide-react';

interface ExchangeItem {
    id: number;
    name: string;
    location?: string;
}

const giveData: ExchangeItem[] = [
    { id: 1, name: "Kimil", location: "Padapai" },
    { id: 2, name: "Motherson", location: "Oragadam" },
    { id: 3, name: "Sparkmenda", location: "Pillaipakam" },
    { id: 4, name: "RICO", location: "Oragadam" },
    { id: 5, name: "Jai Hind", location: "Thiruvalur" },
    { id: 6, name: "Indurans", location: "Irungatukottai" },
];

const askData: ExchangeItem[] = [
    { id: 1, name: "Foxcon", location: "Sunguvachathram" },
    { id: 2, name: "Samsung", location: "Sunguvachathram" },
    { id: 3, name: "Salcamp", location: "Sriperumbandur" },
    { id: 4, name: "Swing Shetter", location: "Cheyyar SIPCOT" },
    { id: 5, name: "Royal Enfield", location: "Cheyyar Sipcot" },
    { id: 6, name: "Autolive", location: "Cheyyar SIPCOT" },
];

export const ClientNetwork: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'give' | 'ask'>('give');

    return (
        <section className="py-24 bg-transparent border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Client Network
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
                        Facilitating seamless manpower exchange and deployment across key industrial hubs.
                    </p>

                    {/* Tabs / Toggle */}
                    <div className="inline-flex p-1 bg-black/50 rounded-full border border-white/10 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full transition-all duration-300 w-1/2"
                            style={{ transform: activeTab === 'give' ? 'translateX(0%)' : 'translateX(100%)' }} />

                        <button
                            onClick={() => setActiveTab('give')}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase transition-colors ${activeTab === 'give' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                        >
                            GIVE (Supply)
                        </button>
                        <button
                            onClick={() => setActiveTab('ask')}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase transition-colors ${activeTab === 'ask' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                        >
                            ASK (Demand)
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(activeTab === 'give' ? giveData : askData).map((item, index) => (
                        <motion.div
                            key={`${activeTab}-${item.id}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between">
                                <div className={`p-3 rounded-xl ${activeTab === 'give' ? 'bg-orange-500/20 text-orange-400' : 'bg-red-500/20 text-red-400'}`}>
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <div className="text-xs font-mono text-slate-500 px-2 py-1 bg-black rounded border border-white/5">
                                    ID: {item.id.toString().padStart(2, '0')}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mt-4 mb-2 group-hover:text-orange-400 transition-colors">
                                {item.name}
                            </h3>

                            {item.location && (
                                <div className="flex items-center gap-2 text-slate-400 text-sm">
                                    <MapPin className="w-4 h-4" />
                                    <span>{item.location}</span>
                                </div>
                            )}

                            {/* Decorative bar */}
                            <div className={`mt-6 h-1 w-full rounded-full bg-gradient-to-r ${activeTab === 'give' ? 'from-orange-600/20 to-orange-600 ' : 'from-red-600/20 to-red-600'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
