"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function createp2pTransaction(to: string, amount: number) {
    const session = await getServerSession(authOptions)
    const from = Number(session?.user?.id)

    if (!from) {
        return {
            message: "Error while sending"
        }
    }

    const toUser = await prisma.user.findFirst({
        where: {
            number: to
        }
    })

    if (!toUser) {
        return {
            message: "User not found"
        }
    }

    await prisma.$transaction(async (tx) => {
        const fromBalance = await tx.balance.findFirst({
            where: {
                userId: from
            }
        })

        if(!fromBalance){
            throw new Error("Balance not found")
        }

        if ( fromBalance?.amount < amount) {
            throw new Error("Insufficient balance");
        }

        await tx.balance.update({
            where: {
                userId: from,
            },
            data: {
                amount: {
                    decrement: amount
                }
            }
        })

        await tx.balance.update({
            where: {
                userId: toUser.id,
            },
            data: {
                amount: {
                    increment: amount
                }
            }
        })

        await tx.transaction.create({
            data: {
                amount: amount,
                type: 'Debit',
                fromUserId: from,
                toUserId: toUser.id,
                startDate: new Date(),
                status: 'success'
            }
        });

    
    })

}