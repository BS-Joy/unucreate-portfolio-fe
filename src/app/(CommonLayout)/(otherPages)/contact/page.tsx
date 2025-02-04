import arrow from '@/assets/lets-chat-arrow.png'
import linkedin from '@/assets/connect-linkedin.png'
import instagram from '@/assets/connect-instagram.png'
import Image from 'next/image'

const ContactPage = () => {
    return (
        <div className="px-[70px] ">
            <div className='relative'>
                <h3 className='font-belle text-[100px] text-secondary uppercase'>Contact</h3>
                <h1 className='uppercase text-brown font-fascinate text-[200px] max-w-[640px] leading-[200px]'>Let's connect:</h1>
                <Image
                    src={arrow}
                    width={200}
                    height={200}
                    alt='Lets start image'
                    className='w-[273px] h-[138px] object-contain absolute -right-6 -top-6'
                />
            </div>

            {/* Form */}
            <div className='w-[1300px] bg-lightBlue py-[40px] mb-32 mt-[100px]'>
                <div className='flex items-center justify-center flex-col gap-[20px]'>
                    <input type="text"
                        placeholder='NAME'
                        className='w-[1220px] h-[60px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold'
                    />
                    <input type="text"
                        placeholder='EMAIL'
                        className='w-[1220px] h-[60px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold'
                    />
                    <textarea
                        placeholder='MESSAGE'
                        className='w-[1220px] h-[160px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold pt-[20px]'
                    />
                    <div className='relative'>
                        <button className={`w-[1200px] h-[80px] bg-brown rounded-[40px] flex items-center justify-center uppercase font-dmSans text-primary text-[20px] z-10 relative`}>
                            send message
                        </button>
                        <button className='w-[1200px] h-[80px] bg-primary rounded-[40px] flex items-center justify-center uppercase font-dmSans text-olive text-[20px] absolute -bottom-2 left-2'>

                        </button>
                    </div>
                </div>
            </div>

            {/* Social cards */}
            <div className='flex items-center gap-[20px] pb-[100px]'>
                <div className='w-[640px] h-[160px] bg-lightBlue flex items-center gap-[28px] pl-[40px] py-[40px]'>
                    <div className='bg-white rounded-full w-[50px] h-[50px]'>
                        <Image
                            src={linkedin}
                            width={200}
                            height={200}
                            alt='Lets start image'
                            className='w-[40px] h-[40px]'
                        />
                    </div>
                    <h1 className='font-belle text-[100px] uppercase'>Linkedin</h1>
                </div>
                <div className='w-[640px] h-[160px] bg-secondary flex items-center gap-[28px] pl-[40px] py-[40px]'>
                    <div className='bg-white rounded-full w-[50px] h-[50px]'>
                        <Image
                            src={instagram}
                            width={200}
                            height={200}
                            alt='Lets start image'
                            className='w-[40px] h-[40px]'
                        />
                    </div>
                    <h1 className='font-belle text-[100px] uppercase'>Instagram</h1>

                </div>
            </div>
        </div>
    )
}

export default ContactPage
