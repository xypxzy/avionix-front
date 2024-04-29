import {Label} from "@/src/components/ui/label";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/src/components/ui/select";
import {useUserStore} from "@/src/stores/user.store";
import {useTranslations} from "next-intl";

export const SelectNationality = () => {
    const t = useTranslations('userProfile.generalInfo.personalDetails')
    const user = useUserStore(state => state.user)
    if(!user){
        return null
    }
    return (
        <div className={`w-full space-y-2`}>
            <Label htmlFor="name">{t('nationality.title')}</Label>
            <Select>
                <SelectTrigger className="w-full text-dark_blue">
                    <SelectValue placeholder={user.nationality}/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="canadian">{t('nationality.kyrgyz')}</SelectItem>
                        <SelectItem value="kyrgyz">{t('nationality.russian')}</SelectItem>
                        <SelectItem value="russian">{t('nationality.turkish')}</SelectItem>
                        <SelectItem value="kazakh">{t('nationality.english')}</SelectItem>
                        <SelectItem value="mongol">{t('nationality.title')}</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}