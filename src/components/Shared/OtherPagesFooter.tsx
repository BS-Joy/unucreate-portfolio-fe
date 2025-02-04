import facebook from '@/assets/facebook.png'
import instagram from '@/assets/instagram.png'
import twitter from '@/assets/twitter.png'
import linkedin from '@/assets/linkedin.png'
import Image from 'next/image'

const OtherPagesFooter = () => {
    const today = new Date()
    return (
        <div className='bg-brown h-[530px] '>
            <h1 className='font-fascinate text-[180px] text-center text-white pt-[60px] uppercase'>UX designer.</h1>
            <div className='flex items-center justify-center gap-[36px]
            border-b border-white pb-[60px]'>
                <div className='w-[425px] h-[90px] rounded-full border border-white flex items-center justify-center text-white text-[30px] font-dmSans'>
                    <h1>CALL - 425-300-5566</h1>
                </div>
                <div className='w-[545px] h-[90px] rounded-full border border-white flex items-center justify-center text-white text-[30px] font-dmSans'>
                    <h1 className='uppercase'>Email - jodi@gmail.com</h1>
                </div>
                {/* Social links */}
                <div className='flex  gap-[15px]'>
                    <div className='bg-amber-600 rounded-full p-[15px]'>
                        <Image
                            src={facebook}
                            width={200}
                            height={200}
                            alt='Facebook'
                            className='w-[20px] h-[20px] object-contain'
                        />
                    </div>
                    <div className='bg-amber-600 rounded-full p-[15px]'>
                        <Image
                            src={twitter}
                            width={200}
                            height={200}
                            alt='Twitter'
                            className='w-[20px] h-[20px] object-contain'
                        />
                    </div>
                    <div className='bg-amber-600 rounded-full p-[15px]'>
                        <Image
                            src={instagram}
                            width={200}
                            height={200}
                            alt='Instagram'
                            className='w-[20px] h-[20px] object-contain'
                        />
                    </div>
                    <div className='bg-amber-600 rounded-full p-[15px]'>
                        <Image
                            src={linkedin}
                            width={200}
                            height={200}
                            alt='Linkedin'
                            className='w-[20px] h-[20px] object-contain'
                        />
                    </div>
                </div>
            </div>
            <p className='text-[16px] font-dmSans text-center text-white flex items-center justify-center pt-2'>© {today.getFullYear()} jodi. All rights reserved</p>
        </div>
    )
}

export default OtherPagesFooter
