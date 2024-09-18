import { MdHeight } from 'react-icons/md'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1200': '1200px',
        '800' : '800px',
        '680': '680px',
        '500': '500px',
        '1170': '1170px'
      }, 
      height:{
        '800': '800px',
         '450': '450px',
         '470': '470px',
        '85.4167' : '85.4167vh',
        '600': '600px',
        '400': '400px',
        '700': '700px'
      },
      maxWidth: {
        '1200': '1200px',
      },  
    },
    plugins: [],
  }
}

