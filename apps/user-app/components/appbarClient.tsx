"use client"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { Appbar } from "@repo/ui/appbar"

export const AppbarClient = () => {
    const session = useSession();
    const route = useRouter();

    return(
    <div className="w-full">
        <Appbar onSignout={async()=>{
            await signOut({redirect : false});
            route.push("/")
        }} user={session?.data?.user}/>
    </div>
    )
}