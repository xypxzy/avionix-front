"use client"
import React, {useState} from "react";
import {Slider} from "@/src/components/ui/slider";
import {minutesToHours} from '@/src/shared/utils/timeConverter'

export const GoThere = () => {
    const [departure, setDeparture] = useState<string>('23:59');
    const [arrival, setArrival] = useState<string>('23:59');

    return (
        <div className={`flex flex-col gap-5`}>
            <div className={`flex flex-col gap-2`}>
                <p className={`text-base font-medium text-foreground`}>Вылет</p>
                <div className={`text-sm font-normal text-primary`}>{departure==='23:59' ? 'Весь день' : `от 00:00 до ${departure}`}</div>
                <Slider className={``} onValueChange={([value])=>setDeparture(minutesToHours(value))} minStepsBetweenThumbs={1} defaultValue={[1439]} max={1439} step={1}/>
                <div className={'flex justify-between'}>
                    <span className={'block text-sm font-normal text-primary'}>00:00</span>
                    <span className={'block text-sm font-normal text-primary'}>{departure}</span>
                </div>
            </div>
            <div className={`flex flex-col gap-2`}>
                <p className={`text-base font-medium text-foreground`}>Прилёт</p>
                <div className={`text-sm font-normal text-primary`}>{arrival==='23:59' ? 'Весь день' : `от 00:00 до ${arrival}`}</div>
                <Slider onValueChange={([value])=>setArrival(minutesToHours(value))} minStepsBetweenThumbs={1} defaultValue={[1439]} max={1439} step={1}/>
                <div className={'flex justify-between'}>
                    <span className={'block text-sm font-normal text-primary'}>00:00</span>
                    <span className={'block text-sm font-normal text-primary'}>{arrival}</span>
                </div>
            </div>
        </div>
    );
};
