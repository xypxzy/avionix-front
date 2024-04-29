import {formatDateOfBirth} from "@/src/shared/utils/formatPassportDate";
import {useUserStore} from "@/src/stores/user.store";
import {Label} from "@/src/components/ui/label";
import {Input} from "@/src/components/ui/input";
import {Separator} from "@/src/components/ui/separator";
import {useLocale, useTranslations} from "next-intl";

export const SelectPassportInfo = () => {
    const t = useTranslations('userProfile.generalInfo.personalDetails')
    const locale = useLocale();
    const user = useUserStore(state => state.user);

    if (!user) {
        return null;
    }

    return (
        <div className={`flex gap-10`}>
            <div className={`w-full space-y-2`}>
                <Label htmlFor="passportId">{t('passport')}</Label>
                <Input id="passportId" value={user.passportId} onChange={() => null} />
            </div>
            <div className={`w-full space-y-2`}>
                <Label htmlFor="passportDate">{t('passportExpirationDate')}</Label>
                <div className={`flex`}>
                    <Input className={`rounded-r-none border-r-0 focus:border-none`} id="passportDay" value={formatDateOfBirth(user.dateOfBirth, locale).day} onChange={() => null} />
                    <Separator orientation={'vertical'} className={`h-[40px]`} />
                    <Input className={`rounded-none border-x-0 focus:border-none`} id="passportMonth" value={formatDateOfBirth(user.dateOfBirth, locale).month} onChange={() => null} />
                    <Separator orientation={'vertical'} className={`h-[40px]`} />
                    <Input className={`rounded-l-none border-l-0 focus:border-none`} id="passportYear" value={formatDateOfBirth(user.dateOfBirth, locale).year} onChange={() => null} />
                </div>
            </div>
        </div>
    );
};
