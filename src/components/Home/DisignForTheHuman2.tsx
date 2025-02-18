'use client'
import tv from '@/assets/tv.png'
import logo from '@/assets/jodi logo.png'
import logo2 from '@/assets/Component 2.png'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'


const DisignForTheHuman2 = () => {
    return (
        <div className="mx-auto max-w-[1400px] flex flex-col justify-center items-center pb-32">
            <h1 className="text-3xl lg:text-[48px] font-anton text-secondary text-center pt-[27px] lg:pt-[57px] mb-[40px]">Let's work together</h1>
            <div className="border-t border-secondary w-[304px] lg:w-[504px] mb-[40px]"></div>

            {/* Button */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className=' flex items-center justify-center'>
                <div className='relative'>
                    <button className={`w-[180px] lg:w-[228px] h-[60px] lg:h-[80px] bg-secondary rounded-[40px] flex items-center justify-center uppercase font-anton text-[#333333] text-[20px] z-10 relative font-bold`}>
                        Let's Connect
                    </button>
                    <button className='w-[180px] lg:w-[228px] h-[60px] lg:h-[80px] bg-primary rounded-[40px] flex items-center justify-center uppercase font-anton text-olive text-[20px] absolute -bottom-2 left-2'>

                    </button>
                </div>
            </motion.div>

            <div className="border-b border-secondary w-[304px] lg:w-[504px]  mt-[40px] mb-0 lg:mb-32"></div>

            {/* TV Image */}
            {/* <div
                className="w-[270.81px] lg:w-[912px] h-[590px] bg-cover   flex flex-col pl-44  justify-center relative"
                style={{ backgroundImage: `url(${tv.src})` }} // Set the sky image as background
            >
                <h1 className='text-[96px] text-[#ee3322] font-arizonia max-w-sm text-center'>My Aproach</h1>

            </div> */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='relative pb-[10px] lg:pb-[190px]'>
                <Image
                    src={tv}
                    width={1000}
                    height={1000}
                    alt='TV'
                    className='w-[270.81px] lg:w-[819.8px] h-[535.41px] object-contain'
                />
                <h1 className='text-[46px] lg:text-[96px] text-[#ee3322] font-arizonia max-w-[250px] lg:max-w-sm text-center absolute top-[40%] lg:top-[20%] -left-4 lg:left-[16%] leading-10 lg:leading-none'>My Aproach</h1>
            </motion.div>



            {/* Designing heading */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='flex items-center gap-[13px]'>
                <h1 className='font-anton text-[30px] lg:text-[64px] text-olive max-w-[270px]'>Designing for the Human Experience</h1>
                <div className='border-2 border-[#ee3322] rounded-full p-1 flex items-center justify-center mt-8'>
                    <Image
                        src={logo}
                        width={200}
                        height={200}
                        alt='Lets start image'
                        className='w-[21px] h-[19px]'
                    />
                </div>
            </motion.div>


            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[43px] mt-[80px]">
                <FlipCard title="Insight" bgColor="bg-lightBlue" textColor="text-[#333333]" />
                <FlipCard title="Play" bgColor="bg-brown" textColor="text-white" />
                <FlipCard title="Innovation" bgColor="bg-primary" textColor="text-[#333333]" />
            </div>
        </div>
    )
}

export default DisignForTheHuman2


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