"use client";

import { cn } from "@/src/utils/cn";
import React, { useEffect, useState } from "react";
import {LinkEnum} from "@/src/utils/route";
import {Button} from "@/src/components/ui/button";
import Link from "next/link";
import {useParams} from "next/navigation";

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

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    const params = useParams()
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
                            .map((item, itemId) => (
                                <div key={item.id} className="w-full h-full flex flex-col border rounded p-3 relative">
                                    <img className="w-[522px] h-[327px] rounded"  src={item.image} alt={item.id}/>
                                    <h4 className="text-[20px] max-w-[520px] pt-4">{item.title}</h4>
                                    <div className="mt-auto pt-4">
                                        <p className="text-[18px] text-red-700">{item.promotion}</p>
                                        <Link href={LinkEnum.Flights}>
                                            <Button
                                                variant="link"
                                                className="text-foreground underline hover:text-muted-foreground pl-0"
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
