import { Section, FadeIn } from '../components/Section';
import { Smartphone, Cloud, Trophy, Code2, Zap, Database, CheckCircle2 } from 'lucide-react';

export function Solutions() {
  return (
    <div className="pt-24 min-h-screen bg-sand-50/30">
      <Section className="text-center pb-24">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-sand-200 shadow-sm mb-6">
             <span className="w-2 h-2 rounded-full bg-digital animate-pulse"></span>
             <span className="text-primary-900 font-medium text-sm tracking-wide uppercase">解決方案</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-900 mb-8 tracking-tight">
            以使用者為中心的<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-digital to-primary-600">綠色實踐路徑</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
             將「數位淨灘」轉化為具體、可執行的三大核心功能模組，並全面遵循綠色軟體開發原則。
          </p>
        </FadeIn>
      </Section>

      {/* 2.2 Core Function Modules - Premium Layout */}
      <div className="py-12">
        <Section>
           <div className="space-y-32">
             
             {/* Module 1 */}
             <FadeIn>
               <div className="group relative bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-sand-100 overflow-hidden">
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-digital/10 transition-colors duration-700"></div>
                 
                 <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                   <div className="order-2 md:order-1">
                     <div className="relative">
                       <div className="absolute inset-0 bg-primary-900 rounded-[2rem] rotate-3 opacity-10 scale-95"></div>
                       <div className="bg-gradient-to-br from-white to-sand-50 p-8 rounded-[2rem] border border-sand-200 shadow-lg transform transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
                          <div className="bg-primary-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 text-primary-600">
                            <Smartphone size={40} />
                          </div>
                          <h3 className="text-2xl font-bold text-primary-900 mb-2">本機數位垃圾清理</h3>
                          <p className="text-slate-500 font-mono text-sm">Smart Scanning Engine v1.0</p>
                       </div>
                     </div>
                   </div>
                   <div className="order-1 md:order-2">
                     <span className="text-digital font-bold tracking-widest uppercase mb-2 block">Module 01</span>
                     <h2 className="text-4xl font-bold text-primary-900 mb-6">智慧清理演算法</h2>
                     <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                       透過智慧演算法安全讀取手機內部資料，精準辨識並分類無效的數位垃圾。
                     </p>
                     <ul className="space-y-4">
                       {[
                         "辨識長期累積的重複螢幕截圖",
                         "找出佔用大量空間的過大影音",
                         "清理系統垃圾桶中的快取資料",
                         "優化 Line 等通訊軟體暫存檔"
                       ].map((item, i) => (
                         <li key={i} className="flex items-start gap-3 text-slate-700 group/item">
                           <CheckCircle2 className="w-6 h-6 text-digital mt-0.5 group-hover/item:scale-110 transition-transform" />
                           <span className="text-lg">{item}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 </div>
               </div>
             </FadeIn>

             {/* Module 2 */}
             <FadeIn>
               <div className="group relative bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-sand-100 overflow-hidden">
                 <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2 group-hover:bg-sky-200/30 transition-colors duration-700"></div>
                 
                 <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                   <div>
                     <span className="text-sky-500 font-bold tracking-widest uppercase mb-2 block">Module 02</span>
                     <h2 className="text-4xl font-bold text-primary-900 mb-6">雲端空間整合</h2>
                     <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                       不重複造輪子。我們透過 API 智慧分析您的雲端狀況，提供一鍵導航至 Google Drive 或 iCloud 的官方清理工具，安全又高效。
                     </p>
                     <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-sand-200">
                        <h4 className="font-bold text-primary-900 mb-2 flex items-center gap-2">
                          <Cloud size={20} className="text-sky-500"/> 智慧導航技術
                        </h4>
                        <p className="text-slate-600">
                          偵測冗餘檔案 &rarr; 計算潛在減碳量 &rarr; 提供直達清理連結
                        </p>
                     </div>
                   </div>
                   <div className="relative">
                       <div className="absolute inset-0 bg-sky-900 rounded-[2rem] -rotate-3 opacity-10 scale-95"></div>
                       <div className="bg-gradient-to-br from-white to-sky-50 p-8 rounded-[2rem] border border-sky-100 shadow-lg transform transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
                          <div className="bg-sky-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 text-sky-600">
                            <Cloud size={40} />
                          </div>
                          <h3 className="text-2xl font-bold text-primary-900 mb-2">雲端瘦身助手</h3>
                          <p className="text-slate-500 font-mono text-sm">Cloud API Integration</p>
                       </div>
                   </div>
                 </div>
               </div>
             </FadeIn>

             {/* Module 3 */}
             <FadeIn>
               <div className="group relative bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-sand-100 overflow-hidden">
                 <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-100/50 rounded-full blur-[80px] translate-y-1/2 translate-x-1/2 group-hover:bg-yellow-200/30 transition-colors duration-700"></div>
                 
                 <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                   <div className="order-2 md:order-1">
                     <div className="relative">
                       <div className="absolute inset-0 bg-yellow-900 rounded-[2rem] rotate-3 opacity-10 scale-95"></div>
                       <div className="bg-gradient-to-br from-white to-yellow-50 p-8 rounded-[2rem] border border-yellow-100 shadow-lg transform transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
                          <div className="bg-yellow-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 text-yellow-600">
                            <Trophy size={40} />
                          </div>
                          <h3 className="text-2xl font-bold text-primary-900 mb-2">永續成就儀表板</h3>
                          <p className="text-slate-500 font-mono text-sm">Gamification System</p>
                       </div>
                     </div>
                   </div>
                   <div className="order-1 md:order-2">
                     <span className="text-yellow-600 font-bold tracking-widest uppercase mb-2 block">Module 03</span>
                     <h2 className="text-4xl font-bold text-primary-900 mb-6">遊戲化激勵機制</h2>
                     <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                       將冰冷的數據 (GB/TB) 轉化為溫暖的環保成就。讓每一次清理都成為對地球的具體貢獻。
                     </p>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-sand-100 text-center">
                          <div className="text-3xl mb-2">🌲</div>
                          <div className="font-bold text-primary-900">具象化指標</div>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-sand-100 text-center">
                          <div className="text-3xl mb-2">🏆</div>
                          <div className="font-bold text-primary-900">榮譽榜單</div>
                        </div>
                     </div>
                   </div>
                 </div>
               </div>
             </FadeIn>
           </div>
        </Section>
      </div>

      {/* 2.4 Green Coding - Dark Section */}
      <Section className="py-32">
        <div className="bg-primary-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
           {/* Grid Pattern Background */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
           
           <FadeIn>
             <div className="relative z-10 mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Green Coding 原則</h2>
               <p className="text-xl text-primary-200 max-w-2xl mx-auto">
                 我們的應用程式本身就是環保的典範。從程式碼層級開始節能。
               </p>
             </div>
           </FadeIn>

           <div className="grid md:grid-cols-3 gap-8 relative z-10">
             {[
               {
                 icon: <Code2 className="w-8 h-8" />,
                 title: "高效演算法",
                 desc: "優先使用高效率結構，減少運算資源消耗。",
                 delay: 0
               },
               {
                 icon: <Database className="w-8 h-8" />,
                 title: "智慧快取",
                 desc: "減少重複的網路請求與伺服器運算。",
                 delay: 0.1
               },
               {
                 icon: <Zap className="w-8 h-8" />,
                 title: "延遲加載",
                 desc: "確保資源僅在需要時才載入，降低傳輸能耗。",
                 delay: 0.2
               }
             ].map((item, i) => (
               <FadeIn delay={item.delay} key={i}>
                 <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2rem] border border-white/10 hover:bg-white/20 transition-all duration-300 group text-left">
                   <div className="w-14 h-14 bg-digital/20 rounded-xl flex items-center justify-center mb-6 text-digital group-hover:scale-110 transition-transform">
                     {item.icon}
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                   <p className="text-primary-200 leading-relaxed">{item.desc}</p>
                 </div>
               </FadeIn>
             ))}
           </div>
        </div>
      </Section>
    </div>
  );
}
