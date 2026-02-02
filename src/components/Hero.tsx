// 'use client';

// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.h1
//             className="text-4xl sm:text-6xl lg:text-7xl font-montserrat font-extrabold text-off-white mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Muhammad <span className="text-electric-yellow">Rayan</span>
//           </motion.h1>
          
//           <motion.h2
//             className="text-xl sm:text-2xl lg:text-3xl font-montserrat font-semibold text-gray-300 mb-8"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             Software Engineer & Full Stack Developer
//           </motion.h2>
          
//           <motion.p
//             className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             Engineering Scalable SaaS, AI Integrations & Complex Business Logic
//           </motion.p>
          
//           <motion.div
//             className="flex flex-col sm:flex-row gap-6 justify-center items-center"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             <motion.a
//               href="#projects"
//               className="bg-electric-yellow text-dark-bg px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View Projects
//             </motion.a>
            
//             <motion.a
//               href="/resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="border-2 border-electric-yellow text-electric-yellow px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-electric-yellow hover:text-dark-bg transition-all duration-300 transform hover:scale-105"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Download Resume
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </div>
      
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-64 h-64 bg-code-blue/10 rounded-full blur-3xl"
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -100, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-electric-yellow/10 rounded-full blur-3xl"
//           animate={{
//             x: [0, -100, 0],
//             y: [0, 100, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         />
//       </div>
//     </section>
//   );
// }