import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export const GlassCard = ({ children, className, hoverEffect = true }) => (
  <motion.div
    whileHover={hoverEffect ? { y: -5, boxShadow: '0 10px 40px -10px rgba(0,242,234,0.2)' } : {}}
    className={clsx(
      "glass-card rounded-2xl p-6 transition-all duration-300",
      className
    )}
  >
    {children}
  </motion.div>
);

export const SectionTitle = ({ subtitle, title, align = "center" }) => (
  <div className={clsx("mb-12", align === "center" ? "text-center" : "text-left")}>
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
    >
      {title}
    </motion.h2>
  </div>
);

export const BentoGrid = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {items.map((item, idx) => (
      <GlassCard
        key={idx}
        className={clsx(
          item.colSpan === 2 ? "md:col-span-2" : "md:col-span-1",
          item.rowSpan === 2 ? "md:row-span-2" : "md:row-span-1",
          "relative overflow-hidden group"
        )}
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
           {item.icon && <item.icon size={100} />}
        </div>
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="text-primary mb-4 bg-primary/10 w-fit p-2 rounded-lg">
                {item.icon && <item.icon size={24} />}
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
          {item.stat && (
            <div className="mt-8">
               <span className="text-4xl font-mono font-bold text-white">{item.stat}</span>
               <span className="text-xs text-gray-500 block">{item.statLabel}</span>
            </div>
          )}
        </div>
      </GlassCard>
    ))}
  </div>
);
