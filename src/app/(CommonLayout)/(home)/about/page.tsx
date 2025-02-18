import Hero from '@/components/Home/Hero'
import AnimatedWelcome from '@/components/Home/AnimatedWelcome'

export const metadata = {
    title: 'About Jodi Swaby – UX Designer & Artist',
    description: "Discover Jodi Swaby’s journey as a UX designer and artist. Explore her passion for crafting immersive digital and physical experiences that inspire, connect, and challenge the ordinary.",
    openGraph: {
        title: 'About Jodi Swaby – UX Designer & Artist',
        description: "Discover Jodi Swaby’s journey as a UX designer and artist. Explore her passion for crafting immersive digital and physical experiences that inspire, connect, and challenge the ordinary.",
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
