import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { CreateUserAccount } from "../../lib/actions/createUserAccount";

export const POST = async (req : NextRequest) =>{
    try {
        const { name, email, phoneNumber, password } = await req.json();

        const existingUser = await prisma.user.findFirst({
            where : {
                number : phoneNumber
            }
        })
        if(existingUser){
            return NextResponse.json({
                message : "Phone number already exists"
            },{status : 400})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await CreateUserAccount(name, email, phoneNumber, hashedPassword);
        
        
        return NextResponse.json({
            message : "User account created successfully",
            data : {
                ...newUser
            }
        }, {status : 200})

    }catch(err){
        return NextResponse.json({
            message : "Error",
            err
        },{status : 500})
    }
}