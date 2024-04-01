'use client'
import {Toggle} from "@/src/components/ui/toggle";
import {Bell, BellOff} from "lucide-react";
import {useState} from "react";
import {useTranslations} from "next-intl";

export const Notification = () => {
    const [bellState, setBellState] = useState(true)
    const t = useTranslations('flightsFilter')
    const toggleClick = () =>{
        setBellState(!bellState)
    }
    return (
        <div className={`flex flex-col gap-1`}>
            <div className={`flex items-center gap-4`}>
                <p className={`text-base font-bold`}>{t('notificationSwitch')}</p>
                <Toggle aria-label="Toggle italic" onClick={toggleClick} className={`bg-slate-300 p-2`}>
                    {bellState ? <BellOff className={`text-light_sky`}/> : <Bell/>}
                </Toggle>
            </div>

            <p className={`max-w-[411px] border-b-[0.5px] border-silver pb-9 text-sm font-normal text-silver`}>
                {t('notificationText')}
            </p>
        </div>
    )
}