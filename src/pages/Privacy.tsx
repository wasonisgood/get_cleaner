import { Section, FadeIn } from '../components/Section';
import { Shield, Lock, Eye, FileText, Server, Globe } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';

export function Privacy() {
  const [activeSection, setActiveSection] = useState('introduction');

  // Simple spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'collection', 'usage', 'sharing', 'cookies', 'security', 'rights', 'updates'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-sand-50 min-h-screen">
      
      {/* Header Section */}
      <div className="bg-primary-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10 transform translate-x-1/3 -translate-y-1/3">
           <Shield size={400} />
        </div>
        <Section className="relative z-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6 text-digital">
              <Shield className="w-6 h-6" />
              <span className="font-bold tracking-widest uppercase text-sm">Legal & Privacy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">隱私權政策</h1>
            <p className="text-xl text-primary-200 max-w-2xl leading-relaxed">
              我們致力於保護您的數位隱私，如同我們致力於清理數位環境。<br/>
              這份文件詳細說明了我們如何處理您的數據。
            </p>
          </FadeIn>
        </Section>
      </div>

      <Section className="py-16">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Sidebar / Table of Contents */}
          <div className="hidden md:block md:col-span-3">
            <div className="sticky top-24 space-y-1">
              <p className="font-bold text-primary-900 mb-4 px-4 uppercase text-xs tracking-wider">目錄</p>
              <TOCItem id="introduction" active={activeSection} label="1. 導言" />
              <TOCItem id="collection" active={activeSection} label="2. 我們收集的資料" />
              <TOCItem id="usage" active={activeSection} label="3. 資料使用方式" />
              <TOCItem id="sharing" active={activeSection} label="4. 資料分享與揭露" />
              <TOCItem id="cookies" active={activeSection} label="5. Cookie 政策" />
              <TOCItem id="security" active={activeSection} label="6. 資料安全" />
              <TOCItem id="rights" active={activeSection} label="7. 您的權利" />
              <TOCItem id="updates" active={activeSection} label="8. 政策更新" />
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-9">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-sand-200 space-y-16">
              
              {/* Introduction */}
              <PolicySection id="introduction" title="1. 導言" icon={<FileText className="w-6 h-6" />}>
                <p>
                  歡迎使用 theriest（以下簡稱「我們」、「本專案」）。我們非常重視您的隱私權與個人資料保護。
                  本隱私權政策旨在說明我們如何收集、使用、揭露及保護您的個人資訊。
                  當您使用我們的網站、服務或參與我們的數位淨灘活動時，即表示您同意本政策所述之做法。
                </p>
                <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 mt-6">
                  <h4 className="font-bold text-primary-900 mb-2">我們的承諾</h4>
                  <p className="text-sm text-primary-700">
                    我們絕不會販售您的個人資料。我們的數據收集僅限於為了推動「數位淨灘」計畫的核心目標：計算碳減量與提升數位素養。
                  </p>
                </div>
              </PolicySection>

              {/* Collection */}
              <PolicySection id="collection" title="2. 我們收集的資料" icon={<Eye className="w-6 h-6" />}>
                <p className="mb-6">為了提供更好的服務並推動數位永續，我們可能會收集以下類型的資料：</p>
                <div className="grid sm:grid-cols-2 gap-6">
                   <div className="space-y-3">
                      <h4 className="font-bold text-primary-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-digital" />
                        個人識別資料
                      </h4>
                      <p className="text-sm text-slate-600">當您訂閱電子報、填寫聯絡表單或參與活動時，收集的姓名、Email 等。</p>
                   </div>
                   <div className="space-y-3">
                      <h4 className="font-bold text-primary-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-digital" />
                        使用數據
                      </h4>
                      <p className="text-sm text-slate-600">訪問網站的 IP 地址、瀏覽器類型、頁面停留時間等分析數據。</p>
                   </div>
                   <div className="col-span-full bg-sand-50 p-6 rounded-xl border border-sand-200">
                      <h4 className="font-bold text-primary-900 mb-2">關於數位足跡數據 (匿名)</h4>
                      <p className="text-sm text-slate-600">
                        若您使用我們的清理工具，我們僅統計「刪除的檔案總大小」（例如：1GB），以計算碳減量。
                        <strong className="text-digital block mt-2">我們絕不會讀取、儲存或傳輸您的檔案內容。</strong>
                      </p>
                   </div>
                </div>
              </PolicySection>

              {/* Usage */}
              <PolicySection id="usage" title="3. 資料使用方式" icon={<Server className="w-6 h-6" />}>
                <ul className="space-y-4">
                  {[
                    "發送電子報、專案更新及活動通知（經您同意）",
                    "回覆您的查詢或合作提案",
                    "分析專案影響力（例如：計算總體數位碳減量）",
                    "維護網站安全與系統運作"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </PolicySection>

              {/* Sharing */}
              <PolicySection id="sharing" title="4. 資料分享與揭露" icon={<Globe className="w-6 h-6" />}>
                <p>
                  除法律規定或經您明確同意外，我們不會將您的個人識別資料出售、出租或分享給第三方。
                  我們可能會與值得信賴的服務提供商（如電子郵件發送平台、網站分析工具）合作，但他們僅能在執行特定任務時使用您的資料，並受保密協議約束。
                </p>
              </PolicySection>

              {/* Security */}
              <PolicySection id="security" title="6. 資料安全" icon={<Lock className="w-6 h-6" />}>
                <p>
                  我們採取合理的技術與組織措施來保護您的個人資料，防止未經授權的存取、丟失或篡改。
                  然而，網際網路傳輸無法保證 100% 安全，我們將盡力維護，但不承擔不可抗力之風險。
                </p>
              </PolicySection>

              {/* Rights */}
              <PolicySection id="rights" title="7. 您的權利" icon={<Shield className="w-6 h-6" />}>
                <p className="mb-4">您擁有以下權利：</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {['查詢或閱覽', '製給複製本', '補充或更正', '停止蒐集、處理或利用', '刪除資料'].map((right) => (
                    <div key={right} className="bg-white border border-sand-200 p-3 rounded-lg text-center text-sm font-medium text-primary-800 hover:border-digital transition-colors cursor-default">
                      {right}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-slate-500">
                  若有任何隱私權相關問題，或欲行使上述權利，請透過 <a href="mailto:privacy@theriest.org" className="text-digital hover:underline">privacy@theriest.org</a> 與我們聯繫。
                </p>
              </PolicySection>

              {/* Updates */}
              <div id="updates" className="pt-8 border-t border-sand-200">
                <p className="text-slate-500 text-sm">
                  最後更新日期：{new Date().toLocaleDateString()}
                </p>
              </div>

            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

function TOCItem({ id, active, label }: { id: string; active: string; label: string }) {
  const isActive = active === id;
  return (
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }}
      className={cn(
        "block px-4 py-2.5 rounded-lg text-sm transition-all duration-300",
        isActive 
          ? "bg-primary-900 text-white font-medium shadow-md translate-x-2" 
          : "text-slate-500 hover:bg-white hover:text-primary-900"
      )}
    >
      {label}
    </a>
  );
}

function PolicySection({ id, title, icon, children }: { id: string; title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-primary-50 rounded-xl text-primary-700">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-primary-900">{title}</h2>
      </div>
      <div className="text-slate-600 leading-relaxed text-lg pl-0 md:pl-16">
        {children}
      </div>
    </section>
  );
}