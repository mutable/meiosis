const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: [/red/, /green/, /yellow/, /gray/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Nexa', 'sans-serif'],
      body: ['Nexa', 'sans-serif'],
    },
    screens: {
      'tablet': '640px',
      'tablet+': '720px',
      'tablet-md': {'min': '768px', 'max': '912px'},
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1444px',
      // => @media (min-width: 1280px) { ... }
      'xl': {'min': '1444px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'min': '1366px'},
      // => @media (max-width: 1023px) { ... }

      'mlg': {'min': '1256px'},

      'md': {'min': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'min': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    color: false,
    typography: {
      default: {
        css: {
          color: false,
        },
      },
    },
    extend: {
      margin: {
        '-2': '-0.125rem',
      },
      height: theme => ({
        'h-184': '46rem',
        'h-456': '28.5rem',
        'h-520': '32rem',
        'h-750': '46rem',
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      width: {
        'w-280': '280px',
      },
      colors: {
        'brand': '#fc4468',
        'dark': '#060622',
        'border': '#efefef',
        'console': '#77F4C1',
        'console-hover': "#A5FFDB",
        'console-pressed': "#26C597",
        'placeholder': "#5E5E70",
        'light-dark': "#1C1C35",
      },
      opacity: {
        '0': '0',
        '5': '.05',
        '10': '.1',
        '20': '.2',
        '25': '.25',
        '30': '.3',
        '40': '.4',
        '50': '.5',
        '60': '.6',
        '70': '.7',
        '75': '.75',
        '80': '.8',
        '90': '.9',
        '100': '1',
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem'
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        bold: 700,
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
    // require('@tailwindcss/ui'),
    // require('@tailwindcss/typography'),
  ],
};