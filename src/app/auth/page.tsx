import { FiArrowRight } from "react-icons/fi"
import { FaGoogle } from "react-icons/fa"
import Image from "next/image"
import docUploadSvg from "../../../public/doc-upload.svg"

export default function Auth() {

    return (
        <section className="px-3 pt-[100px] text-center">
            <header className="">
                <h1 className="text-5xl mb-4 text-primary font-bold">Docutell</h1>
                <p className="text-l">Get access to the only document intelligence system you would ever need</p>

                <span className="flex mt-[20px] text-medium text-primary font-bold justify-center items-center">
                    <p>Swipe to learn more!</p>
                    <FiArrowRight />
                </span>
            </header>

            <main className="py-6 mt-[30px] flex flex-col items-center">
                <span className="flex items-center mb-4">
                    (1)
                    <h3 className="font-bold ms-2">Upload your document</h3>
                </span>
                <Image src={docUploadSvg} alt="document upload svg" width={200} height={200} />

                <button className="bg-primary text-white rounded-full fixed bottom-10 font-bold p-3 flex items-center">
                    <FaGoogle/> <span className="ms-3">Continue with Google</span>
                </button>
            </main>
        </section>
    )
}