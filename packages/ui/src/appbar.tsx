import { AppbarItem } from "./appbarItem";
import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    // TODO: can u figure out what the type should be here?

    onSignout: any
}

export const Appbar = ({
    user,
    onSignout
}: AppbarProps) => {
    return (
        <div className="flex justify-between border-b px-10 bg-customblack py-2">
            <div className="flex">
                <div className="text-base flex flex-col justify-center text-white font-semibold">
                    Remimo
                </div>

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

            <div>
                <div className="flex flex-col justify-center pt-2">
                    <Button onClick={onSignout}>
                        Log out
                    </Button>
                </div>
            </div>
        </div>
    )
}