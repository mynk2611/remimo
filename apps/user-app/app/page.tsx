"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function HomePage() {
    const { data: session, status } = useSession();
    if ( session?.user){
        redirect("/dashboard")
    }
    else {
      return (
        <div>
          <h1>Home Page</h1>
          <button onClick={() => {redirect("/api/auth/sigin")} }>Sign In</button>
        </div>
      )
    }
}
