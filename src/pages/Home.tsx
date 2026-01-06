import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Smartphone, Users } from 'lucide-react';
import { Section, FadeIn } from '../components/Section';
import { motion } from 'framer-motion';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-50 to-white">
        <div className="absolute inset-0 pointer-events-none opacity-30">
           <div className="absolute top-20 left-10 w-72 h-72 bg-digital/20 rounded-full blur-3xl animate-float" />
           <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 text-sm font-semibold mb-6 tracking-wide">
              Redefining Digital Sustainability
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-900 tracking-tight mb-6 leading-tight">
              Cleaning the <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-digital">Digital Coastline</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Every click, swipe, and message leaves a trace. We help you clean up the digital pollution affecting your mind and our planet.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/problem" className="bg-primary-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-digital transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2">
                Understand the Crisis <ArrowRight size={20} />
              </Link>
              <Link to="/solutions" className="bg-white text-primary-900 border-2 border-primary-100 px-8 py-4 rounded-full font-bold text-lg hover:border-primary-300 transition-all">
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Intro Grid */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Leaf className="w-8 h-8 text-digital" />,
              title: "Digital Temperance",
              desc: "Advocating for subtractive sustainability and mindful resource usage."
            },
            {
              icon: <Smartphone className="w-8 h-8 text-digital" />,
              title: "Digital Hygiene",
              desc: "Tools to visualize your carbon footprint and reduce digital clutter."
            },
            {
              icon: <Users className="w-8 h-8 text-digital" />,
              title: "Living Lab",
              desc: "Social experiments to understand and shift collective behavior."
            }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-sand-50 hover:bg-white border border-transparent hover:border-sand-200 transition-all shadow-sm hover:shadow-md group">
                <div className="mb-4 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Quote Section */}
      <Section className="bg-primary-900 text-white text-center py-32">
        <FadeIn>
          <blockquote className="text-3xl md:text-4xl font-serif italic leading-relaxed max-w-4xl mx-auto opacity-90">
            "We treat attention as a finite resource, just like clean air and water. Protecting it is protecting our cognitive health and innovation."
          </blockquote>
        </FadeIn>
      </Section>
    </div>
  );
}
