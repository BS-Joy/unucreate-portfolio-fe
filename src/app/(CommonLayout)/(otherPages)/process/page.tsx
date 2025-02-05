import TheDesignProcess from '@/components/OtherPages/TheDesignProcess'
import designProcessImg from '@/assets/designProcess.png'
import Image from 'next/image'
import OtherPagesLetsChat from '@/components/OtherPages/OtherPagesLetsChat'

const ProcessPage = () => {
    return (
        <div className='px-[10px] lg:px-[70px] mb-24 lg:mb-96'>
            {/* The Design Process */}
            <TheDesignProcess marginTop='mt-[110px]' />

            <div className='flex items-center justify-center mt-[100px] mb-[182px]'>
                <Image
                    src={designProcessImg}
                    width={200}
                    height={200}
                    alt='Lets start image'
                    className='w-[831px] h-[779px] lg:w-[1031px] lg:h-[979px]'
                />
            </div>

            {/* Let's Chat */}
            <OtherPagesLetsChat />
        </div>
    )
}

export default ProcessPage
