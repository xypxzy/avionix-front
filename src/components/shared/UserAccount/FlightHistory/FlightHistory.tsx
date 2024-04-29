import {Trash2} from "lucide-react";

export const FlightHistory = () => {
    return (
        <div className={`my-60 flex flex-col items-center justify-center gap-10`}>
            <Trash2 className={`size-20`}/>
            <p className={`text-xl`}>History is empty!</p>
        </div>
    )
}