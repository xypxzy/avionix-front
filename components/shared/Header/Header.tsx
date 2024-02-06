import { LinkEnum } from '@/routes/route'
import Link from 'next/link'
import ControlPanel from '../ControlPanel/ControlPanel'
import MobileNav from '../MobileNav/MobileNav'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'

export default function Header() {
	return (
		<header className='flex items-center justify-between py-8'>
			<Link
				href={LinkEnum.Home}
				className='text-xl font-bold'
				style={{ fontFamily: 'var(--font-kalam)' }}
			>
				<h2>Tripper</h2>
			</Link>
			<Search />
			<Navbar />
			<ControlPanel />
			<MobileNav />
		</header>
	)
}
