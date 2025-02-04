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
        <div className="px-[70px] mb-96">
            <div className='w-[1300px] mb-[60px]'>
                <h1 className='font-fascinate text-olive text-[80px] leading-[80px] max-w-[1024px] pt-[60px]'>{project.title}</h1>
                <p className='font-dmSans leading-[40px] text-[20px] pt-[20px] uppercase max-w-4xl pb-[60px]'>{project.description}</p>
                <Image
                    src={project.image}
                    width={700}
                    height={700}
                    alt='Lets start image'
                    className='w-[1300px] h-full object-contain'
                />
            </div>

            {/* My Role & Process & Methodologies */}
            <div className="space-y-[60px]">
                <div>
                    <h1 className="uppercase font-fascinate text-[60px]">My role</h1>
                    <p className='font-dmSans leading-[40px] text-[20px] pt-[20px] uppercase max-w-4xl pb-[60px]'>{project.myRole}</p>
                </div>
                <div>
                    <h1 className="uppercase font-fascinate text-[60px]">Process & Methodologies:</h1>
                    <p className='font-dmSans leading-[40px] text-[20px] pt-[20px] uppercase max-w-4xl pb-[60px]'>{project.process}</p>
                </div>
            </div>

            {/* Key deliverables & Outcome & Impact */}
            <div className="flex items-center gap-2 mt-[60px]">
                <Image
                    src={project.image}
                    width={700}
                    height={700}
                    alt='Lets start image'
                    className='w-[640px] h-[640px] object-cover'
                />
                <div className="space-y-[32px]">
                    <div>
                        <h1 className="uppercase font-fascinate text-[60px]">Key Deliverables:</h1>
                        <p className='font-dmSans leading-[40px] text-[20px] pt-[20px] uppercase max-w-4xl'>{project.deliverables}</p>
                    </div>
                    <div>
                        <h1 className="uppercase font-fascinate text-[60px]">Outcome & Impact:</h1>
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