"use client";

import { cn } from "@/src/shared/utils/classnames";
import React, { useEffect, useState } from "react";
import {LinkEnum} from "@/src/shared/utils/route";
import {Button} from "@/src/components/ui/button";
import Link from "next/link";
import {useParams} from "next/navigation";
import {addAnimation} from "@/src/shared/utils/infinite-moving-card-functions";

export const InfiniteMovingCards = ({
                                        items,
                                        direction = "left",
                                        speed = "fast",
                                        pauseOnHover = true,
                                        className,
                                    }: {
    items: {
        item: {
            id: string;
            image: string;
            title: string;
            promotion: string;
            bron: string;
            lan: string;
        }[];
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const params = useParams()
    const [start, setStart] = useState(false);
    useEffect(() => {
        addAnimation(speed, direction, containerRef, scrollerRef, setStart);
    }, [direction, speed]);
    return (
        <div>
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
                    <div key={elementId}>
                        {element.item
                            .filter((el) => params.locale === el.lan.toLowerCase())
                            .map((item) => (
                                <div key={item.id} className="relative flex size-full flex-col gap-1 rounded border p-1 sm:gap-2 sm:rounded-sm sm:p-2 md:gap-3 md:rounded-xl md:p-3 lg:gap-4 lg:p-4">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img className="size-full max-h-[107px] max-w-[180px] rounded-xs sm:max-h-[170px] sm:max-w-[322px] md:max-h-[257px] md:max-w-[452px] lg:max-h-[327px] lg:max-w-[542px]"  src={`assets/specialDeals/${item.image}`} alt={item.title}/>
                                    <h4 className="max-w-[180px] text-[12px] sm:text-xs md:max-w-[525px] md:text-base">{item.title}</h4>
                                    <div className="flex flex-col gap-0 md:gap-2">
                                        <p className="text-[10px] text-red-700 sm:text-caption md:text-xs lg:text-sm">{item.promotion}</p>
                                        <Link href={LinkEnum.Flights}>
                                            <Button
                                                variant="link"
                                                className="m-0 h-[12px] p-0 text-[8px] text-foreground underline hover:text-muted-foreground sm:text-caption md:text-xs"
                                            >
                                                {item.bron}
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                    </div>
                ))}
            </ul>
        </div>
        </div>
    );
};
