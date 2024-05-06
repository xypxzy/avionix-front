import { StarRating } from '@/src/components/shared/StarRating/StarRating'
import { IComments } from '@/src/shared/types/commentsTypes'
import { Locale } from '@/src/shared/types/i18n'
import { format } from 'date-fns'
import { enGB, ru, tr } from 'date-fns/locale'
import { useLocale } from 'next-intl'

const languages = {
	ru,
	ky: ru,
	en: enGB,
	tr,
	default: enGB,
}

export const CarouselItems = ({ item }: { item: IComments }) => {
	const locale = useLocale()
	const lan = languages[locale as Locale] ?? languages.default

	return (
		<div className='flex flex-col gap-4 rounded-xl bg-dark_blue p-3 text-background_hero'>
			<h4 className={`text-end`}>{item.author}</h4>
			<p>{item.description}</p>
			<div className={`mt-auto flex items-center justify-between`}>
				<p>
					{item.createdAt && locale
						? format(new Date(item.createdAt), 'dd MMMM yyyy', { locale: lan })
						: ''}
				</p>
				<StarRating rating={item.grade} />
			</div>
		</div>
	)
}
