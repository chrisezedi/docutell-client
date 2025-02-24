'use client'

import { useRouter } from "next/navigation"
import { BiError } from "react-icons/bi"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {

  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <BiError size={50} color="red"/>
      <h2 className="my-4">{error.message}</h2>
      <div className="flex gap-4">
      <button className="bg-blue-500/10 text-primary rounded-full font-bold py-2 px-4"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>

      <button className="border-2 rounded-full font-bold py-2 px-4" onClick={() => router.push("/auth")}>Back to Signin</button>
      </div>
    </div>
  )
}