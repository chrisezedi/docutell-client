import { FaSpinner } from "react-icons/fa";


export default function Loading() {
    return <div className="flex justify-center items-center h-full">
        <FaSpinner size={50} className="animate-spin text-primary mb-4" />
        <p className="ms-4">Processing...</p>
    </div>
}