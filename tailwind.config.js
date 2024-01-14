/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Karla: ['karla', 'sans-serif']
      },
      colors: {
        'coffee': {
          50: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838'
        },
        'ct-gray':{
          50: '#F6F6F6'
        },
        'ct-blackblue':{
          900: '#1d1f2e'
        }
      },
      keyframes:{
        slideDown:{
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0%)'}
        },
        fadeIn:{
          from: {
            opacity: 0
          },
          to:{
            opacity: 1
          }
        }
      },
      animation:{
        slideDown: 'slideDown 0.4s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out'
      },
      backgroundImage:{
        'slider-bg': 'url("./img/hinhnenslider.jpg")'
      },
      screens: {
        'xs': '480px',
      }
    },
  },
  plugins: [],
}

