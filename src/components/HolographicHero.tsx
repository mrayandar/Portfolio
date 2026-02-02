'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// --- Sub-Component: The Holographic ID Card ---
const HeroAvatar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      // FIX 1: Removed 'md:absolute' and negative positioning. 
      // Added 'relative' to keep it in the document flow (prevents text overlap).
      className="relative w-32 h-32 mb-6 z-10"
    >
      {/* The Glowing Ring */}
      {/* FIX 2: Corrected 'bg-linear' to 'bg-gradient' */}
      <div className="absolute inset-0 rounded-full bg-linear-to-tr from-electric-yellow to-code-blue blur-2xl opacity-40 animate-pulse"></div>

      {/* The Image Container */}
      <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden group shadow-2xl">
        <Image 
          src="/images/rayan-suit.png" 
          alt="Muhammad Rayan"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // FIX 3: Removed 'grayscale'. Added a slight blue hue that vanishes on hover.
          className="object-cover transition-all duration-500 ease-out scale-100 group-hover:scale-110"
        />
        
        {/* Holographic Tint Overlay (Blue-ish tint that fades on hover) */}
        <div className="absolute inset-0 bg-code-blue/20 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-0"></div>

        {/* Scanline Overlay - Removed missing scanlines.png */}
      </div>

      {/* Status Badge */}
      <div className="absolute bottom-0 right-0 px-2 py-1 bg-black/80 backdrop-blur-md border border-electric-yellow/50 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></div>
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full absolute"></div>
        <span className="text-[9px] font-mono text-electric-yellow tracking-widest">ONLINE</span>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
export default function HolographicHero() {
  const [displayedCode, setDisplayedCode] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Your Developer Bio Object
  const codeContent = `const developer = {
  name: "Muhammad Rayan",
  role: "Software Engineer",
  university: "FAST NUCES",
  specialization: ["MERN Stack", "AI", "SaaS"],
  experience: "4+ years",
  status: "available"
};

console.log("Ready to build amazing things!");`;

  // Syntax Highlighting Logic
  const syntaxHighlight = (code: string) => {
    return code
      .replace(/(const|let|var)/g, '<span class="text-purple-400">$1</span>')
      .replace(/([\"'][^\"']*[\"'])/g, '<span class="text-yellow-300">$1</span>')
      .replace(/(\w+):/g, '<span class="text-blue-400">$1</span>:')
      .replace(/(Engineer)/g, '<span class="text-electric-yellow">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="text-gray-500 italic">$1</span>')
      .replace(/([{}\[\]])/g, '<span class="text-gray-300">$1</span>');
  };

  // Typing Effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < codeContent.length) {
        setDisplayedCode(codeContent.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Blinking Cursor Effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const handleExecute = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative py-20 overflow-visible">
      
      {/* The Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-electric-yellow/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-code-blue/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 relative flex flex-col justify-center" // added flex col to keep flow vertical
          >
            {/* Avatar - Now flows naturally with the text */}
            <HeroAvatar />
              
            <div> {/* Wrapped text in a div to group it */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-sm font-jetbrains text-cyan-400 mb-2 pl-1"
              >
                // Welcome to my portfolio
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight font-montserrat"
              >
                <span className="text-off-white block">Muhammad</span>
                <span className="bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Rayan
                </span>
              </motion.h1>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl sm:text-2xl text-gray-300 font-jetbrains"
            >
              Software Engineer & <span className="text-electric-yellow">Full Stack Developer</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              Building scalable web applications and AI-powered solutions. 
              Currently pursuing Software Engineering at <span className="text-white">FAST NUCES</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={handleExecute}
                className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:scale-105"
              >
                <span>View My Work</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-off-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
          
          {/* Code Editor Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gray-900/80 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden shadow-2xl relative"
          >
             {/* Glow effect behind the editor */}
             <div className="absolute -inset-1 bg-linear-to-r from-electric-yellow to-cyan-500 opacity-20 blur-lg -z-10"></div>

            {/* Editor Header */}
            <div className="bg-black/50 border-b border-white/10 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm font-jetbrains">developer.js</span>
              </div>
              <div className="text-xs text-gray-600 font-mono">Run: node .</div>
            </div>
            
            {/* Code Content */}
            <div className="p-6 font-jetbrains text-sm min-h-87.5 relative overflow-x-auto">
              <div className="absolute left-4 top-6 text-gray-700 text-xs space-y-1.5 select-none">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              
              <div className="ml-8">
                <pre className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                  <code
                    dangerouslySetInnerHTML={{
                      __html: syntaxHighlight(displayedCode) + (showCursor ? '<span class="text-electric-yellow animate-pulse">|</span>' : '')
                    }}
                  />
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}