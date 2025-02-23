'use client'
import silverBall from '@/assets/chatBall.png'
import manImg from '@/assets/lets-chat-image.png'
import Image from 'next/image'
import DoubleButton from '../Shared/DoubleButton'
import { motion } from 'motion/react'

const LetsChat2 = () => {
    return (
        <div className='mx-auto max-w-[1298px] mb-[78px] relative px-0  lg:px-10 xl:px-0'>
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='uppercase text-olive font-anton text-[32px] md:text-[70px] lg:text-[128px]  mb-[21px] md:mb-0 text-center'>
                Get IN TOUCH: Let’s Chat
            </motion.h1>

            <div className='flex flex-col lg:flex-row items-center justify-center gap-[10px] lg:gap-[177px] relative'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='uppercase text-olive font-anton text-[80px] md:text-[90px] lg:text-[128px] max-w-[640px] leading-[200px] z-10 hidden lg:block'>
                    <Image
                        src={manImg}
                        width={1000}
                        height={1000}
                        alt='Man image'
                        className='w-[350px] h-[400px] lg:w-[416px] lg:h-[624px] object-contain'
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='text-[#EE3322FE] text-xs md:text-[13px] font-abel leading-1 md:leading-snug hidden lg:block absolute left-0 top-1 md:top-[20%] text-center md:text-left -z-10'>
                    UX & UI Design, User Experience (UX) Design for digital platforms, User Research and Usability Testing, Wireframing, Prototyping, and Interaction Design, Mobile and Web App Design, Service Design and Journey Mapping, UX Writing and Microcopy Strategy, Experimental Art & Installations, Immersive Art Installations, Interactive Exhibition Design, Fashion and Art Showcase Curation, Public Art Projects, Experiential Marketing Activations, Media and Entertainment, Film Concept Development and Creative Consulting, Set Design for Film, TV, or Live Productions, Music Video Direction and Visual Concepting, Hosting Creative Panels, TV, or Web Series, Creative Strategy, Brand Identity Development, Campaign Storytelling and Creative Direction, Content Strategy for Digital and Social Platforms, Art Direction and Visual Concepting, Event Branding and Creative Consulting, Consulting and Leadership, Design Thinking and Innovation Workshops, Mentorship for Creative and UX Professionals, Accessibility, Inclusion, and Digital Transformation Consulting., UX & UI Design, User Experience (UX) Design for digital platforms, User Research and Usability Testing, Wireframing, Prototyping, and Interaction Design, Mobile and Web App Design, Service Design and Journey Mapping, UX Writing and Microcopy Strategy, Experimental Art & Installations, Immersive Art Installations, Interactive Exhibition Design, Fashion and Art Showcase Curation, Public Art Projects, Experiential Marketing Activations, Media and Entertainment, Film Concept Development and Creative Consulting, Set Design for Film, TV, or Live Productions, Music Video Direction and Visual Concepting, Hosting Creative Panels, TV, or Web Series, Creative Strategy, Brand Identity Development, Campaign Storytelling and Creative Direction, Content Strategy for Digital and Social Platforms, Art Direction and Visual Concepting, Event Branding and Creative Consulting, Consulting and Leadership, Design Thinking and Innovation Workshops, Mentorship for Creative and UX Professionals, Accessibility, Inclusion, and Digital Transformation Consulting., UX & UI Design, User Experience (UX) Design for digital platforms, User Research and Usability Testing, Wireframing, Prototyping, and Interaction Design, Mobile and Web App Design, Service Design and Journey Mapping, UX Writing and Microcopy Strategy, Experimental Art & Installations, Immersive Art Installations, Interactive Exhibition Design, Fashion and Art Showcase Curation, Public Art Projects, Experiential Marketing Activations, Media and Entertainment, Film Concept Development and Creative Consulting, Set Design for Film, TV, or Live Productions, Music Video Direction and Visual Concepting, Hosting Creative Panels, TV, or Web Series, Creative Strategy, Brand Identity Development, Campaign Storytelling and Creative Direction, Content Strategy for Digital and Social Platforms, Art Direction and Visual Concepting, Event Branding and Creative Consulting, Consulting and Leadership, Design Thinking and Innovation Workshops, Mentorship for Creative and UX Professionals, Accessibility, Inclusion, and Digital Transformation Consulting., UX & UI Design, User Experience (UX) Design for digital platforms, User Research and Usability Testing, Wireframing, Prototyping, and Interaction Design, Mobile and Web App Design, Service Design and Journey Mapping, UX Writing and Microcopy Strategy, Experimental Art & Installations, Immersive Art Installations, Interactive Exhibition Design, Fashion and Art Showcase Curation, Public Art Projects, Experiential Marketing Activations, Media and Entertainment, Film Concept Development and Creative Consulting, Set Design for Film, TV, or Live Productions, Music Video Direction and Visual Concepting, Hosting Creative Panels, TV, or Web Series, Creative Strategy, Brand Identity Development, Campaign Storytelling and Creative Direction, Content Strategy for Digital and Social Platforms, Art Direction and Visual Concepting, Event Branding and Creative Consulting, Consulting and Leadership, Design Thinking and Innovation Workshops, Mentorship for Creative and UX Professionals, Accessibility, Inclusion, and Digital Transformation Consulting., UX & UI Design, User Experience (UX) Design for digital platforms, User Research and Usability Testing, Wireframing, Prototyping, and Interaction Design, Mobile and Web App Design, Service Design and Journey Mapping, UX Writing and Microcopy Strategy, Experimental Art & Installations, Immersive Art Installations, Interactive Exhibition Design, Fashion and Art Showcase Curation, Public Art Projects, Experiential Marketing Activations, Media and Entertainment, Film Concept Development and Creative Consulting, Set Design for Film, TV, or Live P
                </motion.div>

                {/* Contact Form & Silver ball in large screen */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='hidden lg:block relative'>
                    <Image
                        src={silverBall}
                        width={1000}
                        height={1000}
                        alt='Lets start image'
                        className='w-[350px] h-[400px] lg:w-[640px] lg:h-[640px] object-contain'
                    />
                    <div className='absolute top-[16%] lg:top-[22%] left-[80px] lg:left-[110px]'>
                        <div className='flex items-center justify-center flex-col gap-[20px]'>
                            <input type="text"
                                placeholder='NAME'
                                className='w-[200px] lg:w-[410px] h-[35px] lg:h-[60px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold'
                            />
                            <input type="text"
                                placeholder='EMAIL'
                                className='w-[200px] lg:w-[410px] h-[35px]   lg:h-[60px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold'
                            />
                            <textarea
                                placeholder='MESSAGE'
                                className='w-[200px] lg:w-[410px] h-[90px] lg:h-[160px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold pt-[20px]'
                            />
                            <div className=''>
                                <DoubleButton text='Send Me a Message' bgColor='bg-secondary' textColor='text-[#333333]' />
                            </div>
                        </div>

                    </div>
                </motion.div>


                {/* Contact Form & Silver ball in mobile and tablet screen */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='block lg:hidden mt-[20px] md:mt-[68px]'>
                    {/* <Image
                        src={silverBall}
                        width={1000}
                        height={1000}
                        alt='Lets start image'
                        className='w-[350px] h-[400px] lg:w-[640px] lg:h-[640px] object-contain'
                    /> */}
                    {/* absolute top-[16%] lg:top-[22%] left-[80px] lg:left-[110px] */}
                    <div className=''>
                        <div className='flex flex-col justify-center items-center gap-[16px] md:gap-[20px] px-[13px]'>
                            <input type="text"
                                placeholder='NAME'
                                className='w-[310px] md:w-[500px] lg:w-[410px] h-[48px] md:h-[50px] lg:h-[60px] bg-white rounded-[8px] placeholder:text-black placeholder:text-[16px] font-abel pl-[12px] border border-[#e2e1e1]'
                            />
                            <input type="text"
                                placeholder='EMAIL'
                                className='w-[310px] md:w-[500px] lg:w-[410px] h-[48px] md:h-[50px]   lg:h-[60px] bg-white  rounded-[8px] placeholder:text-black placeholder:text-[16px] font-abel pl-[12px]  border border-[#e2e1e1]'
                            />
                            <textarea
                                placeholder='MESSAGE'
                                className='w-[310px] md:w-[500px] lg:w-[410px] h-[100px] md:h-[150px] lg:h-[160px] bg-white rounded-[8px] placeholder:text-black placeholder:text-[16px] font-abel pl-[12px]  border border-[#e2e1e1] pt-[20px]'
                            />
                            <div className='mt-[20px]'>
                                <div className='relative'>
                                    <button className={`w-[200px] lg:w-[260px] h-[48px] lg:h-[80px] bg-secondary rounded-[40px] flex items-center justify-center uppercase font-anton text-[#333333] text-[20px] z-10 relative `}>
                                        Submit
                                    </button>
                                    <button className='w-[200px] lg:w-[260px] h-[48px] lg:h-[80px] bg-primary rounded-[40px] flex items-center justify-center uppercase font-anton text-olive text-[20px] absolute -bottom-2 left-2'>

                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default LetsChat2