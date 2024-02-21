'use client'
import { Quote } from 'lucide-react'
import data from './avionix-comment.json'
import StarRating from '../../ui/StarRating'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useParams } from 'next/navigation'

const Comments: React.FC = () => {
  const params = useParams()
  return (
    <Carousel
      opts={{
        align: 'center',
      }}
      className="relative w-full max-w-full"
    >
      <h2 className={`text-xl font-medium text-$text-color`}>
        Our customers say
      </h2>
      <CarouselContent>
        {data.map((item, index) =>
          item.lan.toLowerCase() === params.locale ? (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-custom-bg">
                <CardContent className="items-center justify-center p-6">
                  <div className="flex justify-between pb-3">
                    <Quote className={`text-white`} />
                    <p className={`text-white`}>{item.customerId}</p>
                  </div>
                  <p className={`text-white leading-6 text-sm`}>
                    {item.description}
                  </p>
                  <div className={`text-white flex justify-between pt-3`}>
                    <p>{item.createdAt}</p>
                    <StarRating rating={item.grade} />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ) : null
        )}
      </CarouselContent>
      <div className="absolute top-0 right-10 mt-4 mr-4 flex">
        <CarouselPrevious className="bg-custom-bg hover:bg-hover-bg hover:border-none text-white" />
        <CarouselNext className="bg-custom-bg hover:bg-hover-bg hover:border-none text-white" />
      </div>
    </Carousel>
  )
}

export default Comments
