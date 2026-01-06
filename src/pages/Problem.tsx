import { Section, FadeIn } from '../components/Section';
import { AlertTriangle, CloudLightning, Zap, Globe, Trash2, Sprout, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Problem() {
  return (
    <div className="pt-24 min-h-screen bg-sand-50/50">
      {/* 1.1 導論 */}
      <Section className="text-center pb-20">
        <FadeIn>
          <div className="inline-block p-2 px-4 rounded-full bg-digital/10 text-digital font-bold text-sm tracking-widest uppercase mb-6">專案背景</div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-900 mb-8 tracking-tight">
            數位時代的<span className="text-slate-400 font-light">隱形成本</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-digital">與永續轉型浪潮</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            數位革命帶來了前所未有的進步，但其動力卻來自一筆迅速增長且隱形的環境債務。
            如今，「數位」與「永續」的<strong className="text-primary-900 font-semibold">雙軸轉型 (Twin Transformation)</strong> 浪潮正席捲而來。
          </p>
        </FadeIn>
      </Section>

      {/* 1.2 問題陳述 - Dark Glass Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto bg-primary-900 rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden shadow-2xl">
           {/* Background Effects */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-digital/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>

           <Section className="relative z-10 p-0">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div>
                  <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                     <CloudLightning className="w-10 h-10 text-digital" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">失控的<br/>數位碳足跡</h2>
                  <p className="text-primary-100 text-lg mb-8 leading-relaxed opacity-90">
                    ICT產業的溫室氣體排放量已與航空業相當。隨著AI與大型數據中心的發展，康乃爾大學預測，若依目前速率增長，到2030年：
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-4 mb-2">
                         <div className="p-2 bg-yellow-400/20 rounded-lg text-yellow-400"><Zap size={20} /></div>
                         <h3 className="font-bold text-lg">AI 產業碳排放</h3>
                      </div>
                      <p className="text-primary-200 pl-14">相當於增加 <span className="text-white font-bold text-xl">500-1000萬</span> 輛汽車。</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-4 mb-2">
                         <div className="p-2 bg-red-400/20 rounded-lg text-red-400"><AlertTriangle size={20} /></div>
                         <h3 className="font-bold text-lg">水資源消耗</h3>
                      </div>
                      <p className="text-primary-200 pl-14">相當於消耗 <span className="text-white font-bold text-xl">600-1000萬</span> 人年度用水。</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                 <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
                    <h3 className="text-2xl font-bold mb-6 text-digital flex items-center gap-3">
                      <span className="w-2 h-8 bg-digital rounded-full"></span>
                      什麼是「數位碳足跡」？
                    </h3>
                    <p className="text-primary-100 mb-8 leading-relaxed text-lg">
                      衡量我們所有線上活動（製造、使用到廢棄）所產生的溫室氣體總量。
                      <br/><br/>
                      當我們使用串流服務或發送郵件時，背後的數據中心都在消耗巨大能源。這是一個看不見的累積過程。
                    </p>
                    
                    <div className="bg-black/20 rounded-2xl p-6">
                      <div className="flex justify-between text-sm text-primary-300 mb-2">
                        <span>隱形環境成本</span>
                        <span>持續累積中...</span>
                      </div>
                      <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "85%" }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-digital to-primary-400 relative"
                        >
                           <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                 </div>
              </FadeIn>
            </div>
           </Section>
        </div>
      </div>

      {/* 1.3 專案原創性 - Comparison */}
      <Section className="py-24">
        <div className="text-center mb-20">
           <FadeIn>
             <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">重新定義：從「清理」到「淨灘」</h2>
             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
               我們透過「重新框架 (Reframing)」，賦予既有行為全新的意義。
             </p>
           </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
           {/* Connector Icon (Desktop only) */}
           <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-sand-200 rounded-full items-center justify-center z-10 border-4 border-sand-50">
              <ArrowRight className="text-slate-400" />
           </div>

           <FadeIn>
             <div className="h-full p-12 rounded-[2.5rem] bg-sand-100/50 border border-sand-200 flex flex-col items-center justify-center text-center group hover:bg-sand-100 transition-colors duration-500">
                <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-slate-500">
                   <Trash2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-700 mb-4">傳統清理工具</h3>
                <p className="text-slate-500 text-lg leading-relaxed">
                  單純為了釋放手機空間。<br/>
                  功能導向、枯燥乏味、缺乏情感連結。
                </p>
             </div>
           </FadeIn>

           <FadeIn delay={0.2}>
             <div className="h-full p-12 rounded-[2.5rem] bg-white border border-digital/20 flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-digital/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-20 h-20 bg-digital/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-digital relative z-10">
                   <Sprout size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4 relative z-10">數位淨灘 App</h3>
                <p className="text-slate-600 text-lg leading-relaxed relative z-10">
                  一項可衡量的環境守護行動。<br/>
                  <span className="font-bold text-digital">清理數位垃圾 = 為地球減少負擔</span>
                </p>
             </div>
           </FadeIn>
        </div>
      </Section>

      {/* 1.4 重要性與影響 - Glass Cards */}
      <div className="py-24">
        <Section>
           <FadeIn>
             <div className="flex items-center justify-center gap-4 mb-12">
                <div className="p-3 bg-primary-100 rounded-xl text-primary-600"><Globe size={28} /></div>
                <h2 className="text-3xl font-bold text-primary-900">專案深遠影響</h2>
             </div>
           </FadeIn>

           <div className="grid md:grid-cols-2 gap-10">
             <FadeIn delay={0.1}>
               <div className="bg-white p-10 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 border border-sand-100 group">
                 <div className="flex justify-between items-start mb-6">
                    <span className="text-6xl font-bold text-primary-100 group-hover:text-primary-600 transition-colors duration-500">01</span>
                    <div className="px-4 py-1 bg-primary-50 rounded-full text-primary-700 font-bold text-sm uppercase">直接影響</div>
                 </div>
                 <h3 className="text-2xl font-bold text-primary-900 mb-4">實質減碳貢獻</h3>
                 <p className="text-slate-600 leading-relaxed text-lg">
                   直接減少全球數據中心在資料儲存、備份、冷卻與傳輸等環節的能源消耗。當大量使用者參與時，將匯聚成可觀的集體力量，為ICT產業減碳做出實質貢獻。
                 </p>
               </div>
             </FadeIn>

             <FadeIn delay={0.2}>
               <div className="bg-white p-10 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 border border-sand-100 group">
                 <div className="flex justify-between items-start mb-6">
                    <span className="text-6xl font-bold text-sand-100 group-hover:text-digital transition-colors duration-500">02</span>
                    <div className="px-4 py-1 bg-sand-100 rounded-full text-slate-700 font-bold text-sm uppercase">間接影響</div>
                 </div>
                 <h3 className="text-2xl font-bold text-primary-900 mb-4">數位素養提升</h3>
                 <p className="text-slate-600 leading-relaxed text-lg">
                   孕育負責任的數位公民世代。透過賦予使用者工具與正向回饋，提升公眾的數位環保意識，引發更廣泛且持久的社會行為改變，啟動一場數位永續社會運動。
                 </p>
               </div>
             </FadeIn>
           </div>
        </Section>
      </div>
    </div>
  );
}
