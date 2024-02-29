import Logo from '@/src/components/shared/Logo/Logo'
import MobileNav from '@/src/components/shared/MobileNav/MobileNav'
import Navbar from '@/src/components/shared/Navbar/Navbar'
import Search from '@/src/components/shared/Search/Search'
import ControlPanel from '../ControlPanel/ControlPanel'

export default function Header() {
	return (
		<header className='flex items-center justify-between py-8'>
			<div className='flex w-3/5 items-center'>
				<Logo />
				<Search />
			</div>
			<div className='flex items-center gap-x-14'>
				<Navbar />
				<ControlPanel />
			</div>
			<MobileNav />
		</header>
	)
}
