import {LinkEnum} from "@/src/shared/utils/route";
import {Button} from "@/src/components/ui/button";
import Link from "next/link";
import {useTranslations} from "next-intl";
import styles from '@/src/components/common/Footer/Footer.module.css'
import data from './data.json'
const AirlinesRating = () => {
    const t = useTranslations('AirlineRating')
    return (
        <section className={`${styles.full_bleed} flex flex-col items-center justify-center gap-12 bg-dark_blue p-4 sm:py-8 md:py-16 lg:px-4 lg:py-[110px]`}>
            <h3 className={`mb-10 text-base font-medium text-background md:text-lg lg:text-xl `}>{t('title')}</h3>
            <div className={`grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3`}>{
                data.map((item, index)=>(
                    <Link href={`*`} className={`relative flex w-full max-w-[300px] flex-col items-center justify-center gap-5 rounded-sm bg-background px-8 py-4`} key={index} >
                        <img className={`max-w-[100px] md:max-w-[150px] lg:max-w-[200px]`} src={item.image} alt={item.airlineName}/>
                        <h5 className={`mt-auto text-xs font-medium md:text-sm lg:text-base`}>{item.airlineName}</h5>
                        <div className={`rounded-[4px] p-2 text-xs font-medium md:text-sm lg:text-base ${
                            item.state === 'gold' ? 'bg-gold' :
                                item.state === 'silver' ? 'bg-silver' :
                                    item.state === 'bronze' ? 'bg-bronze' :
                                        item.state === 'base' ? 'border bg-transparent' : 'border bg-transparent'
                        }`}>
                            {item.rating}/10
                        </div>
                    </Link>
                ))}
            </div>
            <Link href={LinkEnum.Flights} className={`ml-auto`}>
                <Button
                    variant="link"
                    className="text-background underline hover:text-muted-foreground"
                >
                {t('link')}
                </Button>
            </Link>
        </section>
    )
}

export default AirlinesRating