import { AppbarItem } from "./appbarItem";
import { Button } from "./button";
import { Navbar } from "./navbar";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    // TODO: can u figure out what the type should be here?

    onSignout: ()=>void;
    onSignin : ()=>void;
    children?: React.ReactNode;
}

export const Appbar = ({
    user,
    onSignout,
    children,
    onSignin
}: AppbarProps) => {
    return (
        <div className="flex justify-between border-b border-black px-10 bg-customblack py-2 sticky top-0 z-50 w-full">
            <div className="flex">
                <div className="text-base flex flex-col justify-center text-white font-semibold mr-6">
                    Remimo
                </div>
                {children}
            </div>

            <div>
                <div className="flex flex-col justify-center ">
                    <Button onClick={ user ? onSignout : onSignin }>
                        {user ? "log out" : "Signup"}
                    </Button>
                </div>
            </div>
        </div>
    )
}