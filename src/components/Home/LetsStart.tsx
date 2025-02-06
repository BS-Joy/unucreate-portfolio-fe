'use client'
import letsStart from '@/assets/lets-start.png'
import DoubleButton from '../Shared/DoubleButton'
import { motion } from 'motion/react'

const LetsStart = () => {
    return (
        <div
            className="mt-[400px] mb-32  max-w-[800px] lg:max-w-[1212px] h-[308px] lg:h-[808px] mx-2 lg:mx-auto bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${letsStart.src})` }}
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='flex flex-col items-center justify-center gap-[50px] text-center'>
                <h1 className='font-abel text-[50px] lg:text-[100px]'>Let’s Start a Project</h1>
                <DoubleButton text='Start Project' bgColor='bg-secondary' textColor='text-olive' />
            </motion.div>
        </div>

    )
}

export default LetsStart
