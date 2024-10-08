import Image from "next/image";
import { useState } from "react";
import { Button } from "./button";
import { MenuIcon } from "./menuIcon";
import { Sidebar } from "./Sidebar";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  onSignout: () => void;
  onSignin: () => void;
  children?: React.ReactNode;
}

export const Appbar = ({
  user,
  onSignout,
  children,
  onSignin,
}: AppbarProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="px-5 flex justify-between border-b border-black sm:px-10 bg-customblack py-2 sticky top-0 z-50 w-full">
        <div className="flex flex-grow justify-center ml-20 sm:ml-0 sm:flex-grow-0">
          <div className="text-base flex flex-col justify-center text-white font-semibold mr-6">
            <div className="flex ">
              <div className="sm:w-[3rem] sm:h-[3rem] md:w-[3rem] md:h-[3rem] xl:w-[4rem] xl:h-[3rem] relative overflow-visible">
                <Image
                  src="/logo.png"
                  alt="People enjoying the app"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"

                />
              </div>
              <div className="flex flex-col justify-center">
                Remimo
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            {children}
          </div>
        </div>

        <div>
          <div className="block md:hidden">
            <MenuIcon onClick={toggleSidebar} /> {/* Toggle sidebar on click */}
          </div>
          <div className="hidden md:block md:flex items-center space-x-6">
            <div className="text-zinc-400 text-lg">Hi {user?.name}!</div>
            <div>
              <Button onClick={user ? onSignout : onSignin}>
                {user ? "log out" : "log in"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Sidebar user={user} onSignin={onSignin} onSignout={onSignout} isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

