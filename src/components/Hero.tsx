import heroImg from '@/assets/hero image.png'
import barcodeLogo from '@/assets/jodi barcode logo.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <h1 className="font-anton text-[20px] flex justify-end pr-[89px]">UX designer & artist</h1>

            <div className='flex items-center justify-center pt-[20px] relative'>
                <Image
                    src={heroImg}
                    width={1300}
                    height={1300}
                    alt='Hero Image'
                    className='w-[1300px] h-[853px]'
                />

                <div className='absolute top-[25%] left-[30%]'>
                    <Image
                        src={barcodeLogo}
                        width={1300}
                        height={1300}
                        alt='Hero Image'
                        className='w-[390.1px] h-[391.63px] object-contain '
                    />
                </div>
                <h1 className='text-[20px] font-anton text-white absolute top-[73%] left-[30%] max-w-[396px] text-center'>Building Engaging, Inclusive Experiences through UX, Innovation, and Storytelling</h1>
            </div>
        </div>
    )
}

export default Hero
