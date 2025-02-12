'use client';
import skyImg from '@/assets/designsky.png';
import jodiBarcode from '@/assets/design-jodi-barcode.png';
import silverBall from '@/assets/silver ball.png';
import designing1 from '@/assets/designing1.png';
import designing2 from '@/assets/designing2.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const DesignForTheHuman2 = () => {
    return (
        <div className="mx-auto max-w-[1346px] mb-56">
            {/* Upper image and heading */}
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src={skyImg}
                        width={200}
                        height={200}
                        alt="Sky Image"
                        className="w-[338] md:w-[840px] lg:w-[930px] xl:w-[1240px] md:h-[60px] lg:h-[148px] absolute right-5 top-0"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-[338] md:w-[840px] lg:w-[920px] xl:w-[1258px] h-[54px] lg:h-[144px] rounded-[10px] lg:rounded-[20px] bg-primary flex items-center justify-center z-10 absolute top-6 lg:top-10 right-10 lg:right-16"
                >
                    <h1 className="text-xl lg:text-5xl xl:text-[75px] text-olive font-anton">
                        Designing for the Human Experience
                    </h1>
                </motion.div>
            </div>

            {/* Silver Ball Animation */}
            <motion.div
                initial={{ opacity: 0, x: 0, y: 0 }}
                whileInView={{
                    opacity: 1,
                    x: [5, 600, 500, 180], // Path for x
                    y: [0, 600, 1000, 1000], // Curvy path for y
                }}
                transition={{
                    duration: 4, // Adjust duration for a smooth transition
                    repeat: 0,
                    ease: 'easeInOut',
                }}
                className="absolute z-20 hidden md:block" // position it appropriately
            >
                <Image
                    src={silverBall}
                    width={200}
                    height={200}
                    alt="Silver Ball Image"
                    className="w-[287.78px] h-[210.77px] lg:w-[208px] lg:h-[220px] object-contain"
                />
            </motion.div>

            {/* Content and images */}
            <div className="pt-32 lg:pt-56">
                {/* My Approach & Insight for larger screens */}
                <div className="hidden md:flex flex-row justify-between gap-[40px] lg:gap-[140px] mb-[40px] lg:mb-[140px]">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 50 }}
                        transition={{ duration: 0.6 }}
                        className="uppercase text-[70px] lg:text-[128px] text-secondary font-anton leading-tight"
                    >
                        My Approach
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-lightBlue text-[60px] lg:text-[100px] font-anton">Insight</h1>
                        <p className="font-abel text-[20px] text-olive leading-[25px] max-w-[582px]">
                            Empathetic research and data-driven analysis to understand user needs and motivations. I uncover
                            deep insights through user interviews, competitive analysis, and data synthesis, which form the
                            foundation of every project.
                        </p>
                    </motion.div>
                </div>

                {/* My Approach & Insight for mobile screens */}
                <div className="flex md:hidden flex-col justify-between gap-[40px] lg:gap-[140px] mb-[40px] lg:mb-[140px]">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 30 }}
                        transition={{ duration: 0.6 }}
                        className="uppercase text-[60px] lg:text-[128px] text-secondary font-anton leading-tight"
                    >
                        My Approach
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 30 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-lightBlue text-[50px] lg:text-[100px] font-anton">Insight</h1>
                        <p className="font-abel text-[20px] text-olive leading-[25px] max-w-[302px]">
                            Empathetic research and data-driven analysis to understand user needs and motivations. I uncover
                            deep insights through user interviews, competitive analysis, and data synthesis, which form the
                            foundation of every project.
                        </p>
                    </motion.div>
                </div>

                {/* Play and image */}
                <div className="flex gap-[120px]">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 50 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-lightBlue text-[100px] font-anton">Play</h1>
                        <p className="font-abel text-[20px] text-olive leading-[25px] max-w-[582px]">
                            Empathetic research and data-driven analysis to understand user needs and motivations. I uncover
                            deep insights through user interviews, competitive analysis, and data synthesis, which form the
                            foundation of every project.
                        </p>
                    </motion.div>

                    {/* Image */}
                    <div className="flex flex-col lg:flex-row pb-6">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 50 }}
                            transition={{ duration: 0.4 }}
                            className="-mt-16"
                        >
                            <Image
                                src={designing1}
                                width={200}
                                height={200}
                                alt="Jodi Logo Image"
                                className="w-[287.78px] h-[210.77px] lg:w-[387.78px] lg:h-[310.77px] object-contain ml-44"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="-mt-24"
                        >
                            <Image
                                src={designing2}
                                width={200}
                                height={200}
                                alt="Jodi Logo Image"
                                className="w-[221px] h-[313px] lg:w-[271px] lg:h-[363px] object-contain"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Innovation */}
                <div className="flex justify-between gap-[140px]">
                    <div>
                        {/* <Image
                            src={silverBall}
                            width={200}
                            height={200}
                            alt="Jodi Logo Image"
                            className="w-[287.78px] h-[210.77px] lg:w-[208px] lg:h-[220px] object-contain ml-16"
                        /> */}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-lightBlue text-[100px] font-anton">Innovative</h1>
                        <p className="font-abel text-[20px] text-olive leading-[25px] max-w-[582px]">
                            Empathetic research and data-driven analysis to understand user needs and motivations. I uncover
                            deep insights through user interviews, competitive analysis, and data synthesis, which form the
                            foundation of every project.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DesignForTheHuman2;
