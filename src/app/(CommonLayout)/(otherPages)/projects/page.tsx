import arrow from '@/assets/projectsArrow.png'
import Image from 'next/image'

const ProjectsPage = () => {
    return (
        <div className='px-[70px] mt-14'>
            <div className='relative'>
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
        </div>
    )
}

export default ProjectsPage
