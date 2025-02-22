'use client'
import Image from "next/image"
import { motion } from "framer-motion";
import worklogo1 from "@/assets/worklogo2.png"
import worklogo2 from "@/assets/worklogo2.png"
import worklogo3 from "@/assets/worklogo3.png"
import worklogo4 from "@/assets/worklogo4.png"
import worklogo5 from "@/assets/worklogo5.png"
import worklogo6 from "@/assets/worklogo6.png"
import worklogo7 from "@/assets/worklogo7.png"

const work1 = worklogo1
const work2 = worklogo2
const work3 = worklogo3
const work4 = worklogo4
const work5 = worklogo5
const work6 = worklogo6
const work7 = worklogo7

const images = [
    // work1,
    work2,
    work7,
    work6,
    work3,
    work5,
    work4,

];

const WhoIHaveWorked = () => {
    return (
        <div className="mx-auto max-w-[1400px] flex flex-col justify-center items-center pb-3 lg:pb-32 pt-[24px] lg:pt-0">

            <h1 className="text-[32px] lg:text-[48px] font-anton text-secondary text-center pt-[27px] lg:pt-[57px] mb-[24px] lg:mb-[40px] uppercase">Who I have worked with </h1>
            <div className="border-t border-secondary w-[350px] lg:w-[504px]"></div>

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
            <div className="overflow-hidden w-[304px] md:w-[504px] lg:w-[604px] xl:w-full bg-white pb-[24px] lg:pb-[40px] mt-[24px] lg:mt-[40px]">
                <motion.div
                    className="flex items-center gap-[72px]"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 15, // Adjust speed here
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
                            className="w-[115px] lg:w-[131.17px] h-[32px] lg:h-[83.61px] object-contain"
                        />
                    ))}
                </motion.div>
            </div>
            <div className="border-b border-secondary w-[350px] lg:w-[504px]"></div>
        </div>
    )
}

export default WhoIHaveWorked