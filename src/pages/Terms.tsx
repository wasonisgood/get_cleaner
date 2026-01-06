import { Section, FadeIn } from '../components/Section';
import { Calendar, Tag, Unlock, AlertCircle, Clock, FileCheck, RefreshCw, Globe, Server, Code, Megaphone, X, ChevronRight, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Bulletin Data
const BULLETINS = [
  {
    id: 'earth-day-2025',
    status: 'active' as const,
    title: "2025 世界地球日響應活動",
    period: "2025/04/01 - 2025/04/30",
    scope: "進階碳足跡計算 API (Commercial Tier)",
    condition: "所有註冊用戶皆可免費調用每日 1000 次，用於非營利推廣。",
    description: "為響應世界地球日，我們開放商業級 API 供大眾使用。此授權允許開發者將碳足跡計算功能整合至其個人的環保專案中，無需支付 API 調用費用。旨在鼓勵更多數位減碳應用的創新。",
    features: [
      "存取 Tier-2 精準運算模型",
      "每日 1,000 次 API 請求配額",
      "包含區域性電力係數資料庫",
      "允許用於公開發表的開源專案"
    ]
  },
  {
    id: 'hackathon-2025',
    status: 'upcoming' as const,
    title: "暑期黑客松：數位永續專題",
    period: "2025/07/01 - 2025/08/31",
    scope: "匿名化使用者行為數據集 (Dataset v2.0)",
    condition: "限持有學生證或學術機構信箱之參賽團隊申請，僅供學術研究使用。",
    description: "針對大專院校學生舉辦的黑客松活動。我們釋出經過嚴格去識別化處理的使用者行為數據集（Dataset v2.0），包含清理習慣、檔案類型分佈與減碳成效分析，供參賽隊伍進行數據探勘與模型訓練。",
    features: [
      "50,000+ 筆去識別化行為樣本",
      "包含時序性清理行為標註",
      "需簽署學術使用切結書",
      "比賽結束後需刪除原始數據"
    ]
  },
  {
    id: 'beta-test',
    status: 'expired' as const,
    title: "Beta 測試期全面開放",
    period: "2024/12/01 - 2025/01/01",
    scope: "全站功能無限制存取",
    condition: "已結束",
    description: "感謝所有早期參與者！Beta 測試期間的所有功能已轉為正式版。原有測試帳號之數據已保留，但使用權限將回歸標準使用者條款。",
    features: [
      "無限制雲端儲存空間 (已失效)",
      "Pro 版分析報表 (已失效)"
    ]
  }
];

export function Terms() {
  const [selectedBulletin, setSelectedBulletin] = useState<typeof BULLETINS[0] | null>(null);

  return (
    <div className="pt-20 pb-20 relative">
      
      {/* Dynamic Bulletin Board Section */}
      <div className="bg-sand-50 border-b border-sand-200 mb-16 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
             <div className="p-2 bg-digital/10 rounded-lg">
               <Megaphone className="w-6 h-6 text-digital" />
             </div>
             <div>
               <h2 className="text-2xl font-bold text-primary-900">臨時授權與開放資料公告</h2>
               <p className="text-slate-500 text-sm">點擊下方卡片查看詳細授權範圍與規範。</p>
             </div>
          </div>

          <div className="grid gap-4">
            {BULLETINS.map((bulletin) => (
              <BulletinCard 
                key={bulletin.id}
                data={bulletin}
                onClick={() => setSelectedBulletin(bulletin)}
              />
            ))}
          </div>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-8">使用條款</h1>
            <p className="text-slate-500 mb-12 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              常態條款生效日期：{new Date().toLocaleDateString()}
            </p>
            
            <div className="prose prose-lg prose-slate max-w-none space-y-12">
              {/* Standard Terms Sections */}
              <section>
                <h2 className="text-2xl font-bold text-primary-800 mb-4">1. 同意條款</h2>
                <p>
                  歡迎來到 theriest（以下簡稱「本平台」）。
                  當您訪問、瀏覽或使用本網站及相關服務時，即表示您已閱讀、理解並同意受本「使用條款」（以下簡稱「本條款」）之約束。
                  若您不同意本條款的任何部分，請立即停止使用本平台。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-800 mb-4">2. 服務內容</h2>
                <p>
                  本平台致力於推廣「數位節制」與「數位淨灘」理念，提供相關資訊、教育內容及數位清理工具。
                  我們保留隨時修改、暫停或終止部分或全部服務的權利，恕不另行通知。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-800 mb-4">3. 使用者行為規範</h2>
                <p className="mb-4">在使用本平台時，您同意遵守以下規範：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>不得利用本平台進行任何非法、侵害他人權益或違反公序良俗之行為。</li>
                  <li>不得干擾或破壞本平台的伺服器、網路系統及安全機制。</li>
                  <li>不得未經授權蒐集本平台其他使用者的個人資料。</li>
                  <li>在使用我們的數位清理建議或工具時，請務必自行備份重要資料。我們不對因操作不當導致的資料遺失負責。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-800 mb-4">4. 智慧財產權</h2>
                <p>
                  本平台上的所有內容，包括但不限於文字、圖片、標誌、程式碼及設計，均受著作權法及其他智慧財產權法律保護。
                  未經我們明確書面同意，不得擅自複製、轉載、修改或用於商業用途。
                </p>
              </section>

              {/* Licensing Section */}
              <section className="bg-white p-8 rounded-2xl border border-sand-200 shadow-sm">
                <h2 className="text-2xl font-bold text-primary-800 mb-6 flex items-center gap-2">
                  <FileCheck className="text-digital" />
                  5. 常態授權模式
                </h2>
                
                <p className="mb-6">
                  除上方公告之臨時授權外，本平台之常態服務適用以下授權規範：
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* One-Time Use */}
                  <div className="bg-sand-50 p-6 rounded-xl border border-sand-200">
                    <h3 className="font-bold text-lg text-primary-900 mb-3 flex items-center gap-2">
                      <span className="p-1 bg-white rounded shadow-sm"><FileCheck size={16} /></span>
                      一次性使用授權
                    </h3>
                    <ul className="text-sm space-y-2 list-disc pl-4 text-slate-700">
                      <li>僅限於單一裝置或單一網域使用。</li>
                      <li>不可轉讓、轉售。</li>
                      <li>適用於一般個人用戶。</li>
                    </ul>
                  </div>

                  {/* Broad Use */}
                  <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                    <h3 className="font-bold text-lg text-primary-900 mb-3 flex items-center gap-2">
                      <span className="p-1 bg-white rounded shadow-sm"><RefreshCw size={16} /></span>
                      廣泛性使用授權
                    </h3>
                    <p className="text-sm text-slate-700 mb-2">
                      依據適用範圍分為：
                    </p>
                    <ul className="text-sm space-y-2 text-slate-700">
                      <li className="flex items-center gap-2"><Globe size={14} className="text-blue-600"/> <strong>等級 A：</strong> 組織內部通用</li>
                      <li className="flex items-center gap-2"><Server size={14} className="text-purple-600"/> <strong>等級 B：</strong> 商業整合 (需合約)</li>
                      <li className="flex items-center gap-2"><Code size={14} className="text-green-600"/> <strong>等級 C：</strong> 開源專案衍生</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-800 mb-4">6. 免責聲明與賠償</h2>
                <p className="mb-4">
                  本平台資訊僅供參考。若因您違反本條款導致本平台受損，您同意負擔賠償責任。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-800 mb-4">7. 聯絡與管轄</h2>
                <p>
                  本條款適用中華民國法律，以台北地方法院為管轄法院。聯絡請洽：
                  <a href="mailto:legal@theriest.org" className="text-digital hover:underline ml-1">legal@theriest.org</a>
                </p>
              </section>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Detail Modal Widget */}
      <AnimatePresence>
        {selectedBulletin && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBulletin(null)}
              className="absolute inset-0 bg-primary-950/60 backdrop-blur-sm"
            />
            
            {/* Modal Card */}
            <motion.div 
              layoutId={selectedBulletin.id}
              className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden z-10"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div className="bg-primary-900 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-digital/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <StatusBadge status={selectedBulletin.status} inverse />
                    <button 
                      onClick={() => setSelectedBulletin(null)}
                      className="p-1 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{selectedBulletin.title}</h3>
                  <div className="flex items-center gap-2 text-primary-200 text-sm font-mono">
                     <Clock size={14} />
                     {selectedBulletin.period}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                 <div className="mb-6">
                   <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">詳細說明</h4>
                   <p className="text-slate-600 leading-relaxed">
                     {selectedBulletin.description}
                   </p>
                 </div>

                 <div className="mb-8">
                   <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">授權功能清單</h4>
                   <ul className="space-y-3">
                     {selectedBulletin.features?.map((feature, i) => (
                       <li key={i} className="flex items-start gap-3 text-primary-900 bg-sand-50 p-3 rounded-lg border border-sand-100">
                         <ShieldCheck className="w-5 h-5 text-digital flex-shrink-0" />
                         <span className="text-sm font-medium">{feature}</span>
                       </li>
                     ))}
                   </ul>
                 </div>

                 <button 
                   onClick={() => setSelectedBulletin(null)}
                   className="w-full py-4 rounded-xl bg-primary-900 text-white font-bold hover:bg-digital hover:text-primary-900 transition-all duration-300"
                 >
                   了解更多詳情
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatusBadge({ status, inverse = false }: { status: 'active' | 'upcoming' | 'expired', inverse?: boolean }) {
  const statusConfig = {
    active: { 
      color: inverse ? "bg-white/20 text-digital border-transparent" : "bg-green-100 text-green-700 border-green-200", 
      label: "進行中", 
      icon: <Unlock size={12} /> 
    },
    upcoming: { 
      color: inverse ? "bg-white/20 text-amber-300 border-transparent" : "bg-amber-100 text-amber-700 border-amber-200", 
      label: "即將開始", 
      icon: <Clock size={12} /> 
    },
    expired: { 
      color: inverse ? "bg-white/20 text-slate-400 border-transparent" : "bg-slate-100 text-slate-500 border-slate-200", 
      label: "已結束", 
      icon: <AlertCircle size={12} /> 
    },
  };

  const config = statusConfig[status];

  return (
    <div className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border", config.color)}>
      {config.icon}
      {config.label}
    </div>
  );
}

function BulletinCard({ data, onClick }: { data: typeof BULLETINS[0], onClick: () => void }) {
  const isExpired = data.status === 'expired';

  return (
    <motion.div 
      layoutId={data.id}
      onClick={onClick}
      whileHover={{ scale: 1.01, x: 4 }}
      whileTap={{ scale: 0.99 }}
      className={cn(
        "bg-white p-5 rounded-xl border border-sand-200 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center cursor-pointer group relative overflow-hidden",
        isExpired && "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
      )}
    >
      <div className="absolute inset-0 bg-sand-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Date & Status Column */}
      <div className="md:w-48 flex-shrink-0 space-y-2 relative z-10">
        <StatusBadge status={data.status} />
        <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
          <Calendar size={14} />
          {data.period}
        </div>
      </div>

      {/* Content Column */}
      <div className="flex-grow space-y-2 relative z-10">
        <h3 className="font-bold text-primary-900 text-lg group-hover:text-digital transition-colors flex items-center gap-2">
          {data.title}
          <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-digital" />
        </h3>
        <div className="flex flex-col sm:flex-row gap-3 text-sm">
          <div className="flex items-start gap-2 text-slate-600">
            <Tag size={14} className="mt-0.5 text-digital" />
            <span>開放項目：<strong>{data.scope}</strong></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}