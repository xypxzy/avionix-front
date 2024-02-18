import CustomerSay from '@/components/shared/CustomersSay/CustomerSay'
import Hero from '@/components/shared/Hero/Hero'
import WhyUs from '@/components/shared/WhyUs/WhyUs'

export default function Home() {
	return (
		<>
			<Hero title='Discover The World' preTitle='Travel with us' />
			<WhyUs/>
			<CustomerSay/>
		</>
	)
}
