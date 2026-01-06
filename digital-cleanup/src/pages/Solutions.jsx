import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Shield, Clock, TrendingDown } from 'lucide-react';
import { SectionTitle, GlassCard } from '../components/UI';

const FeatureBlock = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="flex flex-col items-center text-center p-6"
    >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-primary/5 group hover:shadow-primary/20 transition-all duration-300">
            <Icon size={32} className="text-gray-400 group-hover:text-primary transition-colors" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
);

const Solutions = () => {
  return (
    <div className="pt-10 pb-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
             <motion.span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">
                THE TOOLKIT
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white">Digital Hygiene App</h1>
        </div>

        {/* App Mockup Area */}
        <div className="relative h-[600px] mb-32 flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse-slow"></div>

            {/* Phone Mockup (CSS only) */}
            <motion.div
                initial={{ rotateX: 20, rotateY: -20, opacity: 0 }}
                whileInView={{ rotateX: 0, rotateY: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-[300px] h-[600px] bg-black border-[8px] border-gray-700 rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10"
            >
                <div className="absolute top-0 left-0 right-0 h-8 bg-black z-20 flex justify-center">
                    <div className="w-32 h-6 bg-black rounded-b-xl"></div>
                </div>
                {/* Screen Content */}
                <div className="w-full h-full bg-surface p-6 flex flex-col pt-12">
                    <div className="text-center mb-8">
                        <div className="text-primary text-sm mb-1">CARBON SAVED</div>
                        <div className="text-5xl font-mono font-bold text-white">1.2<span className="text-xl">kg</span></div>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                            <span className="text-sm">Duplicates</span>
                            <span className="text-red-400 text-xs">Clean (204MB)</span>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                            <span className="text-sm">Old Screenshots</span>
                            <span className="text-red-400 text-xs">Clean (50MB)</span>
                        </div>
                         <div className="mt-8 p-4 bg-primary/10 rounded-xl border border-primary/20 text-center">
                            <div className="text-xs text-primary mb-2">FRICTION INTERVENTION</div>
                            <div className="text-white font-bold">Hold on...</div>
                            <div className="text-[10px] text-gray-400 mt-1">Reflecting for 5 seconds</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureBlock
                icon={TrendingDown}
                title="Smart Cleanup & Viz"
                desc="Scans for duplicates and low-value files, instantly converting data volume into CO2e saved metrics."
                delay={0.1}
            />
            <FeatureBlock
                icon={Clock}
                title="Friction Intervention"
                desc="A '5-second countdown' checkpoint before mass-forwarding to break the cycle of viral misinformation."
                delay={0.2}
            />
             <FeatureBlock
                icon={Shield}
                title="Risk Alerts"
                desc="Identifies bot patterns and scam scripts to build cognitive resilience, not censorship."
                delay={0.3}
            />
        </div>
    </div>
  );
};

export default Solutions;
