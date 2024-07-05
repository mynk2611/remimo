import { AppbarClient } from "../../components/appbarClient";

 export default function Layout ( {children} : {children : React.ReactNode}): JSX.Element {
    return (
    <div>
        <AppbarClient/>
        <div>
            {children}
        </div>
    </div>
    )
 }