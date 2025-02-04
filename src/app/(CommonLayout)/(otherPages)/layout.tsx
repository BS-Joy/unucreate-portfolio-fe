
import OtherPagesFooter from "@/components/Shared/OtherPagesFooter"
import OtherPagesNavbar from "@/components/Shared/OtherPagesNavbar"
import { ReactNode } from "react"

const OtherPagesLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className="mx-auto max-w-[1400px]">
                <OtherPagesNavbar />
                {children}
            </div>
            <OtherPagesFooter />
        </div>
    )
}

export default OtherPagesLayout 