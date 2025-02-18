'use client'
import skyImg from '@/assets/designsky.png'
import Image from 'next/image'
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer'
import WhatImg from '@/assets/what-I-do.png'
import logo from '@/assets/jodi logo.png'
import tv from '@/assets/tv.png'
import lamp from '@/assets/process-lamp.png'


const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

const ProcessPage = () => {

    return (
        <div className='px-[10px] lg:px-[70px] mb-24 lg:mb-96 mt-[32px]'>
            {/* Heading and image */}
            <div className='flex justify-center gap-[32px]'>
                {/* Heading */}
                {/* Designing heading */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='flex items-center gap-[13px] relative'>
                    <h1 className='font-anton text-[30px] lg:text-[64px] text-olive max-w-[270px] lg:max-w-[422px]'>Designing for the Human Experience</h1>
                    <div className='border-2 border-[#ee3322] rounded-full p-1 flex  items-center justify-center mt-8  absolute right-[105px] bottom-32'>
                        <Image
                            src={logo}
                            width={200}
                            height={200}
                            alt='Lets start image'
                            className='w-[21px] h-[19px]'
                        />
                    </div>
                </motion.div>

                {/* Image */}
                <div className='flex'>
                    {/* TV */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='relative -mr-11'>
                        <Image
                            src={tv}
                            width={1000}
                            height={1000}
                            alt='TV'
                            className='w-[270.81px] lg:w-[361.68px] h-[500px] object-contain'
                        />
                        <h1 className='text-[16px] lg:text-[36px] text-[#ee3322] font-arizonia max-w-[250px] lg:max-w-[100px] text-center absolute top-[40%] lg:top-[44%] -left-4 lg:left-[26%] leading-10 lg:leading-none'>My Aproach</h1>
                    </motion.div>

                    {/* Lamp */}
                    <div className=''>
                        <Image
                            src={lamp}
                            width={1000}
                            height={1000}
                            alt='TV'
                            className='w-[170.81px] lg:w-[203.95px] h-[359.24px] object-contain pb-2'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessPage
