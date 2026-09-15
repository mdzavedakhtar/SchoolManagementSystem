/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040B15',
          900: '#071527',
          800: '#0B1F3A', // Primary #0B1F3A
          700: '#122B4E',
          600: '#1A3863',
          500: '#25497B',
        },
        academic: {
          900: '#0C2B52',
          800: '#123B6D', // Secondary #123B6D
          700: '#1A4B88',
          600: '#225CA4',
          100: '#EBF2FB',
        },
        gold: {
          700: '#997415',
          600: '#B88E1D',
          500: '#D4A72C', // Accent #D4A72C
          400: '#E6B93F',
          300: '#F5CB5C',
          100: '#FDF8E7',
          50: '#FFFCF3',
        },
        bgLight: '#F7F9FC', // Background #F7F9FC
        surface: '#FFFFFF',  // White #FFFFFF
        darkText: '#111827', // Text #111827
        mutedText: '#64748B',// Muted #64748B
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem', // 1408px
        '9xl': '96rem', // 1536px
        '10xl': '120rem', // 1920px
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(11, 31, 58, 0.08), 0 4px 12px -4px rgba(11, 31, 58, 0.04)',
        'premium-hover': '0 20px 40px -15px rgba(11, 31, 58, 0.14), 0 8px 20px -6px rgba(11, 31, 58, 0.08)',
        'gold-glow': '0 0 25px rgba(212, 167, 44, 0.25)',
        'navy-glow': '0 0 35px rgba(11, 31, 58, 0.35)',
      },
      backgroundImage: {
        'navy-card': 'linear-gradient(135deg, #0B1F3A 0%, #123B6D 100%)',
        'gold-badge': 'linear-gradient(135deg, #D4A72C 0%, #E6B93F 100%)',
      }
    },
  },
  plugins: [],
}
