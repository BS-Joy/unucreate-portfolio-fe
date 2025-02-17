'use client'
import silverBallImg from '@/assets/silver ball.png'
import jodiImg from '@/assets/jodi about image.png'
import instagram from '@/assets/welcomeInstagram.png'
import mail from '@/assets/welcomeMail.png'
import linkedin from '@/assets/welcomeLinkedin.png'
import Image from 'next/image'
import DoubleButton from '../Shared/DoubleButton'
import { motion } from 'motion/react'

const Welcome = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-[109.69px] my-0 md:my-[123px]'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='flex flex-col items-center px-3 ml-0 lg:ml-44'>
                <div className='relative mb-[70px]'>
                    <Image
                        src={silverBallImg}
                        width={200}
                        height={200}
                        alt='Silver ball Image'
                        className='w-[270.81px] lg:w-[280.81px] h-[280.01px] lg:h-[290.01px]'
                    />
                    <div className='bg-primary w-80 lg:w-[509.28px] h-[165px] lg:h-[192px] rounded-[20px] flex items-center justify-center absolute top-28 -right-5 lg:-right-28'>
                        <h1 className='text-olive font-anton text-4xl md:text-[64px] uppercase tracking-widest'>Welcome</h1>
                    </div>
                </div>
                <h1 className='text-[#202020] font-abel text-[20px] max-w-sm mb-[50px] text-center tracking-widest leading-[40px]'>
                    I’m Jodi Swaby, an NYC-based User experience designer AnD artist. I transform ideas into immersive digital and physical experiences that challenge the ordinary and spark curiosity. Rooted in user-centered design, I blend Data insights, play, and innovation to craft interactions that inspire, connect, and reimagine the human experience.</h1>

                <DoubleButton text="Let's Connect" bgColor='bg-secondary' textColor='text-olive' />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='flex flex-col items-center justify-center relative'>
                <Image
                    src={jodiImg}
                    width={200}
                    height={200}
                    alt='Jodi About Image'
                    className='w-[610px] h-[910px] object-contain'
                />
                <div className='flex items-center gap-[6.62px] absolute bottom-[250px] md:bottom-48 lg:bottom-24'>
                    <Image
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
                        className='w-[44px] h-[35px] object-contain'
                    />
                    <Image
                        src={linkedin}
                        width={30}
                        height={30}
                        alt='Jodi Logo Image'
                        className='w-[44.17px] h-[35.33px] object-contain'
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default Welcome
