import LanguageSwitcher from '@/components/shared/LanguageSwitcher/LanguageSwitcher'
import ThemeSwitcher from '@/components/shared/ThemeSwitcher/ThemeSwitcher'
import UserMenu from '@/components/shared/UserMenu/UserMenu'
import { Separator } from '@/components/ui/separator'

export default function ControlPanel() {
	return (
		<div className='hidden h-5 items-center space-x-4 md:flex'>
			<UserMenu />
			<Separator orientation='vertical' />
			<LanguageSwitcher />
			<ThemeSwitcher />
		</div>
	)
}
