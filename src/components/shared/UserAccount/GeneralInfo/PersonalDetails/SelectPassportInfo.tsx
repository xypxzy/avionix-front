import {useUserStore} from "@/src/stores/user.store";
import {Label} from "@/src/components/ui/label";
import {Input} from "@/src/components/ui/input";
import {Separator} from "@/src/components/ui/separator";
import {useLocale, useTranslations} from "next-intl";
import {format, parseISO} from "date-fns";
import {enGB, ru, tr} from "date-fns/locale";

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
                    <Input id="passportId" value={user.passportId} onChange={() => null}/>
                </div>
                <div className={`w-full space-y-2`}>
                    <Label htmlFor="passportDate">{t('passportExpirationDate')}</Label>
                    <div className={`flex`}>
                        <Input className={`rounded-r-none border-r-0 focus:border-none`} id="passportDay"
                               value={format(parseISO(user.dateOfBirth), 'd')} onChange={() => null}/>
                        <Separator orientation={'vertical'} className={`h-[40px]`}/>
                        <Input className={`rounded-none border-x-0 focus:border-none`} id="passportMonth"
                               value={format(parseISO(user.dateOfBirth), 'LLL', {locale: locale === 'ru' ? ru : locale === 'en' ? enGB : locale === 'tr' ? tr : ru})}
                               onChange={() => null}/>
                        <Separator orientation={'vertical'} className={`h-[40px]`}/>
                        <Input className={`rounded-l-none border-l-0 focus:border-none`} id="passportYear"
                               value={format(parseISO(user.dateOfBirth), 'yyyy')} onChange={() => null}/>
                    </div>
                </div>
            </div>
    );
};
