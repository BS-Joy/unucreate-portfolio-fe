'use client'
import Image from "next/image"
import { motion } from "framer-motion";
import worklogo1 from "@/assets/worklogo2.png"
import worklogo2 from "@/assets/worklogo2.png"
import worklogo3 from "@/assets/worklogo3.png"
import worklogo4 from "@/assets/worklogo4.png"
import worklogo5 from "@/assets/worklogo5.png"

const work1 = worklogo1
const work2 = worklogo2
const work3 = worklogo3
const work4 = worklogo4
const work5 = worklogo5

const images = [
    work1,
    work2,
    work3,
    work4,
    work5
];

const WhoIHaveWorked = () => {
    return (
        <div className="mx-auto max-w-[884.15px] flex flex-col justify-center items-center pb-32">
            <div className="border-t border-secondary w-[304px] lg:w-[504px]"></div>
            <h1 className="text-3xl lg:text-[48px] font-anton text-secondary text-center pt-[27px] lg:pt-[57px] mb-[80px]">Who I have worked with </h1>

            {/* <div className="grid grid-cols-2 lg:grid-cols-6 items-center gap-[29.65px] lg:gap-[49.65px] pb-[60px] lg:pb-[110px] mt-6 lg:mt-0">
                <Image
                    src={worklogo1}
                    width={200}
                    height={200}
                    alt='Jodi Logo Image'
                    className='w-[91.17px] lg:w-[131.17px] h-[43.61px] lg:h-[83.61px] object-contain'
                />
                <Image
                    src={worklogo2}
                    width={200}
                    height={200}
                    alt='Jodi Logo Image'
                    className='w-[91.17px] lg:w-[131.17px] h-[43.61px] lg:h-[83.61px] object-contain'
                />
                <Image
                    src={worklogo3}
                    width={200}
                    height={200}
                    alt='Jodi Logo Image'
                    className='w-[91.17px] lg:w-[131.17px] h-[43.61px] lg:h-[83.61px] object-contain'
                />
                <Image
                    src={worklogo4}
                    width={200}
                    height={200}
                    alt='Jodi Logo Image'
                    className='w-[91.17px] lg:w-[131.17px] h-[43.61px] lg:h-[83.61px] object-contain'
                />
                <Image
                    src={worklogo5}
                    width={200}
                    height={200}
                    alt='Jodi Logo Image'
                    className='w-[91.17px] lg:w-[131.17px] h-[43.61px] lg:h-[83.61px] object-contain'
                />
                <Image
                    src={worklogo4}
                    width={200}
                    height={200}
                    alt='Jodi Logo Image'
                    className='w-[91.17px] lg:w-[131.17px] h-[43.61px] lg:h-[83.61px] object-contain'
                />
            </div> */}
            <div className="overflow-hidden w-full bg-white py-10 pb-[60px] lg:pb-[110px] mt-6 lg:mt-0">
                <motion.div
                    className="flex items-center gap-10"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 10, // Adjust speed here
                        ease: "linear",
                    }}
                >
                    {[...images, ...images].map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            width={200}
                            height={200}
                            alt={`Logo ${index + 1}`}
                            className="w-[91.17px] lg:w-[131.17px] h-[43.61px] lg:h-[83.61px] object-contain"
                        />
                    ))}
                </motion.div>
            </div>
            <div className="border-b border-secondary w-[304px] lg:w-[504px]"></div>
        </div>
    )
}

export default WhoIHaveWorked