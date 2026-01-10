import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileFrame } from './MobileFrame';
import { Trophy, Award, Target, Star, Zap } from 'lucide-react';

export function GamificationDemo() {
  const [activeTab, setActiveTab] = useState<'profile' | 'leaderboard'>('profile');
  const [xp, setXp] = useState(850);
  const [level, setLevel] = useState(5);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState<number | null>(null);

  const simulateCleanup = () => {
    if (xp >= 1000) return; // Cap for demo
    
    const newXp = xp + 150;
    if (newXp >= 1000) {
      setXp(0);
      setLevel(l => l + 1);
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 3000);
    } else {
      setXp(newXp);
    }
  };

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-slate-50 relative">
        {/* Level Up Overlay */}
        <AnimatePresence>
          {showLevelUp && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            >
               <div className="bg-white p-8 rounded-3xl text-center shadow-2xl m-4 border-4 border-yellow-400">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl mb-4"
                  >
                    🎉
                  </motion.div>
                  <h2 className="text-3xl font-bold text-primary-900 mb-2">Level Up!</h2>
                  <p className="text-slate-600 font-bold text-lg">You are now LV.{level}</p>
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tab Switcher */}
        <div className="flex p-2 bg-white border-b border-slate-100 z-20">
           <button 
             onClick={() => setActiveTab('profile')}
             className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${activeTab === 'profile' ? 'bg-slate-100 text-primary-900' : 'text-slate-400 hover:text-slate-600'}`}
           >
             個人檔案
           </button>
           <button 
             onClick={() => setActiveTab('leaderboard')}
             className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${activeTab === 'leaderboard' ? 'bg-slate-100 text-primary-900' : 'text-slate-400 hover:text-slate-600'}`}
           >
             排行榜
           </button>
        </div>

        <div className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait">
            {activeTab === 'profile' ? (
              <motion.div 
                key="profile"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="h-full flex flex-col overflow-y-auto"
              >
                {/* Profile Header */}
                <div className="bg-white p-6 pb-8 rounded-b-[2.5rem] shadow-sm relative z-10 border-b border-slate-100">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-tr from-yellow-300 to-orange-400 rounded-full p-1 shadow-lg relative">
                         <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden text-2xl">
                            😎
                         </div>
                         <motion.div 
                           key={level}
                           initial={{ scale: 0 }}
                           animate={{ scale: 1 }}
                           className="absolute -bottom-1 -right-1 bg-primary-900 text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white"
                         >
                           {level}
                         </motion.div>
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-gray-900">Alex Chen</h3>
                         <span className="inline-flex items-center gap-1 text-xs font-bold text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                           <Star size={10} fill="currentColor" /> 淨灘達人
                         </span>
                      </div>
                   </div>
                   
                   <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                         <span className="text-gray-500">升級進度</span>
                         <span className="text-gray-900">{xp} / 1000 XP</span>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden relative">
                         <motion.div 
                           className="h-full bg-yellow-400 rounded-full"
                           initial={{ width: 0 }}
                           animate={{ width: `${(xp / 1000) * 100}%` }}
                           transition={{ type: "spring", stiffness: 50 }}
                         />
                      </div>
                   </div>
                </div>

                {/* Interactive Action */}
                <div className="px-4 -mt-4 relative z-20 mb-4">
                  <button 
                    onClick={simulateCleanup}
                    className="w-full bg-primary-900 text-white py-3 rounded-2xl font-bold shadow-lg shadow-primary-900/30 active:scale-95 transition-all flex items-center justify-center gap-2 group"
                  >
                    <Zap className="w-5 h-5 group-hover:text-yellow-400 transition-colors" /> 
                    模擬清理 (+150 XP)
                  </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 p-4 pt-0">
                   <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-2">
                         <Target size={18} />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">12.5 <span className="text-xs text-gray-400 font-normal">GB</span></p>
                      <p className="text-xs text-slate-500">已清理垃圾</p>
                   </div>
                   <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-2">
                         <Award size={18} />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">2.5 <span className="text-xs text-gray-400 font-normal">kg</span></p>
                      <p className="text-xs text-slate-500">碳減排量</p>
                   </div>
                </div>

                {/* Badges */}
                <div className="flex-1 p-4 pt-0">
                   <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-gray-900">成就徽章</h4>
                      <span className="text-xs text-slate-400">點擊查看詳情</span>
                   </div>
                   
                   <div className="space-y-3 pb-4">
                      {[
                        { id: 1, name: "初試啼聲", desc: "完成首次清理", icon: "🌱", color: "bg-green-100", active: true },
                        { id: 2, name: "瘦身大師", desc: "單次清理超過 1GB", icon: "⚖️", color: "bg-blue-100", active: true },
                        { id: 3, name: "連續行動", desc: "連續 7 天開啟 App", icon: "🔥", color: "bg-red-100", active: false },
                      ].map((badge) => (
                        <motion.div 
                          key={badge.id}
                          layout
                          onClick={() => setSelectedBadge(selectedBadge === badge.id ? null : badge.id)}
                          className={`relative overflow-hidden cursor-pointer rounded-2xl border transition-all ${badge.active ? 'bg-white border-slate-100 shadow-sm hover:border-digital' : 'bg-slate-50 border-transparent opacity-60'}`}
                        >
                           <div className="flex items-center gap-4 p-3">
                             <div className={`w-12 h-12 ${badge.active ? badge.color : 'bg-slate-200'} rounded-xl flex items-center justify-center text-2xl shadow-sm`}>
                                {badge.icon}
                             </div>
                             <div className="flex-1">
                                <h5 className="font-bold text-gray-900 text-sm">{badge.name}</h5>
                                <p className="text-xs text-slate-500 line-clamp-1">{badge.desc}</p>
                             </div>
                             {badge.active && <Trophy className="text-yellow-400 w-4 h-4" fill="currentColor" />}
                           </div>
                           
                           <AnimatePresence>
                             {selectedBadge === badge.id && (
                               <motion.div 
                                 initial={{ height: 0, opacity: 0 }}
                                 animate={{ height: 'auto', opacity: 1 }}
                                 exit={{ height: 0, opacity: 0 }}
                                 className="px-3 pb-3 pt-0 text-xs text-slate-600 bg-slate-50 border-t border-slate-100"
                               >
                                  <div className="pt-2">
                                    <p className="mb-2">{badge.desc}</p>
                                    <p className="text-primary-600 font-bold">獲得獎勵: +500 XP</p>
                                  </div>
                               </motion.div>
                             )}
                           </AnimatePresence>
                        </motion.div>
                      ))}
                   </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="leaderboard"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="h-full flex flex-col p-4 overflow-y-auto"
              >
                <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100 mb-6 flex items-center gap-4">
                   <div className="p-3 bg-yellow-100 rounded-full text-yellow-600">
                     <Trophy size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-primary-900">本週賽季</h4>
                     <p className="text-xs text-yellow-700">距離結算還有 2 天</p>
                   </div>
                </div>

                <div className="space-y-2">
                  {[
                    { rank: 1, name: "Sarah L.", xp: "12,450", bg: "bg-yellow-100 text-yellow-700", emoji: "👑" },
                    { rank: 2, name: "Mike T.", xp: "11,200", bg: "bg-slate-100 text-slate-600", emoji: "🥈" },
                    { rank: 3, name: "Jenny W.", xp: "10,850", bg: "bg-orange-100 text-orange-700", emoji: "🥉" },
                    { rank: 4, name: "Alex Chen", xp: `${xp + (level * 1000)}`, bg: "bg-digital/10 border-digital text-digital", emoji: "😎", isMe: true },
                    { rank: 5, name: "Tom H.", xp: "9,200", bg: "bg-white text-slate-500", emoji: "👨‍💻" },
                  ].map((user, i) => (
                    <motion.div 
                      key={user.rank}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`flex items-center gap-4 p-3 rounded-xl border ${user.isMe ? 'border-digital bg-digital/5 shadow-md' : 'border-slate-100 bg-white'}`}
                    >
                       <div className={`w-8 h-8 flex items-center justify-center font-bold rounded-lg ${user.rank <= 3 ? user.bg : 'text-slate-400 bg-slate-50'}`}>
                         {user.rank}
                       </div>
                       <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-lg">
                         {user.emoji}
                       </div>
                       <div className="flex-1">
                         <h5 className={`font-bold text-sm ${user.isMe ? 'text-digital' : 'text-gray-900'}`}>{user.name} {user.isMe && '(我)'}</h5>
                       </div>
                       <div className="font-mono font-bold text-sm text-slate-600">
                         {user.xp} XP
                       </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MobileFrame>
  );
}
