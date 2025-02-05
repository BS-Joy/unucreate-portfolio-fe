import silverBall from '@/assets/chatBall.png'
import Image from 'next/image'
import DoubleButton from '../Shared/DoubleButton'

const LetsChat = () => {
    return (
        <div className='mx-auto max-w-[1210px] flex flex-col lg:flex-row items-center mb-[78px]'>
            <h1 className='uppercase text-olive font-anton text-[90px] lg:text-[200px] max-w-[640px] leading-[200px]'>Let's Chat</h1>
            <div className='relative'>
                <Image
                    src={silverBall}
                    width={200}
                    height={200}
                    alt='Lets start image'
                    className='w-[350px] h-[400px] lg:w-[640px] lg:h-[640px]'
                />
                <div className='absolute top-[12%] lg:top-[22%] left-[60px] lg:left-[60px]'>
                    <div className='flex items-center justify-center flex-col gap-[20px]'>
                        <input type="text"
                            placeholder='NAME'
                            className='w-[230px] lg:w-[460px] h-[40px] lg:h-[60px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold'
                        />
                        <input type="text"
                            placeholder='EMAIL'
                            className='w-[230px] lg:w-[460px] h-[40px] lg:h-[60px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold'
                        />
                        <textarea
                            placeholder='MESSAGE'
                            className='w-[230px] lg:w-[460px] h-[100px] lg:h-[160px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold pt-[20px]'
                        />
                        <div className=''>
                            <DoubleButton text='Send Message' bgColor='bg-secondary' textColor='text-olive' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LetsChat