import silverBall from '@/assets/chatBall.png'
import Image from 'next/image'

const LetsChat = () => {
    return (
        <div className='mx-auto max-w-[1210px] flex items-center mb-[78px]'>
            <h1 className='uppercase text-olive font-anton text-[200px] max-w-[640px] leading-[200px]'>Let's Chat</h1>
            <div className='relative'>
                <Image
                    src={silverBall}
                    width={200}
                    height={200}
                    alt='Lets start image'
                    className='w-[640px] h-[640px]'
                />
                <div className='absolute top-[25%] left-[60px] space-y-[20px]'>
                    <input type="text"
                        placeholder='NAME'
                        className='w-[460px] h-[60px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold'
                    />
                    <input type="text"
                        placeholder='EMAIL'
                        className='w-[460px] h-[60px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold'
                    />
                    <textarea
                        placeholder='MESSAGE'
                        className='w-[460px] h-[160px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold pt-[20px]'
                    />
                </div>
            </div>
        </div>
    )
}

export default LetsChat