import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Waves } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Footer } from '../components/Footer';

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
              Releaf
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

      <Footer />
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
