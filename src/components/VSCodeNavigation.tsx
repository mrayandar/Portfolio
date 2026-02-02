'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', file: 'index.tsx' },
    { name: 'Projects', href: '#projects', file: 'projects.json' },
    { name: 'About', href: '#about', file: 'about.md' },
    { name: 'Contact', href: '#contact', file: 'contact.tsx' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl shadow-lg' 
            : 'bg-transparent backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('#home')}>
              <div className="w-8 h-8 bg-linear-to-br from-electric-yellow to-yellow-600 rounded-md flex items-center justify-center shadow-[0_0_10px_rgba(250,204,21,0.3)]">
                <span className="text-black font-bold text-xs font-mono">MR</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-off-white font-mono text-sm font-semibold tracking-wide">Muhammad Rayan</span>
                <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Software Engineer</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-2 text-gray-400 hover:text-electric-yellow hover:bg-white/5 rounded-md transition-all font-mono text-xs relative group flex flex-col items-center"
                >
                  {item.name}
                  {/* Hover Indicator */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-electric-yellow transition-all duration-300 group-hover:w-1/2 group-hover:-translate-x-1/2"></span>
                </button>
              ))}
            </div>

            {/* Status Indicator (Right Side) */}
            <div className="hidden md:flex items-center space-x-4">
               {/* VS Code Style File Info */}
               <div className="flex items-center space-x-2 text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                  <span>UTF-8</span>
                  <span>TypeScript</span>
               </div>
               
               <div className="flex items-center space-x-2 text-xs font-mono">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                <span className="text-green-500">Available</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400 hover:text-white transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (VS Code File Explorer Style) */}
        <AnimatePresence>
            {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
            >
                <div className="px-4 py-4 space-y-1">
                <div className="text-[10px] uppercase text-gray-500 font-mono mb-2 px-2">Explorer</div>
                {navItems.map((item) => (
                    <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left px-4 py-3 text-gray-300 hover:text-electric-yellow hover:bg-white/5 transition-all font-mono text-sm rounded-md flex items-center gap-3 border-l-2 border-transparent hover:border-electric-yellow"
                    >
                    <span className="text-gray-600 text-xs">TSX</span>
                    <span className="flex-1">{item.file}</span>
                    <span className="text-[10px] text-gray-600 uppercase tracking-wider">{item.name}</span>
                    </button>
                ))}
                </div>
            </motion.div>
            )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}