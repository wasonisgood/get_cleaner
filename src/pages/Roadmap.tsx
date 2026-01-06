import { Section, FadeIn } from '../components/Section';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

export function Roadmap() {
  const steps = [
    {
      phase: "Phase 1",
      title: "概念驗證與設計",
      subtitle: "Concept & Design",
      items: [
        "深度分析市場既有清理工具與永續應用。",
        "確立「數位淨灘」差異化優勢與價值主張。",
        "完成 UI/UX 設計：建立使用者數位習慣與環境影響的情感連結。"
      ]
    },
    {
      phase: "Phase 2",
      title: "敏捷開發與建構",
      subtitle: "Development & Build",
      items: [
        "採用兩週衝刺 (Sprint) 的敏捷開發模式。",
        "優先開發核心模組：「本機清理」與「永續成就儀表板」。",
        "整合「雲端空間引導」模組，確保核心功能完整。"
      ]
    },
    {
      phase: "Phase 3",
      title: "內部測試與發表",
      subtitle: "Testing & Launch",
      items: [
        "全面的 QA 測試：功能、效能、安全性與相容性。",
        "封閉 Beta 測試：招募目標使用者，收集回饋優化產品。",
        "正式上架：發布至台灣 Apple App Store 與 Google Play Store。"
      ]
    },
    {
      phase: "Phase 4",
      title: "市場推廣與迭代",
      subtitle: "Promotion & Iteration",
      items: [
        "社群經營：建立數位永續社群，與環保組織合作。",
        "數據驅動優化：分析使用者行為，作為新功能開發依據。",
        "持續進化：讓「數位淨灘」成為一種持久的環保生活習慣。"
      ]
    }
  ];

  return (
    <div className="pt-10">
      <Section className="text-center">
        <FadeIn>
          <span className="text-digital font-bold tracking-wider uppercase mb-2 block">執行藍圖</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">專案進行方式與步驟</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            分為四個清晰階段，確保從概念到市場的每一步都穩健高效。
          </p>
        </FadeIn>
      </Section>

      <div className="bg-gradient-to-b from-white to-sand-100 py-20 overflow-hidden">
        <Section>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2 hidden md:block" />
            <div className="absolute left-[20px] top-0 bottom-0 w-0.5 bg-primary-200 md:hidden" />

            {steps.map((step, index) => (
              <div key={index} className={cn(
                "relative mb-16 md:mb-24 flex flex-col md:flex-row gap-8 md:gap-0",
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}>
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="absolute left-[20px] md:left-1/2 w-5 h-5 bg-digital rounded-full border-4 border-white shadow-lg -translate-x-[9px] md:-translate-x-1/2 mt-1.5 z-10" 
                />

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                   <FadeIn delay={index * 0.1}>
                      <div className={cn(
                        "bg-white p-8 rounded-2xl shadow-sm border border-sand-100 relative group hover:shadow-md transition-shadow",
                        index % 2 === 0 ? "md:text-left" : "md:text-right"
                      )}>
                        {/* Arrow for desktop */}
                        <div className={cn(
                          "hidden md:block absolute top-5 w-4 h-4 bg-white border-t border-l border-sand-100 rotate-45 transform z-0",
                          index % 2 === 0 ? "-left-2.5 -rotate-45 border-t-0 border-l-0 border-b border-l" : "-right-2.5 rotate-45"
                        )} />

                        <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                          {step.phase}
                        </span>
                        <h3 className="text-2xl font-bold text-primary-900 mb-1">{step.title}</h3>
                        <p className="text-sm text-slate-400 font-medium mb-4 uppercase tracking-wide">{step.subtitle}</p>
                        
                        <ul className={cn(
                          "space-y-3 text-slate-600 text-sm",
                          index % 2 === 0 ? "md:text-left" : "md:text-right"
                        )}>
                          {step.items.map((item, i) => (
                            <li key={i} className="flex flex-col">
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                   </FadeIn>
                </div>

                {/* Empty space for the other side */}
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}