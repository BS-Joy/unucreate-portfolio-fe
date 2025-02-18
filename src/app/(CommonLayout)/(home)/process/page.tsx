'use client'
import skyImg from '@/assets/designsky.png'
import Image from 'next/image'
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer'
import WhatImg from '@/assets/what-I-do.png'
import logo from '@/assets/jodi logo.png'
import tv from '@/assets/tv.png'
import lamp from '@/assets/process-lamp.png'
import { useState } from 'react'


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
            <div className='flex justify-center gap-[32px] mb-[60px]'>
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

            {/* Paragraph */}
            <div className='flex items-center justify-center'>
                <h3 className='font-abel text-[32px] leading-[39px] max-w-[1028px]'>My approach invites curiosity: it begins with empathetic data insights that reveal the nuanced human stories behind every interaction, evolves through playful experimentation that encourages creative exploration without judgment, and culminates in innovative design solutions that transform challenges into user-centered experiences, delighting and engaging at every touchpoint. I enjoy fostering this process, where discovery and creativity are at the heart of every solution.</h3>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[43px] mt-[80px]">
                <FlipCard title="Insight" bgColor="bg-lightBlue" textColor="text-[#333333]" />
                <FlipCard title="Play" bgColor="bg-brown" textColor="text-white" />
                <FlipCard title="Innovation" bgColor="bg-primary" textColor="text-[#333333]" />
            </div>
        </div>
    )
}

export default ProcessPage


const FlipCard = ({ title, bgColor, textColor }: { title: string; bgColor: string, textColor: string }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="w-[344px] h-[344px] perspective-1000"
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
        >
            <motion.div
                className="relative w-full h-full transition-transform duration-500"
                animate={{ rotateY: flipped ? 180 : 0 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Side */}
                <div
                    className={`absolute w-full h-full flex flex-col items-center justify-center gap-[32px] pl-[5px] rounded-lg ${bgColor}`}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <h1 className={`font-anton text-[45px] uppercase ${textColor}`}>{title}</h1>
                </div>

                {/* Back Side */}
                <div
                    className={`absolute w-full h-full flex items-center justify-center ${bgColor} ${textColor} p-4 rounded-lg`}
                    style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                    }}
                >
                    <p className="text-[16px] font-abel leading-[20px]">
                        Empathetic research and data-driven analysis to understand user needs and motivations. I uncover deep insights through user interviews, competitive analysis, and data synthesis, which form the foundation of every project.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};