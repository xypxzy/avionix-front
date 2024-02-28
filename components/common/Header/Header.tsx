import Logo from '@/components/shared/Logo/Logo'
import MobileNav from '@/components/shared/MobileNav/MobileNav'
import Navbar from '@/components/shared/Navbar/Navbar'
import Search from '@/components/shared/Search/Search'
import ControlPanel from '../ControlPanel/ControlPanel'

export default function Header() {
	return (
		<header className='flex items-center justify-between py-8'>
			<div className='flex w-3/5 items-center'>
				<Logo />
				<Search />
			</div>
			<div className='flex items-center gap-x-20'>
				<Navbar />
				<ControlPanel />
			</div>
			<MobileNav />
		</header>
	)
}
