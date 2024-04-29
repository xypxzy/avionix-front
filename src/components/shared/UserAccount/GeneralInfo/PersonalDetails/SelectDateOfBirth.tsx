import {Label} from "@/src/components/ui/label";
import {Input} from "@/src/components/ui/input";
import {Separator} from "@/src/components/ui/separator";
import {useLocale, useTranslations} from "next-intl";
import {useUserStore} from "@/src/stores/user.store";
import { formatDateOfBirth } from "@/src/shared/utils/formatPassportDate";

export const SelectDateOfBirth = () => {
    const t = useTranslations('userProfile.generalInfo.personalDetails')
    const user = useUserStore(state => state.user)
    const locale = useLocale()

    if(!user){
        return null
    }
    return (
        <div className={`w-full max-w-[353px] space-y-2`}>
            <Label htmlFor="name">{t('dateOfBirth')}</Label>
            <div className={`flex`}>
                <Input className={`rounded-r-none border-r-0 focus:border-none`} id="name" value={formatDateOfBirth(user.dateOfBirth, locale).day}
                       onChange={() => null}/>
                <Separator orientation={'vertical'} className={`h-[40px]`}/>
                <Input className={`rounded-none border-x-0 focus:border-none`} id="name" value={formatDateOfBirth(user.dateOfBirth, locale).month}
                       onChange={() => null}/>
                <Separator orientation={'vertical'} className={`h-[40px]`}/>
                <Input className={`rounded-l-none border-l-0 focus:border-none`} id="name" value={formatDateOfBirth(user.dateOfBirth, locale).year}
                       onChange={() => null}/>
            </div>
        </div>
    )
}