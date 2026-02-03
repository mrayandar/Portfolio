'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xgozypzn");
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'SaaS Development',
    budget: 1000,
    message: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  
  const projectTypes = [
    'SaaS Development',
    'Custom Web App',
    'AI/ML Integration',
    'Desktop (Electron)',
    'Consultation'
  ];
  
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setFormData({ name: '', email: '', projectType: 'SaaS Development', budget: 1000, message: '' });
      
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, budget: parseInt(e.target.value) }));
  };
  
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      
      {/* Background Decor - Removed grid.svg reference to fix 404 */}

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-montserrat font-bold text-off-white mb-6">
            Initialize <span className="text-electric-yellow drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Project</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono sm:text-base">
            <span className="text-code-blue">root@portfolio</span>:~/projects/new# ./configure-scope.sh
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: System Status */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 relative overflow-hidden group">
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-size-[100%_4px] opacity-10 pointer-events-none"></div>              
              <h3 className="text-xl font-mono text-code-blue mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-code-blue rounded-full animate-pulse"></span>
                SYSTEM_STATUS
              </h3>

              <div className="space-y-6 font-mono text-sm">
                
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-electric-yellow/30 transition-colors">
                  <div className="bg-electric-yellow/20 p-2 rounded text-electric-yellow">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Link_Status</div>
                    <div className="text-off-white font-bold">Online / Available</div>
                    <div className="text-green-500 text-xs mt-1">Latency: 24ms</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-code-blue/30 transition-colors group/link cursor-pointer">
                  <div className="bg-code-blue/20 p-2 rounded text-code-blue">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Secure_Channel</div>
                    <div className="text-off-white font-bold group-hover/link:text-code-blue transition-colors">mrayandar123@gmail.com</div>
                    <div className="text-gray-600 text-xs mt-1">PGP Key: Verified</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="bg-purple-500/20 p-2 rounded text-purple-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Geo_Coordinates</div>
                    <div className="text-off-white font-bold">Islamabad, PK (G13/3)</div>
                    <div className="text-gray-600 text-xs mt-1">Zone: GMT+5</div>
                  </div>
                </div>
                
                {/* <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-green-500/30 transition-colors">
                  <div className="bg-green-500/20 p-2 rounded text-green-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Direct_Uplink</div>
                    <div className="text-off-white font-bold">+92 302 6405788</div>
                    <div className="text-gray-600 text-xs mt-1">Signal: Strong</div>
                  </div>
                </div> */}

              </div>
            </div>
          </motion.div>
          
          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="text-xs font-mono text-gray-500">config.json</div>
                </div>

              <div className="space-y-6">
                
                <div className="group">
                  <label htmlFor="name" className="block text-xs font-mono text-code-blue mb-2">var clientName =</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full bg-black/30 border-b border-white/10 text-off-white font-mono py-2 px-3 focus:outline-none focus:border-electric-yellow focus:bg-white/5 transition-all placeholder-gray-700"
                    placeholder='"Your Name";'
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-xs font-mono text-code-blue mb-2">var contactEmail =</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="w-full bg-black/30 border-b border-white/10 text-off-white font-mono py-2 px-3 focus:outline-none focus:border-electric-yellow focus:bg-white/5 transition-all placeholder-gray-700"
                    placeholder='"youremail@example.com";'
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
                
                <div className="group">
                  <label htmlFor="projectType" className="block text-xs font-mono text-purple-400 mb-2">const projectScope =</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-black/30 border-b border-white/10 text-off-white font-mono py-2 px-3 focus:outline-none focus:border-electric-yellow focus:bg-white/5 transition-all cursor-pointer"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-gray-900 text-gray-300">
                        "{type}"
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Slider - Fixed ID/Name */}
                <div className="group pt-2">
                    <div className="flex justify-between items-end mb-2">
                         <label htmlFor="budget" className="block text-xs font-mono text-green-400">let estimatedBudget =</label>
                         <span className="text-electric-yellow font-mono text-sm">${formData.budget}<span className="text-gray-500">+</span></span>
                    </div>
                    
                    <input 
                        type="range" 
                        id="budget"
                        name="budget"
                        min="500" 
                        max="10000" 
                        step="500" 
                        value={formData.budget}
                        onChange={handleBudgetChange}
                        className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-electric-yellow"
                    />
                </div>
                
                <div className="group pt-2">
                  <label htmlFor="message" className="block text-xs font-mono text-gray-500 mb-2">/* Additional Details */</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-black/30 border border-white/10 rounded-lg text-off-white font-mono py-3 px-4 focus:outline-none focus:border-electric-yellow focus:ring-1 focus:ring-electric-yellow/20 transition-all placeholder-gray-700 resize-none"
                    placeholder="// Describe your project requirements..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
                
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    disabled={state.submitting || showSuccess}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full py-4 px-6 rounded-lg font-mono font-bold text-sm tracking-wide flex items-center justify-center gap-3 transition-all ${
                        showSuccess 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50 cursor-default'
                        : 'bg-electric-yellow text-white hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]'
                    }`}
                  >
                    {state.submitting ? (
                        <>
                            <span className="animate-spin text-xl">⟳</span>
                            COMPILING_REQUEST...
                        </>
                    ) : showSuccess ? (
                        <>
                            <span>✓</span>
                            BUILD SUCCESSFUL
                        </>
                    ) : (
                        <>
                            <span>{'>'}</span>
                            INITIALIZE_PROJECT
                        </>
                    )}
                  </motion.button>
                </div>
                
                <AnimatePresence>
                    {showSuccess && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            className="bg-black rounded-lg p-4 font-mono text-xs text-green-400 mt-4 border border-green-900 overflow-hidden"
                        >
                            <p>{'>'} Request received at {new Date().toLocaleTimeString()}</p>
                            <p>{'>'} Analyzing requirements... OK</p>
                            <p className="animate-pulse">{'>'} Packet forwarded to Muhammad Rayan Successfully...</p>
                        </motion.div>
                    )}
                </AnimatePresence>
                
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}