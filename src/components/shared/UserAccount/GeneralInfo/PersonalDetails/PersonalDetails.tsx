import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/src/components/ui/card";
import {Button} from "@/src/components/ui/button";
import {useTranslations} from "next-intl";
import {SelectNationality} from "./SelectNationality";
import {SelectGender} from "./SelectGender";
import {SelectFullName} from "./SelectFullName";
import {SelectDateOfBirth} from "./SelectDateOfBirth";
import {SelectPassportInfo} from "./SelectPassportInfo";
import {SelectPhoneEmail} from "./SelectPhoneEmail";
import React from "react";

export const PersonalDetails = () => {
    const t = useTranslations('userProfile.generalInfo.personalDetails')
    return (
        <Card className={`w-full border-[3px]`}>
            <CardHeader className={`rounded-t-sm bg-light_sky p-3`}>
                <CardTitle className={`text-lg font-medium text-background_hero`}>{t('title')}</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-12">
                <div className="w-full space-y-3 pt-5">
                    <SelectFullName/>
                    <div className={`flex gap-10`}>
                        <div className={`flex w-full max-w-[352px] gap-3`}>
                            <SelectNationality/>
                            <SelectGender/>
                        </div>
                        <SelectDateOfBirth/>
                    </div>
                    <SelectPassportInfo/>
                    <SelectPhoneEmail/>
                </div>
            </CardContent>
            <CardFooter className={`pt-0`}>
                <Button>{t('button')}</Button>
            </CardFooter>
        </Card>
    )
}