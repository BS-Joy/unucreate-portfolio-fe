'use client'
import silverBall from '@/assets/chatBall.png'
import Image from 'next/image'
import DoubleButton from '../Shared/DoubleButton'
import { motion } from 'motion/react'
import arrow from '@/assets/lets-chat-arrow.png'

const LetsChat = () => {
    return (
        <div className='mx-auto max-w-[1298px] flex flex-col lg:flex-row items-center mb-[78px] gap-[90px] relative'>
            <motion.h1
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='uppercase text-olive font-anton text-[90px] lg:text-[128px] max-w-[640px] leading-[200px]'>Let's Chat</motion.h1>
            <motion.div initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }} className='absolute top-20 left-80'>
                <Image
                    src={arrow}
                    width={600}
                    height={600}
                    alt='arrow'
                    className='w-[273px] h-[138px]'
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='relative'>
                <Image
                    src={silverBall}
                    width={1000}
                    height={1000}
                    alt='Lets start image'
                    className='w-[350px] h-[400px] lg:w-[640px] lg:h-[640px] object-contain'
                />
                <div className='absolute top-[12%] lg:top-[22%] left-[60px] lg:left-[110px]'>
                    <div className='flex items-center justify-center flex-col gap-[20px]'>
                        <input type="text"
                            placeholder='NAME'
                            className='w-[230px] lg:w-[410px] h-[40px] lg:h-[60px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold'
                        />
                        <input type="text"
                            placeholder='EMAIL'
                            className='w-[230px] lg:w-[410px] h-[40px] lg:h-[60px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold'
                        />
                        <textarea
                            placeholder='MESSAGE'
                            className='w-[230px] lg:w-[410px] h-[100px] lg:h-[160px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold pt-[20px]'
                        />
                        <div className=''>
                            <DoubleButton text='Send Message' bgColor='bg-secondary' textColor='text-olive' />
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}

export default LetsChat