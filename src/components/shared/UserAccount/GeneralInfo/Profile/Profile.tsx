import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/src/components/ui/card";
import {Button} from "@/src/components/ui/button";
import {useUserStore} from "@/src/stores/user.store";
import {useTranslations} from "next-intl";

export const ProfileInfo = () => {
    const t = useTranslations('userProfile.generalInfo.profile')
    const user = useUserStore(state => state.user)
    if(!user){
        return null
    }
    return (
        <Card className={`max-h-[300px] w-full border-[3px]`}>
            <CardHeader className={`rounded-t-sm bg-light_sky p-3`}>
                <CardTitle className={`text-lg font-medium text-background_hero`}>{t('title')}</CardTitle>
            </CardHeader>
            <CardContent className="flex py-6">
                <div className={`w-1/4`}>
                    <img src={`/assets/icons/favicon.png`} className={`max-h-[130px] max-w-[130px]`}
                         alt="profile image"/>
                </div>
                <div className={`flex w-1/2 items-center justify-center`}>
                    <p className={`text-xl font-medium`}>{user.firstName} {user.lastName}</p>
                </div>
                <div className={`flex w-1/3 flex-col items-center justify-center gap-4`}>
                    <Button>{t('upload')}</Button>
                    <Button>{t('remove')}</Button>
                </div>
            </CardContent>
            <CardFooter className={`w-full p-0 px-7`}>
                <Button className={`w-full border bg-transparent text-dark_blue`}>{t('delete')}</Button>
            </CardFooter>
        </Card>
    )
}