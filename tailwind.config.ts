const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.scss']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {},
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled']
    }
  },
  plugins: []
};
