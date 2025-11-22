export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#0a0a0a',
        'background-secondary': '#1e1e1e',
        'background-hover': '#2a2a2a',
        'background-avatar': '#252525',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'spin-slow': 'spin 3s linear infinite',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradient: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
        },
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd, #3b82f6)',
      },
    },
  },
  plugins: [],
}