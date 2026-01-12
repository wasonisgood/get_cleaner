import { Section, FadeIn } from '../components/Section';
import { Eye, Eraser, Sprout, Smartphone, Sparkles, Monitor } from 'lucide-react';
import { NextPageSection } from '../components/NextPageSection';

export function Curation() {
  return (
    <div className="pt-24 min-h-screen bg-sand-50/50">
      <Section className="text-center pb-20">
        <FadeIn>
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-sand-200 shadow-sm mb-6">
             <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
             <span className="text-primary-900 font-medium text-sm tracking-wide uppercase">數位藝術策展</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-bold text-primary-900 mb-8 tracking-tight">
             看不見的污染，<br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">看得見的未來</span>
           </h1>
           <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
             這不只是一個展覽，而是一場關於「覺醒」的體驗旅程。透過互動裝置藝術，我們將隱形的數位碳足跡具象化，邀請您從旁觀者轉變為行動者。
           </p>
        </FadeIn>
      </Section>

      {/* Zone 1 */}
      <div className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <Section>
           <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <FadeIn>
                 <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-500 mb-8 border border-red-500/30">
                    <Eye size={32} />
                  </div>
                 <h2 className="text-4xl font-bold mb-6 text-white">Zone 1: 進入數位垃圾場</h2>
                 <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                   在這裡，所有的「雲端」都被拉回地面。巨大的投影牆上，無數的照片、郵件、訊息如雨點般落下，堆積成山。每一則未讀的電子報、每一張模糊的連拍照片，都化為實體的重量壓在眼前。
                 </p>
                 <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <h4 className="font-bold text-red-400 mb-2">互動體驗</h4>
                    <p className="text-slate-400">當觀眾走過感應區，腳下的「數據碎片」會隨之揚起，並發出沈重的噪聲，模擬數據中心運轉的低頻噪音。</p>
                 </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                 <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-950 rounded-[2.5rem] border border-white/10 flex items-center justify-center relative overflow-hidden shadow-2xl">
                    <Monitor size={200} className="text-slate-700/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <span className="text-9xl font-black text-white/5 select-none">DATA</span>
                    </div>
                 </div>
              </FadeIn>
           </div>
        </Section>
      </div>

      {/* Zone 2 */}
      <div className="py-24 bg-white relative">
        <Section>
           <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <FadeIn delay={0.2} className="order-2 md:order-1">
                 <div className="aspect-square bg-gradient-to-br from-digital/10 to-blue-50 rounded-[2.5rem] border border-digital/20 flex items-center justify-center relative overflow-hidden shadow-xl">
                    <Smartphone size={200} className="text-digital/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Sparkles size={120} className="text-digital animate-pulse" />
                    </div>
                 </div>
              </FadeIn>
              <FadeIn className="order-1 md:order-2">
                 <div className="w-16 h-16 bg-digital/10 rounded-2xl flex items-center justify-center text-digital mb-8">
                    <Eraser size={32} />
                  </div>
                 <h2 className="text-4xl font-bold text-primary-900 mb-6">Zone 2: 數位淨化儀式</h2>
                 <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                   從焦慮轉向行動。這是一個純白、極簡的空間。觀眾拿出手機，掃描 QR Code 進入 Releaf 體驗版。隨著你在手機上刪除一張不必要的照片，展場中央巨大的「數據黑霧」就會消散一點，轉化為清澈的光芒。
                 </p>
                 <div className="bg-sand-50 p-6 rounded-2xl border border-sand-200">
                    <h4 className="font-bold text-primary-700 mb-2">即時回饋</h4>
                    <p className="text-slate-600">展場螢幕即時顯示：「今日已清除 45 GB，相當於減少了 1.5kg CO2e，拯救了 0.05 棵樹。」</p>
                 </div>
              </FadeIn>
           </div>
        </Section>
      </div>

      {/* Zone 3 */}
      <div className="py-24 bg-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000033_1px,transparent_1px),linear-gradient(to_bottom,#00000033_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
        <Section>
           <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <FadeIn>
                 <div className="w-16 h-16 bg-green-400/20 rounded-2xl flex items-center justify-center text-green-400 mb-8 border border-green-400/30">
                    <Sprout size={32} />
                  </div>
                 <h2 className="text-4xl font-bold mb-6 text-white">Zone 3: 預見綠色烏托邦</h2>
                 <p className="text-green-100 text-lg mb-6 leading-relaxed">
                   當數據被淨化，世界會變成什麼樣子？在這個沈浸式投影空間中，每一位參與者的行動都會長出一棵虛擬的樹。隨著參與人數增加，原本荒蕪的沙漠逐漸變成茂密的數位森林。
                 </p>
                 <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <h4 className="font-bold text-green-300 mb-2">共創未來</h4>
                    <p className="text-green-100/80">這片森林是動態生長的，它象徵著我們集體行動的力量。你的每一次點擊，都在為地球種下希望。</p>
                 </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                 <div className="aspect-square bg-gradient-to-br from-green-800 to-green-950 rounded-[2.5rem] border border-white/10 flex items-center justify-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb7d5763?q=80&w=2000&auto=format&fit=crop')] opacity-50 bg-cover bg-center"></div>
                    <div className="relative z-10 text-center p-8 bg-black/30 backdrop-blur-sm rounded-xl">
                       <span className="text-4xl font-bold text-white block mb-2">1,248</span>
                       <span className="text-sm text-green-200 uppercase tracking-widest">Trees Planted Today</span>
                    </div>
                 </div>
              </FadeIn>
           </div>
        </Section>
      </div>

      <NextPageSection title="預期效益" link="/impact" />
    </div>
  );
}
