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
        '680': '680px',
        '1170': '1170px'
      }, 
      height:{
        '800': '800px',
        '85.4167' : '85.4167vh'
      }  
    },
    plugins: [],
  }
}
