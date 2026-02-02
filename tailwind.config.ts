import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Holographic IDE Palette
        'void': '#020617',
        'neon-yellow': '#fde047',
        'neon-cyan': '#22d3ee',
        'deep-purple': '#7c3aed',
        'syntax-pink': '#f472b6',
        'syntax-blue': '#60a5fa',
        'syntax-green': '#4ade80',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'glass-bg': 'rgba(255, 255, 255, 0.05)',
        // Legacy colors for compatibility
        'dark-bg': '#0F172A',
        'electric-yellow': '#FACC15',
        'code-blue': '#3B82F6',
        'off-white': '#F8FAFC',
        'deep-charcoal': '#111111',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
        'fira-code': ['Fira Code', 'monospace'],
      },
      animation: {
        'aurora-float': 'aurora-float 20s ease-in-out infinite',
        'type': 'typing 3.5s steps(40, end)',
        'blink': 'blink-caret .75s step-end infinite',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#fde047' }
        }
      },
      backdropBlur: {
        'glass': '10px',
        'glass-strong': '20px',
      }
    },
  },
  plugins: [],
};
export default config;