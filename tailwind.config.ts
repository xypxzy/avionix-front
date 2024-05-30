import type { Config } from 'tailwindcss'
// @ts-ignore
// eslint-disable-next-line import/no-named-default
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette'

// eslint-disable-next-line no-unused-vars
require('tailwindcss/defaultTheme')
// eslint-disable-next-line no-unused-vars
require('tailwindcss/colors')

const config = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1600px',
			},
		},
		extend: {
			colors: {
				background_hero: 'var(--background-hero)',
				success: 'var(--success)',

				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				dark_blue: 'var(--background-dark-blue)',
				light_blue: 'var(--background-light-blue)',
				pagination: 'var(--background-pagination)',
				gold: 'var(--background-gold)',
				silver: 'var(--background-silver)',
				bronze: 'var(--background-bronze)',
				light_sky: 'var(--bells-color)',
				gray_custom: 'var(--gray-background)',
				booking: 'var(--booking-window)',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				bodydark: '#AEB7C0',
				bodydark1: '#DEE4EE',
				bodydark2: '#8A99AF',
				stroke: '#E2E8F0',
				gray: '#EFF4FB',
				graydark: '#333A48',
				'gray-2': '#F7F9FC',
				'gray-3': '#FAFAFA',
				whiten: '#F1F5F9',
				whiter: '#F5F7FD',
				boxdark: '#24303F',
				'boxdark-2': '#1A222C',
				strokedark: '#2E3A47',
				'form-strokedark': '#3d4d60',
				'form-input': '#1d2a39',
				'meta-1': '#DC3545',
				'meta-2': '#EFF2F7',
				'meta-3': '#10B981',
				'meta-4': '#313D4A',
				'meta-5': '#259AE6',
				'meta-6': '#FFBA00',
				'meta-7': '#FF6766',
				'meta-8': '#F0950C',
				'meta-9': '#E5E7EB',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xs: 'calc(var(--radius) - 6px)',
			},
			boxShadow: {
				default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
				card: '0px 1px 3px rgba(0, 0, 0, 0.12)',
				'card-2': '0px 1px 2px rgba(0, 0, 0, 0.05)',
				switcher:
					'0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
				'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
				1: '0px 1px 3px rgba(0, 0, 0, 0.08)',
				2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
				3: '0px 1px 5px rgba(0, 0, 0, 0.14)',
				4: '0px 4px 10px rgba(0, 0, 0, 0.12)',
				5: '0px 1px 1px rgba(0, 0, 0, 0.15)',
				6: '0px 3px 15px rgba(0, 0, 0, 0.1)',
				7: '-5px 0 0 #313D4A, 5px 0 0 #313D4A',
				8: '1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				scroll: {
					to: {
						transform: 'translate(calc(-50% - 0.5rem))',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				scroll:
					'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
			},
			fontSize: {
				caption: ['12px', '18px'], // captions
				xs: ['14px', '22px'], // b3 body
				sm: ['16px', '24px'], // b2 body
				base: ['20px', '30px'], // b1 body
				lg: ['24px', '36px'], // title
				xl: ['32px', '48px'], // h3 headline
				'2xl': ['48px', '72px'], // h2 headline
				'3xl': ['64px', '96px'], // h1 headline
				'title-xxl': ['44px', '55px'],
				'title-xl': ['36px', '45px'],
				'title-xl2': ['33px', '45px'],
				'title-lg': ['28px', '35px'],
				'title-md': ['24px', '30px'],
				'title-md2': ['26px', '30px'],
				'title-sm': ['20px', '26px'],
				'title-xsm': ['18px', '24px'],
			},
		},
	},
	plugins: [require('tailwindcss-animate'), addVariablesForColors],
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
	const allColors = flattenColorPalette(theme('colors'))
	const newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	)

	addBase({
		':root': newVars,
	})
}

export default config
