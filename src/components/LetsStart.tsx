import letsStart from '@/assets/lets-start.png'

const LetsStart = () => {
    return (
        <div
            className="mt-[400px] mb-32 mx-auto max-w-[1212px] h-[808px] bg-cover bg-center"
            style={{ backgroundImage: `url(${letsStart.src})` }}
        >
            <div className='flex items-center justify-center h-screen'>
                <div className='flex flex-col items-center justify-center gap-[90px]'>
                    <h1 className='font-abel text-[100px]'>Let’s Start a Project </h1>
                    <div className='relative'>
                        <button className='w-[280px] h-[80px] bg-secondary rounded-[40px] flex items-center justify-center uppercase font-dmSans text-olive text-[20px] z-10 relative'>
                            Start Project
                        </button>
                        <button className='w-[280px] h-[80px] bg-primary rounded-[40px] flex items-center justify-center uppercase font-dmSans text-olive text-[20px] absolute -bottom-2 left-2'>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LetsStart
