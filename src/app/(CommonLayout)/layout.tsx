import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { ReactNode } from "react"

const CommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default CommonLayout 