import { NextResponse } from "next/server"
import db from "@repo/db/client";


export const GET = async () => {
    await db.user.create({
        data: {
            email: "aasfsd",
            name: "adsads",
            number : "12323",
            password: "asdasd",
        }
    })
    console.log("hi there")
    return NextResponse.json({
        message: "hi there"
    })
}