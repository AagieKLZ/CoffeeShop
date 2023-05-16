/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary' : '#BEC5AD',
        'primary-medium' : '#A4B494',
        'primary-dark' : '#519872',
        'primary-darker' : '#3B5249',
        'secondary' : '#C97064',
        'secondary-dark' : '#883A30'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
