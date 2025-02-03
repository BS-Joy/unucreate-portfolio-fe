import logo from '@/assets/jodi barcode logo.png'
import facebook from '@/assets/facebook.png'
import instagram from '@/assets/instagram.png'
import twitter from '@/assets/twitter.png'
import linkedin from '@/assets/linkedin.png'
import Image from 'next/image'

const Footer = () => {
    const today = new Date()
    return (
        <div className='bg-black h-[530px] '>
            <div className="flex gap-[82px]  border-b border-white pb-[22px]">
                <Image
                    src={logo}
                    width={200}
                    height={200}
                    alt='Jodi Logo Image'
                    className='w-[310px] h-[317px] object-contain  pl-[54px] pt-[29px]'
                />
                <div className='space-y-4'>
                    <h1 className='font-anton text-[96px] text-white'>UX designer & ARTIST.</h1>
                    <div className='flex items-center gap-[18px] pl-9'>
                        <button className={`w-[186px] h-[60px] rounded-[40px] border border-primary text-white  text-[20px] font-dmSans`}>
                            Projects
                        </button>
                        <button className={`w-[186px] h-[60px] rounded-[40px] border border-primary text-white  text-[20px] font-dmSans`}>
                            Email
                        </button>
                        <button className={`w-[186px] h-[60px] rounded-[40px] border border-primary text-white  text-[20px] font-dmSans`}>
                            About
                        </button>
                    </div>


                </div>
                {/* Social links */}
                <div className='flex items-end gap-[15px] pt-[30px] justify-end pb-[80px]'>
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
            <p className='text-[16px] font-dmSans pt-[26.84] text-center text-white'>© {today.getFullYear()} jodi. All rights reserved</p>
        </div>
    )
}

export default Footer
