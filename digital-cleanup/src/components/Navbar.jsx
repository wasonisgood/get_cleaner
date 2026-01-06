import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Globe, BarChart2, Zap, Users, BookOpen } from 'lucide-react';
import { clsx } from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Problem', path: '/problem', icon: Zap },
    { name: 'Vision', path: '/vision', icon: Globe },
    { name: 'Solutions', path: '/solutions', icon: BarChart2 },
    { name: 'Living Lab', path: '/lab', icon: Users },
    { name: 'Impact', path: '/impact', icon: BookOpen },
    { name: 'About', path: '/about', icon: Users },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent animate-pulse-slow"></div>
            <span className="text-xl font-bold tracking-wider font-display text-white group-hover:text-primary transition-colors">
              DIGITAL<span className="text-primary">CLEANUP</span>
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    clsx(
                      'px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group flex items-center space-x-1',
                      isActive ? 'text-primary' : 'text-gray-300 hover:text-white'
                    )
                  }
                >
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              ))}
              <NavLink to="/action" className="ml-4 px-6 py-2 rounded-full bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-black transition-all duration-300 font-semibold shadow-[0_0_15px_rgba(0,242,234,0.3)] hover:shadow-[0_0_25px_rgba(0,242,234,0.6)]">
                Join Movement
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/5"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    'block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2',
                    isActive ? 'text-primary bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  )
                }
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </NavLink>
            ))}
             <NavLink to="/action" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 px-6 py-3 rounded-md bg-primary text-black font-bold">
                Join Movement
              </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
