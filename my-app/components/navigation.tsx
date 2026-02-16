"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '@/lib/data';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800/50 py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-2xl font-bold tracking-tighter"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-white">AY</span>
            <span className="text-cyan-400">.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-cyan-400 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-[70px] bg-black/95 backdrop-blur-xl z-40 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col items-center justify-center space-y-8 py-12">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-semibold text-gray-300 hover:text-cyan-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
