import logo from '@/assets/jodi barcode logo.png'
import facebook from '@/assets/facebook.png'
import instagram from '@/assets/instagram.png'
import twitter from '@/assets/twitter.png'
import linkedin from '@/assets/linkedin.png'
import Image from 'next/image'

const Footer = () => {
    const today = new Date()
    return (
        <div className='bg-black h-auto lg:h-[530px]'>
            <div className="flex flex-col lg:flex-row gap-[12px] lg:gap-[82px]  border-b border-white h-[430px] lg:h-[368px]">
                <div className='flex flex-col items-center lg:items-start lg:flex-row gap-[22px] lg:gap-[82px]'>
                    <Image
                        src={logo}
                        width={200}
                        height={200}
                        alt='Jodi Logo Image'
                        className='w-[184px] h-[200px] md:w-[150px] md:h-[150px] lg:w-[310px] lg:h-[317px] object-contain  pl-0 lg:pl-[54px] pt-[29px]'
                    />

                    {/* Text and buttons */}
                    <div className='space-y-4 flex flex-col items-center lg:flex-none'>
                        <h1 className='font-anton text-[26px] lg:text-[96px] text-white uppercase'>UX designer & ARTIST.</h1>
                        <div className='flex  items-center gap-[18px] pl-0 lg:pl-9'>
                            <button className={`w-[106px] h-[32px] lg:w-[186px] lg:h-[60px] rounded-[40px] border border-primary text-white  text-[16px] lg:text-[20px] font-abel uppercase`}>
                                Projects
                            </button>
                            <button className={`w-[106px] h-[32px] lg:w-[186px] lg:h-[60px] rounded-[40px] border border-primary text-white text-[16px] lg:text-[20px] font-abel uppercase`}>
                                Email
                            </button>
                            <button className={`w-[106px] h-[32px] lg:w-[186px] lg:h-[60px] rounded-[40px] border border-primary text-white text-[16px] lg:text-[20px] font-abel uppercase`}>
                                About
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social links */}
                <div className='flex items-end justify-center lg:justify-end pb-0 lg:pb-[80px]'>
                    <div className='flex gap-[15px] pt-[30px] justify-end pl-[]'>
                        <div className='bg-zinc-800 rounded-full p-[15px]'>
                            <Image
                                src={facebook}
                                width={200}
                                height={200}
                                alt='Facebook'
                                className='w-[20px] h-[20px] object-contain'
                            />
                        </div>
                        <div className='bg-zinc-800 rounded-full p-[15px]'>
                            <Image
                                src={twitter}
                                width={200}
                                height={200}
                                alt='Twitter'
                                className='w-[20px] h-[20px] object-contain'
                            />
                        </div>
                        <div className='bg-zinc-800 rounded-full p-[15px]'>
                            <Image
                                src={instagram}
                                width={200}
                                height={200}
                                alt='Instagram'
                                className='w-[20px] h-[20px] object-contain'
                            />
                        </div>
                        <div className='bg-zinc-800 rounded-full p-[15px]'>
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
            </div>
            <p className='text-[16px] font-abel py-6 text-center text-white uppercase'>© {today.getFullYear()} jodi. All rights reserved</p>
        </div>
    )
}

export default Footer
