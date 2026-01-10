import { Section, FadeIn } from '../components/Section';
import { AlertTriangle, Server, CloudFog, Globe2 } from 'lucide-react';

export function Problem() {
  return (
    <div className="pt-24 min-h-screen bg-sand-50/50">
      <Section className="text-center pb-20">
        <FadeIn>
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-sand-200 shadow-sm mb-6">
             <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
             <span className="text-primary-900 font-medium text-sm tracking-wide uppercase">危機與挑戰</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-bold text-primary-900 mb-8 tracking-tight">
             看不見的污染：<br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">數位碳足跡</span>
           </h1>
           <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
             我們以為雲端是虛無縹緲的，但事實上，它是由鋼鐵、混凝土與消耗巨量電力的數據中心所構成。每一次點擊、每一張備份的照片，都在實體世界留下了痕跡。
           </p>
        </FadeIn>
      </Section>

      {/* Statistics Section */}
      <div className="py-12">
        <Section>
           <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-sand-100">
              <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-sand-100">
                 <FadeIn delay={0}>
                    <div className="text-center px-4">
                       <div className="text-5xl font-bold text-primary-900 mb-2">4%</div>
                       <div className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-4">全球碳排佔比</div>
                       <p className="text-slate-600">
                          數位科技產生的溫室氣體排放量已佔全球 4%，甚至超過了航空業，且正以每年 9% 的速度增長。
                       </p>
                    </div>
                 </FadeIn>
                 <FadeIn delay={0.1}>
                    <div className="text-center px-4 pt-8 md:pt-0">
                       <div className="text-5xl font-bold text-primary-900 mb-2">90%</div>
                       <div className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-4">暗數據 (Dark Data)</div>
                       <p className="text-slate-600">
                          企業與個人儲存的數據中，有高達 90% 是從未被再次存取過的「垃圾資料」，卻持續消耗著儲存與電力資源。
                       </p>
                    </div>
                 </FadeIn>
                 <FadeIn delay={0.2}>
                    <div className="text-center px-4 pt-8 md:pt-0">
                       <div className="text-5xl font-bold text-primary-900 mb-2">32g</div>
                       <div className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-4">每 GB 碳排</div>
                       <p className="text-slate-600">
                          儲存與傳輸 1GB 的數據，平均會產生約 32g 的 CO2e。積少成多，你的手機可能就是一個小型碳排放源。
                       </p>
                    </div>
                 </FadeIn>
              </div>
           </div>
        </Section>
      </div>

      {/* The Cycle of Waste */}
      <div className="py-24 pb-32">
        <Section>
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn>
                 <h2 className="text-4xl font-bold text-primary-900 mb-6">便利背後的隱形成本</h2>
                 <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    隨著 5G 與 AI 的普及，數據生成的速度呈現指數級成長。我們習慣了「雲端備份」、「自動同步」，卻忽略了這些便利服務背後的環境代價。
                 </p>
                 <ul className="space-y-6">
                    <li className="flex gap-4">
                       <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 flex-shrink-0">
                          <Server size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-900 text-lg">數據中心能耗</h4>
                          <p className="text-slate-600">為了維持 24/7 運作與冷卻，數據中心消耗了全球約 1-2% 的電力。</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0">
                          <CloudFog size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-900 text-lg">電子廢棄物</h4>
                          <p className="text-slate-600">不斷升級的硬體需求導致手機與電腦的汰換率居高不下，加劇了電子垃圾問題。</p>
                       </div>
                    </li>
                 </ul>
              </FadeIn>
              <FadeIn>
                 <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-orange-400 rounded-[2.5rem] rotate-3 opacity-20 blur-lg"></div>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-sand-200 shadow-xl relative z-10">
                       <div className="aspect-square bg-sand-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                          {/* Abstract Visualization of Digital Waste */}
                          <Globe2 size={200} className="text-sand-200 absolute -bottom-10 -right-10" />
                          <div className="relative z-10 text-center">
                             <AlertTriangle size={64} className="text-red-500 mx-auto mb-4" />
                             <h3 className="text-2xl font-bold text-primary-900">警訊</h3>
                             <p className="text-slate-500 mt-2">如果不採取行動，ICT 產業碳排<br/>將在 2040 年佔全球 14%。</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </FadeIn>
           </div>
        </Section>
      </div>
    </div>
  );
}