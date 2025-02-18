'use client'
import barcode from '@/assets/jodi-barcode-black.png'
import skyImg from '@/assets/lets-start.png'
import project1 from '@/assets/projects1.png'
import project2 from '@/assets/projects2.png'
import project3 from '@/assets/projects3.png'
import project4 from '@/assets/projects4.png'
import project5 from '@/assets/projects5.png'
import project6 from '@/assets/projects6.png'

import Image from 'next/image'

const MyProjects2 = () => {
    return (
        <div>
            {/* Barcode and Projects Heading */}
            <div className='flex  justify-center gap-[20px] lg:gap-[80px] mb-[102px]'>
                <div className='flex flex-col items-center gap-[15px]'>
                    <Image
                        src={barcode}
                        width={200}
                        height={200}
                        alt='Lets start image'
                        className='w-[97px] h-[91px] lg:w-[257px] lg:h-[291px]'
                    />
                    <h1 className='font-anton text-xs lg:text-[16px] text-[#202020]'>UX designer & artist</h1>
                </div>

                <div
                    className="w-[190px] lg:w-[860px] h-[110px] lg:h-[271px] bg-cover bg-center flex flex-col pl-0 lg:pl-44  justify-center relative"
                    style={{ backgroundImage: `url(${skyImg.src})` }} // Set the sky image as background
                >
                    <h1 className='text-[38px] lg:text-[128px]  font-arizonia  text-center'>Projects</h1>

                </div>
            </div>

            {/* Projects */}
            <div>
                {/* 1st project */}
                <div className="relative mb-[32px]">
                    <div className="flex justify-end">
                        <Image
                            src={project1}
                            width={1200}
                            height={1200}
                            alt="Lets start image"
                            className="w-[767px] h-[526.64px]"
                        />
                    </div>

                    <div className="bg-secondary w-[280px] h-[300px] lg:w-[380px] lg:h-[400px] text-white lg:absolute lg:top-16 lg:left-80 flex flex-col justify-between pb-[28px] lg:pb-[48px] md:absolute md:top-16 md:left-80 absolute top-24 left-12">

                        <div className="flex flex-col gap-[24px] pt-[48px] pl-[40px]">
                            <h1 className="font-anton text-[24px]">Blendyd</h1>
                            <p className="font-abel text-[20px] leading-[24px]">
                                How can we streamline OUR mobile job application so candidates apply with ease?
                            </p>
                        </div>

                        <button className="text-white font-anton font-bold text-center text-[24px]">
                            View Case Study
                        </button>
                    </div>
                </div>


                {/* 2nd project */}
                <div className='relative mb-[32px]'>
                    <div className='flex justify-start'>
                        <Image
                            src={project2}
                            width={1200}
                            height={1200}
                            alt='Lets start image'
                            className='w-[767px] h-[526.64px]'
                        />
                    </div>
                    <div className='bg-lightBlue w-[280px] h-[300px] lg:w-[380px] lg:h-[400px] text-white absolute top-24 left-12 lg:top-16 lg:right-80 flex flex-col justify-between pb-[48px]'>
                        <div className='flex flex-col gap-[24px] pt-[48px] pl-[40px]'>
                            <h1 className='font-anton text-[24px] '>Blendyd  </h1>
                            <p className='font-abel text-[20px] leading-[24px]'>How can we
                                streamline OUR mobile job application so candidates apply with ease?</p>
                        </div>

                        <button className='text-white font-anton font-bold text-center text-[24px]'>View Case Study</button>
                    </div>
                </div>

                {/* 3rd project */}
                <div className='flex  flex-col md:flex-row items-end gap-[25px] mb-[32px]'>
                    <div className='flex  flex-col lg:flex-row gap-[25px]'>
                        <Image
                            src={project3}
                            width={1200}
                            height={1200}
                            alt='Lets start image'
                            className='w-[480px] h-[600px] object-cover'
                        />
                        <div className='bg-olive w-[380px] h-[400px] text-white  flex flex-col justify-between pb-[48px] mt-9'>
                            <div className='flex flex-col gap-[24px] pt-[48px] pl-[20px] xl:pl-[40px]'>
                                <h1 className='font-anton text-[24px] '>Blendyd  </h1>
                                <p className='font-abel text-[20px] leading-[24px]'>How can we
                                    streamline OUR mobile job application so candidates apply with ease?</p>
                            </div>

                            <button className='text-white font-anton font-bold text-center text-[24px]'>View Case Study</button>
                        </div>
                    </div>
                    <Image
                        src={project4}
                        width={1200}
                        height={1200}
                        alt='Lets start image'
                        className='w-[367.5px] h-[668px] object-cover'
                    />
                </div>

                {/* 4th project */}
                <div className='lg:flex flex-row-reverse items-center mb-[32px] gap-[24px]'>
                    <div className='flex justify-end'>
                        <Image
                            src={project5}
                            width={1200}
                            height={1200}
                            alt='Lets start image'
                            className='w-[767px] h-[526.64px]'
                        />
                    </div>
                    <div className='bg-primary w-[380px] h-[400px]   flex flex-col justify-between pb-[48px]'>
                        <div className='flex flex-col gap-[24px] pt-[48px] pl-[40px]'>
                            <h1 className='font-anton text-[24px] '>Blendyd  </h1>
                            <p className='font-abel text-[20px] leading-[24px]'>How can we
                                streamline OUR mobile job application so candidates apply with ease?</p>
                        </div>

                        <button className=' font-anton font-bold text-center text-[24px]'>View Case Study</button>
                    </div>
                </div>

                {/* 5th project */}
                <div className='lg:flex flex-row items-center mb-[32px] gap-[24px]'>
                    <div className='flex justify-end'>
                        <Image
                            src={project6}
                            width={1200}
                            height={1200}
                            alt='Lets start image'
                            className='w-[767px] h-[526.64px]'
                        />
                    </div>
                    <div className='bg-brown text-white w-[380px] h-[400px]   flex flex-col justify-between pb-[48px]'>
                        <div className='flex flex-col gap-[24px] pt-[48px] pl-[40px]'>
                            <h1 className='font-anton text-[24px] '>Blendyd  </h1>
                            <p className='font-abel text-[20px] leading-[24px]'>How can we
                                streamline OUR mobile job application so candidates apply with ease?</p>
                        </div>

                        <button className=' font-anton font-bold text-center text-[24px]'>View Case Study</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProjects2;