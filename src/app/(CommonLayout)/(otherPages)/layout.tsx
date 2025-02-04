import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { ReactNode } from "react"

const OtherPagesLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className="mx-auto max-w-[1400px]">
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default OtherPagesLayout 