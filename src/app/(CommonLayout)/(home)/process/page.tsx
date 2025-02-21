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
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    return (
        <div className='px-[10px] lg:px-[70px] mb-24 lg:mb-96 mt-0 lg:mt-[32px]'>
            {/* Heading and image */}
            <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-[32px] mb-0 lg:mb-[60px] pt-12 lg:pt-0'>
                {/* Heading */}
                {/* Designing heading */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='flex lg:items-center gap-[13px] relative'>
                    <h1 className='font-anton text-[23px] md:text-[20px] lg:text-[64px] text-olive max-w-none md:max-w-[270px] lg:max-w-[422px]'>Designing for the Human Experience</h1>
                    <div className='border-2 border-[#ee3322] rounded-full p-1 lg:flex  items-center justify-center mt-8  absolute right-2 lg:right-[105px] bottom-16 lg:bottom-32 hidden'>
                        <Image
                            src={logo}
                            width={200}
                            height={200}
                            alt='Lets start image'
                            className='w-[15px] h-[12px] lg:w-[21px] lg:h-[19px]'
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
                        className='relative mr-0 lg:-mr-11'>
                        <Image
                            src={tv}
                            width={1000}
                            height={1000}
                            alt='TV'
                            className='w-[270.81px] lg:w-[361.68px] h-[120px] lg:h-[500px] object-contain'
                        />
                        <h1 className='text-[24px] lg:text-[36px] text-[#ee3322] font-arizonia max-w-[80px] lg:max-w-[100px] text-center absolute top-[20%] lg:top-[44%] left-14 lg:left-[26%] leading-5 lg:leading-none'>My Aproach </h1>
                    </motion.div>

                    {/* Lamp */}
                    <div className=''>
                        <Image
                            src={lamp}
                            width={1000}
                            height={1000}
                            alt='Lamp'
                            className='w-[170.81px] lg:w-[203.95px] h-[180px] lg:h-[359.24px] object-contain pb-16 lg:pb-2'
                        />
                    </div>
                </div>
            </div>

            {/* Paragraph */}
            <div className='flex items-center justify-center px-4'>
                <h3 className='font-abel text-sm lg:text-[32px] leading-normal lg:leading-[39px] max-w-[1028px]'>My approach invites curiosity: it begins with empathetic data insights that reveal the nuanced human stories behind every interaction, evolves through playful experimentation that encourages creative exploration without judgment, and culminates in innovative design solutions that transform challenges into user-centered experiences, delighting and engaging at every touchpoint. I enjoy fostering this process, where discovery and creativity are at the heart of every solution.</h3>
            </div>

            {/* Cards */}
            <div className='flex items-center justify-center'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[43px] mt-[80px]">
                    {["Insight", "Play", "Innovation"].map((title, index) => (
                        <FlipCard
                            key={index}
                            title={title}
                            bgColor={index === 0 ? "bg-lightBlue" : index === 1 ? "bg-brown" : "bg-primary"}
                            textColor={index === 1 ? "text-white" : "text-[#333333]"}
                            isActive={activeIndex === index}
                            setActiveIndex={() => {
                                // Close previous, then open new card
                                setActiveIndex(null);
                                setTimeout(() => setActiveIndex(index), 300); // Small delay for smooth effect
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProcessPage


const FlipCard = ({
    title,
    bgColor,
    textColor,
    isActive,
    setActiveIndex,
}: {
    title: string;
    bgColor: string;
    textColor: string;
    isActive: boolean;
    setActiveIndex: () => void;
}) => {
    return (
        <div
            className="w-[334px] h-[236px] lg:w-[344px] lg:h-[344px] perspective-1000"
            onMouseEnter={setActiveIndex} // Change active card when hovered
        >
            <motion.div
                className="relative w-full h-full transition-transform duration-500"
                animate={{ rotateY: isActive ? 180 : 0 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Side */}
                <div
                    className={`absolute w-full h-full flex flex-col items-center justify-center gap-[32px] pl-[5px] ${bgColor}`}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <h1 className={`font-anton text-[45px] uppercase ${textColor}`}>{title}</h1>
                </div>

                {/* Back Side */}
                <div
                    className={`absolute w-full h-full flex items-center justify-center ${bgColor} ${textColor} p-4`}
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