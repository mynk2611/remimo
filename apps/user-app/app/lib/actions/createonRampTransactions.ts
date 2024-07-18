"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function  createonRampTransactions(provider : string, amount : number){
    const session = await getServerSession(authOptions);

    if(!session?.user || !session.user?.id){
        return {
            message : "Unauthorized",
        };
    }

    const token = (Math.random() * 1000).toString();
    
    await prisma.onRamp.create({
        data : {
            startDate : new Date(),
            userId : Number(session?.user?.id),
            amount : amount * 100,
            provider,
            token : token,
            status : "pending"
        }
    })

    return {
        message : "Transaction Created",
    }
}