import {PersonalDetails} from "@/src/components/shared/UserAccount/GeneralInfo/PersonalDetails/PersonalDetails";
import {ProfileInfo} from "@/src/components/shared/UserAccount/GeneralInfo/Profile/Profile";
import {
    CurrencyAndLanguage
} from "@/src/components/shared/UserAccount/GeneralInfo/CurrencyAndLanguage/CurrencyAndLanguage";

export const GeneralInfo = () => {
    return (
        <div>
            <div className={`flex gap-10`}>
                <PersonalDetails/>
                <ProfileInfo/>
            </div>
            <div className={`mt-10`}>
                <CurrencyAndLanguage/>
            </div>
        </div>
    )
}