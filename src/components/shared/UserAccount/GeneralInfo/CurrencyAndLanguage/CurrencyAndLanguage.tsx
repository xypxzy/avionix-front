import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/src/components/ui/card";
import {Label} from "@/src/components/ui/label";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/src/components/ui/select";
import {Button} from "@/src/components/ui/button";
import {useTranslations} from "next-intl";

export const CurrencyAndLanguage = () => {
    const t = useTranslations('userProfile.generalInfo.currencyAndLanguage')
    return (
        <Card className={`w-1/2 border-[3px]`}>
            <CardHeader className={`rounded-t-sm bg-light_sky p-3`}>
                <CardTitle className={`text-lg font-medium text-background_hero`}>{t('title')}</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-10 pt-5">
                <div className={`w-full space-y-2`}>
                    <Label htmlFor="name">{t('currency')}</Label>
                    <Select>
                        <SelectTrigger className="text-dark_blue">
                            <SelectValue placeholder="$ (USD)"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="$ (USD)">$ (USD)</SelectItem>
                                <SelectItem value="(EUR)">(EUR)</SelectItem>
                                <SelectItem value="(RUB)">(RUB)</SelectItem>
                                <SelectItem value="(KGZ)">(KGZ)</SelectItem>
                                <SelectItem value="(TL)">(TL)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className={`w-full space-y-2`}>
                    <Label htmlFor="name">{t('language')}</Label>
                    <Select>
                        <SelectTrigger className="text-dark_blue">
                            <SelectValue placeholder="English (US)"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="Russian">Russian</SelectItem>
                                <SelectItem value="English">English</SelectItem>
                                <SelectItem value="Kyrgyz">Kyrgyz</SelectItem>
                                <SelectItem value="Turkish">Turkish</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
            <CardFooter className={`pt-0`}>
                <Button>{t('button')}</Button>
            </CardFooter>
        </Card>
    )
}