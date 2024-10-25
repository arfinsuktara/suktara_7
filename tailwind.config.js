/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Font family
      fontFamily: {
        'pod': ['Podkova'],
        'Frank': ['Frank Ruhl Libre'],
        'pop': ['Poppins'],
       
      },
      // Font family
      // container
      maxWidth: {
        'menuContainer': '1320px',

      },
      // container
      // color
      colors:{
        headerBg: "#FAE3B6",
         btnHover: "#FDBB57",
         btnBdr: "#FFD687",
         shopBg: "#CFA485",
         counterBg: "#FEECC8",
         iconcolor: "#FFAF37",



      }
      // color


    },
  },
  plugins: [],
}


