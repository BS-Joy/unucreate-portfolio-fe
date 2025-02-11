'use client'
import skyImg from '@/assets/designsky.png';
import jodiBarcode from '@/assets/design-jodi-barcode.png';
import silverBall from '@/assets/silver ball.png';
import designing1 from '@/assets/designing1.png';
import designing2 from '@/assets/designing2.png';
import Image from 'next/image';
import { motion } from "motion/react"

const DesignForTheHuman2 = () => {
    return (
        <div className="mx-auto max-w-[1346px] mb-56">
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
                        className='w-[338] md:w-[840px] lg:w-[930px] xl:w-[1240px] md:h-[60px] lg:h-[148px] absolute right-5 top-0'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='w-[338] md:w-[840px] lg:w-[920px] xl:w-[1258px] h-[54px] lg:h-[144px] rounded-[10px] lg:rounded-[20px] bg-primary flex items-center justify-center z-10 absolute top-6 lg:top-10 right-10 lg:right-16'
                >
                    <h1 className='text-xl lg:text-5xl xl:text-[75px] text-olive font-anton'>Designing for the Human Experience</h1>
                </motion.div>
            </div>

            {/* Content and images */}
            <div className='pt-56'>
                {/* My Approach & Insight */}
                <div className='flex  justify-between gap-[140px]'>
                    <h1 className='uppercase text-[128px] text-secondary font-anton'>My Approach</h1>
                    <div>
                        <h1 className='text-lightBlue text-[100px] font-anton'>Insight</h1>
                        <p className='font-abel text-[20px] text-olive leading-[25px] max-w-[582px]'>Empathetic research and data-driven analysis to understand user needs and motivations. I uncover deep insights through user interviews, competitive analysis, and data synthesis, which form the foundation of every project.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignForTheHuman2;