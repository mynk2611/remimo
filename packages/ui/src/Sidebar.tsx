import { useRouter } from "next/navigation"
import { Button } from "./button";

interface SidebarProp {
  user?: {
    name?: string | null;
  };
  onSignout: () => void;
  onSignin: () => void;
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Sidebar({ user, onSignout, onSignin, isSidebarOpen, setSidebarOpen }: SidebarProp) {
  const router = useRouter()

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
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
  )
}
