import LanguageSwitcher from '@/src/components/shared/LanguageSwitcher/LanguageSwitcher'
import ThemeSwitcher from '@/src/components/shared/ThemeSwitcher/ThemeSwitcher'
import UserMenu from '@/src/components/shared/UserMenu/UserMenu'
import { Separator } from '@/src/components/ui/separator'

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
