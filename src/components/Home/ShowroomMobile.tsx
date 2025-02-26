'use client'
import showroom1 from '@/assets/showroom1.png'
import { motion } from 'motion/react'
import Image from 'next/image'

const ShowroomMobile = () => {
    return (
        <div className=''>
            {/* <Image
                src={showroom1}
                width={1200}
                height={1200}
                alt='Lets start image'
                className='w-[375px] h-[379px] object-cover'
            /> */}
            <div
                className="w-full h-[379px] bg-cover bg-center flex flex-col justify-between items-center"
                style={{ backgroundImage: `url(${showroom1.src})` }}
            >
                {/* Centered Motion Div */}
                <div className="flex-grow pt-16 flex items-center justify-center w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-[254px] h-[140px] bg-primary flex flex-col items-center justify-center mx-auto gap-[8px] pt-2"
                    >
                        <h3 className='text-[20px] text-[#ee3322] font-abel uppercase'>Coming Soon</h3>
                        <h1 className='text-olive text-[48px] font-anton uppercase'>showroom</h1>
                    </motion.div>
                </div>

                {/* Bottom Button Section */}
                <div className='relative flex items-end mb-[31px]'>
                    <button className="w-[158px] lg:w-[260px] h-[48px] lg:h-[80px] bg-secondary rounded-[40px] flex items-center justify-center uppercase font-anton text-[#333333] text-[16px] z-10 relative">
                        Curious?
                    </button>
                    <button className='w-[158px] lg:w-[260px] h-[48px] lg:h-[80px] bg-primary rounded-[40px] flex items-center justify-center uppercase font-anton text-olive text-[16px] absolute -bottom-[6px] left-[6px]'>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ShowroomMobile