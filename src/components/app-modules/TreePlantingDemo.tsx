import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileFrame } from './MobileFrame';
import { TreePine, Sprout, Flower2, Droplets, Sun, Wind, MapPin, ExternalLink } from 'lucide-react';

export function TreePlantingDemo() {
  const [activeTab, setActiveTab] = useState<'garden' | 'impact'>('garden');
  const [treeStage, setTreeStage] = useState(0); // 0: Seed, 1: Sprout, 2: Sapling, 3: Tree

  const growTree = () => {
    if (treeStage < 3) setTreeStage(prev => prev + 1);
  };

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-[#F3F7F0]">
        {/* Tabs */}
        <div className="flex p-2 bg-white/50 backdrop-blur-sm z-20">
           <button 
             onClick={() => setActiveTab('garden')}
             className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${activeTab === 'garden' ? 'bg-white shadow-sm text-green-800' : 'text-slate-400'}`}
           >
             虛擬花園
           </button>
           <button 
             onClick={() => setActiveTab('impact')}
             className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${activeTab === 'impact' ? 'bg-white shadow-sm text-green-800' : 'text-slate-400'}`}
           >
             真實影響力
           </button>
        </div>

        <div className="flex-1 overflow-hidden relative">
           <AnimatePresence mode="wait">
             {activeTab === 'garden' ? (
               <motion.div 
                 key="garden"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="h-full flex flex-col relative"
               >
                  {/* Sky & Sun */}
                  <div className="absolute top-8 right-8 text-yellow-400 animate-spin-slow">
                     <Sun size={40} />
                  </div>
                  <div className="absolute top-20 left-10 text-slate-300 animate-float delay-1000">
                     <Wind size={24} />
                  </div>

                  {/* Tree Area */}
                  <div className="flex-1 flex flex-col items-center justify-end pb-20 relative z-10">
                     <AnimatePresence mode="wait">
                       <motion.div 
                         key={treeStage}
                         initial={{ scale: 0, opacity: 0, y: 20 }}
                         animate={{ scale: 1, opacity: 1, y: 0 }}
                         transition={{ type: "spring", stiffness: 100 }}
                         className="cursor-pointer"
                         onClick={growTree}
                       >
                         {treeStage === 0 && (
                            <div className="bg-amber-800 w-8 h-8 rounded-full border-4 border-amber-900 translate-y-4"></div>
                         )}
                         {treeStage === 1 && (
                            <Sprout size={80} className="text-green-500" />
                         )}
                         {treeStage === 2 && (
                            <Flower2 size={120} className="text-green-600" />
                         )}
                         {treeStage === 3 && (
                            <TreePine size={200} className="text-green-800 filter drop-shadow-xl" />
                         )}
                       </motion.div>
                     </AnimatePresence>
                     
                     {/* Ground */}
                     <div className="absolute bottom-0 w-full h-16 bg-[#E3D5CA] rounded-t-[50%] scale-150"></div>
                  </div>

                  {/* Controls */}
                  <div className="bg-white p-6 pb-8 rounded-t-[2rem] shadow-lg relative z-20">
                     <div className="mb-4 flex justify-between items-end">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">台灣原生樟樹</h3>
                          <p className="text-xs text-slate-500">已吸收 12kg CO2e</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-green-600">Lv.{treeStage + 1}</span>
                        </div>
                     </div>
                     
                     <div className="h-4 bg-slate-100 rounded-full overflow-hidden mb-6">
                        <motion.div 
                           className="h-full bg-green-500"
                           initial={{ width: "30%" }}
                           animate={{ width: `${(treeStage + 1) * 25}%` }}
                        />
                     </div>

                     <button 
                       onClick={growTree}
                       className="w-full py-3 bg-green-600 text-white rounded-xl font-bold shadow-lg shadow-green-600/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
                     >
                       <Droplets size={18} /> 
                       {treeStage === 3 ? "已成熟！種植下一棵" : "灌溉 (消耗 500MB 垃圾)"}
                     </button>
                  </div>
               </motion.div>
             ) : (
               <motion.div 
                 key="impact"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: 20 }}
                 className="h-full flex flex-col p-4 overflow-y-auto"
               >
                  <div className="mb-6">
                     <h3 className="font-bold text-gray-900 text-xl mb-2">真實影響力報告</h3>
                     <p className="text-sm text-slate-600">您的數位淨灘行動，已轉化為真實土地上的綠意。</p>
                  </div>

                  {/* Impact Map Card */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 mb-6">
                     <div className="h-32 bg-slate-200 relative">
                        {/* Mock Map */}
                        <div className="absolute inset-0 bg-green-50 opacity-50" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                           <div className="relative">
                              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-xs font-bold px-2 py-1 rounded shadow-sm whitespace-nowrap">Batch #2024-01</span>
                              <MapPin className="text-red-500 fill-red-500" size={32} />
                           </div>
                        </div>
                     </div>
                     <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                           <h4 className="font-bold text-gray-900">台南七股海岸林</h4>
                           <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">已種植</span>
                        </div>
                        <p className="text-xs text-slate-500 mb-4">日期: 2024.03.12 • 樹種: 木麻黃</p>
                        <button className="w-full py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 flex items-center justify-center gap-1 hover:bg-slate-50">
                           查看現場照片 <ExternalLink size={12} />
                        </button>
                     </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                     <div className="bg-white p-4 rounded-2xl shadow-sm text-center">
                        <div className="text-3xl font-bold text-green-600 mb-1">12</div>
                        <div className="text-xs text-slate-500">累積種植 (棵)</div>
                     </div>
                     <div className="bg-white p-4 rounded-2xl shadow-sm text-center">
                        <div className="text-3xl font-bold text-green-600 mb-1">840</div>
                        <div className="text-xs text-slate-500">總減碳 (kg)</div>
                     </div>
                  </div>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </MobileFrame>
  );
}
