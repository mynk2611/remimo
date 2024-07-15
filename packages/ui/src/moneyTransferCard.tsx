"use client"
import { TextInput } from "./textInput"

export function MoneyTransferCard ({title, children}: {
    title : string
    children?: React.ReactNode
}){
    return(
    <div className="bg-black p-5  w-full ">
            <div className="text-zinc-200 flex justify-center text-xl font-semibold">
                    {title}
            </div>
            {children}
    </div>
    )
}