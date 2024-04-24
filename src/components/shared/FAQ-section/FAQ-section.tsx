import { FaqAccordion } from '@/src/components/shared/FAQ-section/FaqAccordion/FaqAccrodion'
import { FaqForm } from '@/src/components/shared/FAQ-section/FaqForm/FaqForm'

const FAQSection = () => {
	return (
		<section
			className={`flex flex-col items-start justify-center gap-10 py-10 lg:flex-row lg:justify-between`}
		>
			<FaqAccordion />
			<FaqForm />
		</section>
	)
}
export default FAQSection
