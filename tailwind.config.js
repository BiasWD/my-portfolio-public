/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'projects-bg': "url('/src/images/mesh-318.png')",
      },
      screens: {
        '3xl': '1600px',
      },

      fontFamily:{
        orbitron: ['Orbitron', 'sans-serif']
      },

      animation: {
        tilt: 'tilt 10s infinite linear',
        sideToSide: 'sideToSide 8s ease-in-out infinite',
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
          transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          }
        },
        sideToSide: {
          "0%": {
            transform: "translateX(-5%)",
          },
          "50%": {
            transform: "translateX(-45%)"
          },
          "100%": {
            transform: "translateX(-5%)",
          },

        }
      }
    },
  },
  plugins: [],
}