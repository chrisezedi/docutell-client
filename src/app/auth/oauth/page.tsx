"use client"

import Loading from "@/app/loading";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Oauth() {
    const [error, setError] = useState<string | null>(null);

    const searchParams = useSearchParams();
    const code = searchParams.get("code")!;
    const params = new URLSearchParams({ code }).toString();
    const router = useRouter();

    useEffect(() => {
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
        <Suspense fallback={<Loading />}/>
    )
}