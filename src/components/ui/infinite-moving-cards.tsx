import {cn} from "@/src/shared/utils/classnames";
import React, {useEffect, useState} from "react";
import {Button} from "@/src/components/ui/button";
import {addAnimation} from "@/src/shared/utils/infinite-moving-card-functions";
import {ISpecialDealsProps} from "@/src/shared/types/specialDealsTypes";
import {useTranslations} from "next-intl";

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
    const [start, setStart] = useState(false);
    useEffect(() => {
        addAnimation(speed, direction, containerRef, scrollerRef, setStart);
    }, [direction, speed]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "absolute left-0 top-0 w-full scroller z-20  max-w-[100%] overflow-hidden",
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
                    <div key={elementId}
                         className="relative flex max-w-[200px] flex-col gap-1 rounded border p-1 sm:max-w-[300px] sm:gap-2 sm:rounded-sm sm:p-2 md:max-w-[400px] md:gap-3 md:rounded-xl md:p-3 lg:max-w-[575px] lg:gap-4 lg:p-4">
                        <div className={`max-h-[100px] sm:max-h-[200px] md:max-h-[250px] lg:max-h-[327px]`}>
                            <img className={`size-full`} src={element.imageUrl} alt={element.flight.to}/>
                        </div>
                        <h4 className="max-w-[180px] truncate text-[12px] sm:max-w-[300px] sm:text-xs md:max-w-[525px] md:text-base ">{element.description}</h4>
                        <div className="mt-auto flex flex-col justify-start gap-0 md:gap-2">
                            <p className="text-[10px] text-red-700 sm:text-caption md:text-xs lg:text-sm">{t('discount')}{element.discount}%</p>
                            <Button
                                variant="link"
                                className="m-0 h-[12px] justify-start p-0 text-[8px] text-foreground underline hover:text-muted-foreground sm:text-caption md:text-xs"
                            >
                                {t('button')}
                            </Button>

                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}