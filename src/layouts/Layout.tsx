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
            <NavLink to="/problem">Problem</NavLink>
            <NavLink to="/philosophy">Philosophy</NavLink>
            <NavLink to="/solutions">Solutions</NavLink>
            <NavLink to="/impact">Impact</NavLink>
            <NavLink to="/roadmap">Roadmap</NavLink>
            <Link
              to="/contact"
              className="bg-primary-900 text-white px-5 py-2 rounded-full font-medium hover:bg-digital transition-colors flex items-center gap-2"
            >
              Join Us
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
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-xl font-medium">
              <Link to="/problem">Problem</Link>
              <Link to="/philosophy">Philosophy</Link>
              <Link to="/solutions">Solutions</Link>
              <Link to="/impact">Impact</Link>
              <Link to="/roadmap">Roadmap</Link>
              <Link to="/contact" className="text-primary-600">Join Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-primary-900 text-sand-100 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-6 h-6 text-digital" />
              <span className="text-xl font-bold">theriest</span>
            </div>
            <p className="text-sand-300 max-w-sm">
              Redefining digital sustainability. Cleaning up the digital coastline, one byte at a time.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sand-300">
              <li><Link to="/problem" className="hover:text-white">The Crisis</Link></li>
              <li><Link to="/solutions" className="hover:text-white">Our Solutions</Link></li>
              <li><Link to="/roadmap" className="hover:text-white">Roadmap</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sand-300">
              <li><a href="#" className="hover:text-white flex items-center gap-2">Twitter <ExternalLink size={14}/></a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2">LinkedIn <ExternalLink size={14}/></a></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-primary-800 text-sm text-sand-400">
          © {new Date().getFullYear()} theriest. All rights reserved.
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
