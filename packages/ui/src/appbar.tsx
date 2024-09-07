
import { useState } from "react";
import { Button } from "./button";
import { MenuIcon } from "./menuIcon";
import { useRouter } from "next/navigation"

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
  const router = useRouter()

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
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

      {/* Full Screen Sidebar */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-500 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}></div>
        <div className="relative w-full  h-full spotlight-bg z-50 p-6 shadow-lg">
          <button
            onClick={toggleSidebar}
            className="absolute top-3 right-9 text-3xl text-white font-semibold"
          >
            &times;
          </button>

          {user ?
            <div className="m-10 ml-5 text-white text-lg font-medium">
              <div className="py-2">
                <button onClick={() => { router.push("/dashboard") }}>Dashboard</button>
              </div>
              <div className="py-2">
                <button onClick={() => { router.push("/transfer") }}>
                  Bank Transfer
                </button >
              </div>
              <div className="py-2 pb-6">
                <button onClick={() => { router.push("/p2p") }}>P2P</button>
              </div>
              <Button onClick={onSignout}>
                Log out
              </Button>
            </div> :

            <div className="m-10 ml-5">
              <Button onClick={onSignin}>
                Log In
              </Button>
            </div>}
        </div>
      </div>
    </>
  );
};

