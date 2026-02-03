'use client';

import React from 'react';

// Real Tech Stack Icons (Monochrome SVGs)
const icons = [
  // 1. React (The Atom)
  { 
    id: 'react',
    svg: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)" stroke="currentColor" strokeWidth="1.5"/></svg>,
    top: '10%', left: '10%', delay: '0s', duration: '25s', color: 'text-code-blue'
  },
  // 2. TypeScript (TS Box)
  {
    id: 'typescript',
    svg: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" stroke="currentColor" strokeWidth="1.5"/><path d="M8 7V9M8 7H12M12 7H16M12 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 17C17.5 17 19 16 19 14.5C19 13.5 18 13 17 13H16V17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 13C14.5 13 14 14 14 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    top: '20%', left: '85%', delay: '5s', duration: '30s', color: 'text-electric-yellow'
  },
  // 3. Python (Two Snakes)
  {
    id: 'python',
    svg: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5C15 5 16 3 16 3C16 3 19 3 19 6C19 9 16 9 16 9H13C11 9 11 11 11 11V13C11 13 11 16 8 16C5 16 5 13 5 13C5 13 2 13 2 10C2 7 5 7 5 7H8C10 7 10 5 10 5V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 19C9 19 8 21 8 21C8 21 5 21 5 18C5 15 8 15 8 15H11C13 15 13 13 13 13V11C13 11 13 8 16 8C19 8 19 11 19 11C19 11 22 11 22 14C22 17 19 17 19 17H16C14 17 14 19 14 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    top: '65%', left: '5%', delay: '2s', duration: '28s', color: 'text-purple-400'
  },
  // 4. Node.js (Hexagon)
  {
    id: 'node',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" /><path d="M12 22V12" /><path d="M20 7L12 12L4 7" /></svg>,
    top: '80%', left: '80%', delay: '8s', duration: '35s', color: 'text-green-500'
  },
  // 5. Database / MongoDB (Leaf-like structure)
  {
    id: 'mongo',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C12 2 5 10 5 15C5 19 8 22 12 22C16 22 19 19 19 15C19 10 12 2 12 2Z" /><line x1="12" y1="22" x2="12" y2="10" /></svg>,
    top: '50%', left: '50%', delay: '12s', duration: '40s', color: 'text-green-300'
  },
  // 6. Git (Branch)
  {
    id: 'git',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><path d="M6 9v3a3 3 0 0 0 3 3h3" /><path d="M18 9v3a3 3 0 0 1-3 3h-3" /><line x1="12" y1="15" x2="12" y2="18" /></svg>,
    top: '35%', left: '20%', delay: '4s', duration: '22s', color: 'text-red-400'
  },
  // 7. Bracket (Coding Symbol)
  {
    id: 'code',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    top: '90%', left: '30%', delay: '6s', duration: '26s', color: 'text-gray-500'
  }
];

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className={`absolute animate-float opacity-[0.06] ${icon.color} hover:opacity-20 transition-opacity duration-500`}
          style={{
            top: icon.top,
            left: icon.left,
            animationDelay: icon.delay,
            animationDuration: icon.duration,
            width: '50px',
            height: '50px',
          }}
        >
          {icon.svg}
        </div>
      ))}
    </div>
  );
}