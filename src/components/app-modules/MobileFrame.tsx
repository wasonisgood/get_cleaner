import { clsx } from 'clsx';
import { Battery, Signal, Wifi } from 'lucide-react';

interface MobileFrameProps {
  children: React.ReactNode;
  className?: string;
  darkMode?: boolean;
}

export function MobileFrame({ children, className, darkMode = false }: MobileFrameProps) {
  return (
    <div className="flex justify-center w-full my-4 md:my-0">
       {/* Scale wrapper for mobile responsiveness */}
       <div className="relative w-[300px] h-[600px] sm:w-[320px] sm:h-[640px] transform transition-transform duration-300 origin-top scale-[0.85] sm:scale-100">
          <div className={clsx("relative w-full h-full border-gray-800 bg-gray-800 border-[12px] sm:border-[14px] rounded-[2.5rem] shadow-2xl overflow-hidden ring-4 ring-slate-200/50", className)}>
            {/* Top Notch / Status Bar */}
            <div className={clsx("absolute top-0 w-full h-8 z-20 flex justify-between items-center px-4 text-[10px] font-medium", darkMode ? "bg-slate-900 text-white" : "bg-white text-gray-900")}>
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <Signal size={12} />
                <Wifi size={12} />
                <Battery size={12} />
              </div>
            </div>
            
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[18px] w-[80px] bg-black rounded-b-xl z-30"></div>

            {/* Screen Content */}
            <div className={clsx("w-full h-full pt-8 overflow-y-auto overflow-x-hidden scrollbar-hide flex flex-col", darkMode ? "bg-slate-900 text-white" : "bg-white text-gray-900")}>
              {children}
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-500 rounded-full z-20 opacity-50"></div>
          </div>
       </div>
    </div>
  );
}