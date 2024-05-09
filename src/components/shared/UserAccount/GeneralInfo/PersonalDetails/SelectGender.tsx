import {Label} from "@/src/components/ui/label";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/src/components/ui/select";
import {useUserStore} from "@/src/stores/user.store";
import {useTranslations} from "next-intl";

export const SelectGender = () => {
    const t = useTranslations('userProfile.generalInfo.personalDetails')
    const user = useUserStore(state => state.user)
    if(!user){
        return null
    }
    return (
        <>
            <div className={`w-full space-y-2`}>
                <Label>{t('gender.title')}</Label>
                <Select>
                    <SelectTrigger className="w-full max-w-[170px] text-dark_blue">
                        <SelectValue className={`w-full`} placeholder={user.gender}/>
                    </SelectTrigger>
                    <SelectContent className={`w-full`}>
                        <SelectGroup>
                            <SelectItem value="male">{t('gender.male')}</SelectItem>
                            <SelectItem value="female">{t('gender.female')}</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </>
    )
}