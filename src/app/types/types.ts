export type CarouselItem = {
    label: string,
    imgUrl: string,
    alt: string,
    width?: number,
    height?: number,
    index?:number
};

export type CarouselListProps = {
    items: CarouselItem[]
}