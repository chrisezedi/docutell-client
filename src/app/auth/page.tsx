import docUploadSvg from "../../../public/doc-upload.svg"
import keyTopicsSvg from "../../../public/key-topics.svg"
import actionableItemsSvg from "../../../public/actionable-items.svg"

import Carousel from "../components/carousel"
import { CarouselListProps } from "../types/types"
import CarouselItem from "../components/carousel-item"
import GoogleSignIn from "../components/google-signin-btn"

export default function Auth() {
    const carouselItems: CarouselListProps = {
        items: [
            { label: "Upload Documents", imgUrl: docUploadSvg, alt: "document upload svg" },
            { label: "Discover Key Topics", imgUrl: keyTopicsSvg, alt: "key topics svg" },
            { label: "Get Actionable Items", imgUrl: actionableItemsSvg, alt: "actionable items svg", height:200 },
        ]
    }

    return (
        <section className="px-3 pt-[100px] text-center">
            <header className="">
                <h1 className="text-5xl mb-4 text-primary font-bold">Docutell</h1>
                <p className="text-l">Get access to the only document intelligence system you would ever need</p>
            </header>

            <main className="py-6 mt-[30px] flex flex-col items-center">
                <div className="md:hidden">
                    <Carousel items={carouselItems.items} />
                </div>

                <div className="hidden md:block md:flex gap-4">
                    {
                        carouselItems.items.map((item, index) => {
                            return <CarouselItem key={index} item={{ ...item, index }} />
                        })
                    }

                </div>

                <GoogleSignIn/>
            </main>
        </section>
    )
}