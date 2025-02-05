import WhatImg from '@/assets/what-I-do.png'
import Image from 'next/image'

const WhatIDo = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-[6px] mx-auto max-w-[1257px] pb-[209px]">
            {/* Image */}
            <div className='flex items-center justify-center'>
                <Image
                    src={WhatImg}
                    width={200}
                    height={200}
                    alt='What I do image'
                    className='w-[401px] lg:w-[601px] h-[629px] lg:h-[829px]'
                />
            </div>

            {/* Content */}
            <div className='flex flex-col items-center gap-[15px]'>
                <div className='flex items-center gap-[19px] lg:gap-[29px]'>
                    <div className='flex flex-col items-center justify-center gap-[12px] lg:gap-[22px]'>
                        <h1 className='font-anton text-[22px] lg:text-[32px]'>User Research & Design</h1>
                        <p className='font-abel text-olive text-[13px] lg:text-[20px] max-w-[200px] lg:max-w-[225px] leading-snug'>I drive human-centered design from research to prototyping, ensuring teams solve the right problems.</p>
                    </div>
                    <div className='w-[187px] lg:w-[197px] h-[136px] lg:h-[146px] rounded-[20px] bg-lightBlue'>

                    </div>
                </div>
                <div className='flex flex-row-reverse items-center gap-[19px] lg:gap-[29px]'>
                    <div className='flex flex-col items-center justify-center gap-[12px] lg:gap-[22px]'>
                        <h1 className='font-anton text-[22px] lg:text-[32px]'>Brand & Creative Strategy</h1>
                        <p className='font-abel text-olive text-[13px] lg:text-[20px] max-w-[200px] lg:max-w-[225px] leading-snug'>I create cohesive brand identities and strategies that connect with audiences across digital and physical touchpoints.


                        </p>
                    </div>
                    <div className='w-[187px] lg:w-[197px] h-[136px] lg:h-[146px] rounded-[20px] bg-secondary'>

                    </div>
                </div>
                <div className='flex items-center gap-[19px] lg:gap-[29px]'>
                    <div className='flex flex-col items-center justify-center gap-[12px] lg:gap-[22px]'>
                        <h1 className='font-anton text-[22px] lg:text-[32px]'>Creative Leadership</h1>
                        <p className='font-abel text-olive text-[13px] lg:text-[20px] max-w-[200px] lg:max-w-[225px] leading-snug'>I craft impactful, user-focused experiences through UX, customer experience, and creative strategy


                        </p>
                    </div>
                    <div className='w-[187px] lg:w-[197px] h-[136px] lg:h-[146px] rounded-[20px] bg-primary'>

                    </div>
                </div>
                <div className='flex flex-row-reverse items-center gap-[19px] lg:gap-[29px]'>
                    <div className='flex flex-col items-center justify-center gap-[12px] lg:gap-[22px]'>
                        <h1 className='font-anton text-[22px] lg:text-[32px]'>Venture Development </h1>
                        <p className='font-abel text-olive text-[13px] lg:text-[20px] max-w-[200px] lg:max-w-[225px] leading-snug'>I transform ideas into market-ready ventures using lean principles to deliver measurable results.</p>
                    </div>
                    <div className='w-[187px] lg:w-[197px] h-[136px] lg:h-[146px] rounded-[20px] bg-[#771F12]'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIDo