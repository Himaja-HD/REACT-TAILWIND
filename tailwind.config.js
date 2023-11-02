/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    debugScreens: {

      style: {
        backgroundColor: 'black',
        color: 'white',
        position: ['top', 'left'],
        prefix: 'screen: ',

      },
    },
    
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}