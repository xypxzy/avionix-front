'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel"
import Image from "next/image";
import image1 from '@/public/assets/images/register1.png'
import image2 from '@/public/assets/images/register2.png'
import image3 from '@/public/assets/images/register3.png'
import image4 from '@/public/assets/images/register4.png'

const registerImage = [
  image1, image2, image3, image4
]

export function RegisterSlider() {
  return (
    <Carousel className="w-3/5 lg:w-2/4">
      <CarouselContent className="">
        {registerImage.map((image, index) => (
          <CarouselItem key={index}>
              <Image src={image} alt={`image${index}`} className="h-screen w-full object-cover object-center" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

