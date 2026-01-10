import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileFrame } from './MobileFrame';
import { Sparkles, Leaf, Image as ImageIcon, Mail, Heart, AlarmClock } from 'lucide-react';

export function PetAssistantDemo() {
  const [mode, setMode] = useState<'idle' | 'suggesting' | 'cleaning' | 'celebrating' | 'timer'>('idle');
  const [happiness, setHappiness] = useState(65);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [timerActive, setTimerActive] = useState(false);

  // Auto-trigger suggestion after a few seconds of idle
  useEffect(() => {
    if (mode === 'idle') {
      const timer = setTimeout(() => {
        // Randomly choose between suggesting cleaning or just being cute
        setMode('suggesting');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [mode]);

  // Timer Logic (Speed up for demo: 1 real second = 30 demo seconds)
  useEffect(() => {
    let interval: any;
    if (mode === 'timer' && timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 10); // Speed up
      }, 100);
    } else if (timeLeft <= 0 && mode === 'timer') {
      setTimerActive(false);
      setMode('celebrating');
      setHappiness(prev => Math.min(prev + 20, 100));
      setTimeout(() => {
        setMode('idle');
        setTimeLeft(180);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [mode, timerActive, timeLeft]);

  const startCleaning = () => {
    setMode('cleaning');
    setTimeout(() => {
      setMode('celebrating');
      setHappiness(prev => Math.min(prev + 15, 100));
      setTimeout(() => {
        setMode('idle');
      }, 3000);
    }, 2000);
  };

  const start3MinChallenge = () => {
    setMode('timer');
    setTimerActive(true);
    setTimeLeft(180);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
        
        {/* Decorative Background */}
        <div className="absolute top-[-20%] left-[-20%] w-[150%] h-[60%] bg-blue-100/30 rounded-[100%] blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="p-4 flex justify-between items-center relative z-20">
           <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-white/50">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-slate-600">Releaf Bot</span>
           </div>
           
           <div className="relative w-32 h-8 bg-white/80 backdrop-blur-md rounded-full shadow-sm border border-white/50 flex items-center px-1">
              <div className="absolute left-2 text-[10px] font-bold text-slate-400 z-10">HAPPY</div>
              <motion.div 
                 className="h-5 rounded-full bg-gradient-to-r from-yellow-300 to-green-400"
                 initial={{ width: `${happiness}%` }}
                 animate={{ width: `${happiness}%` }}
                 transition={{ type: "spring", stiffness: 50 }}
              />
              <div className="absolute right-2 text-xs font-bold text-slate-600 z-10">{happiness}%</div>
           </div>
        </div>

        {/* Main Area */}
        <div className="flex-1 flex flex-col items-center justify-center relative z-10 pb-20">
           
           {/* Cleaning Particles */}
           <AnimatePresence>
             {mode === 'cleaning' && (
               <>
                 {Array.from({ length: 8 }).map((_, i) => (
                   <motion.div
                     key={`sparkle-${i}`}
                     initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                     animate={{ 
                        opacity: 0, 
                        scale: 1.5, 
                        x: (Math.random() - 0.5) * 200, 
                        y: (Math.random() - 0.5) * 200 
                     }}
                     transition={{ duration: 0.8, repeat: Infinity, delay: Math.random() * 0.5 }}
                     className="absolute z-20 text-digital"
                   >
                      <Sparkles size={16} />
                   </motion.div>
                 ))}
                 <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="absolute z-10 w-48 h-48 border-2 border-dashed border-digital/30 rounded-full"
                 />
               </>
             )}
           </AnimatePresence>

           {/* The Pet Avatar */}
           <motion.div 
             className="relative cursor-pointer z-10"
             onClick={() => {
                if(mode === 'idle') setMode('suggesting');
                setHappiness(h => Math.min(h + 5, 100));
             }}
             whileTap={{ scale: 0.9 }}
             animate={{ 
               y: mode === 'celebrating' ? [0, -20, 0] : [0, -5, 0],
               scale: mode === 'celebrating' ? [1, 1.1, 1] : 1,
               rotate: mode === 'cleaning' ? [0, 5, -5, 0] : 0
             }}
             transition={{ 
               y: { repeat: Infinity, duration: mode === 'celebrating' ? 0.5 : 3, ease: "easeInOut" },
               rotate: { repeat: Infinity, duration: 0.2 }
             }}
           >
              <div className={`w-36 h-36 bg-gradient-to-br from-digital to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 relative border-4 border-white transition-all duration-500 ${mode === 'cleaning' ? 'scale-90' : ''}`}>
                 {/* Face */}
                 <div className="absolute top-1/3 flex gap-8">
                    {mode === 'cleaning' || mode === 'timer' ? (
                        <>
                           <div className="w-4 h-1 bg-white rounded-full translate-y-2"></div>
                           <div className="w-4 h-1 bg-white rounded-full translate-y-2"></div>
                        </>
                    ) : mode === 'celebrating' ? (
                        <>
                           <div className="text-white font-bold text-xl">^</div>
                           <div className="text-white font-bold text-xl">^</div>
                        </>
                    ) : (
                        <>
                           <motion.div 
                             className="w-3 h-3 bg-white rounded-full" 
                             animate={{ height: [12, 2, 12] }} 
                             transition={{ repeat: Infinity, delay: 2, duration: 0.2, repeatDelay: 3 }}
                           />
                           <motion.div 
                             className="w-3 h-3 bg-white rounded-full" 
                             animate={{ height: [12, 2, 12] }} 
                             transition={{ repeat: Infinity, delay: 2, duration: 0.2, repeatDelay: 3 }}
                           />
                        </>
                    )}
                 </div>

                 {/* Mouth */}
                 <div className={`absolute bottom-1/3 w-4 h-2 bg-black/20 rounded-full transition-all duration-300 ${mode === 'celebrating' ? 'h-4 w-6 rounded-b-full' : ''}`}></div>
                 
                 {/* Leaf Accessory */}
                 <div className="absolute -top-4 right-4 w-12 h-12 bg-yellow-300 rounded-full rounded-bl-none flex items-center justify-center shadow-md rotate-12">
                    <Leaf className="text-yellow-700 w-6 h-6" />
                 </div>
              </div>
           </motion.div>

           {/* Status & Controls */}
           <div className="h-28 mt-8 px-4 w-full flex justify-center">
             <AnimatePresence mode="wait">
               
               {mode === 'idle' && (
                 <motion.div 
                   key="idle"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="flex flex-col items-center gap-3 w-full"
                 >
                    <div className="bg-white px-4 py-2 rounded-2xl border border-slate-100 shadow-sm text-center">
                       <p className="text-sm text-slate-500">休息一下，或者...</p>
                    </div>
                    <button 
                      onClick={start3MinChallenge}
                      className="w-full bg-primary-900 text-white py-3 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2"
                    >
                       <AlarmClock size={16} /> 啟動 3分鐘淨灘
                    </button>
                 </motion.div>
               )}

               {mode === 'timer' && (
                  <motion.div 
                    key="timer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center gap-2 w-full"
                  >
                     <div className="bg-white px-6 py-3 rounded-2xl border-2 border-digital shadow-lg flex items-center gap-4">
                        <div className="relative w-10 h-10 flex items-center justify-center">
                           <svg className="absolute w-full h-full transform -rotate-90">
                              <circle cx="20" cy="20" r="18" stroke="#e2e8f0" strokeWidth="4" fill="none" />
                              <motion.circle 
                                cx="20" cy="20" r="18" 
                                stroke="#14b8a6" strokeWidth="4" fill="none" 
                                strokeDasharray="113"
                                strokeDashoffset={113 - (113 * timeLeft) / 180}
                              />
                           </svg>
                           <span className="text-[10px] font-bold text-digital">{Math.ceil(timeLeft/60)}m</span>
                        </div>
                        <div>
                           <div className="text-2xl font-mono font-bold text-gray-800">{formatTime(timeLeft)}</div>
                           <div className="text-xs text-slate-500">專注清理中...</div>
                        </div>
                     </div>
                     <p className="text-xs text-slate-400 mt-2">請勿離開 App</p>
                  </motion.div>
               )}

               {mode === 'suggesting' && (
                 <motion.div 
                   key="suggesting"
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   className="flex flex-col gap-2 items-center w-full"
                 >
                    <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-md text-center relative mb-2">
                       <p className="text-sm font-bold text-gray-800">發現了一些數位垃圾！</p>
                       <div className="absolute -top-2 left-0 w-4 h-4 bg-white border-t border-l border-slate-100 transform rotate-45"></div>
                    </div>
                    
                    <div className="flex gap-2 w-full max-w-[240px]">
                       <button onClick={startCleaning} className="flex-1 bg-sky-100 hover:bg-sky-200 text-sky-700 py-3 rounded-xl text-xs font-bold transition-colors flex flex-col items-center gap-1">
                         <ImageIcon size={16} /> 模糊照片
                       </button>
                       <button onClick={startCleaning} className="flex-1 bg-orange-100 hover:bg-orange-200 text-orange-700 py-3 rounded-xl text-xs font-bold transition-colors flex flex-col items-center gap-1">
                         <Mail size={16} /> 廣告郵件
                       </button>
                    </div>
                 </motion.div>
               )}

               {mode === 'cleaning' && (
                 <motion.div key="cleaning" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p className="text-digital font-bold animate-pulse">正在大掃除中...</p>
                 </motion.div>
               )}

               {mode === 'celebrating' && (
                 <motion.div key="celebrating" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Heart className="text-red-500 fill-red-500 animate-bounce" />
                      <Heart className="text-red-500 fill-red-500 animate-bounce delay-75" />
                    </div>
                    <p className="text-gray-800 font-bold">太棒了！完成任務！</p>
                    <p className="text-xs text-green-600 font-bold">+20 Happiness</p>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>

        </div>
      </div>
    </MobileFrame>
  );
}
