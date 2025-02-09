import Image, { StaticImageData } from "next/image";
import OtherPagesLetsChat from "./OtherPagesLetsChat";
import LetsChat from "../Home/LetsChat";

type Props = {
    id: number;
    title: string;
    description: string;
    image: StaticImageData
    myRole: string;
    process: string;
    deliverables: string;
    outcome: string;
}

const ProjectDetails = ({ project, projects }: { project: Props, projects: Props[] }) => {
    return (
        <div className="px-[10px] lg:px-[70px] mb-24 lg:mb-96 pt-[31px]">
            <div className='w-[1300px] mb-[60px]'>
                <div className="flex items-center justify-center">
                    <h1 className='font-anton text-[#3E403F] text-[30px] lg:text-[64px] leading-none lg:leading-[80px] max-w-[324px] lg:max-w-[1024px] pt-[60px] text-center'>{project.title}</h1>
                </div>
                <p className='font-abel leading-none lg:leading-[24px] text-[10px] lg:text-[20px] pt-[32px] uppercase max-w-xs lg:max-w-7xl pb-[60px]'>{project.description}</p>
                <div className="">
                    <Image
                        src={project.image}
                        width={700}
                        height={700}
                        alt='Project image'
                        className='w-[300px] lg:w-[1300px]  object-contain'
                    />
                </div>
            </div>

            {/* My Role & Process & Methodologies */}
            <div className="space-y-[32px]">
                <div className="space-y-[16px]">
                    <h1 className="uppercase font-anton text-[30px] lg:text-[50px] text-[#3E403F]">My role</h1>
                    <p className='font-abel leading-none lg:leading-[24px] text-[10px] lg:text-[20px] uppercase max-w-4xl'>{project.myRole}</p>
                </div>
                <div className="space-y-[16px]">
                    <h1 className="uppercase font-anton text-[30px] lg:text-[50px] text-[#3E403F]">Process & Methodologies:</h1>
                    <p className='font-abel leading-none lg:leading-[24px] text-[10px] lg:text-[20px] uppercase max-w-4xl'>{project.process}</p>
                </div>
            </div>

            {/* Key deliverables & Outcome & Impact */}
            <div className="flex flex-col lg:flex-row items-start gap-[85px] mt-[40px]">
                <Image
                    src={project.image}
                    width={700}
                    height={700}
                    alt='Lets start image'
                    className='w-[240px] h-[240px] lg:w-[640px] lg:h-[640px] object-cover'
                />
                <div className="space-y-[32px]">
                    <div>
                        <h1 className="uppercase font-anton text-[30px] lg:text-[50px] text-[#3E403F]">Key Deliverables:</h1>
                        <p className='font-abel leading-none lg:leading-[24px] text-[10px] lg:text-[20px] pt-[20px] uppercase max-w-4xl'>{project.deliverables}</p>
                    </div>
                    <div>
                        <h1 className="uppercase font-anton text-[30px] lg:text-[50px] text-[#3E403F]">Outcome & Impact:</h1>
                        <p className='font-abel leading-none lg:leading-[24px] text-[10px] lg:text-[20px] pt-[20px] uppercase max-w-lg'>{project.outcome}</p>
                    </div>
                </div>
            </div>

            {/* Let's Chat */}
            {/* <OtherPagesLetsChat /> */}
            <div className="mt-[40px]">
                <LetsChat />
            </div>
        </div>
    )
}

export default ProjectDetails