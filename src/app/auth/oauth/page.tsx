"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function Oauth() {
    const [error, setError] = useState<string | null>(null);

    const searchParams = useSearchParams();
    const code = searchParams.get("code")!;
    const params = new URLSearchParams({ code }).toString();
    const router = useRouter();

    useEffect(()=>{
        const handleOauthCallback = async () => {
            const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/oauth?${params}`);

            if (request.ok) {
                router.push("/")
            } else {
                setError("Something Went Wrong, we're working on it")
            }
        }
        handleOauthCallback()
    })

    if (error) {
        throw new Error(error)
    }

    return (
        <div className="flex justify-center items-center h-full">
            <FaSpinner size={50} className="animate-spin text-primary mb-4" />
            <p className="ms-4">Processing...</p>
        </div>

    )
}