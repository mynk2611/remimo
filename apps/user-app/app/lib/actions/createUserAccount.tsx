"use server";
import prisma from "@repo/db/client";

export async function CreateUserAccount(name : string, email : string, phoneNumber:string,  hasedPassword : string){
    try{
        
        const user = await prisma.user.create({
            data : {
                name,
                email,
                number : phoneNumber,
                password : hasedPassword,
                balance : {
                    create : {
                        amount  : 0,
                        locked : 0
                    }
                }
            },
            include : {
                balance : true
            }
        })
        console.log("hi there")

        return{
            message : "User account created sussessfully",
        }

    }catch(error){
        console.error("Error while creating user account", error);
        throw error;
    }
}