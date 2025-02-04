import arrow from '@/assets/projectsArrow.png'
import projectImg from '@/assets/myProjects.png'
import Image from 'next/image'
import DoubleButton from '@/components/Shared/DoubleButton'
import OtherPagesLetsChat from '@/components/OtherPages/OtherPagesLetsChat'

const projects = [
    {
        id: 1,
        title: 'The Giver – UX Research for Anonymous Gift-Giving Platform',
        description: 'The Giver is an innovative, anonymous gift-giving platform designed to streamline charitable donations with a seamless user experience.',
        image: projectImg
    },
    {
        id: 2,
        title: 'Blendyd Drive – UX/UI Design for Blendyd Studios',
        description: 'Blendyd Studios is a software development firm modernizing recruitment in the trucking industry using AI and Machine Learning.',
        image: projectImg
    },
    {
        id: 3,
        title: 'Bumble x Jodi Swaby Art Collaboration',
        description: 'In partnership with Bumble, I explored the nuances of dating through an art project titled “The Dance of Dating.”',
        image: projectImg
    },
]


const ProjectsPage = () => {
    return (
        <div className='px-[70px] mt-14'>
            {/* My Latest Projects Hero section */}
            <div className='relative mb-[100px]'>
                <h3 className='font-belle text-[100px] text-secondary uppercase'>Projects</h3>
                <h1 className='uppercase text-olive font-fascinate text-[200px] max-w-[1300px] leading-[200px]'>My latest projects</h1>
                <Image
                    src={arrow}
                    width={200}
                    height={200}
                    alt='Lets start image'
                    className='w-[184px] h-[70px] object-contain absolute left-64 top-9'
                />
            </div>

            {/* Projects */}
            <div className='flex flex-col gap-[375px] mb-[450px]'>
                {projects.map((project, index) => (
                    <div key={project.id} className={`w-[1300px] h-[860px] pl-[40px] relative 
                        ${index % 2 === 0 ? 'bg-lightBlue' : 'bg-secondary'}`}>
                        <h1 className='font-fascinate text-[80px] leading-[80px] max-w-[1024px] pt-[60px]'>{project.title}</h1>
                        <p className='font-dmSans leading-[40px] text-[20px] pt-[20px] uppercase max-w-4xl'>{project.description}</p>
                        <div className='pt-[40px]'>
                            <DoubleButton text='Read more' bgColor='bg-brown' textColor='text-primary' />
                        </div>

                        <Image
                            src={project.image}
                            width={200}
                            height={200}
                            alt='Lets start image'
                            className='w-[945px] h-[606px] object-contain absolute right-0 -bottom-80'
                        />
                    </div>
                ))}
            </div>

            {/* Let's Chat */}
            <OtherPagesLetsChat />
        </div>
    )
}

export default ProjectsPage
