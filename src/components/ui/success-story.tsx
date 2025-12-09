import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const SuccessStory: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-red-900/10" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-600 mb-8"
                >
                    <Quote className="text-white w-8 h-8" />
                </motion.div>

                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-10"
                >
                    "Saha Enterprises helped us ramp up our production line workforce in record time. Their vetting process is impeccable and the quality of talent is outstanding."
                </motion.blockquote>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                        Director of Operations
                    </div>
                    <div className="text-slate-500 mt-2">
                        Leading Manufacturing Firm
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
