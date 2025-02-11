'use client'
import WhatImg from '@/assets/what-I-do.png'
import Image from 'next/image'
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer'

const WhatIDo = () => {
    const fadeLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    }

    const fadeRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    }
    return (
        <div className="flex flex-col lg:flex-row gap-[6px] px-10 xl:px-0 mx-auto max-w-[1257px] pb-[209px]">
            {/* Image */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                variants={fadeLeft}
                viewport={{ once: false, amount: 0.5 }}
                className='flex items-center justify-center'
            >
                <Image
                    src={WhatImg}
                    width={200}
                    height={200}
                    alt='What I do image'
                    className='w-[401px] lg:w-[601px] h-[629px] lg:h-[829px]'
                />
            </motion.div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-[70px]">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 50 }}
                    transition={{ duration: 0.6 }}
                    className="self-start">
                    <div className="bg-lightBlue w-[374px] h-[146px] flex items-center justify-center rounded-lg">
                        <h1 className="font-anton text-[32px]">User Research & Design</h1>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="self-end">
                    <div className="bg-secondary w-[374px] h-[146px] flex items-center justify-center rounded-lg">
                        <h1 className="font-anton text-[32px]">Brand & Creative Strategy</h1>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 50 }}
                    transition={{ duration: 0.6 }}
                    className="self-start">
                    <div className="bg-primary w-[374px] h-[146px] flex items-center justify-center rounded-lg">
                        <h1 className="font-anton text-[32px]">Creative Leadership</h1>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="self-end">
                    <div className="bg-brown w-[374px] h-[146px] flex items-center justify-center rounded-lg">
                        <h1 className="font-anton text-[32px] text-white">Brand & Creative Strategy</h1>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default WhatIDo