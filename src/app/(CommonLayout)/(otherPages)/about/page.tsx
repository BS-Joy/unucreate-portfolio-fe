import jodiAboutImg from '@/assets/about-jodi.png'
import aboutImg1 from '@/assets/about-img1.png'
import aboutImg2 from '@/assets/about-img2.png'
import Image from 'next/image'
import DoubleButton from '@/components/Shared/DoubleButton'
import TheDesignProcess from '@/components/OtherPages/TheDesignProcess'
import OtherPagesLetsChat from '@/components/OtherPages/OtherPagesLetsChat'

const AboutPage = () => {
    return (
        <div className='pt-[60px] px-[30px] lg:px-[70px] mb-96'>
            <h1 className='text-secondary text-[50px] lg:text-[100px] font-belle uppercase'>about us</h1>
            <h1 className='font-fascinate text-[50px] lg:text-[100px] text-olive pt-[21px] uppercase leading-none lg:leading-[100px] mb-[60px]'>Better Experiences Through UX, Design, and Creative Strategy</h1>

            {/* Image and text */}
            <div className='flex flex-col lg:flex-row items-center justify-center gap-[50px]'>
                {/* Image */}
                <div className='w-[420px] h-[583px] bg-primary flex items-center justify-center'>
                    <Image
                        src={jodiAboutImg}
                        width={200}
                        height={200}
                        alt='Lets start image'
                        className='w-[300px] h-[300px] object-contain'
                    />
                </div>
                {/* Text */}
                <div className='space-y-[30px]'>
                    <h1 className='font-dmSans text-[20px] leading-[40px] uppercase max-w-[830px]'>Hi, I’m Jodi Swaby—an NYC-based Experience Designer and Creative Strategist passionate about crafting joyful, inclusive experiences that elevate everyday interactions. My work blends user-centered design, playful innovation, and a deep appreciation for storytelling, making each project an opportunity to connect, inspire, and delight.</h1>
                    <h1 className='font-dmSans text-[20px] leading-[40px] uppercase max-w-[830px]'>I thrive at the intersection of technology, design, and the arts, where I transform ideas into immersive digital and physical experiences. From designing intuitive mobile apps and creating engaging digital products to leading impactful art collaborations, I bring a unique mix of creativity, strategic thinking, and data-driven insights to every project.</h1>
                </div>
            </div>

            {/* 2 images */}
            <div className='flex flex-col lg:flex-row gap-[53px] relative'>
                <h1 className='text-secondary text-[50px] lg:text-[100px] font-belle uppercase block lg:hidden'>jodi swaby</h1>
                <div className='flex flex-col gap-[73px]'>
                    <Image
                        src={aboutImg1}
                        width={200}
                        height={200}
                        alt='Lets start image'
                        className='w-[860px] h-[300px] lg:h-[600px] object-contain'
                    />
                    <h1 className='text-secondary text-[100px] font-belle uppercase hidden lg:block'>jodi swaby</h1>
                </div>
                <div className='absolute lg:relative -bottom-56'>
                    <DoubleButton text='Start Project' bgColor='bg-brown' textColor='text-primary' />
                </div>
                <Image
                    src={aboutImg2}
                    width={200}
                    height={200}
                    alt='Lets start image'
                    className='w-[440px] lg:w-[640px] h-[340px] lg:h-[640px] object-contain absolute top-60 lg:top-80 -right-0 lg:-right-8'
                />
            </div>

            {/* The Design Process */}
            <TheDesignProcess marginTop='mt-72 lg:mt-56' />

            {/* Let's Chat */}
            <OtherPagesLetsChat />
        </div>
    )
}

export default AboutPage
