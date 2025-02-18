import Hero from '@/components/Home/Hero'
import AnimatedWelcome from '@/components/Home/AnimatedWelcome'

export const metadata = {
    title: 'About',
    description: "Learn more about Jodi's story and mission.",
    openGraph: {
        title: 'About',
        description: "Learn more about Jodi's story and mission.",
        type: 'website',
        url: 'https://unucreate-portfolio-fe.vercel.app/about',
        images: [
            {
                url: 'https://unucreate-portfolio-fe.vercel.app/about-jodi.png',
                width: 800,
                height: 600,
                alt: 'About Page Image',
            },
        ],
    },
}
const AboutPage = () => {
    return (
        <div className='pt-[60px] px-[30px] lg:px-[70px] mb-24 lg:mb-96'>
            <Hero />
            <AnimatedWelcome />
            {/* <Welcome /> */}
        </div>
    )
}

export default AboutPage
