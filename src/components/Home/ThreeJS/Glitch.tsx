import { motion } from "framer-motion";

const GlitchEffect = ({ onGlitchEnd }: { onGlitchEnd: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            onAnimationComplete={onGlitchEnd}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 lg:w-96 lg:h-48 overflow-hidden">

            {/* Glitch Layers */}
            <div className="w-full h-full bg-blue-500 absolute mix-blend-screen opacity-40 animate-glitch"></div>
            <div className="w-full h-full bg-red-500 absolute mix-blend-difference animate-glitch"></div>
            <div className="w-full h-full bg-pink-500 absolute mix-blend-overlay animate-glitch"></div>
        </motion.div>
    );
};

export default GlitchEffect;
