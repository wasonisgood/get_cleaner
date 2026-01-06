import { Section, FadeIn } from '../components/Section';
import { Feather, MinusCircle, Scale, Anchor, Wind, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

export function Philosophy() {
  return (
    <div className="min-h-screen bg-sand-50 pb-24">
       {/* Hero / Manifesto Header */}
       <Section className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
               <div className="h-px bg-primary-900 w-12 md:w-24"></div>
               <span className="text-primary-900 font-bold tracking-[0.2em] uppercase text-sm">Manifesto</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-900 mb-10 leading-[1.1]">
              核心理念：<br/>
              <span className="relative">
                數位淨灘
                <motion.svg 
                  className="absolute -bottom-2 left-0 w-full h-4 text-digital opacity-60" 
                  viewBox="0 0 100 10" 
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </motion.svg>
              </span>
              <span className="text-digital">.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-light max-w-3xl">
              "我們借用大眾耳熟能詳的『淨灘』比喻，將刪除檔案這個平凡的任務，轉化為一種可衡量的環境守護行動。"
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Philosophy Cards - Asymmetric Layout */}
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        
        {/* Card 01 */}
        <Section>
          <div className="grid md:grid-cols-12 gap-12 items-center">
             <div className="md:col-span-5 relative">
               <FadeIn>
                 <div className="relative z-10 bg-white p-12 rounded-[2rem] shadow-2xl border border-sand-100 group hover:border-digital/30 transition-all duration-500">
                    <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-digital group-hover:text-white transition-colors duration-500">
                      <Feather size={32} strokeWidth={1.5} />
                    </div>
                    <span className="text-9xl font-bold text-sand-100 absolute -top-10 -right-10 select-none z-[-1]">01</span>
                    <h3 className="text-3xl font-bold text-primary-900 mb-6">賦予新價值<br/><span className="text-lg text-slate-400 font-normal">Reframing Value</span></h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      使用者的每一個點擊、每一次上傳，都在不知不覺中累積成環境衝擊。我們將「刪除」重新框架為「守護」，賦予既有行為全新的意義。
                    </p>
                 </div>
               </FadeIn>
               {/* Decorative background blob */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-digital/20 to-transparent rounded-full blur-3xl -z-10 opacity-60"></div>
             </div>
             <div className="md:col-span-1 hidden md:block"></div>
             <div className="md:col-span-6">
                <FadeIn delay={0.2}>
                  <div className="space-y-8">
                     <p className="text-2xl font-serif italic text-primary-800 leading-relaxed">
                       "Attention is a finite resource, like clean air and water."
                     </p>
                     <div className="flex gap-4 items-center text-slate-500">
                        <Anchor size={20} />
                        <span className="uppercase tracking-widest text-sm">Guardians of the Digital Coast</span>
                     </div>
                  </div>
                </FadeIn>
             </div>
          </div>
        </Section>

        {/* Card 02 - Reversed */}
        <Section>
          <div className="grid md:grid-cols-12 gap-12 items-center">
             <div className="md:col-span-6 order-2 md:order-1 text-right md:text-left">
                <FadeIn delay={0.2}>
                   <div className="space-y-8 md:pl-12">
                     <p className="text-2xl font-serif italic text-primary-800 leading-relaxed">
                       "Sustainability isn't just about addition; it's about subtraction."
                     </p>
                     <div className="flex gap-4 items-center text-slate-500 md:justify-start justify-end">
                        <Wind size={20} />
                        <span className="uppercase tracking-widest text-sm">Less is Future</span>
                     </div>
                  </div>
                </FadeIn>
             </div>
             
             <div className="md:col-span-6 md:col-start-7 order-1 md:order-2 relative">
               <FadeIn>
                 <div className="relative z-10 bg-primary-900 p-12 rounded-[2rem] shadow-2xl border border-white/10 group hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                      <MinusCircle size={32} strokeWidth={1.5} className="text-white" />
                    </div>
                    <span className="text-9xl font-bold text-white/5 absolute -bottom-10 -left-6 select-none z-[-1]">02</span>
                    <h3 className="text-3xl font-bold text-white mb-6">減法永續<br/><span className="text-lg text-primary-300 font-normal">Subtractive Sustainability</span></h3>
                    <p className="text-primary-100 text-lg leading-relaxed">
                      真正的永續不只是增加綠能，更需要「減法」。主動減少無用數據的生產與傳播，從源頭降低對數據中心與能源的消耗。
                    </p>
                 </div>
               </FadeIn>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-bl from-primary-400/20 to-transparent rounded-full blur-3xl -z-10 opacity-60"></div>
             </div>
          </div>
        </Section>

        {/* Card 03 */}
        <Section>
          <div className="grid md:grid-cols-12 gap-12 items-center">
             <div className="md:col-span-5 relative">
               <FadeIn>
                 <div className="relative z-10 bg-white p-12 rounded-[2rem] shadow-2xl border border-sand-100 group hover:border-digital/30 transition-all duration-500">
                    <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-digital group-hover:text-white transition-colors duration-500">
                      <Scale size={32} strokeWidth={1.5} />
                    </div>
                    <span className="text-9xl font-bold text-sand-100 absolute -top-10 -right-10 select-none z-[-1]">03</span>
                    <h3 className="text-3xl font-bold text-primary-900 mb-6">數位素養<br/><span className="text-lg text-slate-400 font-normal">Digital Literacy</span></h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      我們不反科技，而是提倡「負責任的數位公民」。透過工具與教育，培養新維度的數位素養，讓數位便利與環境永續共存。
                    </p>
                 </div>
               </FadeIn>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-full blur-3xl -z-10 opacity-60"></div>
             </div>
             <div className="md:col-span-1 hidden md:block"></div>
             <div className="md:col-span-6">
                <FadeIn delay={0.2}>
                  <div className="space-y-8">
                     <p className="text-2xl font-serif italic text-primary-800 leading-relaxed">
                       "Responsible digital citizenship is the prerequisite for a smart society."
                     </p>
                     <div className="flex gap-4 items-center text-slate-500">
                        <Droplets size={20} />
                        <span className="uppercase tracking-widest text-sm">Meaningful Participation</span>
                     </div>
                  </div>
                </FadeIn>
             </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
