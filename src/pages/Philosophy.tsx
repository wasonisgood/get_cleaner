import { Section, FadeIn } from '../components/Section';
import { Zap, Target, Shield, Recycle } from 'lucide-react';

export function Philosophy() {
  return (
    <div className="pt-24 min-h-screen bg-sand-50/50">
      <Section className="text-center pb-20">
        <FadeIn>
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-sand-200 shadow-sm mb-6">
             <span className="w-2 h-2 rounded-full bg-digital animate-pulse"></span>
             <span className="text-primary-900 font-medium text-sm tracking-wide uppercase">核心理念</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-bold text-primary-900 mb-8 tracking-tight">
             數位與永續的<br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-digital to-primary-600">雙軸轉型</span> (Twin Transformation)
           </h1>
           <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
             Releaf 專案不只是一個工具，而是響應全球「數位轉型」與「永續轉型」同步進行的倡議。我們相信，真正的智慧生活應建立在對環境負責的基礎之上。
           </p>
        </FadeIn>
      </Section>

      {/* Core Values Grid */}
      <div className="py-12 pb-32">
        <Section>
           <div className="grid md:grid-cols-2 gap-8">
             {/* Card 1 */}
             <FadeIn delay={0}>
               <div className="h-full bg-white p-10 rounded-[2.5rem] shadow-xl border border-sand-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute top-0 right-0 p-32 bg-digital/5 rounded-full blur-3xl translate-x-10 -translate-y-10 group-hover:bg-digital/10 transition-colors"></div>
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-8">
                    <Zap size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-900 mb-4">賦權 (Empowerment)</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    我們致力於將環境主導權交還給使用者。透過簡單的「點擊」與「清理」，讓每個人都能感受到自己微小的數位行為，也能對巨大的氣候危機產生正面影響。這是一種從無力感中解放，重拾行動力的過程。
                  </p>
               </div>
             </FadeIn>

             {/* Card 2 */}
             <FadeIn delay={0.1}>
               <div className="h-full bg-white p-10 rounded-[2.5rem] shadow-xl border border-sand-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute top-0 right-0 p-32 bg-green-100/30 rounded-full blur-3xl translate-x-10 -translate-y-10 group-hover:bg-green-100/50 transition-colors"></div>
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-8">
                    <Recycle size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-900 mb-4">數位循環 (Digital Circularity)</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    仿照循環經濟的概念，我們提倡「數位斷捨離」。資料不應是只進不出的囤積物，而應建立定期檢視、清理與優化的健康循環。這不僅釋放硬體空間，更釋放了心靈的空間。
                  </p>
               </div>
             </FadeIn>
             
             {/* Card 3 */}
             <FadeIn delay={0.2}>
               <div className="h-full bg-white p-10 rounded-[2.5rem] shadow-xl border border-sand-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute top-0 right-0 p-32 bg-yellow-100/30 rounded-full blur-3xl translate-x-10 -translate-y-10 group-hover:bg-yellow-100/50 transition-colors"></div>
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-8">
                    <Shield size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-900 mb-4">隱私與信任 (Privacy First)</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    在追求便利與環保的同時，我們絕不妥協使用者的隱私。Releaf 採用「本機優先」的運算架構，您的照片與私人檔案分析皆在手機端完成，不會上傳至雲端伺服器。信任，是永續關係的基石。
                  </p>
               </div>
             </FadeIn>

             {/* Card 4 */}
             <FadeIn delay={0.3}>
               <div className="h-full bg-primary-900 p-10 rounded-[2.5rem] shadow-xl border border-primary-800 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 text-white">
                  <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl translate-x-10 -translate-y-10"></div>
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-digital mb-8">
                    <Target size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">具體行動 (Tangible Action)</h3>
                  <p className="text-primary-200 text-lg leading-relaxed">
                    我們拒絕空泛的口號。Releaf 強調可量化、可驗證的成果。從釋放的 KB/MB 數到實際種下的每一棵樹，每一個數據都代表著真實世界的改變。讓永續不再是遙遠的北極熊，而是指尖的日常。
                  </p>
               </div>
             </FadeIn>
           </div>
        </Section>
      </div>
    </div>
  );
}