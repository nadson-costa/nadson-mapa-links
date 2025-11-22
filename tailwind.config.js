export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#212121',
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
        'slide-up': 'slideUp 0.7s ease-in-out forwards',
        'gradient-rotate': 'gradientRotate 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(0)',
            opacity: '1',
          },
          '100%': { 
            transform: 'translateY(-100%)',
            opacity: '0',
          },
        },
        gradientRotate: {
          '0%': { 
            transform: 'rotate(0deg)',
          },
          '100%': { 
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
}