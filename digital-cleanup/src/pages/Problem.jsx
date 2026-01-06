import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GlassCard } from '../components/UI';
import { AlertTriangle, Battery, BrainCircuit } from 'lucide-react';

const Problem = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="pt-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">The Dual Crisis</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
           Information trash is not just a nuisance. It is a pollutant that degrades both our minds and our planet.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
        {/* Sticky Left Column */}
        <div className="md:sticky md:top-32 h-fit">
             <GlassCard className="border-secondary/50 shadow-[0_0_30px_rgba(255,0,85,0.1)]">
                <div className="flex items-center gap-4 mb-6 text-secondary">
                    <BrainCircuit size={40} />
                    <h2 className="text-2xl font-bold">Mental Erosion</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                    <strong>Cognitive Exhaustion:</strong> Academic research confirms that information overload significantly reduces comprehension depth and decision quality (Eppler & Mengis, 2004).
                </p>
                <p className="text-gray-300 leading-relaxed">
                    <strong>Anxiety & Fatigue:</strong> Continuous exposure to high-frequency digital stimuli and emotional content is directly linked to attention fatigue and increased anxiety (Mark et al., 2015).
                </p>
                <div className="mt-8 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                     <div className="text-3xl font-mono font-bold text-white mb-2">8.2s</div>
                     <div className="text-sm text-secondary">Average human attention span (decreased from 12s in 2000)</div>
                </div>
             </GlassCard>
        </div>

        {/* Scrolling Right Column */}
        <div className="space-y-8">
            <GlassCard className="border-primary/50 shadow-[0_0_30px_rgba(0,242,234,0.1)]">
                <div className="flex items-center gap-4 mb-6 text-primary">
                    <Battery size={40} />
                    <h2 className="text-2xl font-bold">Environmental Cost</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                    The problem isn't just files "taking up space," but the <strong>continuous computation and transmission</strong> they trigger. Backups, syncing, indexing—all consume energy 24/7.
                </p>

                <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                        <span>Sending 1 long email</span>
                        <span className="font-mono text-primary">17g CO2e</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                        <span>Storing 1GB Data / Month</span>
                        <span className="font-mono text-primary">3.95g CO2e</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded border border-primary/30">
                        <span>Storing 1GB Data / Year</span>
                        <span className="font-mono text-primary font-bold">47.4g CO2e</span>
                    </div>
                </div>
             </GlassCard>

             <GlassCard>
                 <div className="flex items-center gap-4 mb-4 text-orange-400">
                    <AlertTriangle size={32} />
                    <h3 className="text-xl font-bold">Public Discourse</h3>
                 </div>
                 <p className="text-gray-400">
                     Low-quality content erodes the foundation of rational communication, destroying social trust and causing structural damage to public discussion (Habermas, 2006).
                 </p>
             </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Problem;
