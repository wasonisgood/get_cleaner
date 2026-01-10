import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Smartphone, Users } from 'lucide-react';
import { Section, FadeIn } from '../components/Section';
import { motion } from 'framer-motion';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-sand-50">
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-digital/10 rounded-full blur-[100px] animate-float" />
           <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-primary-300/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white border border-primary-100 text-primary-800 text-sm font-semibold mb-8 tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-digital opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-digital"></span>
              </span>
              數位與永續的雙軸轉型
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-primary-900 tracking-tight mb-8 leading-[1.1]">
              Releaf 數位淨灘<br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-digital to-primary-500">一秒點擊就能救地球</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              數位革命帶來了便利，也留下了隱形的環境債務。<br/>
              我們透過 <span className="font-semibold text-primary-900">Releaf App</span>，將<span className="font-semibold text-primary-900">刪除檔案</span>轉化為<span className="font-semibold text-digital">守護地球</span>的具體行動。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/problem" className="bg-primary-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 group">
                了解危機 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/solutions" className="bg-white/80 backdrop-blur-md text-primary-900 border border-white/50 px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                探索解決方案
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Intro Grid - Premium Cards */}
      <Section className="bg-white py-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Smartphone className="w-8 h-8 text-white" />,
                title: "一秒點擊淨灘",
                desc: "透過 Releaf App，一鍵清除不必要的數位廢棄物，輕鬆為地球減負。",
                bg: "bg-gradient-to-br from-blue-400 to-primary-600"
              },
              {
                icon: <Users className="w-8 h-8 text-white" />,
                title: "成為淨灘英雄",
                desc: "累積減碳貢獻，解鎖成就與獎勵，讓環保行動變得有趣且充滿成就感。",
                bg: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                icon: <Leaf className="w-8 h-8 text-white" />,
                title: "綠色程式碼",
                desc: "採用低耗能的程式設計與架構，從源頭減少數位碳足跡，推動產業轉型。",
                bg: "bg-gradient-to-br from-green-400 to-emerald-600"
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="h-full p-8 rounded-[2rem] bg-white border border-sand-100 hover:border-transparent transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 group relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-[4rem] transition-transform duration-700 group-hover:scale-150 ${item.bg}`}></div>
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300 ${item.bg}`}>
                    {item.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                  
                  <div className="mt-8 flex items-center text-sm font-bold text-primary-900 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    Learn more <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Quote Section - Redesigned */}
      <Section className="bg-primary-900 text-white text-center py-40 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
        </div>
        
        <FadeIn>
          <div className="max-w-5xl mx-auto relative z-10 px-6">
            <div className="mb-8 text-digital opacity-50">
               <span className="text-6xl font-serif">"</span>
            </div>
            <blockquote className="text-3xl md:text-5xl font-serif leading-tight mb-12">
              數位創新不應再是環境成本的製造者，<br/>而應成為推動綠色發展的<span className="text-digital italic">關鍵驅動力</span>。
            </blockquote>
            <cite className="text-primary-300 not-italic tracking-widest uppercase text-sm font-bold">
              — The Twin Transformation
            </cite>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}