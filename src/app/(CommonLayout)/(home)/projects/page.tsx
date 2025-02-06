'use client'
import arrow from '@/assets/projectsArrow.png'
import projectImg from '@/assets/myProjects.png'
import Image from 'next/image'
import DoubleButton from '@/components/Shared/DoubleButton'
import OtherPagesLetsChat from '@/components/OtherPages/OtherPagesLetsChat'
import { useRouter } from "next/navigation";

const projects = [
    {
        id: 1,
        title: 'The Giver – UX Research for Anonymous Gift-Giving Platform',
        description: 'The Giver is an innovative, anonymous gift-giving platform designed to streamline charitable donations with a seamless user experience.',
        image: projectImg,
        myRole: 'Lead UX Researcher. I spearheaded the entire research process, including defining user personas, conducting in-depth interviews, analyzing data, and presenting actionable insights to the product and development teams.',
        process: 'User Interviews: Conducted 25 interviews with potential donors to gather insights on motivations and preferences.Competitive Analysis: Evaluated 10 platforms to identify user experience gaps.Personas & Journey Mapping: Created detailed user personas and journey maps to illustrate the donor experience.Synthesis & Reporting: Delivered a comprehensive report with clear recommendations.',
        deliverables: 'User Personas, User Journey Maps, Research Report',
        outcome: 'Aligned stakeholders on the app’s unique value proposition (social media integration).Informed strategic design decisions, including customizable donation flows and privacy controls.Established a user-driven roadmap, receiving positive early feedback on the platform’s ease of use.'
    },
    {
        id: 2,
        title: 'Blendyd Drive – UX/UI Design for Blendyd Studios',
        description: 'Blendyd Studios is a software development firm modernizing recruitment in the trucking industry using AI and Machine Learning.',
        image: projectImg,
        myRole: 'Lead UX Researcher. I spearheaded the entire research process, including defining user personas, conducting in-depth interviews, analyzing data, and presenting actionable insights to the product and development teams.',
        process: 'User Interviews: Conducted 25 interviews with potential donors to gather insights on motivations and preferences.Competitive Analysis: Evaluated 10 platforms to identify user experience gaps.Personas & Journey Mapping: Created detailed user personas and journey maps to illustrate the donor experience.Synthesis & Reporting: Delivered a comprehensive report with clear recommendations.',
        deliverables: 'User Personas, User Journey Maps, Research Report',
        outcome: 'Aligned stakeholders on the app’s unique value proposition (social media integration).Informed strategic design decisions, including customizable donation flows and privacy controls.Established a user-driven roadmap, receiving positive early feedback on the platform’s ease of use.'
    },
    {
        id: 3,
        title: 'Bumble x Jodi Swaby Art Collaboration',
        description: 'In partnership with Bumble, I explored the nuances of dating through an art project titled “The Dance of Dating.”',
        image: projectImg,
        myRole: 'Lead UX Researcher. I spearheaded the entire research process, including defining user personas, conducting in-depth interviews, analyzing data, and presenting actionable insights to the product and development teams.',
        process: 'User Interviews: Conducted 25 interviews with potential donors to gather insights on motivations and preferences.Competitive Analysis: Evaluated 10 platforms to identify user experience gaps.Personas & Journey Mapping: Created detailed user personas and journey maps to illustrate the donor experience.Synthesis & Reporting: Delivered a comprehensive report with clear recommendations.',
        deliverables: 'User Personas, User Journey Maps, Research Report',
        outcome: 'Aligned stakeholders on the app’s unique value proposition (social media integration).Informed strategic design decisions, including customizable donation flows and privacy controls.Established a user-driven roadmap, receiving positive early feedback on the platform’s ease of use.'
    },
]


const ProjectsPage = () => {
    const router = useRouter();
    return (
        <div className='px-[10px] lg:px-[70px] mt-14'>
            {/* My Latest Projects Hero section */}
            <div className='relative mb-[100px]'>
                <h3 className='font-belle text-[50px] lg:text-[100px] text-secondary uppercase'>Projects</h3>
                <h1 className='uppercase text-olive font-fascinate text-[70px] lg:text-[200px] max-w-[1300px] leading-none lg:leading-[200px]'>My latest projects</h1>
                <Image
                    src={arrow}
                    width={200}
                    height={200}
                    alt='Lets start image'
                    className='w-[173px] h-[38px] lg:w-[273px] lg:h-[138px] object-contain absolute right-16 top-5 lg:-right-6 lg:-top-6'
                />
            </div>

            {/* Projects */}
            <div className='flex flex-col gap-[175px] lg:gap-[375px] mb-[250px] lg:mb-[450px]'>
                {projects.map((project, index) => (
                    <div key={project.id} className={`lg:w-[1300px] lg:h-[860px] pl-[5px] lg:pl-[40px] relative 
                        ${index % 2 === 0 ? 'bg-lightBlue' : 'bg-secondary'}`}>
                        <h1 className='font-fascinate text-[30px] lg:text-[80px] leading-none lg:leading-[80px] max-w-[344px] lg:max-w-[1044px] pt-[60px]'>{project.title}</h1>
                        <p className='font-dmSans leading-none lg:leading-[80px] text-[10px] lg:text-[20px] pt-[20px] uppercase max-w-xs lg:max-w-4xl'>{project.description}</p>
                        <div className='pt-[40px]' onClick={() => router.push(`/projects/${project.id}`)}>
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
