import { BadgeOptions, BadgeTypes } from "../types/types";

export default function Badge(props: BadgeOptions) {
    return (
        <>
            {
                props.type === BadgeTypes.danger &&
                <span className="absolute top-0 right-0 inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-pink-700/10 ring-inset">{props.text}</span>

            }
        </>
    )
}