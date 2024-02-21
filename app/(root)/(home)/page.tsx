import Hero from '@/components/common/Hero/Hero'
import CustomerSay from '@/components/shared/CustomersSay/CustomerSay'
import WhyUs from '@/components/shared/WhyUs/WhyUs'

export default function Home() {
  return (
    <>
      <Hero title="Discover The World" preTitle="Travel with us" />
      <WhyUs />
      <CustomerSay />
    </>
  )
}
