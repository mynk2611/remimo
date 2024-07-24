import { AppbarItem } from "./appbarItem";

export function Navbar() {
    return (
        <div className="flex">
            <div className=" flex flex-col justify-center pl-4">
                <AppbarItem title="Dashboard" href="/dashboard" />
            </div>

            <div className=" flex flex-col justify-center pl-4">
                <AppbarItem title="Transfer" href="/transfer" />
            </div>

            <div className=" flex flex-col justify-center pl-4">
                <AppbarItem title="P2P" href="/p2p" />
            </div>
        </div>
    )
}