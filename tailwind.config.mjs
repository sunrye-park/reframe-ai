export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        main: '#2B2B2B',
        bg_cream: '#FBF8F2',
        bg_white: '#FFFFFF',
        btn_bg: '#2F5D50',
        btn_text: '#FFFFFF',
        highlight: '#A24B33',
        sub: '#555555',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}

