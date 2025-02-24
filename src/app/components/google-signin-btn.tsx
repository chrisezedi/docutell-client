"use client"

import { redirect } from "next/navigation";
import { useState } from "react";
import { FaGoogle, FaSpinner } from "react-icons/fa"

export default function GoogleSignIn() {
    const [loading, setLoading] = useState(false);

    const handleGoogleSigninClick = async () => {
        setLoading(true);
        const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/getGoogleAuthUrl`);
        const { url } = await request.json();
        if (url) redirect(url)
        setLoading(false)
    }

    return (
        <button className="bg-primary text-white rounded-full fixed bottom-10 font-bold p-3 flex items-center" onClick={handleGoogleSigninClick}>
            <FaGoogle /> <span className="ms-3">Continue with Google</span>
            {loading && <FaSpinner className="animate-spin ms-3" />}
        </button>
    )
}