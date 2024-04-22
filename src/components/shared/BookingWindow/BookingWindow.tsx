import React from 'react';
import { Share2, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/src/components/ui/button';
import BookingDetail from '@/src/components/shared/BookingWindow/BookingDetail/BookingDetail';
import {BookingWindowProps} from "@/src/shared/types/topFlightsTypes";

export const BookingWindow: React.FC<BookingWindowProps> = ({ closeBtn, data, locale }) => {
    if (!data) {
        return <div>No data available</div>;
    }

    return (
        <div className={`absolute left-1/2 top-1/2 z-50 flex w-[50%] translate-x-[-50%] translate-y-[-50%] flex-col gap-5 rounded-lg bg-background_hero px-7 py-4 shadow`}>
            <div className={`flex justify-between`}>
                <p>Подробности полёта</p>
                <button onClick={() => closeBtn(false)}>
                    <X />
                </button>
            </div>

            {data.oneWay ? (
                <BookingDetail data={data} type="departure" />
            ) : (
                <>
                    <BookingDetail data={data} type="departure" />
                    <div className={`mx-auto my-4 h-[1px] w-[90%] rounded bg-light_sky`}></div>
                    <BookingDetail data={data} type="return" />
                </>
            )}

            <div className={`flex items-center justify-between`}>
                <Link href={''} className={`flex gap-3 rounded p-2 transition-all duration-500 hover:bg-booking`}>
                    <Share2 />
                    <span>Поделиться</span>
                </Link>
                <div className={`flex items-center gap-5`}>
                    <p>{`${data.currency==='EUR'? `€` :'$'} ${data.tariff.price}`}</p>
                    <Button>Забронировать</Button>
                </div>
            </div>
        </div>
    );
};
