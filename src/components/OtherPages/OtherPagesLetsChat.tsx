import arrow from '@/assets/lets-chat-arrow.png'
import Image from 'next/image'
import DoubleButton from '../Shared/DoubleButton'

const OtherPagesLetsChat = () => {
    return (
        <div className='mx-auto max-w-[1210px] flex items-center my-[78px]'>
            <div className='relative'>
                <h3 className='font-belle text-[100px] text-secondary uppercase'>Contact me</h3>
                <h1 className='uppercase text-olive font-fascinate text-[200px] max-w-[640px] leading-[200px]'>Let's Chat</h1>
                <Image
                    src={arrow}
                    width={200}
                    height={200}
                    alt='Lets start image'
                    className='w-[273px] h-[138px] object-contain absolute -right-6 -top-6'
                />
            </div>
            <div className='relative'>
                <div className='w-[640px] h-[640px] rounded-full bg-lightBlue'>

                </div>
                <div className='absolute top-[22%] left-[85px]'>
                    <div className='flex items-center justify-center flex-col gap-[20px]'>
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
                        <div className=''>
                            <DoubleButton text='Send Message' bgColor='bg-brown' textColor='text-primary' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherPagesLetsChat