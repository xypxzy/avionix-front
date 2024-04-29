import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/src/components/ui/card";
import {Button} from "@/src/components/ui/button";
import {useTranslations} from "next-intl";
import {SelectNationality} from "@/src/components/shared/UserAccount/GeneralInfo/PersonalDetails/SelectNationality";
import {SelectGender} from "@/src/components/shared/UserAccount/GeneralInfo/PersonalDetails/SelectGender";
import {SelectFullName} from "@/src/components/shared/UserAccount/GeneralInfo/PersonalDetails/SelectFullName";
import {SelectDateOfBirth} from "@/src/components/shared/UserAccount/GeneralInfo/PersonalDetails/SelectDateOfBirth";
import {SelectPassportInfo} from "@/src/components/shared/UserAccount/GeneralInfo/PersonalDetails/SelectPassportInfo";
import {SelectPhoneEmail} from "@/src/components/shared/UserAccount/GeneralInfo/PersonalDetails/SelectPhoneEmail";
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
                        <div className={`flex gap-3 max-w-[352px] w-full`}>
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