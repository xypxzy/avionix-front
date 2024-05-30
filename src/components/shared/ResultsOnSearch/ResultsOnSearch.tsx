import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {IFlight} from "@/src/shared/types/topFlightsTypes";

export const ResultsOnSearch = ({ data, clearSearch }:{data:IFlight[], clearSearch:()=>void}) => {
    const toHour = (min:number) => {
        return `${Math.ceil(min / 60)}`;
    };

    return (
        <div className='absolute z-20 w-full rounded border bg-background_hero py-1'>
            {data?.map((item, index) => (
                <Link
                    href={`/flights/${item.id}`}
                    key={index}
                    className='flex cursor-pointer items-center p-2 hover:bg-slate-300'
                    onClick={clearSearch}
                >
                    <div className='flex w-[80%] items-center gap-2'>
                        <h2>{item.from}</h2>
                        <span>
              <ArrowRight />
            </span>
                        <h2>{item.to}</h2>
                    </div>
                    <div className='flex w-[80%] justify-center gap-2'>
                        {toHour(item.departureTrip.flightDuration)}
                        <p>
                            h.
                        </p>
                    </div>
                    <div className='flex w-[40%] items-center justify-between'>
                        <p>
                            {item.tariff.price}$
                        </p>
                        <p className='rounded-xl border border-light_blue p-1 text-light_blue'>
                            {item.tariff.cabin}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};
