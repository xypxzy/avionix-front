export enum LinkEnum {
	Home = '/',
	Flights = '/flights',
	Services = '/services',
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
