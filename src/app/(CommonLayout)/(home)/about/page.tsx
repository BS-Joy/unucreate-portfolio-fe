import jodiAboutImg from '@/assets/about-jodi.png'
import aboutImg1 from '@/assets/about-img1.png'
import aboutImg2 from '@/assets/about-img2.png'
import Image from 'next/image'
import DoubleButton from '@/components/Shared/DoubleButton'
import TheDesignProcess from '@/components/OtherPages/TheDesignProcess'
import OtherPagesLetsChat from '@/components/OtherPages/OtherPagesLetsChat'
import Hero from '@/components/Home/Hero'
import Welcome from '@/components/Home/Welcome'

const AboutPage = () => {
    return (
        <div className='pt-[60px] px-[30px] lg:px-[70px] mb-24 lg:mb-96'>
            <Hero />
            <Welcome />
        </div>
    )
}

export default AboutPage
