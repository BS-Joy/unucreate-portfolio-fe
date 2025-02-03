import silverBallImg from '@/assets/silver ball.png'
import jodiImg from '@/assets/jodi about image.png'
import instagram from '@/assets/welcomeInstagram.png'
import mail from '@/assets/welcomeMail.png'
import linkedin from '@/assets/welcomeLinkedin.png'
import Image from 'next/image'

const Welcome = () => {
    return (
        <div className='flex justify-center items-center gap-[109.69px] my-[123.79]'>
            <div className='flex flex-col ml-44'>
                <div className='relative mb-[70px]'>
                    <Image
                        src={silverBallImg}
                        width={200}
                        height={200}
                        alt='Silver ball Image'
                        className='w-[280.81px] h-[290.01px]'
                    />
                    <div className='bg-primary w-[509.28px] h-[192px] rounded-[20px] flex items-center justify-center absolute top-28 -right-20'>
                        <h1 className='text-olive font-anton text-[64px] uppercase'>Welcome</h1>
                    </div>
                </div>
                <h1 className='text-[#202020] font-abel text-[20px] max-w-xs mb-[50px]'>
                    I’m Jodi Swaby, an NYC-based User experience designer AnD artist. I transform ideas into immersive digital and physical experiences that challenge the ordinary and spark curiosity. Rooted in user-centered design, I blend Data insights, play, and innovation to craft interactions that inspire, connect, and reimagine the human experience.</h1>

                <div className='relative'>
                    <button className='w-[280.81px] h-[80px] bg-secondary rounded-[40px] flex items-center justify-center uppercase font-dmSans text-olive text-[20px] z-10 relative'>
                        Start Project
                    </button>
                    <button className='w-[280.81px] h-[80px] bg-primary rounded-[40px] flex items-center justify-center uppercase font-dmSans text-olive text-[20px] absolute -bottom-2 left-2'>

                    </button>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center relative'>
                <Image
                    src={jodiImg}
                    width={200}
                    height={200}
                    alt='Jodi About Image'
                    className='w-[610px] h-[910px] object-contain'
                />
                <div className='flex items-center gap-[6.62px] absolute bottom-24'>
                    <Image
                        src={instagram}
                        width={30}
                        height={30}
                        alt='Jodi Logo Image'
                        className='w-[44.17px] h-[35.33px] object-contain'
                    />
                    <Image
                        src={mail}
                        width={30}
                        height={30}
                        alt='Jodi Logo Image'
                        className='w-[44px] h-[35px] object-contain'
                    />
                    <Image
                        src={linkedin}
                        width={30}
                        height={30}
                        alt='Jodi Logo Image'
                        className='w-[44.17px] h-[35.33px] object-contain'
                    />
                </div>
            </div>
        </div>
    )
}

export default Welcome
