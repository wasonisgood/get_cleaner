import { Section, FadeIn } from '../components/Section';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { NextPageSection } from '../components/NextPageSection';

export function Roadmap() {
  const steps = [
    {
      phase: "Phase 1",
      title: "個人覺醒與工具導入",
      subtitle: "Individual Awareness & App Launch",
      items: [
        "推出 Releaf App：提供「一鍵淨灘」與「Releaf 助手」核心功能。",
        "聚焦個人使用者：建立定期清理的數位習慣。",
        "目標：讓使用者體驗到刪除檔案＝守護地球的直接連結。"
      ]
    },
    {
      phase: "Phase 2",
      title: "企業合作與標準制定",
      subtitle: "Enterprise & Green Coding Standards",
      items: [
        "推動「綠色程式碼」認證：協助企業進行數位減碳。",
        "建立 B2B 合作夥伴關係：導入企業級數位淨灘方案。",
        "擴大影響力：從個人延伸至組織層級的數位廢棄物管理。"
      ]
    },
    {
      phase: "Phase 3",
      title: "生態系建構與政策影響",
      subtitle: "Ecosystem & Policy Influence",
      items: [
        "倡議「數位廢棄物」相關政策與稅制討論。",
        "建立完整永續生態系：連結政府、企業與個人。",
        "雙軸轉型：實現數位轉型與淨零碳排的同步發展。"
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

      <NextPageSection title="加入行動" link="/contact" />
    </div>
  );
}