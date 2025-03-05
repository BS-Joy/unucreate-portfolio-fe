'use client'
import silverBallImg from '@/assets/silver ball.png'
import jodiImg from '@/assets/jodi about image.png'
import logo from '@/assets/welcome-paragraph-logo.png'
import instagram from '@/assets/welcomeInstagram.png'
import mail from '@/assets/welcomeMail.png'
import linkedin from '@/assets/welcomeLinkedin.png'
import Image from 'next/image'
import DoubleButton from '../Shared/DoubleButton'
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { motion } from 'motion/react'
import { RiMapPinLine } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

const Welcome = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-[109.69px] my-0 lg:my-[123px]  lg:pt-0  lg:mt-0 -space-y-20 md:space-y-0'>

            {/* Silver ball, Paragraph and logo in large screen */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='hidden lg:flex flex-col flex-1 items-center px-3'>
                {/* Image and text-div */}
                <div className='relative mb-[20px] md:mb-[70px] px-[68px] lg:px-0'>
                    <Image
                        src={silverBallImg}
                        width={200}
                        height={200}
                        alt='Silver ball Image'
                        className='w-[270.81px] lg:w-[280.81px] h-[280.01px] lg:h-[290.01px] object-contain'
                    />
                    <div className='bg-primary w-[270px] sm:w-[300px] md:w-[350px] lg:w-[509px] h-[67.65px] md:h-[90px] lg:h-[192px] rounded-none lg:rounded-[20px] flex items-center justify-center absolute top-[80%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
                        {/* top-28 right-[63px] sm:right-[60px] md:right-[30px] lg:-right-28 */}
                        <h1 className='text-olive font-anton text-[32px] md:text-[55px] uppercase tracking-widest'>Welcome</h1>
                    </div>
                </div>

                {/* Paragraph and logo wrapped in mobile and tablet */}
                <div className='px-[20px] block lg:hidden'>
                    {/* Logo */}
                    <div className='block lg:hidden float-start w-[22%] md:w-[10%] pt-2'>
                        <Image
                            src={logo}
                            width={100}
                            height={100}
                            alt='Jodi Logo Image'
                            className='w-[60px] h-[63px] lg:w-[102px] lg:h-[104px] object-contain '
                        />
                    </div>

                    <div className='float-none pt-2'>
                        <h1 className='text-[#202020] font-abel text-[14px] md:mb-0 text-left tracking-[.15em] leading-[32px] uppercase max-w-[10px]'>
                            Hi, I'm Jodi. I'm a storyteller, innovation consultant, creative strategist, and UX designer who fuses creativity with strategic insight to transform ideas into immersive digital and physical experiences that challenge the ordinary, spark curiosity, and create lasting impact. Rooted in user-centered design and research, I blend data <span className='text-secondary font-semibold'>insights, play</span>, and <span className='text-secondary font-semibold'>innovation</span>  to craft interactions that inspire, connect, and reimagine the human experience.</h1>

                    </div>
                </div>

                {/* Paragraph and logo wrapped in large device */}
                <div className='hidden lg:block'>
                    <h1 className='text-[#202020] font-abel text-[20px]  mb-[27px] text-center tracking-widest leading-[40px] uppercase max-w-[487px]'>
                        Hi, I'm Jodi.  storyteller, innovation Consulant, creative strategist, and UX designer who fuses creativity with strategic insight to transform ideas into immersive digital and physical experiences. I aim to challenge the ordinary, spark curiosity, and create meaningful impact. Rooted in user-centered design and research, I blend data insights, play, and innovation to craft interactions that inspire, connect, and reimagine how people engage with the world around them.         </h1>
                </div>

                <div className='hidden lg:block'>
                    <div className='relative'>
                        <button className={`w-[206px] lg:w-[228px] h-[48px] lg:h-[80px] bg-secondary rounded-[40px] flex items-center justify-center uppercase font-anton text-[#333333] text-[20px] z-10 relative `}>
                            Let's connect
                        </button>
                        <button className='w-[206px] lg:w-[228px] h-[48px] lg:h-[80px] bg-primary rounded-[40px] flex items-center justify-center uppercase font-anton text-olive text-[20px] absolute -bottom-2 left-2'>

                        </button>
                    </div>
                </div>
            </motion.div>


            {/* Silver ball, Paragraph and logo in mobile */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='flex lg:hidden flex-col flex-1 items-center px-3 ml-0 lg:ml-20'>
                {/* Image and text-div */}
                <div className='relative mb-[20px] md:mb-[70px] px-[68px] lg:px-0'>
                    <Image
                        src={silverBallImg}
                        width={200}
                        height={200}
                        alt='Silver ball Image'
                        className='w-[270.81px] lg:w-[280.81px] h-[280.01px] lg:h-[290.01px] object-contain'
                    />
                    <div className='bg-primary w-[270px] sm:w-[300px] md:w-[350px] lg:w-[509.28px] h-[67.65px] md:h-[90px] lg:h-[192px] rounded-none lg:rounded-[20px] flex items-center justify-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
                        {/* top-28 right-[63px] sm:right-[60px] md:right-[30px] lg:-right-28 */}
                        <h1 className='text-olive font-anton text-[32px] md:text-[55px] uppercase tracking-widest'>Welcome</h1>
                    </div>
                </div>

                {/* Paragraph and logo wrapped in mobile and tablet */}
                <div className='px-[20px] block lg:hidden'>
                    {/* Logo */}
                    <div className='block lg:hidden float-start w-[22%] md:w-[10%] pt-2'>
                        <Image
                            src={logo}
                            width={100}
                            height={100}
                            alt='Jodi Logo Image'
                            className='w-[60px] h-[63px] lg:w-[102px] lg:h-[104px] object-contain '
                        />
                    </div>

                    <div className='float-none pt-2'>
                        <h1 className='text-[#202020] font-abel text-[14px]   md:mb-0 text-left tracking-[.15em] leading-[32px] uppercase'>
                            Hi, I'm Jodi. I'm a storyteller, innovation consultant, creative strategist, and UX designer who fuses creativity with strategic insight to transform ideas into immersive digital and physical experiences that challenge the ordinary, spark curiosity, and create lasting impact. Rooted in user-centered design and research, I blend data <span className='text-secondary font-semibold'>insights, play</span>, and <span className='text-secondary font-semibold'>innovation</span>  to craft interactions that inspire, connect, and reimagine the human experience.</h1>

                    </div>
                </div>

                {/* Paragraph and logo wrapped in large device */}
                <div className='hidden lg:block'>
                    <h1 className='text-[#202020] font-abel text-[20px]  mb-[50px] text-center tracking-widest leading-[40px] uppercase'>
                        I’m Jodi Swaby, an NYC-based User experience designer AnD artist. I transform ideas into immersive digital and physical experiences that challenge the ordinary and spark curiosity. Rooted in user-centered design, I blend Data insights, play, and innovation to craft interactions that inspire, connect, and reimagine the human experience.</h1>
                </div>

                <div className='hidden lg:block'>
                    <DoubleButton text="Let's Connect" bgColor='bg-secondary' textColor='text-[#333333]' />
                </div>
            </motion.div>

            {/* Jodi image */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='flex flex-1 flex-col items-center justify-center relative mb-[63px] md:mb-0'>
                <Image
                    src={jodiImg}
                    width={700}
                    height={700}
                    alt='Jodi About Image'
                    className='w-[900px] h-[700px] lg:h-[910px] object-contain'
                />

                {/* Location mark */}
                <div className='absolute bottom-[190px] md:bottom-48 lg:bottom-[220px] xl:bottom-[190px] flex items-center gap-[8px]'>
                    <RiMapPinLine className='text-[24px]' />
                    <h1 className='font-americanTypewritter text-[14px] leading-[32px] tracking-widest uppercase'>Brooklyn, New York </h1>
                </div>

                <div className='flex items-center gap-[20px] absolute bottom-[85px] md:bottom-24 lg:bottom-28 xl:bottom-24'>
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
                    <FaSquareXTwitter className='text-[39px] text-olive' />
                </div>

                <div className='block lg:hidden -mt-3 lg:-mt-0'>
                    <div className='relative'>
                        <button className={`w-[206px] lg:w-[260px] h-[48px] lg:h-[80px] bg-secondary rounded-[40px] flex items-center justify-center uppercase font-anton text-[#333333] text-[16px] z-10 relative `}>
                            Let's connect
                        </button>
                        <button className='w-[206px] lg:w-[260px] h-[48px] lg:h-[80px] bg-primary rounded-[40px] flex items-center justify-center uppercase font-anton text-olive text-[16px] absolute -bottom-2 left-2'>

                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Welcome
