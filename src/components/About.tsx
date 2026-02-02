'use client';

import { motion } from 'framer-motion';

export default function About() {
  const education = [
    {
      degree: 'BS Software Engineering',
      institution: 'National University of Computing and Emerging Sciences (FAST NUCES)',
      location: 'Islamabad',
      period: '2022 - 2026 (Expected)',
      description: 'Specializing in Software Engineering with focus on Algorithms, Data Structures, and System Design.',
      highlight: true
    },
    {
      degree: 'Pre-Engineering',
      institution: 'Punjab College',
      location: 'Pakistan',
      period: '2020 - 2022',
      description: 'Foundation in Mathematics, Physics, and Computer Science.',
      highlight: false
    }
  ];
  
  const skills = [
    { category: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', techs: ['Node.js', 'Express', 'MongoDB', 'SQL Server'] },
    { category: 'Languages', techs: ['JavaScript', 'TypeScript', 'Python', 'C#'] },
    { category: 'Tools', techs: ['Git', 'VS Code', 'Electron', 'Vercel'] },
    { category: 'AI/ML', techs: ['Machine Learning', 'Algorithm Design', 'Data Analysis'] }
  ];
  
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* Background Decor (Subtle Grid) */}
      {/* Background Decor - Removed grid.svg reference */}

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-montserrat font-bold text-off-white mb-6">
            About <span className="text-electric-yellow drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between <span className="text-white">Academic Theory</span> and <span className="text-white">Production Software</span>.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-code-blue/30 transition-colors duration-500 relative overflow-hidden group">
              {/* Corner Accents (Tech Vibe) */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-electric-yellow opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-electric-yellow opacity-50"></div>

              <h3 className="text-2xl font-montserrat font-bold text-off-white mb-6 flex items-center gap-3">
                The <span className="text-code-blue">Engineer</span>
              </h3>
              
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                <p>
                  I'm <span className="text-white font-medium">Muhammad Rayan</span>, a Software Engineering student at <span className="text-electric-yellow font-semibold">FAST NUCES</span>. 
                  Unlike typical developers who just write code, I engineer systems.
                </p>
                <p>
                  From optimizing <span className="text-code-blue">Minimax algorithms</span> for Chess AI to architecting scalable <span className="text-code-blue">SaaS platforms</span> with payment integrations, 
                  I thrive on solving complex logic problems that others avoid.
                </p>
                <p>
                  My philosophy is simple: Build software that is not just functional, but <span className="text-white">mathematically sound</span> and <span className="text-white">user-centric</span>.
                </p>
              </div>

              {/* Holographic Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
                <div className="text-center p-4 bg-black/40 rounded-lg border border-white/5 relative group/stat">
                   <div className="text-3xl font-bold text-electric-yellow font-montserrat group-hover/stat:scale-110 transition-transform">4+</div>
                   <div className="text-xs text-gray-500 font-mono mt-1 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-black/40 rounded-lg border border-white/5 relative group/stat">
                   <div className="text-3xl font-bold text-code-blue font-montserrat group-hover/stat:scale-110 transition-transform">15+</div>
                   <div className="text-xs text-gray-500 font-mono mt-1 uppercase tracking-wider">Projects Built</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column: Skills Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 relative">
               <h3 className="text-2xl font-montserrat font-bold text-off-white mb-8 flex items-center gap-2">
                 Technical <span className="text-electric-yellow">Stack</span>
                 <span className="text-xs font-mono text-gray-600 bg-white/5 px-2 py-1 rounded ml-auto">v2025.1</span>
               </h3>

               <div className="space-y-6">
                 {skills.map((skill, index) => (
                   <motion.div
                     key={skill.category}
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                   >
                     <h4 className="text-sm font-mono text-gray-500 mb-3 uppercase tracking-wider flex items-center gap-2">
                       <span className="w-1 h-1 bg-electric-yellow rounded-full"></span>
                       {skill.category}
                     </h4>
                     <div className="flex flex-wrap gap-2">
                       {skill.techs.map((tech, techIndex) => (
                         <span
                           key={techIndex}
                           className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded border border-white/5 hover:border-code-blue/50 hover:bg-code-blue/10 hover:text-code-blue transition-all duration-300 cursor-default"
                         >
                           {tech}
                         </span>
                       ))}
                     </div>
                   </motion.div>
                 ))}
               </div>
            </div>
          </motion.div>
        </div>
        
        {/* Education Timeline (Horizontal on Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-montserrat font-bold text-off-white mb-10 text-center">
            Educational <span className="text-electric-yellow">Background</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                  edu.highlight 
                    ? 'bg-linear-to-br from-electric-yellow/5 to-transparent border-electric-yellow/20 hover:border-electric-yellow/50' 
                    : 'bg-gray-900/40 border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className={`text-xl font-bold ${
                      edu.highlight ? 'text-electric-yellow' : 'text-off-white'
                    }`}>
                      {edu.degree}
                    </h4>
                    {edu.highlight && (
                        <span className="animate-pulse w-2 h-2 rounded-full bg-electric-yellow"></span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 font-medium mb-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mb-4 font-mono">{edu.period} • {edu.location}</p>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mt-auto border-t border-white/5 pt-4">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}