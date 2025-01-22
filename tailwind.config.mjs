/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'
import defaultTheme from 'tailwindcss/defaultTheme'



export default {
	content: {
		files: [
			'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
			'./public/**/*.{html,js}',
		],
		extract
	},
	plugins: [
		fluid
	],
	theme: {
		extend: {
			colors: {
				'bkg': 'hsl(var(--bkg))',
				'txt-header': 'hsl(var(--txt-header))',
				'txt-body': 'hsl(var(--txt-body))',
				'accent1': 'hsl(var(--accent1))',
				'marker': 'hsl(var(--marker))'
			},
			fontFamily: {
				sans: ['lato', ...defaultTheme.fontFamily.sans]
			},
		},
		screens,
		fontSize
	},
	safelist: [
		'bg-black',
		'bg-gray-500/50',
		'bg-yellow-600/50',
		'bg-yellow-300/50',
		'bg-yellow-300/60',
		'bg-green-500/50',
		'bg-green-300',
		'shadow-black',
		'shadow-yellow-700/65',
		'bg-blend-darken',
		'bg-yellow-300',
	],
}
