'use client'
import skyImg from '@/assets/designsky.png'
import myProjects from '@/assets/myProjects.png'
import Image from 'next/image'
import { motion } from "motion/react"

const MyProjects = () => {
    return (
        <div className="mx-auto max-w-[1346px] mb-20">
            {/* Upper image and heading */}
            <div className='relative'>
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
                        className='w-[438] lg:w-[1240px] lg:h-[148px] absolute right-5 top-0'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='w-[438] lg:w-[1258px] h-[54px] lg:h-[144px] rounded-[20px] bg-primary flex items-center justify-center z-10 absolute top-6 lg:top-10 right-10 lg:right-16'
                >
                    <h1 className='text-2xl lg:text-[75px] text-olive font-anton'>My Projects</h1>
                </motion.div>
            </div>

            {/* Content and images */}
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-[104px] lg:gap-[134px] max-w-[1298px] mx-auto pt-[100px] lg:pt-[250px] relative left-0 lg:left-2'>
                <div className='max-w-[304px]'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='space-y-[3px] mb-0 lg:mb-[38px]'>
                        <h1 className='font-anton text-secondary text-[30px] lg:text-[40px]'>My Projects </h1>
                        <p className='font-abel text-[14px] lg:text-[24px] text-olive max-w-[626px]'>User Experience (UX) Design for digital platforms
                            User Research and Usability Testing
                            Wireframing, Prototyping, and Interaction Design
                            Mobile and Web App Design
                            Service Design and Journey Mapping
                            UX Writing and Microcopy Strateg</p>
                    </motion.div>
                </div>
                {/* Images */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='mx-3 lg:mx-0'>
                    {/* 1 image */}
                    <div>
                        <Image
                            src={myProjects}
                            width={200}
                            height={200}
                            alt='Lets start image'
                            className='w-[837px] object-contain  rounded-[30px] mb-[48px]'
                        />
                        <div className='space-y-[3px] mb-[38px]'>
                            <h1 className='font-anton text-secondary text-[35px]'>The Giver – UX Research for Anonymous Gift-Giving Platform</h1>
                            <p className='font-abel text-sm text-olive max-w-[859px]'>The Giver is an innovative, anonymous gift-giving platform designed to streamline charitable donations with a seamless user experience.</p>
                        </div>
                    </div>

                    {/* 2 image */}
                    <div className='flex flex-row-reverse items-center gap-[19px]'>
                        <div>
                            <Image
                                src={myProjects}
                                width={200}
                                height={200}
                                alt='Lets start image'
                                className='w-[420px] object-contain rounded-[30px]'
                            />
                            <div className='space-y-[3px] mb-[38px]'>
                                <h1 className='font-anton text-secondary text-[35px]'>Bumble x Jodi Swaby Art Collaboration</h1>
                                <p className='font-abel text-sm text-olive max-w-[859px]'>In partnership with Bumble, I explored the nuances of dating through an art project titled “The Dance of Dating.”</p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src={myProjects}
                                width={200}
                                height={200}
                                alt='Lets start image'
                                className='w-[420px] object-contain rounded-[30px]'
                            />
                            <div className='space-y-[3px] mb-[38px]'>
                                <h1 className='font-anton text-secondary text-[35px]'>Blendyd Drive – UX/UI Design for Blendyd Studios</h1>
                                <p className='font-abel text-sm text-olive max-w-[859px]'>Blendyd Studios is a software development firm modernizing recruitment in the trucking industry using AI and Machine Learning</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default MyProjects