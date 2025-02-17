"use client"

import { useEffect, useMemo, useState } from "react";
import { GoDot, GoDotFill } from "react-icons/go";
import { CarouselListProps } from "../types/types";
import CarouselItem from "./carousel-item";

export default function Carousel({ items }: CarouselListProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselItemsElem = useMemo(() => {
        return items.map((item, index) => {
            if (currentIndex === index) {
               return <CarouselItem key={index} item={{...item,index}}/>
            }
        }
        )
    }, [currentIndex, items])

    const carouselDotsElem = useMemo(() => {
        return items.map((item, index) => <div key={index}>
            {
                currentIndex === index ? <GoDotFill className="text-primary" /> : <GoDot className="text-primary" />
            }
        </div>)
    }, [currentIndex, items])

    useEffect(() => {
        const updateCarouselItemLoop = () => {
            if (currentIndex < items.length - 1) {
                setCurrentIndex(prevIndex => prevIndex + 1)
            } else {
                setCurrentIndex(0)
            }
        }

        const myInterval = setInterval(updateCarouselItemLoop, 2000);

        return () => {
            clearInterval(myInterval);
        };

    }, [items.length, currentIndex]);

    return (
        <div>
            {carouselItemsElem}

            <div className="flex justify-center mt-4">
                {carouselDotsElem}
            </div>
        </div>
    )
}