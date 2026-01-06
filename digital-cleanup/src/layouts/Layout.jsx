import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => (
  <footer className="glass border-t border-white/5 py-12 mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <span className="text-xl font-bold font-display text-white">
            DIGITAL<span className="text-primary">CLEANUP</span>
        </span>
        <p className="mt-4 text-gray-400 text-sm max-w-md">
          Redefining sustainability for the digital age. Cleaning our minds and our planet, one byte at a time.
        </p>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-4">Connect</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li className="hover:text-primary cursor-pointer">Twitter / X</li>
          <li className="hover:text-primary cursor-pointer">LinkedIn</li>
          <li className="hover:text-primary cursor-pointer">Instagram</li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-4">Legal</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li className="hover:text-primary cursor-pointer">Privacy Policy</li>
          <li className="hover:text-primary cursor-pointer">Digital Rights</li>
          <li className="hover:text-primary cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
      © 2026 Digital Beach Cleanup Initiative. All rights reserved.
    </div>
  </footer>
);

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-white selection:bg-primary selection:text-black">
      <Navbar />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
