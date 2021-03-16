const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: [
		'./public/**/*.html',
		'./public/**/*.{js,jsx}'
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		customForms: (theme) => ({
			default: {
				'input, textarea': {
					'&::placeholder': {
						color: theme('colors.gray.400'),
					},
				},
			},
		}),
		extend: {
			maxHeight: {
				xl: '36rem',
			},
			fontFamily: {
				sans: [ 'Inter', ...defaultTheme.fontFamily.sans ],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
