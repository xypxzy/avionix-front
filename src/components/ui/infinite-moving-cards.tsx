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
    useEffect(() => {
        addAnimation(speed, direction, containerRef, scrollerRef, setStart);
    }, [direction, speed]);
    const [start, setStart] = useState(false);
    return (
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
                                <div key={item.id} className="relative flex size-full flex-col rounded border p-3">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img className="h-[327px] w-[522px] rounded"  src={item.image} alt={item.id}/>
                                    <h4 className="max-w-[520px] pt-4 text-[20px]">{item.title}</h4>
                                    <div className="mt-auto pt-4">
                                        <p className="text-[18px] text-red-700">{item.promotion}</p>
                                        <Link href={LinkEnum.Flights}>
                                            <Button
                                                variant="link"
                                                className="pl-0 text-foreground underline hover:text-muted-foreground"
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
    );
};
