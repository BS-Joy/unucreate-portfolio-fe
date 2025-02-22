'use client'
import skyImg from '@/assets/designsky.png'
import { motion } from "motion/react"
import arrow from '@/assets/projectsArrow.png'
import projectImg from '@/assets/myProjects.png'
import Image from 'next/image'
import DoubleButton from '@/components/Shared/DoubleButton'
import OtherPagesLetsChat from '@/components/OtherPages/OtherPagesLetsChat'
import { useRouter } from "next/navigation";
import myProjects from '@/assets/myProjects.png'

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
        <div className='px-[10px] lg:px-[70px] mt-14 mb-12'>
            {/* Upper image and heading */}
            {/* <div className='relative w-full px-4 xl:px-10 mt-10'>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src={skyImg}
                        width={200}
                        height={200}
                        alt='Sky Image'
                        className='w-full max-w-screen-xl lg:max-w-[930px] xl:max-w-[1240px] mx-auto md:h-[60px] lg:h-[148px] absolute right-5 top-0 pl-12 md:pl-16 lg:pl-0'
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='w-[330px] max-w-full sm:w-[600px] md:w-[900px] xl:w-[1258px] h-[54px] lg:h-[144px] rounded-[10px] lg:rounded-[20px] bg-primary flex items-center justify-center z-10 absolute top-6 lg:top-10 px-4 lg:px-16'
                >
                    <h1 className='text-2xl lg:text-[75px] text-olive font-anton'>My Projects</h1>
                </motion.div>
            </div> */}
            <div className='px-4 md:px-10 xl:px-0'>
                <div
                    className="w-full md:w-2/3 mx-auto lg:w-full h-[90px] md:h-[128px] lg:h-[228px] bg-cover bg-center flex items-center justify-center rounded-[20px] px-5 xl:px-0"
                    style={{ backgroundImage: `url(${skyImg.src})` }} // Set the sky image as background
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-[338px] md:w-[840px] lg:w-[920px] xl:w-[1258px] h-[54px] lg:h-[144px] rounded-[10px] lg:rounded-[20px] bg-primary flex items-center justify-center mx-auto "
                    >
                        <h1 className="text-[20px] md:text-xl lg:text-5xl xl:text-[75px] text-olive font-anton text-center">
                            My Projects
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Content and images */}
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-[104px] lg:gap-[134px] max-w-[1298px] mx-auto pt-[20px] md:pt-[90px] lg:pt-[250px] relative left-0 lg:left-2'>
                <div className='max-w-[304px]'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='space-y-[3px] mb-0 lg:mb-[38px]'>
                        <h1 className='font-anton text-secondary text-[30px] lg:text-[40px]'>My Projects </h1>
                        <p className='font-abel text-[14px] lg:text-[24px] text-olive max-w-[626px]'>User Experience (UX) Design for digital platforms
                            User Research and Usability Testing
                            Wireframing, Prototyping, and Interaction Design
                            Mobile and Web App Design
                            Service Design and Journey Mapping
                            UX Writing and Microcopy Strateg</p>
                    </motion.div>
                </div>

                {/* Images */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='mx-3 lg:mx-0'>


                    {/* 1 image */}
                    <div className='mb-20 px-10 lg:px-0'>
                        <Image
                            src={projects[0].image}
                            width={200}
                            height={200}
                            alt='Lets start image'
                            className='w-[837px] object-contain  rounded-[30px] mb-[8px]'
                        />
                        <div className='space-y-[3px] mb-[8px]'>
                            <h1 className='font-anton text-secondary text-[35px]'>{projects[0].title}</h1>
                            <p className='font-abel text-sm text-olive max-w-[859px]'>{projects[0].description}</p>
                        </div>
                        <div onClick={() => router.push(`/projects/${projects[0].id}`)}>
                            <DoubleButton text='Read More' bgColor='bg-secondary' textColor='text-[#333333]' />
                        </div>
                    </div>

                    {/* 2 image */}
                    <div className='flex flex-row-reverse items-center gap-[19px] mb-20 px-5'>
                        {projects.map((project, index) => (
                            index !== 0 &&
                            <div key={project.id}>
                                <Image
                                    src={project.image}
                                    width={200}
                                    height={200}
                                    alt='Lets start image'
                                    className='w-[420px] object-contain rounded-[30px]'
                                />
                                <div className='space-y-[3px] mb-3'>
                                    <h1 className='font-anton text-secondary text-[24px] lg:text-[35px]'>{project.title}</h1>
                                    <p className='font-abel text-sm text-olive max-w-[859px]'>{project.description}</p>
                                </div>
                                <div onClick={() => router.push(`/projects/${project.id}`)}>
                                    <DoubleButton text='Read More' bgColor='bg-secondary' textColor='text-[#333333]' />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default ProjectsPage
