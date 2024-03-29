/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './**/*.html',
    './src/**/*.css',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {

    extend: {    
      colors: {
      'primary':"#CC2D4A",
      'secondary':"#8FA206",
      'tertiary':"#61AEC9",
      'white': "#ffffff",
      'gray-50' : "#F9FAFB",
      'gray-300' : "#D1D5DB", 
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('../img/yosemite.jpg')",
			  'LA': "url('../img/LA.jpg')",
			  'seattle': "url('../img/seattle.jpg')",
			  'new_york': "url('../img/new_york.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'sydney': "url('../img/sydney.jpg')",
			  'miami': "url('../img/miami.jpg')",
			  'switzerland': "url('../img/switzerland.jpg')",
			  'bali': "url('../img/bali.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'chicago': "url('../img/chicago.jpg')",
			  'europe': "url('../img/europe.jpg')",
			  'iceland': "url('../img/iceland.jpg')",
      }
    },
  },
	variants: {
		width: ["responsive", "hover", "focus"],
		extend: {
	 },
  },
  plugins: [],
}
