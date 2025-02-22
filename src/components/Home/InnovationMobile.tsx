'use client'
import designing3 from '@/assets/designing3.png';
import designing2 from '@/assets/designing2.png';
import Image from 'next/image';
import { motion } from "motion/react"

const InnovationMobile = () => {
    return (
        <div className="pb-[49px] px-[20px] md:px-[49px]">
            <div className="pb-[40px]">
                <div className='flex items-end justify-between -space-x-4'>
                    <h1 className="font-anton text-[24px] leading-[32px] tracking-widest uppercase ">Innovation Leadership </h1>
                    <div className='flex items-end relative -space-x-6'>
                        <Image
                            src={designing3}
                            width={200}
                            height={200}
                            alt='Jodi Logo Image'
                            className='w-[70px] h-[80px]  object-contain '
                        />
                        <Image
                            src={designing2}
                            width={200}
                            height={200}
                            alt='Jodi Logo Image'
                            className='w-[100px] h-[120px]  object-contain pb-3'
                        />
                    </div>
                </div>
                <p className="font-abel text-[16px] leading-[32px] tracking-widest text-[#202020] pt-[14px]">I help companies come up with fresh ideas to reimagine products, invigorate processes, and transform market strategies.</p>
            </div>
            <div className="pb-[40px]">
                <h1 className="font-anton text-[24px] leading-[32px] tracking-widest uppercase pb-[14px]">User Research & Design: </h1>
                <p className="font-abel text-[16px] leading-[32px] tracking-widest text-[#202020]">I conduct comprehensive user research to uncover deep insights into customer behaviors, needs, and pain points. These insights fuel my design process, enabling me to craft intuitive and engaging digital and physical experiences that resonate with users.</p>
            </div>
            <div className="">
                <h1 className="font-anton text-[24px] leading-[32px] tracking-widest uppercase pb-[14px]">Production </h1>
                <p className="font-abel text-[16px] leading-[32px] tracking-widest text-[#202020]">I manage creative projects from ideation through execution, ensuring every element is delivered with precision and creativity. My hands-on approach and ability to coordinate cross-functional teams bring innovative ideas to life, producing impactful results that captivate audiences.</p>
            </div>
        </div>
    )
}

export default InnovationMobile