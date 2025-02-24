export interface CarouselItem {
    label: string,
    imgUrl: string,
    alt: string,
    width?: number,
    height?: number,
    index?:number
};

export interface CarouselListProps {
    items: CarouselItem[]
}

export enum BadgeTypes {
    danger="danger"
}
export interface BadgeOptions {
    type:BadgeTypes;
    text:string;
}