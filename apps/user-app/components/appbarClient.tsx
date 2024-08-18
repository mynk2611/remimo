"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { Appbar } from "@repo/ui/appbar"
import { useEffect, useState } from "react";
import { Navbar } from "@repo/ui/navbar";

export const AppbarClient = () => {
    const session = useSession();
    const route = useRouter();
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 50 ){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return ()=> {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    return(
    <div className={` transition-all duration-300 ${isScrolled ? 'w-full sm:w-9/12' : 'w-full'}`}>
        <Appbar onSignout={async()=>{
            await signOut({redirect : false});
            route.push("/")
        }} user={session?.data?.user}
           onSignin={async()=>{
            await signIn();
           }}>

            {session?.data?.user ? <Navbar/> : null}
        </Appbar>
    </div>
    )
}