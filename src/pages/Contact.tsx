import { Section, FadeIn } from '../components/Section';
import { Mail, MessageCircle, Github, Heart, User, Building, Code } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-20 pb-20">
      
      {/* Hero Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-digital font-semibold tracking-wide uppercase mb-4 block">Join the Movement</span>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-8">
              成為數位淨灘的一員
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              這不僅是一個專案，更是一場溫柔的社會運動。
              我們需要你的力量，一起重新定義人與數位的關係。
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Pathways to Participate */}
      <Section className="mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          <ActionCard 
            icon={<User className="w-8 h-8" />}
            title="個人參與"
            description="從整理自己的數位空間開始。訂閱我們的電子報，獲取每週清理指南，並分享你的減量成果。"
            actionText="訂閱電子報"
            actionLink="#newsletter"
            delay={0.1}
          />
          <ActionCard 
            icon={<Building className="w-8 h-8" />}
            title="企業響應"
            description="將「數位ESG」納入企業永續指標。我們提供企業級的數位健檢諮詢與員工工作坊。"
            actionText="申請合作"
            actionLink="mailto:partner@theriest.org"
            delay={0.2}
          />
          <ActionCard 
            icon={<Code className="w-8 h-8" />}
            title="開源貢獻"
            description="我們是開源專案。歡迎開發者、設計師加入我們的 GitHub，一起打造更好用的清理工具。"
            actionText="前往 GitHub"
            actionLink="https://github.com/theriest" // Placeholder URL
            delay={0.3}
          />
        </div>
      </Section>

      {/* Manifesto / Why Join */}
      <div className="bg-sand-100 py-20 mb-24 rounded-3xl mx-4 md:mx-0">
        <Section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                為什麼我們需要你？
              </h2>
              <div className="space-y-6 text-lg text-slate-700">
                <p>
                  <strong className="text-primary-800">1. 擴大影響力：</strong>
                  一個人的刪除是清理，一群人的刪除就是淨灘。你的參與能讓更多人看見這個議題。
                </p>
                <p>
                  <strong className="text-primary-800">2. 驗證改變：</strong>
                  我們需要真實的使用者回饋，來證明「數位節制」不僅對地球好，對心理健康也有效。
                </p>
                <p>
                  <strong className="text-primary-800">3. 資源共享：</strong>
                  這是一個非營利導向的倡議。你的贊助或技術支援，將直接用於開發公共財般的數位衛生工具。
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="flex justify-center">
               <div className="bg-white p-8 rounded-2xl shadow-xl border border-sand-200 max-w-sm rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Heart className="w-12 h-12 text-digital mb-4" />
                  <p className="text-xl font-medium text-primary-900 mb-2">"這是我參與過最有意義的數位行動。"</p>
                  <p className="text-slate-500">- 早期參與者見證</p>
               </div>
            </FadeIn>
          </div>
        </Section>
      </div>

      {/* Connect Section */}
      <Section>
         <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">保持連結</h2>
         <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
           <FadeIn delay={0.1}>
             <a href="mailto:hello@theriest.org" className="block p-8 rounded-2xl bg-white border border-sand-200 hover:border-digital hover:shadow-lg transition-all group">
               <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-digital group-hover:text-white transition-colors">
                 <Mail className="w-8 h-8 text-primary-600 group-hover:text-white" />
               </div>
               <h3 className="text-xl font-bold mb-2">Email</h3>
               <p className="text-slate-500">hello@theriest.org</p>
             </a>
           </FadeIn>

           <FadeIn delay={0.2}>
             <a href="#" className="block p-8 rounded-2xl bg-white border border-sand-200 hover:border-digital hover:shadow-lg transition-all group">
               <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-digital group-hover:text-white transition-colors">
                 <MessageCircle className="w-8 h-8 text-primary-600 group-hover:text-white" />
               </div>
               <h3 className="text-xl font-bold mb-2">社群平台</h3>
               <p className="text-slate-500">追蹤我們的最新動態</p>
             </a>
           </FadeIn>

           <FadeIn delay={0.3}>
             <a href="#" className="block p-8 rounded-2xl bg-white border border-sand-200 hover:border-digital hover:shadow-lg transition-all group">
               <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-digital group-hover:text-white transition-colors">
                 <Github className="w-8 h-8 text-primary-600 group-hover:text-white" />
               </div>
               <h3 className="text-xl font-bold mb-2">GitHub</h3>
               <p className="text-slate-500">參與開源專案開發</p>
             </a>
           </FadeIn>
         </div>
      </Section>

    </div>
  );
}

function ActionCard({ icon, title, description, actionText, actionLink, delay }: any) {
  return (
    <FadeIn delay={delay}>
      <div className="h-full flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-sand-200 hover:shadow-md transition-shadow">
        <div className="text-digital mb-6">{icon}</div>
        <h3 className="text-xl font-bold text-primary-900 mb-4">{title}</h3>
        <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
          {description}
        </p>
        <a 
          href={actionLink}
          className="inline-flex items-center justify-center px-6 py-3 border border-primary-900 text-primary-900 font-medium rounded-lg hover:bg-primary-900 hover:text-white transition-colors w-full"
        >
          {actionText}
        </a>
      </div>
    </FadeIn>
  );
}
