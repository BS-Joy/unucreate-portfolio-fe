import letsStart from '@/assets/lets-start.png'
import DoubleButton from '../Shared/DoubleButton'

const LetsStart = () => {
    return (
        <div
            className="mt-[400px] mb-32  max-w-[800px] lg:max-w-[1212px] h-[308px] lg:h-[808px] mx-2 lg:mx-auto bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${letsStart.src})` }}
        >
            <div className='flex flex-col items-center justify-center gap-[50px] text-center'>
                <h1 className='font-abel text-[50px] lg:text-[100px]'>Let’s Start a Project</h1>
                <DoubleButton text='Start Project' bgColor='bg-secondary' textColor='text-olive' />
            </div>
        </div>

    )
}

export default LetsStart
