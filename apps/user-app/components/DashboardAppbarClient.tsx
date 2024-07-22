import { AppbarClient } from "./appbarClient";

export function DashboardAppbarClient (){
    return (
        <div className="flex justify-center ">
        <div className="w-10/12 flex justify-center mt-3 fixed top-0 z-50">
          <AppbarClient />
        </div>
      </div>
    )
}