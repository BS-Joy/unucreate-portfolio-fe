import skyImg from '@/assets/designsky.png'
import jodiBarcode from '@/assets/design-jodi-barcode.png'
import silverBall from '@/assets/silver ball.png'
import designing1 from '@/assets/designing1.png'
import designing2 from '@/assets/designing2.png'
import Image from 'next/image'

const DesignForTheHuman = () => {
    return (
        <div className="mx-auto max-w-[1346px] mb-56">
            {/* Upper image and heading */}
            <div className='relative'>
                <Image
                    src={skyImg}
                    width={200}
                    height={200}
                    alt='Sky Image'
                    className='w-[1240px] h-[148px] absolute right-5 top-0'
                />
                <div className='w-[1258px] h-[144px] rounded-[20px] bg-primary flex items-center justify-center z-10 absolute top-10 right-16'>
                    <h1 className='text-[75px] text-olive font-anton'>Designing for the Human Experience</h1>
                </div>
            </div>

            {/* Content and images */}
            <div className='flex gap-[100px] relative top-56 left-24'>
                {/* Content */}
                <div>
                    <div className='space-y-[3px] mb-[38px]'>
                        <h1 className='font-anton text-secondary text-[40px]'>My Approach </h1>
                        <p className='font-abel text-[24px] text-olive max-w-[626px]'>Every interaction tells a story. My work is rooted in understanding the needs, emotions, and behaviors that shape how people experience the world.</p>
                    </div>
                    <div className='space-y-[3px] mb-[30px]'>
                        <h1 className='font-anton text-lightBlue text-[40px]'>Insight</h1>
                        <p className='font-abel text-[24px] text-olive max-w-[626px]'>Empathetic research and data-driven analysis to understand user needs and motivations. I uncover deep insights through user interviews, competitive analysis, and data synthesis, which form the foundation of every project.</p>
                    </div>
                    <div className='space-y-[3px] mb-[30px]'>
                        <h1 className='font-anton text-lightBlue text-[40px]'>Play</h1>
                        <p className='font-abel text-[24px] text-olive max-w-[626px]'>Creative exploration through sketching, prototyping, and testing ideas. I embrace a playful, iterative process, encouraging experimentation to discover innovative solutions that resonate with users.</p>
                    </div>
                    <div className='space-y-[3px] mb-[21px]'>
                        <h1 className='font-anton text-lightBlue text-[40px]'>Innovation</h1>
                        <p className='font-abel text-[24px] text-olive max-w-[626px]'>High-fidelity designs and seamless collaboration for impactful solutions. I craft polished, responsive interfaces and ensure a smooth handoff to development, focusing on delivering memorable, user-friendly experiences.</p>
                    </div>
                    <Image
                        src={silverBall}
                        width={200}
                        height={200}
                        alt='Jodi Logo Image'
                        className='w-[176px] h-[185.41px] object-contain'
                    />
                </div>
                {/* Image */}
                <div className=''>
                    <Image
                        src={jodiBarcode}
                        width={200}
                        height={200}
                        alt='Jodi Barcode Image'
                        className='w-[322px] h-[328.31px] object-contain mb-[80.69]'
                    />
                    <div className='flex items-center justify-center relative'>
                        <Image
                            src={designing1}
                            width={200}
                            height={200}
                            alt='Jodi Logo Image'
                            className='w-[387.78px] h-[310.77px] object-contain absolute top-0 -left-28'
                        />
                        <Image
                            src={designing2}
                            width={200}
                            height={200}
                            alt='Jodi Logo Image'
                            className='w-[271px] h-[363px] object-contain absolute -bottom-80 -right-14'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignForTheHuman