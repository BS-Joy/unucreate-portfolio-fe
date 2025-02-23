'use client'
import skyImg from '@/assets/designsky.png'
import { motion } from "motion/react"
import projectImg from '@/assets/myProjects.png'
import Image from 'next/image'
import { useRouter } from "next/navigation";
import showroom1 from '@/assets/showroom1.png'
import showroom2 from '@/assets/showroom2.png'


const ShowroomPage = () => {

    return (
        <div className=' lg:px-[70px] mt-14 mb-12'>
            {/* Upper image and heading */}
            <div className='px-7 lg:px-0'>
                <div
                    className="w-full md:w-full mx-auto lg:w-full h-[90px] md:h-[100px] lg:h-[200px] bg-cover bg-center flex items-center justify-center rounded-[20px] px-5 xl:px-7"
                    style={{ backgroundImage: `url(${skyImg.src})` }} // Set the sky image as background
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-full md:w-[840px] lg:w-[920px] xl:w-[1200px] h-[54px] lg:h-[144px] rounded-[10px] lg:rounded-[20px] bg-primary flex items-center justify-center mx-auto"
                    >
                        <h1 className="text-[20px] md:text-xl lg:text-5xl xl:text-[75px] text-olive font-anton text-center uppercase">
                            Showroom
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Content and images */}
            <div className="flex flex-col lg:flex-row pt-[30px] lg:pt-[80px]">
                {/* Left */}
                <div className='flex-1 relative'>
                    <Image
                        src={showroom1}
                        width={1200}
                        height={1200}
                        alt='Lets start image'
                        className='w-full h-[500px] lg:h-[1054px] object-cover'
                    />

                    {/* Green are */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='w-[380px] lg:w-[440px] xl:w-[510px] h-[242px] bg-primary absolute left-12 sm:left-[23%] md:left-[30%] lg:left-0 top-[25%] lg:top-[20%] flex flex-col items-center justify-center gap-5 uppercase'>
                        <h3 className='text-[24px] text-[#ee3322] font-abel'>Art Gallery</h3>
                        <h1 className='text-olive text-[40px] lg:text-[90px] font-anton'>showroom</h1>
                    </motion.div>
                </div>

                {/* Right */}
                <div className='flex-1'>
                    <div
                        className="w-full h-[1054px] bg-cover bg-center flex flex-col items-center justify-center relative"
                        style={{ backgroundImage: `url(${skyImg.src})` }} // Set the sky image as background
                    >
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className='font-abel text-sm md:text-[24px] absolute top-12 left-16 uppercase'>Art Gallery</motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }} className='font-abel text-sm md:text-[24px] absolute top-40 left-40 uppercase'>Art Gallery</motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }} className='font-abel text-sm md:text-[24px] absolute top-28 left-[390px] md:left-[450px] uppercase'>Art Gallery</motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }} className='font-abel text-sm md:text-[24px] absolute top-64 left-[400px] md:left-[420px] uppercase'>Art Gallery</motion.h1>
                        <div

                            className=""
                        >
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <Image
                                    src={showroom2}
                                    width={1200}
                                    height={1200}
                                    alt='Lets start image'
                                    className='w-[405.16px] h-[270px] mb-[46px]'
                                />
                            </motion.div>

                            {/* Button */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className=' flex items-center justify-center'>
                                <div className='relative'>
                                    <button className={`w-[180px] lg:w-[188px] h-[60px] lg:h-[76px] bg-secondary rounded-[40px] flex items-center justify-center uppercase font-anton text-[#333333] text-[20px] z-10 relative font-bold`}>
                                        Curious!
                                    </button>
                                    <button className='w-[180px] lg:w-[188px] h-[60px] lg:h-[76px] bg-primary rounded-[40px] flex items-center justify-center uppercase font-anton text-olive text-[20px] absolute -bottom-2 left-2'>

                                    </button>
                                </div>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }} className='font-abel text-sm md:text-[24px] absolute bottom-44 left-28 uppercase'>Art Gallery</motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }} className='font-abel text-sm md:text-[24px] absolute bottom-12 left-[400px] md:left-[430px] uppercase'>Art Gallery</motion.h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowroomPage
