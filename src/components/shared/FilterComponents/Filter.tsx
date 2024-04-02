import {Notification} from "@/src/components/shared/FilterComponents/Notification/Notification";
import {Bagage} from "@/src/components/shared/FilterComponents/Bagage/Bagage";
import {Transplants} from "@/src/components/shared/FilterComponents/Transplants/Transplants";
import {Transporters} from "@/src/components/shared/FilterComponents/Transporters/Transporters";
import {Time} from "@/src/components/shared/FilterComponents/Time/Time";
import {Duration} from "@/src/components/shared/FilterComponents/Time/FlyDuration/Duration";

export const Filter = () => {
    return(
        <div className={`pr-10`}>
            <Notification/>
            <Bagage/>
            <Transplants/>
            <Transporters/>
            <Time/>
            <Duration/>
        </div>
    )
}