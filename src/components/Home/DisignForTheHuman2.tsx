'use client'
import tv from '@/assets/tv.png'
import logo from '@/assets/jodi logo.png'
import logo2 from '@/assets/Component 2.png'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'


const DisignForTheHuman2 = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    return (
        <div className="mx-auto max-w-[1400px] flex flex-col justify-center items-center pb-11 md:pb-10">
            <h1 className="text-[32px] lg:text-[48px] font-anton text-secondary text-center pt-[27px] lg:pt-[57px] mb-[24px] lg:mb-[40px] uppercase">Let's work together</h1>
            <div className="border-t border-secondary w-[304px] lg:w-[504px] pb-[24px] lg:pb-[40px]"></div>

            {/* Button large screen */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='hidden lg:flex items-center justify-center'>
                <div className='relative'>
                    <button className={`w-[180px] lg:w-[228px] h-[60px] lg:h-[80px] bg-secondary rounded-[40px] flex items-center justify-center uppercase font-anton text-[#333333] text-[20px] z-10 relative font-bold`}>
                        Let's Connect
                    </button>
                    <button className='w-[180px] lg:w-[228px] h-[60px] lg:h-[80px] bg-primary rounded-[40px] flex items-center justify-center uppercase font-anton text-olive text-[20px] absolute -bottom-2 left-2'>

                    </button>
                </div>
            </motion.div>

            {/* Button mobile screen */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='flex lg:hidden items-center justify-center'>
                <div className='relative'>
                    <button className={`w-[239px] lg:w-[228px] h-[48px] lg:h-[80px] bg-secondary rounded-[40px] flex items-center justify-center uppercase font-anton text-[#333333] text-[16px] z-10 relative font-medium`}>
                        Let's Connect
                    </button>
                    <button className='w-[239px] lg:w-[228px] h-[48px] lg:h-[80px] bg-primary rounded-[40px] flex items-center justify-center uppercase font-anton text-olive text-[20px] absolute -bottom-2 left-2'>

                    </button>
                </div>
            </motion.div>

            <div className="border-b border-secondary w-[304px] lg:w-[504px]  mt-[24px] lg:mb-32"></div>

            {/* TV Image */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='relative pb-[24px] lg:pb-[190px] mt-[24px]'>
                <Image
                    src={tv}
                    width={1000}
                    height={1000}
                    alt='TV'
                    className='w-[335px] lg:w-[819.8px] h-[210px] lg:h-[535.41px] object-contain'
                />
                <h1 className='text-[46px] lg:text-[96px] text-[#ee3322] font-arizonia max-w-[250px] lg:max-w-sm text-center absolute top-[29%] lg:top-[20%] left-3 lg:left-[16%] leading-10 lg:leading-none'>My Aproach</h1>
            </motion.div>



            {/* Designing heading */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='flex items-center gap-[13px] relative pt-[20px]'>
                <h1 className='font-anton text-center text-[32px] lg:text-[64px] text-olive max-w-[280px] md:max-w-none lg:max-w-none uppercase'>Designing for the Human Experience</h1>
                <div className='border-2 border-[#ee3322] rounded-full p-1 hidden absolute bottom-2 right-1 lg:relative lg:flex items-center justify-center mt-8'>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[43px] mt-[24px] lg:mt-[80px]">
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
    )
}

export default DisignForTheHuman2


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
            className="w-[334px] h-[236px] perspective-1000"
            onMouseEnter={setActiveIndex} // Change active card when hovered
        >
            <motion.div
                className="relative w-full h-full transition-transform duration-450"
                animate={{ rotateY: isActive ? 180 : 0 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Side */}
                <div
                    className={`absolute w-full h-full flex flex-col items-center justify-center gap-[32px] pl-[5px]  ${bgColor}`}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <h1 className={`font-anton text-[45px] uppercase ${textColor}`}>{title}</h1>
                </div>

                {/* Back Side */}
                <div
                    className={`absolute w-full h-full flex items-center justify-center ${bgColor} ${textColor} p-4 `}
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