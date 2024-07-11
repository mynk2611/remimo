export function TransferCard({title, children}: {title: string, children: React.ReactNode}){
    return(
        <div className='rounded-2xl p-4 shadow-[3px_3px_18px_-4px_rgb(228,228,231)] '>
            <div className="text-white font-semibold text-lg mb-6 p-5 w-full border-b border-zinc-500 pb-4">
                {title}
            </div>
            {children}
        </div>
    )
}