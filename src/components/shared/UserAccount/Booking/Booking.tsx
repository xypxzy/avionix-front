import {Plane} from "lucide-react";

export const Booking = () => {
    return (
        <div className={`my-60 flex flex-col items-center justify-center gap-10`}>
            <Plane className={`size-20`}/>
            <p className={`text-xl`}>У вас пока нет забронированных рейсов!</p>
        </div>
    )
}