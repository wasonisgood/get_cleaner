import { useState } from 'react';
import { motion } from 'framer-motion';
import { MobileFrame } from './MobileFrame';
import { BrainCircuit, Image as ImageIcon, Check, Sparkles } from 'lucide-react';

export function AiAssistantDemo() {
  const [step, setStep] = useState(0); // 0: Intro, 1: Chat/Analyzing, 2: Review

  const handleStart = () => {
    setStep(1);
    setTimeout(() => setStep(2), 2500);
  };

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-slate-50">
        {/* Header */}
        <div className="bg-white p-4 border-b border-slate-100 flex items-center gap-3 shadow-sm z-10">
           <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
              <BrainCircuit className="text-sky-600 w-6 h-6" />
           </div>
           <div>
              <h3 className="font-bold text-gray-900 text-sm">Releaf AI 助手</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wide">Online</span>
              </div>
           </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 overflow-hidden relative">
           
           {step === 0 && (
             <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }}
               className="h-full flex flex-col justify-end pb-4"
             >
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm mb-4 border border-slate-100 max-w-[85%]">
                   <p className="text-sm text-gray-700 leading-relaxed">
                     嗨！我是您的 AI 清理助手。我可以幫您找出相簿中的<span className="font-bold text-sky-600">模糊照片</span>與<span className="font-bold text-sky-600">重複截圖</span>。要現在開始嗎？
                   </p>
                </div>
                <button 
                  onClick={handleStart}
                  className="bg-sky-500 text-white p-3 rounded-xl font-medium shadow-lg shadow-sky-500/20 active:scale-95 transition-transform self-end flex items-center gap-2"
                >
                  <Sparkles size={16} /> 幫我分析相簿
                </button>
             </motion.div>
           )}

           {step === 1 && (
             <div className="h-full flex flex-col items-center justify-center space-y-6">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 bg-sky-100 rounded-2xl flex items-center justify-center"
                >
                   <ImageIcon className="w-10 h-10 text-sky-500" />
                </motion.div>
                <div className="space-y-2 text-center w-full max-w-[200px]">
                   <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-sky-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5 }}
                      />
                   </div>
                   <p className="text-xs text-slate-500">正在分析 1,204 張照片...</p>
                </div>
             </div>
           )}

           {step === 2 && (
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="h-full flex flex-col"
             >
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-1">發現 3 組重複照片</h4>
                  <p className="text-xs text-slate-500">建議保留最佳的一張</p>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                   {[1, 2].map((group) => (
                     <div key={group} className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-xs font-bold text-slate-400">GROUP {group}</span>
                           <span className="text-xs text-sky-500 font-medium">省下 12 MB</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                           {[1, 2, 3].map((_, i) => (
                             <div key={i} className="relative aspect-square bg-slate-100 rounded-lg overflow-hidden group cursor-pointer">
                                {i === 0 ? (
                                  <div className="absolute top-1 left-1 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full z-10 shadow-sm">
                                    Best
                                  </div>
                                ) : (
                                  <div className="absolute inset-0 bg-sky-900/40 flex items-center justify-center z-10">
                                     <Check className="text-white w-6 h-6" />
                                  </div>
                                )}
                                <div className={`w-full h-full bg-slate-300 ${i === 0 ? '' : 'opacity-50'}`}></div>
                             </div>
                           ))}
                        </div>
                     </div>
                   ))}
                </div>

                <button 
                  onClick={() => setStep(0)}
                  className="mt-4 w-full bg-sky-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-sky-500/20 active:scale-95 transition-transform"
                >
                  刪除選取照片 (24 MB)
                </button>
             </motion.div>
           )}

        </div>
      </div>
    </MobileFrame>
  );
}
