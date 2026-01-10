import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileFrame } from './MobileFrame';
import { Trash2, RefreshCw, CheckCircle2, FileImage, FileVideo } from 'lucide-react';

export function CleanupDemo() {
  const [status, setStatus] = useState<'idle' | 'scanning' | 'ready' | 'cleaning' | 'done'>('idle');

  const startScan = () => {
    setStatus('scanning');
    setTimeout(() => setStatus('ready'), 2000);
  };

  const startClean = () => {
    setStatus('cleaning');
    setTimeout(() => {
      setStatus('done');
    }, 2000);
  };

  const reset = () => {
    setStatus('idle');
  };

  return (
    <MobileFrame>
      <div className="p-4 h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">本機空間</h2>
          <p className="text-sm text-gray-500">已使用 112 GB / 128 GB</p>
        </div>

        {/* Storage Viz */}
        <div className="flex w-full h-4 bg-gray-100 rounded-full overflow-hidden mb-8">
          <div className="w-[60%] bg-blue-500"></div>
          <div className="w-[20%] bg-yellow-400"></div>
          <motion.div 
            className="bg-red-500"
            animate={{ width: status === 'done' ? '0%' : '15%' }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>

        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.div 
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center space-y-6"
            >
              <div className="w-40 h-40 rounded-full border-4 border-gray-100 flex items-center justify-center relative">
                 <div className="absolute inset-0 border-4 border-digital rounded-full border-t-transparent animate-spin opacity-0"></div>
                 <div className="text-center">
                    <span className="text-3xl font-bold text-gray-900">87%</span>
                    <span className="block text-xs text-gray-400">已佔用</span>
                 </div>
              </div>
              <p className="text-center text-gray-500 text-sm px-4">
                您的手機中有大量可清理的暫存檔與重複照片。
              </p>
              <button 
                onClick={startScan}
                className="w-full py-4 bg-primary-900 text-white rounded-2xl font-bold shadow-lg shadow-primary-900/20 active:scale-95 transition-transform"
              >
                開始掃描
              </button>
            </motion.div>
          )}

          {status === 'scanning' && (
            <motion.div 
              key="scanning"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center space-y-8"
            >
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-gray-100"></div>
                <div className="absolute inset-0 rounded-full border-4 border-digital border-t-transparent animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <RefreshCw className="w-10 h-10 text-digital animate-pulse" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-900 mb-2">正在分析...</h3>
                <p className="text-sm text-gray-500">掃描暫存檔、重複照片、大型影片</p>
              </div>
            </motion.div>
          )}

          {status === 'ready' && (
            <motion.div 
              key="ready"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex-1 space-y-4">
                 <div className="bg-orange-50 p-4 rounded-2xl flex items-center justify-between border border-orange-100">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                          <Trash2 size={20} />
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-900">系統垃圾</h4>
                          <p className="text-xs text-gray-500">暫存檔、殘留資料</p>
                       </div>
                    </div>
                    <span className="font-bold text-orange-600">840 MB</span>
                 </div>

                 <div className="bg-blue-50 p-4 rounded-2xl flex items-center justify-between border border-blue-100">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                          <FileImage size={20} />
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-900">重複照片</h4>
                          <p className="text-xs text-gray-500">24 組重複內容</p>
                       </div>
                    </div>
                    <span className="font-bold text-blue-600">320 MB</span>
                 </div>

                 <div className="bg-purple-50 p-4 rounded-2xl flex items-center justify-between border border-purple-100">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                          <FileVideo size={20} />
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-900">大型影片</h4>
                          <p className="text-xs text-gray-500">未觀看超過 6 個月</p>
                       </div>
                    </div>
                    <span className="font-bold text-purple-600">1.2 GB</span>
                 </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-end mb-6">
                   <span className="text-gray-500 font-medium">可清理總量</span>
                   <span className="text-3xl font-bold text-primary-900">2.36 GB</span>
                </div>
                <button 
                  onClick={startClean}
                  className="w-full py-4 bg-digital text-white rounded-2xl font-bold shadow-lg shadow-digital/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
                >
                  <Trash2 size={20} /> 一鍵清理
                </button>
              </div>
            </motion.div>
          )}

          {status === 'cleaning' && (
             <motion.div 
               key="cleaning"
               className="flex-1 flex flex-col items-center justify-center"
             >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-32 h-32 bg-digital rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-digital/30"
                >
                   <Trash2 className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">正在清理...</h3>
             </motion.div>
          )}

          {status === 'done' && (
            <motion.div 
              key="done"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">清理完成！</h3>
                <p className="text-gray-500">成功釋放 2.36 GB 空間</p>
              </div>
              
              <div className="bg-sand-50 p-6 rounded-2xl w-full">
                 <p className="text-sm text-gray-500 mb-2">本次減碳貢獻</p>
                 <p className="text-3xl font-bold text-primary-900">472 g <span className="text-sm font-normal text-gray-400">CO2e</span></p>
              </div>

              <button 
                onClick={reset}
                className="text-gray-400 text-sm hover:text-gray-600 mt-8"
              >
                返回主畫面
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MobileFrame>
  );
}
