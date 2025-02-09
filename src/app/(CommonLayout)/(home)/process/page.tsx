'use client'
import skyImg from '@/assets/designsky.png'
import Image from 'next/image'
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer'
import WhatImg from '@/assets/what-I-do.png'


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
        <div className='px-[10px] lg:px-[70px] mb-24 lg:mb-96'>
            {/* Upper image and heading */}
            <div className='relative w-full px-4 xl:px-10 mt-10  pb-44'>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src={skyImg}
                        width={200}
                        height={200}
                        alt='Sky Image'
                        className='w-full max-w-screen-xl lg:max-w-[930px] xl:max-w-[1240px] mx-auto md:h-[60px] lg:h-[148px] absolute right-5 top-0 pl-12 md:pl-16 lg:pl-0'
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='w-[330px] max-w-full sm:w-[600px] md:w-[900px] xl:w-[1258px] h-[54px] lg:h-[144px] rounded-[10px] lg:rounded-[20px] bg-primary flex items-center justify-center z-10 absolute top-6 lg:top-10 px-4 lg:px-16'
                >
                    <h1 className='text-2xl lg:text-[75px] text-olive font-anton'>Process</h1>
                </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row gap-[6px] px-10 xl:px-0 mx-auto max-w-[1257px] pb-[209px] pt-28">
                {/* Image */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    variants={fadeLeft}
                    viewport={{ once: false, amount: 0.5 }}
                    className='flex items-center justify-center'
                >
                    <Image
                        src={WhatImg}
                        width={200}
                        height={200}
                        alt='What I do image'
                        className='w-[401px] lg:w-[601px] h-[629px] lg:h-[829px]'
                    />
                </motion.div>

                {/* Content */}
                <div className='flex flex-col items-center gap-[15px]'>
                    {[
                        { title: "User Research & Design", desc: "I drive human-centered design from research to prototyping, ensuring teams solve the right problems.", bg: "bg-lightBlue", fade: fadeRight },
                        { title: "Brand & Creative Strategy", desc: "I create cohesive brand identities and strategies that connect with audiences across digital and physical touchpoints.", bg: "bg-secondary", fade: fadeLeft },
                        { title: "Creative Leadership", desc: "I craft impactful, user-focused experiences through UX, customer experience, and creative strategy.", bg: "bg-primary", fade: fadeRight },
                        { title: "Venture Development", desc: "I transform ideas into market-ready ventures using lean principles to deliver measurable results.", bg: "bg-[#771F12]", fade: fadeLeft }
                    ].map((item, index) => {
                        const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

                        return (
                            <motion.div
                                ref={ref}
                                key={index}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={item.fade}
                                className={`flex ${index % 2 === 1 ? 'flex-row-reverse' : ''} items-center gap-[19px] lg:gap-[29px]`}
                            >
                                <div className='flex flex-col items-center justify-center gap-[12px] lg:gap-[22px]'>
                                    <h1 className='font-anton text-[22px] lg:text-[32px]'>{item.title}</h1>
                                    <p className='font-abel text-olive text-[13px] lg:text-[20px] max-w-[200px] lg:max-w-[225px] leading-snug text-center'>
                                        {item.desc}
                                    </p>
                                </div>
                                <motion.div
                                    variants={item.fade}
                                    className={`w-[187px] lg:w-[197px] h-[136px] lg:h-[146px] rounded-[20px] ${item.bg}`}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProcessPage
