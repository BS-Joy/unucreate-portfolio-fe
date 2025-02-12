'use client'
import letsStart from '@/assets/lets-start.png'
import DoubleButton from '../Shared/DoubleButton'
import { motion } from 'motion/react'

const LetsStart = () => {
    return (
        <div
            className="mt-[100px] lg:mt-[150px] mb-32  max-w-[800px] md:max-w-[900px] lg:max-w-[1212px] h-[308px] lg:h-[808px] mx-2 lg:mx-auto bg-cover bg-center flex justify-center pt-10 lg:pt-20"
            style={{ backgroundImage: `url(${letsStart.src})` }}
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='flex flex-col items-center gap-[10px] text-center'>
                <h1 className='font-anton text-[50px] lg:text-[128px] uppercase'>Coming Soon</h1>
                <h1 className='font-abel text-[50px] lg:text-[100px] uppercase'>Art gallery</h1>
                <DoubleButton text='Check out the space ' bgColor='bg-secondary' textColor='text-olive' />
            </motion.div>
        </div>

    )
}

export default LetsStart
