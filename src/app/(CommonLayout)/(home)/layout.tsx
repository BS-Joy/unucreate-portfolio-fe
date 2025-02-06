'use client'
import Footer from "@/components/Shared/Footer"
import Navbar from "@/components/Shared/Navbar"
import { ReactNode, useState } from "react"
import { motion } from "framer-motion";

const HomeLayout = ({ children }: { children: ReactNode }) => {
    const [isAnimating, setIsAnimating] = useState(true);
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Rolling Window Animation */}
            {isAnimating && (
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: "100%" }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    onAnimationComplete={() => setIsAnimating(false)}
                    className="absolute top-0 left-0 w-full h-full bg-primary backdrop-blur-sm z-50"
                />
            )}
            <div className="mx-auto max-w-[1400px] overflow-x-hidden">
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default HomeLayout 