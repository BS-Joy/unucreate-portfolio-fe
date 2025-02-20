'use client'
import silverBallImg from '@/assets/silver ball.png'
import jodiImg from '@/assets/jodi about image.png'
import logo from '@/assets/jodi logo.png'
import instagram from '@/assets/welcomeInstagram.png'
import mail from '@/assets/welcomeMail.png'
import linkedin from '@/assets/welcomeLinkedin.png'
import Image from 'next/image'
import DoubleButton from '../Shared/DoubleButton'
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { motion } from 'motion/react'

const Welcome = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-[109.69px] my-0 md:my-[123px] pt-[24px] lg:pt-0 mt-[24px] lg:mt-0'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='flex flex-col items-center px-3 ml-0 lg:ml-44'>
                {/* Image and text-div */}
                <div className='relative mb-[70px] px-[68px] lg:px-0'>
                    <Image
                        src={silverBallImg}
                        width={200}
                        height={200}
                        alt='Silver ball Image'
                        className='w-[270.81px] lg:w-[280.81px] h-[280.01px] lg:h-[290.01px] object-contain'
                    />
                    <div className='bg-primary w-[239.78px] lg:w-[509.28px] h-[67.65px] lg:h-[192px] rounded-none lg:rounded-[20px] flex items-center justify-center absolute top-28 right-[63px] lg:-right-28'>
                        <h1 className='text-olive font-anton text-[32px] md:text-[64px] uppercase tracking-widest'>Welcome</h1>
                    </div>
                </div>

                <div className='px-[20px]'>
                    {/* Logo */}
                    <div className='block lg:hidden float-start w-[25%] pl-3 pt-2'>
                        <Image
                            src={logo}
                            width={100}
                            height={100}
                            alt='Jodi Logo Image'
                            className='w-[55px] h-[55px] lg:w-[102px] lg:h-[104px] object-contain '
                        />
                    </div>

                    <div className='float-none'>
                        <h1 className='text-[#202020] font-abel text-[20px]  mb-[50px] text-center tracking-widest leading-[40px] uppercase'>
                            I’m Jodi Swaby, an NYC-based User experience designer AnD artist. I transform ideas into immersive digital and physical experiences that challenge the ordinary and spark curiosity. Rooted in user-centered design, I blend Data insights, play, and innovation to craft interactions that inspire, connect, and reimagine the human experience.</h1>

                    </div>
                </div>
                <div className='hidden lg:block'>
                    <DoubleButton text="Let's Connect" bgColor='bg-secondary' textColor='text-[#333333]' />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='flex flex-col items-center justify-center relative mb-[63px] lg:mb-0'>
                <Image
                    src={jodiImg}
                    width={200}
                    height={200}
                    alt='Jodi About Image'
                    className='w-[610px] h-full lg:h-[910px] object-contain'
                />
                <div className='flex items-center gap-[30px] absolute bottom-[105px] md:bottom-48 lg:bottom-24'>
                    {/* <Image
                        src={instagram}
                        width={30}
                        height={30}
                        alt='Jodi Logo Image'
                        className='w-[44.17px] h-[35.33px] object-contain'
                    />
                    <Image
                        src={mail}
                        width={30}
                        height={30}
                        alt='Jodi Logo Image'
                        className='w-[36px] h-[30px] object-contain'
                    />
                    <Image
                        src={linkedin}
                        width={30}
                        height={30}
                        alt='Jodi Logo Image'
                        className='w-[46px] h-[39px] object-contain mt-1'
                    /> */}
                    <AiFillInstagram className='text-[47px] text-olive' />
                    <IoMdMail className='text-5xl text-olive' />
                    <FaLinkedin className='text-[39px] text-olive' />
                </div>

                <div className='block lg:hidden'>
                    <div className='relative'>
                        <button className={`w-[206px] lg:w-[260px] h-[48px] lg:h-[80px] bg-secondary rounded-[40px] flex items-center justify-center uppercase font-anton text-[#333333] text-[20px] z-10 relative `}>
                            Let's connect
                        </button>
                        <button className='w-[206px] lg:w-[260px] h-[48px] lg:h-[80px] bg-primary rounded-[40px] flex items-center justify-center uppercase font-anton text-olive text-[20px] absolute -bottom-2 left-2'>

                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Welcome
