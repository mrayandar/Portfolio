'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image'; // <--- FIX 1: Added missing import

interface Project {
  id: number;
  title: string;
  pitch: string;
  category: 'commercial' | 'engineering';
  techStack: string[];
  liveDemo?: string;
  github?: string;
  description: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Toy Shop Billing System',
    pitch: 'Desktop billing solution with offline capabilities',
    category: 'commercial',
    techStack: ['Electron.js', 'SQLite', 'Node.js', 'HTML/CSS'],
    github: 'https://github.com/mrayandar/Desktop-Billing-App',
    description: 'Comprehensive billing system with inventory management, offline database, and receipt generation for toy retail businesses.',
    image: '/images/toy-shop.png' // Make sure this file exists in public/images/
  },
  {
    id: 2,
    title: 'FitCoach SaaS',
    pitch: 'Fitness coaching platform',
    category: 'commercial',
    techStack: ['React', 'Tailwind CSS', 'Stripe', 'Node.js', 'MongoDB'],
    description: 'Modern responsive fitness coaching website built with React, TypeScript, and Tailwind CSS. Features include service showcase, pricing plans, client testimonials, contact forms, and newsletter subscription functionality.',
    image: '/images/fitcoach.png'
  },
  {
    id: 3,
    title: 'Multi-Vendor Ecommerce Store',
    pitch: '3-portal system for complete ecommerce management',
    category: 'commercial',
    techStack: ['MERN Stack', 'Redux', 'Payment Gateway', 'AWS'],
    github: 'https://github.com/mrayandar/Web-Project',
    description: 'Complete ecommerce solution with separate portals for Admin, Staff, and Customers. Features vendor management and analytics.',
    image: '/images/ecommerce.png'
  },
  {
    id: 4,
    title: 'Chess Game AI',
    pitch: 'Intelligent chess engine with advanced algorithms',
    category: 'engineering',
    techStack: ['Python', 'Min-Max Algorithm', 'Alpha-Beta Pruning', 'Pygame'],
    github: 'https://github.com/mrayandar/Chess-with-AI',
    description: 'Chess game with AI opponent using minimax algorithm and alpha-beta pruning for optimal move calculation.',
    image: '/images/chess-ai.png'
  },
  {
    id: 5,
    title: 'Cafe Management System',
    pitch: 'Complete restaurant management solution',
    category: 'engineering',
    techStack: ['C#', 'SQL Server', 'Windows Forms', '.NET Framework'],
    description: 'Desktop application for cafe management including order processing, inventory tracking, and sales reporting.',
    image: '/images/cafe-management.png'
  }
];

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
};

const hoverVariants: Variants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

// --- Project Card Component ---
const ProjectCard = ({ project }: { project: Project }) => {
  
  const getTechBadgeColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'React': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      'Python': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
      'C#': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      'Node.js': 'bg-green-500/10 text-green-400 border-green-500/30',
      'Electron.js': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      'MERN Stack': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    };

    for (const [key, value] of Object.entries(colors)) {
      if (tech.includes(key)) return value;
    }
    return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
  };

  const getGradient = (id: number) => {
    const gradients = [
      'from-purple-500/20 to-blue-500/20',
      'from-yellow-500/20 to-red-500/20',
      'from-cyan-500/20 to-emerald-500/20',
      'from-pink-500/20 to-purple-500/20',
    ];
    return gradients[id % gradients.length];
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-electric-yellow/30 transition-all duration-300 group flex flex-col h-full"
    >
      {/* Thumbnail Area */}
      {/* FIX 2: Changed bg-linear-to-br to bg-gradient-to-br */}
      <div className={`h-48 w-full relative border-b border-white/5 overflow-hidden ${!project.image ? `bg-linear-to-br ${getGradient(project.id)}` : ''}`}>
        
        {project.image ? (
          <>
            <Image 
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300"></div>
          </>
        ) : (
          <div className={`absolute inset-0 bg-linear-to-br ${getGradient(project.id)} group-hover:opacity-100 opacity-80 transition-opacity`}>
             <div className="absolute inset-0 flex items-center justify-center text-white/10 group-hover:text-white/20 transition-colors">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-10">
             {project.category === 'commercial' ? (
                 <span className="px-2 py-1 text-[10px] font-mono bg-black/80 border border-electric-yellow/50 text-electric-yellow rounded backdrop-blur-md shadow-lg">SaaS</span>
             ) : (
                 <span className="px-2 py-1 text-[10px] font-mono bg-black/80 border border-code-blue/50 text-code-blue rounded backdrop-blur-md shadow-lg">R&D</span>
             )}
        </div>
      </div>

      <motion.div variants={hoverVariants} className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-montserrat font-bold text-off-white group-hover:text-electric-yellow transition-colors">
            {project.title}
          </h3>
          <div className="flex space-x-2">
            {project.liveDemo && (
              <a href={project.liveDemo} className="p-2 bg-code-blue/10 hover:bg-code-blue/20 rounded-lg transition-colors border border-code-blue/20">
                <svg className="w-4 h-4 text-code-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            )}
            {project.github && (
              <a href={project.github} className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10">
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4 font-medium tracking-wide">
          {project.pitch}
        </p>
        
        <p className="text-gray-400 text-sm mb-6 leading-relaxed grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-[10px] font-semibold border ${getTechBadgeColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const commercialProjects = projects.filter(p => p.category === 'commercial');
  const engineeringProjects = projects.filter(p => p.category === 'engineering');

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold text-off-white mb-6">
            Featured <span className="text-electric-yellow drop-shadow-lg">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of <span className="text-white font-medium">high-performance SaaS</span> and <span className="text-white font-medium">engineering research</span>.
          </p>
        </motion.div>

        {/* Commercial/SaaS Projects */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center mb-10"
          >
            <div className="bg-electric-yellow w-1.5 h-8 rounded-full mr-4 shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>
            <h3 className="text-2xl font-montserrat font-bold text-white">
              Commercial / SaaS
            </h3>
            <span className="hidden sm:inline-block ml-4 px-3 py-1 bg-electric-yellow/10 text-electric-yellow text-xs font-mono rounded border border-electric-yellow/30">
              $ THE_MONEY_MAKERS
            </span>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {commercialProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>

        {/* Engineering/R&D Projects */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center mb-10"
          >
            <div className="bg-code-blue w-1.5 h-8 rounded-full mr-4 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <h3 className="text-2xl font-montserrat font-bold text-white">
              Engineering / R&D
            </h3>
            <span className="hidden sm:inline-block ml-4 px-3 py-1 bg-code-blue/10 text-code-blue text-xs font-mono rounded border border-code-blue/30">
              ./PROOF_OF_SKILL
            </span>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {engineeringProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}