import {LinkEnum} from "@/src/utils/route";
import {Button} from "@/src/components/ui/button";
import Link from "next/link";
import {useTranslations} from "next-intl";
import data from './data.json'
import styles from './AirlinesRating.module.scss'

const AirlinesRating = () => {
    const t = useTranslations('AirlineRating')

    return (
        <section className={styles.airline_rating__section}>
            <h3 className={`text-background ${styles.airline_rating__title}`}>{t('title')}</h3>
            <div className={styles.airline_rating__card}>{
                data.map((item, index)=>(
                    <div className={styles.card__item} key={index} >
                        <img className={styles.item__img} src={item.image} alt={item.airlineName}/>
                        <h5 className={styles.item__name}>{item.airlineName}</h5>
                        <div className={styles[item.state]}>{item.rating}/10</div>
                    </div>
                ))}
            </div>
            <Link href={LinkEnum.Flights} className={styles.airline_rating__link}>
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