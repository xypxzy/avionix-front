'use client'
import { Quote } from 'lucide-react'
import CustomersSay from './CustomersSay.json'
import styles from './CustomersSayStyle.module.scss'
import StarRating from './StarRating'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const SimpleSwiper: React.FC = () => {
  // return (
  //   <div className={styles.customer}>
  //     <h2 className={styles.customer__title}>Our customers say</h2>
  //     <div className={styles.customer__cards}>
  //       {CustomersSay.map((item, index) => (
  //         <div className={styles.customer__cards__card} key={index}>
  //           <div className={styles.customer__cards__card__head}>
  //             <Quote className={styles.customer__cards__card__head__icon} />
  //             <p className={styles.customer__cards__card__head__author}>
  //               {item.author}
  //             </p>
  //           </div>
  //           <p className={styles.customer__cards__card__description}>
  //             {item.description}
  //           </p>
  //           <div className={styles.customer__cards__card__bottom}>
  //             <p className={styles.customer__cards__card__bottom__date}>
  //               {item.date}
  //             </p>
  //             <StarRating rating={item.startsCount} />
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // )
  return (
    <Carousel
      opts={{
        align: 'center',
      }}
      className="relative w-full max-w-full"
    >
      <h2 className={styles.title}>Our customers say</h2>
      <CarouselContent>
        {CustomersSay.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-custom-gray">
                <CardContent className="items-center justify-center p-6">
                  <div className={styles.customer__head}>
                    <Quote className={styles.customer__head__icon} />
                    <p className={styles.customer__head__author}>
                      {item.author}
                    </p>
                  </div>
                  <p className={styles.customer__description}>
                    {item.description}
                  </p>

                  <div className={styles.customer__bottom}>
                    <p className={styles.customer____bottom__date}>
                      {item.date}
                    </p>
                    <StarRating rating={item.startsCount} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute top-0 right-10 mt-4 mr-4 flex">
        <CarouselPrevious className="bg-custom-gray text-white" />
        <CarouselNext className="bg-custom-gray text-white" />
      </div>
    </Carousel>
  )
}

export default SimpleSwiper
