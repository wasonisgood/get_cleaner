import { Section, FadeIn } from '../components/Section';
import { Heart, Globe, Zap, Download, Database, Activity, Users, ArrowUpRight } from 'lucide-react';
import { NextPageSection } from '../components/NextPageSection';

export function Impact() {
  return (
    <div className="pt-10 bg-sand-50/50 min-h-screen">
      <Section className="text-center pb-20 pt-20">
        <FadeIn>
          <span className="text-digital font-bold tracking-widest uppercase mb-4 block text-sm">預期效益</span>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-8 tracking-tight">從個人行動<br/>到集體影響</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            「數位淨灘」不僅是一個工具，更是啟動從個人到集體正向永續循環的開端。
          </p>
        </FadeIn>
      </Section>

      {/* 3.2 User Benefits - Glass Cards */}
      <div className="py-10">
        <Section>
           <div className="grid md:grid-cols-2 gap-8">
             <FadeIn>
               <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-xl border border-white/50 hover:border-primary-200 transition-all duration-500 group">
                 <div className="flex justify-between items-start mb-8">
                   <div className="w-16 h-16 bg-primary-100/50 rounded-2xl flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform duration-500">
                     <Zap size={32} />
                   </div>
                   <ArrowUpRight className="text-slate-300 group-hover:text-primary-600 group-hover:rotate-45 transition-all duration-500" />
                 </div>
                 <h3 className="text-3xl font-bold text-primary-900 mb-4">空間與效能</h3>
                 <p className="text-slate-600 leading-relaxed text-lg">
                   獲得一個整合性的管理工具，便捷地處理手機與雲端數位雜物。有效釋放寶貴的儲存空間，並間接提升裝置運行效能。
                 </p>
               </div>
             </FadeIn>
             <FadeIn delay={0.1}>
               <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-xl border border-white/50 hover:border-digital/30 transition-all duration-500 group">
                 <div className="flex justify-between items-start mb-8">
                   <div className="w-16 h-16 bg-digital/10 rounded-2xl flex items-center justify-center text-digital group-hover:scale-110 transition-transform duration-500">
                     <Heart size={32} />
                   </div>
                   <ArrowUpRight className="text-slate-300 group-hover:text-digital group-hover:rotate-45 transition-all duration-500" />
                 </div>
                 <h3 className="text-3xl font-bold text-primary-900 mb-4">賦權感</h3>
                 <p className="text-slate-600 leading-relaxed text-lg">
                   了解到自己微小的日常行為也能守護地球。透過簡單操作獲得知識增長與精神滿足，感受到「我可以為永續做點什麼」的賦權感。
                 </p>
               </div>
             </FadeIn>
           </div>
        </Section>
      </div>

      {/* 3.3 Env & Social Impact - Feature Section */}
      <Section className="py-24">
        <div className="bg-primary-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-digital/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">環境與社會的<br/>雙重永續效益</h2>
               <p className="text-xl text-primary-100 mb-12 leading-relaxed">
                 當數以萬計的使用者開始行動，這些「聚沙成塔」的力量將產生質變，從實質減碳延伸至社會意識的覺醒。
               </p>
               
               <div className="space-y-8">
                 <div className="flex gap-6 items-start group">
                   <div className="mt-2 p-3 bg-white/10 rounded-xl group-hover:bg-digital transition-colors duration-300">
                     <Globe className="text-white" size={24} />
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold text-white mb-2">環境：實質減碳</h4>
                     <p className="text-primary-200 text-lg">
                       降低全球數據中心的總體儲存負擔與連帶的冷卻、維運能源消耗。
                     </p>
                   </div>
                 </div>
                 <div className="flex gap-6 items-start group">
                   <div className="mt-2 p-3 bg-white/10 rounded-xl group-hover:bg-digital transition-colors duration-300">
                     <Users className="text-white" size={24} />
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold text-white mb-2">社會：數位素養</h4>
                     <p className="text-primary-200 text-lg">
                       普及「數位碳足跡」觀念，提升全民環保意識，契合國家雙軸轉型政策。
                     </p>
                   </div>
                 </div>
               </div>
            </FadeIn>

            <FadeIn delay={0.2}>
               <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 relative overflow-hidden group hover:bg-white/15 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-digital/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="text-2xl font-bold text-white mb-6 relative z-10">雙軸轉型催化劑</h3>
                  <div className="grid grid-cols-1 gap-4 relative z-10">
                     <div className="bg-black/20 p-6 rounded-2xl flex justify-between items-center">
                        <div className="text-digital font-bold text-xl">數位轉型</div>
                        <div className="text-xs text-white/60 uppercase tracking-widest">Digital</div>
                     </div>
                     <div className="flex justify-center text-white/50">
                        <ArrowUpRight size={24} />
                     </div>
                     <div className="bg-black/20 p-6 rounded-2xl flex justify-between items-center">
                        <div className="text-green-400 font-bold text-xl">永續轉型</div>
                        <div className="text-xs text-white/60 uppercase tracking-widest">Green</div>
                     </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* 3.4 KPIs - Modern Stats */}
      <Section className="py-24 pb-32">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">可量化之預期成果</h2>
          <p className="text-slate-600">設定具體指標，確保專案效益務實可衡量。</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Database size={32} />, 
              val: "> 500 TB", 
              label: "數據清理量", 
              sub: "目標釋放數位空間",
              color: "text-digital" 
            },
            { 
              icon: <Globe size={32} />, 
              val: "> 100 噸", 
              label: "碳排放減少", 
              sub: "CO2e 實質減量",
              color: "text-green-500" 
            },
            { 
              icon: <Users size={32} />, 
              val: "10,000+", 
              label: "月活躍用戶 (MAU)", 
              sub: "建立數位淨灘社群",
              color: "text-blue-500" 
            },
            { 
              icon: <Activity size={32} />, 
              val: "70%", 
              label: "用戶留存率", 
              sub: "持續性的環保習慣",
              color: "text-purple-500" 
            },
             { 
              icon: <Zap size={32} />, 
              val: "50%", 
              label: "習慣養成", 
              sub: "用戶建立定期清理習慣",
              color: "text-yellow-500" 
            },
             { 
              icon: <Download size={32} />, 
              val: "50k+", 
              label: "累積下載", 
              sub: "App Store / Google Play",
              color: "text-orange-500" 
            }
          ].map((stat, i) => (
            <FadeIn delay={i * 0.1} key={i}>
              <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 text-center group border border-sand-100">
                 <div className={`w-20 h-20 mx-auto rounded-full bg-sand-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${stat.color}`}>
                   {stat.icon}
                 </div>
                 <h3 className="text-5xl font-bold text-primary-900 mb-4 tracking-tighter">{stat.val}</h3>
                 <p className="font-bold text-lg text-slate-800 mb-2">{stat.label}</p>
                 <p className="text-sm text-slate-500 uppercase tracking-wide">{stat.sub}</p>
              </div>
            </FadeIn>
                     ))}
                  </div>
                </Section>
          
                <NextPageSection title="執行藍圖" link="/roadmap" />
              </div>
            );
          }
