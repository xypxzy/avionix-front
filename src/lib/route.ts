/* eslint-disable no-unused-vars */
export enum LinkEnum {
	Home = '/',
	Flights = '/flights',
	Services = '/services',
	Login = '/login',
	SignUp = '/signup',
}

interface LinkProps {
	title: string
	link: LinkEnum
}

export const navLinks: LinkProps[] = [
	{ title: 'Home', link: LinkEnum.Home },
	{ title: 'Flights', link: LinkEnum.Flights },
	{ title: 'Services', link: LinkEnum.Services },
]
