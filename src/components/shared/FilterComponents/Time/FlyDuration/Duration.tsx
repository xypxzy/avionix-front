'use client'
import {Slider} from "@/src/components/ui/slider";
import React, {useState} from "react";
import {minutesToHours} from '@/src/shared/utils/timeConverter'
import {
    AccordionContent,
    AccordionDefault,
    AccordionItem,
    AccordionTrigger
} from "@/src/components/ui/accordionDefault";
export const Duration = () => {
    const [duration, setDuration] = useState<string>('23:59');

    return(
    <AccordionDefault type="single" collapsible className='flex flex-col gap-6'>
        <AccordionItem value='item-1' className={`border-0`}>
            <AccordionTrigger
                className={`border-0 text-black`}>
                <p className={`text-base font-bold`}>Продолжительность</p>
            </AccordionTrigger>
            <AccordionContent className={`flex flex-col gap-2`}>
                <p className={`text-base font-medium text-foreground`}>Время в пути</p>
                <div
                    className={`text-sm font-normal text-primary`}>{duration === '23:59' ? 'любое' : `${duration} часов`}</div>
                <Slider className={``} onValueChange={([value]) => setDuration(minutesToHours(value))}
                        minStepsBetweenThumbs={1} defaultValue={[1439]} max={1439} step={1}/>
                <div className={'flex justify-end'}>
                    <span className={'block text-sm font-normal text-primary'}>{duration}</span>
                </div>
            </AccordionContent>
        </AccordionItem>
    </AccordionDefault>
)
}