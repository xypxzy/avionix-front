import MobileNav from '@/components/shared/MobileNav/MobileNav'
import Navbar from '@/components/shared/Navbar/Navbar'
import Search from '@/components/shared/Search/Search'
import { LinkEnum } from '@/routes/route'
import Link from 'next/link'
import ControlPanel from '../ControlPanel/ControlPanel'

export default function Header() {
	return (
		<header className='flex items-center justify-between py-8'>
			<Link
				href={LinkEnum.Home}
				className='text-xl font-bold'
				style={{ fontFamily: 'var(--font-galada)' }}
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
