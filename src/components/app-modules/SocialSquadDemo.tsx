import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileFrame } from './MobileFrame';
import { Users, Shield, Flame, Plus, CheckCircle2, Share2, Copy, X } from 'lucide-react';

export function SocialSquadDemo() {
  const [activeTab, setActiveTab] = useState<'squad' | 'challenge'>('squad');
  const [showInvite, setShowInvite] = useState(false);
  const [challengeProgress, setChallengeProgress] = useState(60);
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const handleCheckIn = () => {
    if (isCheckedIn) return;
    setIsCheckedIn(true);
    setChallengeProgress(80);
  };

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-slate-50 relative">
        {/* Invite Overlay */}
        <AnimatePresence>
           {showInvite && (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
             >
                <motion.div 
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  className="bg-white w-full rounded-3xl p-6 relative"
                >
                   <button 
                     onClick={() => setShowInvite(false)}
                     className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                   >
                     <X size={20} />
                   </button>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">邀請好友</h3>
                   <p className="text-sm text-slate-500 mb-6">邀請好友加入 ECO Warriors，一起完成淨灘挑戰！</p>
                   
                   <div className="bg-slate-100 p-3 rounded-xl flex items-center justify-between mb-4">
                      <code className="text-digital font-bold">RELEAF-2024</code>
                      <button className="text-slate-400 hover:text-digital">
                         <Copy size={18} />
                      </button>
                   </div>
                   
                   <button 
                     onClick={() => setShowInvite(false)}
                     className="w-full bg-digital text-white py-3 rounded-xl font-bold shadow-lg shadow-digital/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
                   >
                      <Share2 size={18} /> 分享連結
                   </button>
                </motion.div>
             </motion.div>
           )}
        </AnimatePresence>

        {/* Header */}
        <div className="bg-primary-900 p-6 pb-6 rounded-b-[2rem] text-white relative overflow-hidden z-10 shrink-0">
           <div className="absolute top-0 right-0 p-20 bg-white/5 rounded-full blur-3xl translate-x-10 -translate-y-10"></div>
           
           <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                 <span className="text-xs font-bold text-primary-300 uppercase tracking-wider block mb-1">My Squad</span>
                 <h3 className="text-2xl font-bold flex items-center gap-2">
                   ECO Warriors <Shield className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                 </h3>
              </div>
              <button 
                onClick={() => setShowInvite(true)}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                 <Plus size={18} />
              </button>
           </div>

           <div className="flex gap-4 relative z-10">
              <div className="flex-1 bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10">
                 <div className="text-xs text-primary-200 mb-1">本週貢獻</div>
                 <div className="text-xl font-bold">42.5 GB</div>
              </div>
              <div className="flex-1 bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10">
                 <div className="text-xs text-primary-200 mb-1">小隊排名</div>
                 <div className="text-xl font-bold text-yellow-400">#3</div>
              </div>
           </div>
        </div>

        {/* Tabs */}
        <div className="flex px-4 py-2 bg-slate-50 z-20">
           <button 
             onClick={() => setActiveTab('squad')}
             className={`flex-1 py-2 text-sm font-bold border-b-2 transition-colors ${activeTab === 'squad' ? 'border-primary-900 text-primary-900' : 'border-transparent text-slate-400'}`}
           >
             成員列表
           </button>
           <button 
             onClick={() => setActiveTab('challenge')}
             className={`flex-1 py-2 text-sm font-bold border-b-2 transition-colors ${activeTab === 'challenge' ? 'border-primary-900 text-primary-900' : 'border-transparent text-slate-400'}`}
           >
             本週挑戰
           </button>
        </div>

        <div className="flex-1 px-4 pb-4 overflow-y-auto z-20 pt-4">
           <AnimatePresence mode="wait">
             {activeTab === 'challenge' ? (
               <motion.div 
                 key="challenge"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: 20 }}
                 className="space-y-4"
               >
                 <div className="bg-white p-5 rounded-2xl shadow-lg border border-slate-100">
                    <div className="flex justify-between items-center mb-4">
                       <div className="flex items-center gap-2">
                          <Flame className="text-orange-500 fill-orange-500" size={20} />
                          <h4 className="font-bold text-gray-900">衝刺週</h4>
                       </div>
                       <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded-full">剩餘 2 天</span>
                    </div>
                    
                    <h5 className="text-lg font-bold text-gray-800 mb-2">零廢棄目標</h5>
                    <p className="text-xs text-slate-500 mb-4">目標：全隊連續 5 天完成清理任務</p>
                    
                    <div className="space-y-3 mb-6">
                       <div className="flex justify-between text-xs font-medium">
                          <span className="text-slate-600">進度 ({isCheckedIn ? 4 : 3}/5 天)</span>
                          <span className="text-digital">{challengeProgress}%</span>
                       </div>
                       <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                            initial={{ width: "60%" }}
                            animate={{ width: `${challengeProgress}%` }}
                            transition={{ duration: 1 }}
                          />
                       </div>
                    </div>

                    <button 
                      onClick={handleCheckIn}
                      disabled={isCheckedIn}
                      className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isCheckedIn ? 'bg-green-100 text-green-700' : 'bg-primary-900 text-white shadow-lg active:scale-95'}`}
                    >
                       {isCheckedIn ? <><CheckCircle2 size={18} /> 今日已打卡</> : '立即打卡 (+50 XP)'}
                    </button>
                 </div>

                 <div className="bg-white p-4 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-gray-900 mb-3 text-sm">獎勵預覽</h4>
                    <div className="flex gap-3">
                       <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-2xl">🏆</div>
                       <div>
                          <p className="text-sm font-bold text-gray-800">小隊冠軍徽章</p>
                          <p className="text-xs text-slate-500">+1000 團隊積分</p>
                       </div>
                    </div>
                 </div>
               </motion.div>
             ) : (
               <motion.div 
                 key="squad"
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="space-y-4"
               >
                 <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <Users size={18} /> 成員列表
                 </h4>
                 <div className="space-y-3">
                    {[
                      { name: "You", status: isCheckedIn ? "Checked In" : "Waiting", score: "850 XP", active: isCheckedIn },
                      { name: "Sarah", status: "Checked In", score: "920 XP", active: true },
                      { name: "Mike", status: "Pending...", score: "410 XP", active: false },
                    ].map((member, i) => (
                      <div key={i} className="bg-white p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${member.active ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                               {member.name[0]}
                            </div>
                            <div>
                               <div className="font-bold text-sm text-gray-900">{member.name}</div>
                               <div className="text-[10px] text-slate-500">清理頻率: 高</div>
                            </div>
                         </div>
                         <div className="text-right">
                            <div className={`text-xs font-bold ${member.active ? 'text-green-600' : 'text-slate-400'}`}>
                               {member.status}
                            </div>
                            <div className="text-[10px] font-mono text-slate-400">{member.score}</div>
                         </div>
                      </div>
                    ))}
                 </div>
                 
                 <button 
                   onClick={() => setShowInvite(true)}
                   className="w-full py-3 bg-white border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-bold text-sm hover:bg-slate-50 hover:border-slate-400 transition-colors flex items-center justify-center gap-2"
                 >
                    <Plus size={16} /> 邀請好友加入
                 </button>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </MobileFrame>
  );
}
