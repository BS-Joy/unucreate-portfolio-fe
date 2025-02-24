'use client'
import designing3 from '@/assets/designing3.png';
import designing2 from '@/assets/designing2.png';
import Image from 'next/image';
import skyImg from '@/assets/lets-start.png'
import { motion } from "motion/react"

const InnovationMobile = () => {
    return (
        <div className="pb-[49px] px-[20px] md:px-[49px] pt-5">
            <div
                className="w-full lg:w-[860px] h-[110px] lg:h-[271px] bg-cover bg-center flex flex-col justify-center relative"
                style={{ backgroundImage: `url(${skyImg.src})` }} // Set the sky image as background
            >
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='text-[24px] leading-[28px] font-anton  text-center'>Transforming Ideas into Immersive Experiences </motion.h1>

            </div>
            <div className="pb-[40px]">
                <div className='flex items-end md:items-center justify-between -space-x-4'>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="font-anton text-[24px] leading-[32px] tracking-widest uppercase ">Innovation Leadership </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='flex items-end relative -space-x-6'>
                        <Image
                            src={designing3}
                            width={200}
                            height={200}
                            alt='Jodi Logo Image'
                            className='w-[70px] h-[80px] md:h-[60px]  object-contain '
                        />
                        <Image
                            src={designing2}
                            width={200}
                            height={200}
                            alt='Jodi Logo Image'
                            className='w-[100px] h-[120px] md:h-[90px]  object-contain pb-3'
                        />
                    </motion.div>
                </div>
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="font-abel text-[16px] leading-[32px] tracking-widest text-[#202020] pt-[14px] md:pt-0 md:max-w-md lg:max-w-none">I help companies come up with fresh ideas to reimagine products, invigorate processes, and transform market strategies.</motion.p>
            </div>
            <div className="pb-[40px]">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }} className="font-anton text-[24px] leading-[32px] tracking-widest uppercase pb-[14px]">User Research & Design: </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }} className="font-abel text-[16px] leading-[32px] tracking-widest text-[#202020]">I conduct comprehensive user research to uncover deep insights into customer behaviors, needs, and pain points. These insights fuel my design process, enabling me to craft intuitive and engaging digital and physical experiences that resonate with users.</motion.p>
            </div>
            <div className="">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }} className="font-anton text-[24px] leading-[32px] tracking-widest uppercase pb-[14px]">Production </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }} className="font-abel text-[16px] leading-[32px] tracking-widest text-[#202020]">I manage creative projects from ideation through execution, ensuring every element is delivered with precision and creativity. My hands-on approach and ability to coordinate cross-functional teams bring innovative ideas to life, producing impactful results that captivate audiences.</motion.p>
            </div>
        </div>
    )
}

export default InnovationMobile