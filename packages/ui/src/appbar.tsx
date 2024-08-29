import { Button } from "./button";
import { MenuIcon } from "./menuIcon";

interface AppbarProps {
  user?: {
    name?: string | null;
  },
  // TODO: can u figure out what the type should be here?

  onSignout: () => void;
  onSignin: () => void;
  children?: React.ReactNode;
}

export const Appbar = ({
  user,
  onSignout,
  children,
  onSignin
}: AppbarProps) => {
  return (
    <div className="px-5 flex justify-between border-b border-black sm:px-10 bg-customblack py-2 sticky top-0 z-50 w-full">
      <div className="flex flex-grow justify-center ml-20 sm:ml-0 sm:flex-grow-0">
        <div className="text-base flex flex-col justify-center text-white font-semibold mr-6">
          Remimo
        </div>
        <div className="hidden md:block">
          {children}
        </div>
      </div>

      <div>
        <div className="block md:hidden">
          <MenuIcon />
        </div>
        <div className="hidden md:block md:flex items-center space-x-6 ">
          <div className="text-zinc-400 text-lg ">
            Hi {user?.name}!
          </div>

          <div>
            <Button onClick={user ? onSignout : onSignin}>
              {user ? "log out" : "log in"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
