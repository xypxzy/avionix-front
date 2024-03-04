import React, { RefObject, SetStateAction } from "react";

export function addAnimation(speed: string, direction: string, containerRef: RefObject<HTMLDivElement>, scrollerRef: RefObject<HTMLUListElement>, setStart: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }) {
    if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            if (scrollerRef.current) {
                scrollerRef.current.appendChild(duplicatedItem);
            }
        });

        getDirection(containerRef, direction);
        getSpeed(speed, containerRef);
        setStart(true);
    }
}

const getSpeed = (speed: string, containerRef: React.RefObject<HTMLDivElement>) => {
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

const getDirection = (containerRef: React.RefObject<HTMLDivElement>, direction: string) => {
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