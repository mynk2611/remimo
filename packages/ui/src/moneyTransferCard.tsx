export function MoneyTransferCard({ title, children }: {
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="bg-black p-5 z-50  w-full ">
      <div className="text-zinc-200 flex justify-center text-xl font-semibold mb-5">
        {title}
      </div>
      {children}
    </div>
  )
}
