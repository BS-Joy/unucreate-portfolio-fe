import projectImg from '@/assets/myProjects.png'
import ProjectDetails from '@/components/OtherPages/ProjectDetails'

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


const ProjectsDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const project = projects.find(project => project.id === parseInt(id))

    if (!project) {
        return (
            <div>
                <h1>Project not found</h1>
            </div>
        )
    }
    return (
        <div>
            <ProjectDetails project={project} projects={projects} />
        </div>
    )
}

export default ProjectsDetailsPage