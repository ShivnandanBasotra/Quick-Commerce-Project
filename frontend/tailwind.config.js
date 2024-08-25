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
        '70': '70'
      }, 
      height:{
        '800': '800px',
      }  
    },
    plugins: [],
  }
}
