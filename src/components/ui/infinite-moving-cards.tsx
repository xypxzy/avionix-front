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
                                <div key={item.id} className="relative flex size-full flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 rounded sm:rounded-sm md:rounded-xl border p-1 sm:p-2 md:p-3 lg:p-4">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img className="max-h-[107px] sm:max-h-[170px] md:max-h-[257px] lg:max-h-[327px] max-w-[180px] sm:max-w-[322px] md:max-w-[452px] lg:max-w-[542px] size-full rounded-xs"  src={`assets/specialDeals/${item.image}`} alt={item.title}/>
                                    <h4 className="max-w-[180px] md:max-w-[525px] text-[12px] sm:text-xs md:text-base">{item.title}</h4>
                                    <div className="flex flex-col gap-0 md:gap-2">
                                        <p className="text-[10px] sm:text-caption md:text-xs lg:text-sm text-red-700">{item.promotion}</p>
                                        <Link href={LinkEnum.Flights} className={``}>
                                            <Button
                                                variant="link"
                                                className="text-[8px] h-[12px] sm:text-caption md:text-xs p-0 m-0 text-foreground underline hover:text-muted-foreground"
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
