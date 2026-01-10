import { Section, FadeIn } from '../components/Section';
import { Cloud, Code2, Zap, Database, CheckCircle2, Download, Star, Image as ImageIcon, Trophy } from 'lucide-react';
import { PetAssistantDemo } from '../components/app-modules/PetAssistantDemo';
import { TreePlantingDemo } from '../components/app-modules/TreePlantingDemo';
import { SocialSquadDemo } from '../components/app-modules/SocialSquadDemo';
import { MobileFrame } from '../components/app-modules/MobileFrame';
import { motion } from 'framer-motion';

export function Solutions() {
  return (
    <div className="min-h-screen bg-sand-50/30">
      
      {/* 2.1 Hero Section - Rich & Engaging */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-[80%] bg-gradient-to-b from-primary-50 to-transparent -z-10"></div>
        <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-digital/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Copy & Actions */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-sand-200 shadow-sm mb-8">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-digital opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-digital"></span>
                  </span>
                  <span className="text-primary-900 font-bold text-sm tracking-wide uppercase">App Store & Google Play 上架中</span>
               </div>
               
               <h1 className="text-5xl md:text-7xl font-bold text-primary-900 mb-6 leading-[1.1] tracking-tight">
                  你的手機，<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-digital to-primary-600">也是種樹神器。</span>
               </h1>
               
               <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                  Releaf App 結合「數位清理」與「虛擬種樹」，將刪除檔案轉化為具體的環保行動。每天 3 分鐘，為手機瘦身，也為地球減負。
               </p>

               <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3">
                     <Download size={24} /> 下載 iOS 版
                  </button>
                  <button className="bg-white text-primary-900 border border-sand-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-sand-50 transition-all shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3">
                     <Download size={24} /> 下載 Android 版
                  </button>
               </div>
               
               <div className="mt-8 flex items-center gap-4 text-sm text-slate-500 font-medium">
                  <div className="flex -space-x-2">
                     {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                     ))}
                  </div>
                  <div className="flex items-center gap-1">
                     <div className="flex text-yellow-400"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                     <span>10,000+ 用戶好評</span>
                  </div>
               </div>
            </motion.div>

            {/* Right: Phone Visual */}
            <motion.div 
               initial={{ opacity: 0, y: 30, rotate: 5 }}
               animate={{ opacity: 1, y: 0, rotate: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="relative hidden md:block"
            >
               {/* Abstract Elements behind phone */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-digital/20 to-primary-100/20 rounded-full blur-3xl animate-pulse-slow"></div>
               
               {/* Use MobileFrame directly for a high-quality visual */}
               <div className="transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out-back scale-110 origin-center">
                  <MobileFrame>
                     <div className="h-full bg-white flex flex-col relative overflow-hidden">
                        {/* Fake App Home Screen */}
                        <div className="p-6 pt-12 flex justify-between items-center">
                           <div className="font-bold text-xl text-primary-900">早安, Alex ☀️</div>
                           <div className="w-10 h-10 bg-slate-100 rounded-full"></div>
                        </div>
                        <div className="px-6 mb-8">
                           <div className="bg-primary-900 text-white p-6 rounded-3xl shadow-xl relative overflow-hidden">
                              <div className="relative z-10">
                                 <div className="text-primary-200 text-sm font-bold mb-1">今日減碳目標</div>
                                 <div className="text-4xl font-bold mb-4">120 <span className="text-lg font-normal text-primary-300">MB</span></div>
                                 <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md">
                                    進度 80%
                                 </div>
                              </div>
                              <div className="absolute right-[-20px] bottom-[-20px] text-white/10 rotate-12">
                                 <Cloud size={120} fill="currentColor" />
                              </div>
                           </div>
                        </div>
                        <div className="px-6 grid grid-cols-2 gap-4">
                           <div className="bg-sky-50 p-4 rounded-2xl">
                              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-sky-500 mb-3 shadow-sm"><ImageIcon/></div>
                              <div className="font-bold text-slate-800">照片清理</div>
                              <div className="text-xs text-slate-400">發現 24 張模糊照</div>
                           </div>
                           <div className="bg-green-50 p-4 rounded-2xl">
                              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-green-500 mb-3 shadow-sm"><CheckCircle2/></div>
                              <div className="font-bold text-slate-800">種樹進度</div>
                              <div className="text-xs text-slate-400">距離下一棵還差 5%</div>
                           </div>
                        </div>
                     </div>
                  </MobileFrame>
               </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 2.2 Core Function Modules */}
      <div className="py-12 bg-white rounded-t-[3rem] relative z-10 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)]">
        <Section>
           <div className="text-center mb-24 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6">核心功能模組</h2>
              <p className="text-lg text-slate-600">Releaf 透過三大創新機制，將無聊的檔案整理轉化為有趣的永續遊戲。</p>
           </div>

           <div className="space-y-32">
             
             {/* Module 1: Brand Pet AI Assistant */}
             <div className="grid md:grid-cols-2 gap-16 items-center">
               <FadeIn className="order-2 md:order-1 flex justify-center w-full">
                 <div className="w-full max-w-[400px]">
                    <PetAssistantDemo />
                 </div>
               </FadeIn>
               <FadeIn className="order-1 md:order-2">
                 <span className="text-sky-500 font-bold tracking-widest uppercase mb-2 block">Module 01</span>
                 <h2 className="text-4xl font-bold text-primary-900 mb-6">品牌寵物 AI 助手</h2>
                 <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                   您的專屬「數位環保夥伴」。Releaf Bot 具備互動養成機制，能根據心情變化與您互動。
                 </p>
                 <div className="bg-sand-50 p-6 rounded-2xl shadow-sm border border-sand-100 space-y-4">
                    <div className="flex gap-4">
                       <div className="bg-sky-100 p-2 rounded-lg h-fit"><CheckCircle2 className="text-sky-600" size={20}/></div>
                       <div>
                          <h4 className="font-bold text-gray-900">三分鐘淨灘提醒</h4>
                          <p className="text-slate-600 text-sm">一鍵啟動專注計時器，利用零碎時間快速清理，養成無壓力的好習慣。</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="bg-sky-100 p-2 rounded-lg h-fit"><CheckCircle2 className="text-sky-600" size={20}/></div>
                       <div>
                          <h4 className="font-bold text-gray-900">電子寵物養成</h4>
                          <p className="text-slate-600 text-sm">清理越多，寵物越開心！具備豐富的情緒反應與慶祝動畫。</p>
                       </div>
                    </div>
                 </div>
               </FadeIn>
             </div>

             {/* Module 2: Virtual Tree System */}
             <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
               <FadeIn className="w-full">
                 <span className="text-green-600 font-bold tracking-widest uppercase mb-2 block">Module 02</span>
                 <h2 className="text-4xl font-bold text-primary-900 mb-6">虛擬種樹與真實影響</h2>
                 <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                   將資訊清理結果轉化為種樹！不同垃圾類型對應不同樹種。在培育樹木的同時，還能解鎖科普內容。
                 </p>
                 <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                    <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                       <Cloud size={20} /> 虛擬 → 實體承諾機制
                    </h4>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                       當累積達成特定里程碑，我們將由真人團隊在台灣土地實際種樹。您可以透過 App 內的「影響力透明頁」追蹤種樹紀錄與成果照片。
                    </p>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-green-700 font-medium">
                       <li className="flex items-center gap-2">🌲 種樹批次紀錄</li>
                       <li className="flex items-center gap-2">📍 地點與樹種</li>
                    </ul>
                 </div>
               </FadeIn>
               <FadeIn className="flex justify-center w-full">
                 <div className="w-full max-w-[400px]">
                    <TreePlantingDemo />
                 </div>
               </FadeIn>
             </div>

             {/* Module 3: Social Mode */}
             <div className="grid md:grid-cols-2 gap-16 items-center">
               <FadeIn className="order-2 md:order-1 flex justify-center w-full">
                 <div className="w-full max-w-[400px]">
                    <SocialSquadDemo />
                 </div>
               </FadeIn>
               <FadeIn className="order-1 md:order-2">
                 <span className="text-orange-500 font-bold tracking-widest uppercase mb-2 block">Module 03</span>
                 <h2 className="text-4xl font-bold text-primary-900 mb-6">社交模式與小隊挑戰</h2>
                 <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                   一個人走得快，一群人走得遠。邀請好友加入「數位淨灘小隊」，共同完成週任務與季節性活動。
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                       <div className="mt-1 bg-orange-100 p-3 rounded-xl group-hover:bg-orange-500 transition-colors duration-300">
                          <Trophy className="text-orange-600 group-hover:text-white" size={24} />
                       </div>
                       <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">友善競賽機制</h4>
                          <p className="text-slate-600">以「任務完成率」與「清理頻率」為主要指標，避免單純比拼刪除量，降低誤刪風險。</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                       <div className="mt-1 bg-orange-100 p-3 rounded-xl group-hover:bg-orange-500 transition-colors duration-300">
                          <Zap className="text-orange-600 group-hover:text-white" size={24} />
                       </div>
                       <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">團隊累積成就</h4>
                          <p className="text-slate-600">共同累積減碳量，解鎖團隊專屬徽章與實體種樹名額。</p>
                       </div>
                    </div>
                 </div>
               </FadeIn>
             </div>

           </div>
        </Section>
      </div>

      {/* Green Coding Section */}
      <Section className="py-32">
        <div className="bg-primary-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
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
                 desc: "運用 Memoization 與 List Comprehension 等高效結構，降低 CPU 負載。",
                 delay: 0
               },
               {
                 icon: <Database className="w-8 h-8" />,
                 title: "資料快取優化",
                 desc: "實作進階 Caching 機制，大幅減少重複的網路請求與資料庫查詢。",
                 delay: 0.1
               },
               {
                 icon: <Zap className="w-8 h-8" />,
                 title: "延遲載入",
                 desc: "圖片與資源僅在需要時載入，確保零浪費的能源消耗。",
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