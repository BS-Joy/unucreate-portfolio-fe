import Image, { StaticImageData } from "next/image";
import OtherPagesLetsChat from "./OtherPagesLetsChat";

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
        <div className="px-[10px] lg:px-[70px] mb-24 lg:mb-96 pt-[131px]">
            <div className='w-[1300px] mb-[60px]'>
                <h1 className='font-fascinate text-olive text-[30px] lg:text-[80px] leading-none lg:leading-[80px] max-w-[324px] lg:max-w-[1024px] pt-[60px]'>{project.title}</h1>
                <p className='font-dmSans leading-none lg:leading-[40px] text-[10px] lg:text-[20px] pt-[20px] uppercase max-w-xs lg:max-w-4xl pb-[60px]'>{project.description}</p>
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
            <div className="space-y-[60px]">
                <div>
                    <h1 className="uppercase font-fascinate text-[30px] lg:text-[60px]">My role</h1>
                    <p className='font-dmSans leading-[40px] text-[20px] pt-[20px] uppercase max-w-4xl pb-[60px]'>{project.myRole}</p>
                </div>
                <div>
                    <h1 className="uppercase font-fascinate text-[30px] lg:text-[60px]">Process & Methodologies:</h1>
                    <p className='font-dmSans leading-[40px] text-[20px] pt-[20px] uppercase max-w-4xl pb-[60px]'>{project.process}</p>
                </div>
            </div>

            {/* Key deliverables & Outcome & Impact */}
            <div className="flex flex-col lg:flex-row items-center gap-2 mt-[60px]">
                <Image
                    src={project.image}
                    width={700}
                    height={700}
                    alt='Lets start image'
                    className='w-[240px] h-[240px] lg:w-[640px] lg:h-[640px] object-cover'
                />
                <div className="space-y-[32px]">
                    <div>
                        <h1 className="uppercase font-fascinate text-[30px] lg:text-[60px]">Key Deliverables:</h1>
                        <p className='font-dmSans leading-[40px] text-[20px] pt-[20px] uppercase max-w-4xl'>{project.deliverables}</p>
                    </div>
                    <div>
                        <h1 className="uppercase font-fascinate text-[30px] lg:text-[60px]">Outcome & Impact:</h1>
                        <p className='font-dmSans leading-[40px] text-[20px] pt-[20px] uppercase max-w-lg'>{project.outcome}</p>
                    </div>
                </div>
            </div>

            {/* Let's Chat */}
            <OtherPagesLetsChat />
        </div>
    )
}

export default ProjectDetails