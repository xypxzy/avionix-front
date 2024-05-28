import {Label} from "@/src/components/ui/label";
import {Input} from "@/src/components/ui/input";
import React from "react";
import {useUserStore} from "@/src/stores/user.store";
import {useTranslations} from "next-intl";

export const SelectPhoneEmail = () => {
    const t = useTranslations('userProfile.generalInfo.personalDetails')
    const user = useUserStore(state=>state.user)
    if(!user){
        return null
    }
    return (
            <div className={`flex gap-10`}>
                <div className={`w-full space-y-2`}>
                    <Label htmlFor="name">{t('phone')}</Label>
                    <Input id="phone" value={user.phone} onChange={() => null}/>
                </div>
                <div className={`w-full space-y-2`}>
                    <Label htmlFor="name">{t('email')}</Label>
                    <Input id="email" value={user.email} onChange={() => null}/>
                </div>
            </div>
    )
}