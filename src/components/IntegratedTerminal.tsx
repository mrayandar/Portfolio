'use client';

import { useState, useEffect, useRef, JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Updated Log interface to accept Components (JSX) not just strings
interface Log {
  id: number;
  type: 'CMD' | 'LOG' | 'ERR' | 'SYS' | 'LINK';
  message: string | JSX.Element;
  timestamp: string;
}

export default function StatusTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState<Log[]>([]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const lastScrollRef = useRef(0);
  const logIdRef = useRef(1); // Start from 1

  // --- Auto-Scroll to Bottom ---
  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, isOpen]);

  // --- Initialize logs on client side only ---
  useEffect(() => {
    // Add initial logs only on client side to avoid hydration mismatch
    addLog('SYS', 'Portfolio Status: Active');
    addLog('SYS', 'System: Operational');
  }, []);

  // --- Passive Scroll Logging ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (Math.abs(scrollPercent - lastScrollRef.current) >= 25) {
        addLog('LOG', `User_View_Depth: ${scrollPercent}%`);
        lastScrollRef.current = scrollPercent;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addLog = (type: Log['type'], message: string | JSX.Element) => {
    const newLog: Log = {
      id: logIdRef.current++,
      type,
      message,
      timestamp: new Date().toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" })
    };
    setLogs(prev => [...prev.slice(-50), newLog]);
  };

  // --- Navigation Helper ---
  const navigateTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      addLog('SYS', `Navigating to /${sectionId}...`);
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      addLog('ERR', `Directory '/${sectionId}' not found.`);
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const rawCmd = input.trim();
    const args = rawCmd.toLowerCase().split(' ');
    const cmd = args[0];

    addLog('CMD', rawCmd);

    // --- COMMAND LOGIC ---
    switch (cmd) {
      case 'help':
        addLog('SYS', 
          <span className="grid grid-cols-2 gap-x-4 gap-y-1">
            <span>ls</span> <span className="text-gray-500">// List site sections</span>
            <span>cd [dir]</span> <span className="text-gray-500">// Navigate (e.g. cd projects)</span>
            <span>socials</span> <span className="text-gray-500">// Connect with me</span>
            <span>resume</span> <span className="text-gray-500">// Download CV</span>
            <span>whoami</span> <span className="text-gray-500">// Current user info</span>
            <span>clear</span> <span className="text-gray-500">// Clear terminal</span>
          </span>
        );
        break;

      case 'ls':
        addLog('SYS', 
          <div className="flex gap-4 text-electric-yellow font-bold">
            <span>home/</span>
            <span>about/</span>
            <span>projects/</span>
            <span>contact/</span>
          </div>
        );
        break;

      case 'cd':
        if (args[1]) {
          // specific directory
          if (args[1] === '..') {
            addLog('ERR', 'Access Denied: Root is protected.');
          } else {
            navigateTo(args[1].replace('/', ''));
          }
        } else {
          addLog('ERR', 'Usage: cd [directory_name]');
        }
        break;

      case 'socials':
        addLog('LINK', 
          <div className="flex gap-3 mt-1">
            <a href="https://github.com/your-github" target="_blank" className="bg-white/10 px-2 py-1 rounded hover:bg-white/20 hover:text-white transition-colors cursor-pointer border border-white/10">GitHub ↗</a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" className="bg-code-blue/20 px-2 py-1 rounded hover:bg-code-blue/30 text-code-blue transition-colors cursor-pointer border border-code-blue/20">LinkedIn ↗</a>
            <a href="mailto:mrayandar123@gmail.com" className="bg-green-500/20 px-2 py-1 rounded hover:bg-green-500/30 text-green-400 transition-colors cursor-pointer border border-green-500/20">Email ✉</a>
          </div>
        );
        break;
      
      case 'resume':
        addLog('SYS', 'Locating resume.pdf...');
        setTimeout(() => {
            addLog('SYS', <span className="text-green-400">File found. Initiating download...</span>);
            // Simulate download or open actual link
            window.open('/resume.pdf', '_blank');
        }, 800);
        break;

      case 'whoami':
        addLog('SYS', `User: Visitor | IP: ${Math.floor(Math.random() * 255)}.XXX.XXX.XXX | Browser: Navigator`);
        break;

      case 'sudo':
        addLog('ERR', 'Permission Denied: You are not in the sudoers file. This incident will be reported.');
        break;

      case 'clear':
        setLogs([]);
        break;

      default:
        addLog('ERR', `Command not found: ${cmd}. Type 'help' for manual.`);
    }
    
    setInput('');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pointer-events-none flex justify-center">
      <motion.div 
        initial={false}
        animate={{ 
          height: isOpen ? '350px' : '40px',
          width: isOpen ? '100%' : '100%',
          maxWidth: isOpen ? '600px' : '600px'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`pointer-events-auto overflow-hidden flex flex-col rounded-t-lg border-x border-t backdrop-blur-md shadow-2xl transition-colors duration-300 ${
          isOpen 
            ? 'bg-black/90 border-electric-yellow/30' 
            : 'bg-black/60 border-white/10 hover:border-electric-yellow/50 cursor-pointer'
        }`}
      >
        {/* Header / Minimized View */}
        <div 
          className="h-10 flex items-center justify-between px-4 bg-white/5 border-b border-white/5 shrink-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-electric-yellow animate-pulse' : 'bg-green-500'}`}></div>
            <span className="font-mono text-xs text-gray-400 whitespace-nowrap">
              {isOpen ? 'RAYAN_OS // TERMINAL' : logs[logs.length - 1]?.type === 'CMD' ? '> ' + logs[logs.length - 1].message : logs[logs.length - 1]?.message || 'System Ready'}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-500">
             <span className="text-[10px] uppercase hidden sm:block">v2.4.0</span>
             <svg 
               className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24"
             >
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
             </svg>
          </div>
        </div>

        {/* Expanded Content */}
        <div className="flex-1 flex flex-col p-4 overflow-hidden font-mono text-xs">
          
          {/* Scrollable Logs */}
          <div className="flex-1 overflow-y-auto space-y-1 mb-2 scrollbar-hide">
            {logs.map((log) => (
              <div key={log.id} className="flex gap-2 items-start">
                <span className="text-gray-600 shrink-0">[{log.timestamp}]</span>
                <span className={`font-bold shrink-0 ${
                  log.type === 'ERR' ? 'text-red-500' :
                  log.type === 'CMD' ? 'text-cyan-400' :
                  log.type === 'LOG' ? 'text-gray-500' :
                  log.type === 'LINK' ? 'text-purple-400' :
                  'text-electric-yellow'
                }`}>
                  [{log.type}]
                </span>
                <span className="text-gray-300 wrap-break-word">{log.message}</span>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleCommand} className="flex gap-2 items-center border-t border-white/10 pt-2 shrink-0">
            <span className="text-electric-yellow font-bold animate-pulse">{'>_'}</span>
            <input 
              autoFocus={isOpen}
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none text-white w-full placeholder-gray-600"
              placeholder="Enter command... (Try 'help')"
            />
          </form>
        </div>
      </motion.div>
    </div>
  );
}