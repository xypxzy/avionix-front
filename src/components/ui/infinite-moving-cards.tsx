import { cn } from "@/src/shared/utils/classnames";
import React, { useEffect, useState } from "react";
import { LinkEnum } from "@/src/shared/utils/route";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { addAnimation } from "@/src/shared/utils/infinite-moving-card-functions";
import { ISpecialDealsProps } from "@/src/shared/types/specialDealsTypes";
import {useTranslations} from "next-intl";
import Image from "next/image";


export const InfiniteMovingCards: React.FC<ISpecialDealsProps> = ({
                                                  items,
                                                  direction = "left",
                                                  speed = "fast",
                                                  pauseOnHover = true,
                                                  className,
                                              }) => {
    const t = useTranslations('SpecialDeals')
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const params = useParams()
    const [start, setStart] = useState(false);

    useEffect(() => {
        addAnimation(speed, direction, containerRef, scrollerRef, setStart);
    }, [direction, speed]);

    useEffect(() => {
        console.log(items)
    }, []);

    return (
        <div className={`absolute top-0 left-0 w-full`}>
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  max-w-[100%] overflow-hidden",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full gap-4 py-4 w-max",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((element, elementId) => (
                    <div key={elementId} className="relative flex flex-col gap-1 rounded border p-1 sm:gap-2 sm:rounded-sm sm:p-2 md:gap-3 md:rounded-xl md:p-3 lg:gap-4 lg:p-4">
                        <div className={`max-w-[522px] max-h-[327px]`}>
                            <img className={`size-full`} src={element.imageUrl} alt={element.flight.to}/>
                        </div>
                        <h4 className="max-w-[180px] text-[12px] sm:text-xs md:max-w-[525px] md:text-base">{element.description}</h4>
                        <div className="flex flex-col gap-0 md:gap-2 mt-auto">
                            <p className="text-[10px] text-red-700 sm:text-caption md:text-xs lg:text-sm">{t('discount')}{element.discount}%</p>
                            <Link href={LinkEnum.Flights}>
                                <Button
                                    variant="link"
                                    className="m-0 h-[12px] p-0 text-[8px] text-foreground underline hover:text-muted-foreground sm:text-caption md:text-xs"
                                >
                                    {t('button')}
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
        </div>
    );
};