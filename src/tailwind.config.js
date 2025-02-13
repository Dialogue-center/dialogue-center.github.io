/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
            fontFamily: {
                nunito: ["Nunito", "sans-serif"], 
                fontWeight: {
                    normal: "400", 
                    bold: "700",  
                    extrabold: "800", 
                  },
        },
	},
	plugins: [
		require('flowbite/plugin')
	],

      
}}