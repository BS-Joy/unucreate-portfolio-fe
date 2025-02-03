import heroImg from '@/assets/hero image.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <h1 className="font-anton text-[20px] flex justify-end pr-[89px]">UX designer & artist</h1>

            <div className='flex items-center justify-center pt-[20px]'>
                <Image
                    src={heroImg}
                    width={1300}
                    height={1300}
                    alt='Hero Image'
                    className='w-[1300px] h-[853px]'
                />
            </div>
        </div>
    )
}

export default Hero
