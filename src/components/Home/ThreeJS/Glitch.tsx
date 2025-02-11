'use client'
import { motion } from "framer-motion";

export default function Glitch() {
    return (
        <motion.div
            className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white text-4xl font-bold"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
        // onAnimationComplete={onGlitchEnd}
        >
            <div className="glitch">⚡ TV Glitch Effect ⚡</div>
        </motion.div>
    );
}
