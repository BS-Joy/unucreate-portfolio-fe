import letsStart from '@/assets/lets-start.png'
import DoubleButton from '../Shared/DoubleButton'

const LetsStart = () => {
    return (
        <div
            className="mt-[400px] mb-32 mx-auto max-w-[1212px] h-[808px] bg-cover bg-center"
            style={{ backgroundImage: `url(${letsStart.src})` }}
        >
            <div className='flex items-center justify-center h-screen'>
                <div className='flex flex-col items-center justify-center gap-[90px]'>
                    <h1 className='font-abel text-[100px]'>Let’s Start a Project </h1>
                    <DoubleButton text='Start Project' bgColor='bg-secondary' textColor='text-olive' />
                </div>
            </div>
        </div>
    )
}

export default LetsStart
