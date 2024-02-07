import CurrencySwitcher from '@/components/shared/CurrencySwitcher/CurrencySwitcher'
import LanguageSwitcher from '@/components/shared/LanguageSwitcher/LanguageSwitcher'
import UserMenu from '@/components/shared/UserMenu/UserMenu'
import { Separator } from '@/components/ui/separator'

export default function ControlPanel() {
	return (
		<div className='hidden h-5 items-center space-x-4 md:flex'>
			<UserMenu />
			<Separator orientation='vertical' />
			<LanguageSwitcher />
			<CurrencySwitcher />
		</div>
	)
}
