import { useRouter } from "next/navigation";

export function AppbarItem({ title, href }: { title: string, href: string }) {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => { router.push(href) }}
        type="button"
        className="text-base text-slate-100 bg-customblack hover:bg-zinc-800 hover:border-t border-zinc-600 my-2 py-1 px-3 rounded-xl">
        {title}
      </button>
    </div>
  )
}
