/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0A0F1D',       // Deep oceanic abyss
          surface: '#0F172A',  // Slate navy surface
          surfaceSubtle: '#1E293B',
          card: '#0D1527',
          cardHover: '#131F37',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(148, 163, 184, 0.12)',
        },
        ocean: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          950: '#082F49',
        },
        marine: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        sage: {
          50: '#F2FBF7',
          100: '#E1F7ED',
          200: '#C3EFDC',
          300: '#95E1C3',
          400: '#5ECDA4',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        },
        sand: {
          50: '#FAF8F5',
          100: '#F5EFEB',
          200: '#E8DCCE',
          300: '#D7C4AE',
          400: '#C1A88C',
          500: '#A88D6F',
          600: '#8E7356',
          700: '#735B43',
          800: '#5C4835',
          900: '#4A3B2C',
        },
        alert: {
          warning: '#F59E0B',
          danger: '#EF4444',
          info: '#0EA5E9',
          success: '#10B981',
        }
      },
      fontFamily: {
        sans: [
          '"Noto Sans TC"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
        'ocean-soft': '0 8px 30px -4px rgba(14, 165, 233, 0.15)',
        'card-clean': '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
