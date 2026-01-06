/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030305', // Deep space black
        surface: '#0f1016', // Slightly lighter
        primary: {
          DEFAULT: '#00f2ea', // Cyan
          glow: '#00f2ea80',
        },
        secondary: {
          DEFAULT: '#ff0055', // Magenta/Pink for contrast
          glow: '#ff005580',
        },
        accent: '#7000ff', // Purple
        'eco-green': '#39ff14',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Orbitron', 'sans-serif'], // We might need to import a google font
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
