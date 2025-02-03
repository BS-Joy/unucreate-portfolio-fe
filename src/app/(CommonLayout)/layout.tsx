import Navbar from "@/components/Navbar"
import { ReactNode } from "react"

const CommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="">
            <Navbar />
            {children}
        </div>
    )
}

export default CommonLayout 