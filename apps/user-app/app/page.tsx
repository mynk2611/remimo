"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/dashboard");
        }
    }, [status, router]);

    if (status === "loading") {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1>Home Page</h1>
                <button onClick={() => router.push("/signup")}>Signup</button>
                <br />
                <button onClick={() => router.push("/api/auth/signin")}>Signin</button>
            </div>
        );
    }
}
