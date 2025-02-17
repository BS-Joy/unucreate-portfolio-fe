'use client'
import barcode from '@/assets/jodi-barcode-black.png'
import skyImg from '@/assets/lets-start.png'
import Image from 'next/image'

const MyProjects2 = () => {
    return (
        <div>
            {/* Barcode and Projects Heading */}
            <div className='flex  justify-center gap-[80px]'>
                <div className='flex flex-col items-center gap-[15px]'>
                    <Image
                        src={barcode}
                        width={200}
                        height={200}
                        alt='Lets start image'
                        className='w-[257px] h-[291px]'
                    />
                    <h1 className='font-anton text-[16px] text-[#202020]'>UX designer & artist</h1>
                </div>

                <div
                    className="w-[270.81px] lg:w-[860px] h-[271px] bg-cover bg-center flex flex-col pl-44  justify-center relative"
                    style={{ backgroundImage: `url(${skyImg.src})` }} // Set the sky image as background
                >
                    <h1 className='text-[128px]  font-arizonia  text-center'>Projects</h1>

                </div>
            </div>

            {/* Projects */}
            <div>

            </div>
        </div>
    )
}

export default MyProjects2;