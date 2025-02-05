import facebook from '@/assets/facebook.png'
import instagram from '@/assets/instagram.png'
import twitter from '@/assets/twitter.png'
import linkedin from '@/assets/linkedin.png'
import Image from 'next/image'

const OtherPagesFooter = () => {
    const today = new Date()
    return (
        <div className='bg-brown h-full lg:h-[530px]'>
            <h1 className='font-fascinate text-[40px] lg:text-[180px] text-center text-white pt-[60px] uppercase'>UX designer.</h1>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-[16px] lg:gap-[36px]
            border-b border-white pb-[60px]'>
                <div className='w-[125px] h-[30px] lg:w-[425px] lg:h-[90px] rounded-full border border-white flex items-center justify-center text-white text-[10px] lg:text-[30px] font-dmSans'>
                    <h1>CALL - 425-300-5566</h1>
                </div>
                <div className='w-[125px] h-[30px] lg:w-[425px] lg:h-[90px] rounded-full border border-white flex items-center justify-center text-white text-[8px] lg:text-[30px] font-dmSans'>
                    <h1 className='uppercase'>Email - jodi@gmail.com</h1>
                </div>
                {/* Social links */}
                <div className='flex  gap-[10px] lg:gap-[15px]'>
                    <div className='bg-[rgba(255,255,255,0.3)] backdrop-blur-lg shadow-md shadow-[rgba(0,0,0,0.1)] rounded-full p-[5px] lg:px-[15px] lg:py-[15px] flex items-center justify-center'>
                        <Image
                            src={facebook}
                            width={200}
                            height={200}
                            alt='Facebook'
                            className='w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] object-contain'
                        />
                    </div>
                    <div className='bg-[rgba(255,255,255,0.3)] backdrop-blur-lg shadow-md shadow-[rgba(0,0,0,0.1)] rounded-full p-[5px] lg:px-[15px] lg:py-[15px] flex items-center justify-center'>
                        <Image
                            src={twitter}
                            width={200}
                            height={200}
                            alt='Twitter'
                            className='w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] object-contain'
                        />
                    </div>
                    <div className='bg-[rgba(255,255,255,0.3)] backdrop-blur-lg shadow-md shadow-[rgba(0,0,0,0.1)] rounded-full p-[5px] lg:px-[15px] lg:py-[15px] flex items-center justify-center'>
                        <Image
                            src={instagram}
                            width={200}
                            height={200}
                            alt='Instagram'
                            className='w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] object-contain'
                        />
                    </div>
                    <div className='bg-[rgba(255,255,255,0.3)] backdrop-blur-lg shadow-md shadow-[rgba(0,0,0,0.1)] rounded-full p-[5px] lg:px-[15px] lg:py-[15px] flex items-center justify-center'>
                        <Image
                            src={linkedin}
                            width={200}
                            height={200}
                            alt='Linkedin'
                            className='w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] object-contain'
                        />
                    </div>
                </div>
            </div>
            <p className='text-[16px] font-dmSans text-center text-white flex items-center justify-center pt-2'>© {today.getFullYear()} jodi. All rights reserved</p>
        </div>
    )
}

export default OtherPagesFooter
