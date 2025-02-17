import Image from "next/image";
import { CarouselItem as CarouselItemType } from "../types/types";

type CarouselItemProp = {
    item:CarouselItemType
}
export default function CarouselItem({item}:CarouselItemProp) {
    return <div key={item.index}>
        {item.label}
        <Image src={item.imgUrl} alt={item.alt} width={item?.width || 200} height={item?.height || 200} />
    </div>
}