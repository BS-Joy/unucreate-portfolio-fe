'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import tv from '@/assets/tv.png'
import silverBallImg from '@/assets/silver ball.png'

const AnimatedWelcome = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-[109.69px] my-0 md:my-[123px]'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='flex flex-col items-center px-3 ml-0 lg:ml-44 relative'>
                <div className='relative'>
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

                {/* TV */}
                <div className=''>
                    <Image
                        src={tv}
                        width={1000}
                        height={1000}
                        alt='Silver ball Image'
                        className='w-[270.81px] lg:w-[912px] h-[280.01px] lg:h-[557px] object-contain'
                    />
                </div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='flex flex-col items-center justify-center relative'>
                <h1 className='font-abel text-[20px] leading-[40px] max-w-[1004px] text-center tracking-widest'>Hi, thanks for stopping by. I'm Jodi Swaby—an NYC-based user experience designer who began her journey as a fine artist.
                    Along the way, I picked up skills in business development, startups, and content creation/production, which all inform my unique approach to design.
                    I transform ideas into immersive digital and physical experiences that gently break away from the ordinary and invite curiosity. Grounded in user-centered design, I blend data insights with a touch of play and thoughtful innovation. My aim is to create interactions that inspires and connect, reimagining the way we experience our world. </h1>
            </motion.div>
        </div>
    )
}

export default AnimatedWelcome