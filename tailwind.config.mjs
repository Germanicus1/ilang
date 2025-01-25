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
				'accent2': 'hsl(var(--accent2))',
				accent3: ({ opacityValue }) =>
					opacityValue
						? `hsl(var(--accent3) / ${opacityValue})`
						: 'hsl(var(--accent3))',

				'levelA': 'hsl(var(--levelA))',
				'levelB': 'hsl(var(--levelB))',
				'levelC': 'hsl(var(--levelC))',
				'level-A1': 'hsl(var(--level-A1))',
				'level-A2': 'hsl(var(--level-A2))',
				'level-B1': 'hsl(var(--level-B1))',
				'level-B2': 'hsl(var(--level-B2))',
				'level-C1': 'hsl(var(--level-C1))',
				'level-C2': 'hsl(var(--level-C2))'
			},
			borderColor: {
				'level-A1': 'hsl(var(--level-A1))',
				'level-A2': 'hsl(var(--level-A2))',
				'level-B1': 'hsl(var(--level-B1))',
				'level-B2': 'hsl(var(--level-B2))',
				'level-C1': 'hsl(var(--level-C1))',
				'level-C2': 'hsl(var(--level-C2))',
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
		'bg-accent3',
		'shadow-black',
		'shadow-yellow-700/65',
		'bg-blend-darken',
		'bg-yellow-300',

		'before:bg-level-A1',
		'before:bg-level-A2',
		'before:bg-level-B1',
		'before:bg-level-B2',
		'before:bg-level-C1',
		'before:bg-level-C2',

		/* Dynamic content for levels */
		"before:content-['A1']",
		"before:content-['A2']",
		"before:content-['B1']",
		"before:content-['B2']",
		"before:content-['C1']",
		"before:content-['C2']",

		'before:font-black',
		'bg-level-A1',
		'bg-level-A2',
		'bg-level-B1',
		'bg-level-B2',
		'bg-level-C1',
		'bg-level-C2',

		'border-level-A1',
		'border-level-A2',
		'border-level-B1',
		'border-level-B2',
		'border-level-C1',
		'border-level-C2',
	],
}
