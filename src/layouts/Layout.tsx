import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Waves, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-sand-200 py-3"
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary-900 p-2 rounded-lg group-hover:bg-digital transition-colors">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-primary-900">
              theriest
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/problem">危機與挑戰</NavLink>
            <NavLink to="/philosophy">核心理念</NavLink>
            <NavLink to="/solutions">解決方案</NavLink>
            <NavLink to="/impact">預期效益</NavLink>
            <NavLink to="/roadmap">執行藍圖</NavLink>
            <Link
              to="/contact"
              className="bg-primary-900 text-white px-5 py-2 rounded-full font-medium hover:bg-digital transition-colors flex items-center gap-2"
            >
              加入行動
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/90 backdrop-blur-xl pt-24 px-6 md:hidden border-b border-white/20"
          >
            <div className="flex flex-col gap-8 text-2xl font-medium tracking-tight">
              <Link to="/problem" onClick={() => setMobileMenuOpen(false)}>危機與挑戰</Link>
              <Link to="/philosophy" onClick={() => setMobileMenuOpen(false)}>核心理念</Link>
              <Link to="/solutions" onClick={() => setMobileMenuOpen(false)}>解決方案</Link>
              <Link to="/impact" onClick={() => setMobileMenuOpen(false)}>預期效益</Link>
              <Link to="/roadmap" onClick={() => setMobileMenuOpen(false)}>執行藍圖</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-digital font-bold">加入行動</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="relative bg-gradient-to-b from-primary-900 to-primary-950 text-sand-100 pt-24 pb-12 overflow-hidden">
        {/* Wave Decoration */}
        <div className="absolute top-0 left-0 right-0 transform -translate-y-1 overflow-hidden leading-none">
          <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-sand-50"></path>
          </svg>
        </div>

        {/* Background Watermark */}
        <div className="absolute bottom-0 right-0 pointer-events-none opacity-5">
           <Waves size={400} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-digital/10 rounded-lg backdrop-blur-sm border border-digital/20">
                  <Waves className="w-8 h-8 text-digital" />
                </div>
                <span className="text-3xl font-bold tracking-tight text-white">theriest</span>
              </div>
              <p className="text-sand-300 text-lg leading-relaxed max-w-md">
                重新定義數位永續。每一次刪除，都是對地球的溫柔守護。讓我們一起清除數位廢棄物，還給網路世界一片蔚藍。
              </p>
              <div className="flex gap-4 pt-2">
                 {/* Social Icons with Hover Effects */}
                 {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                   <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-digital hover:text-white hover:-translate-y-1 transition-all duration-300">
                      <span className="sr-only">{social}</span>
                      <ExternalLink size={16} />
                   </a>
                 ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-2 md:col-start-7">
              <h4 className="font-bold text-white text-lg mb-6">探索專案</h4>
              <ul className="space-y-4 text-sand-300">
                <li><Link to="/problem" className="hover:text-digital transition-colors block w-fit">數位危機</Link></li>
                <li><Link to="/philosophy" className="hover:text-digital transition-colors block w-fit">核心理念</Link></li>
                <li><Link to="/solutions" className="hover:text-digital transition-colors block w-fit">解決方案</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold text-white text-lg mb-6">行動參與</h4>
              <ul className="space-y-4 text-sand-300">
                <li><Link to="/impact" className="hover:text-digital transition-colors block w-fit">預期效益</Link></li>
                <li><Link to="/roadmap" className="hover:text-white transition-colors block w-fit">執行藍圖</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors block w-fit">聯絡我們</Link></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
               <h4 className="font-bold text-white text-lg mb-6">關於</h4>
               <ul className="space-y-4 text-sand-300">
                 <li><a href="#" className="hover:text-white transition-colors">隱私權政策</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">使用條款</a></li>
               </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sand-400">
            <p>© {new Date().getFullYear()} theriest. All rights reserved.</p>
            <p>Designed for a cleaner digital future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);

  return (
    <Link
      to={to}
      className={cn(
        "text-sm font-medium transition-colors hover:text-digital",
        isActive ? "text-primary-900 font-semibold" : "text-slate-600"
      )}
    >
      {children}
    </Link>
  );
}
