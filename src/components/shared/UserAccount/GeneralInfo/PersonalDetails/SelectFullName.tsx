import {Label} from "@/src/components/ui/label";
import {Input} from "@/src/components/ui/input";
import {useUserStore} from "@/src/stores/user.store";
import {useTranslations} from "next-intl";

export const SelectFullName = () => {
    const t = useTranslations('userProfile.generalInfo.personalDetails')
    const user = useUserStore(state=>state.user)
    if(!user){
        return null
    }
    return (
        <div className={`flex w-full gap-10`}>
            <div className={`w-full space-y-2`}>
                <Label htmlFor="name">{t('firstName')}</Label>
                <Input id="firstName" value={user.firstName} onChange={() => null}/>
            </div>
            <div className={`w-full space-y-2`}>
                <Label htmlFor="name">{t('lastName')}</Label>
                <Input id="lastName" value={user.lastName} onChange={() => null}/>
            </div>
        </div>
    )
}