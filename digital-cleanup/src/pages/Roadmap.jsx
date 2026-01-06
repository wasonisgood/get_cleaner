import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GlassCard } from '../components/UI';

const Roadmap = () => {
    const steps = [
        {
            phase: "Phase 1",
            title: "Research & Definition",
            items: ["Carbon footprint model validation", "Email Carbon Calculator Launch"],
            status: "completed"
        },
        {
            phase: "Phase 2",
            title: "MVP Development",
            items: ["Core App Prototype", "Friction Mechanism Implementation", "Smart Cleanup Algorithms"],
            status: "active"
        },
        {
            phase: "Phase 3",
            title: "Living Lab",
            items: ["Closed Group Testing (LINE)", "Open Group Testing (Threads)", "Behavioral Data Analysis"],
            status: "upcoming"
        },
        {
            phase: "Phase 4",
            title: "Scale & Educate",
            items: ["Public Guide Release", "Physical Workshops", "Impact Report"],
            status: "upcoming"
        }
    ];

    return (
        <div className="pt-20 pb-20 max-w-5xl mx-auto px-4">
             <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Strategic Roadmap</h1>
                <p className="text-gray-400">Our path to digital sustainability.</p>
            </div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2"></div>

                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Content Side */}
                            <div className="md:w-1/2 pl-20 md:pl-0">
                                <GlassCard className={`relative ${step.status === 'active' ? 'border-primary shadow-[0_0_20px_rgba(0,242,234,0.15)]' : 'border-white/5'}`}>
                                    {/* Timeline Dot */}
                                    <div className={`absolute top-6 left-[-49px] md:left-auto md:top-6 w-4 h-4 rounded-full border-2 border-black z-10
                                        ${step.status === 'active' ? 'bg-primary shadow-[0_0_10px_#00f2ea]' : 'bg-gray-700'}
                                        ${index % 2 === 0 ? 'md:right-[-41px]' : 'md:left-[-41px]'}
                                    `}></div>

                                    <div className="text-xs font-mono text-primary mb-2 uppercase tracking-widest">{step.phase}</div>
                                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                    <ul className="space-y-2">
                                        {step.items.map((item, i) => (
                                            <li key={i} className="flex items-center text-sm text-gray-300">
                                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </div>

                            {/* Empty Side for layout balance */}
                            <div className="md:w-1/2 hidden md:block"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-20 text-center">
                <Link to="/contact" className="inline-block px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-mono">
                    BECOME A PARTNER
                </Link>
            </div>
        </div>
    );
};

export default Roadmap;
