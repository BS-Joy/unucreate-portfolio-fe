import skyImg from '@/assets/designsky.png'
import Image from 'next/image'

const Contact = () => {
    return (
        <div className="mx-auto max-w-[1346px] mb-6 lg:mb-56">
            {/* Upper image and heading */}
            <div className='relative'>
                <Image
                    src={skyImg}
                    width={200}
                    height={200}
                    alt='Sky Image'
                    className='w-[438] lg:w-[1240px] lg:h-[148px] absolute right-5 top-0'
                />
                <div className='w-[438] lg:w-[1258px] h-[54px] lg:h-[144px] rounded-[20px] bg-primary flex items-center justify-center z-10 absolute top-6 lg:top-10 right-10 lg:right-16'>
                    <h1 className='text-2xl lg:text-[75px] text-olive font-anton uppercase'>Contact Me For</h1>
                </div>
            </div>

            {/* Content */}
            <div className='pt-[100px] lg:pt-[250px] relative left-7 lg:left-24 flex flex-col lg:flex-row gap-12'>
                <div>
                    <div className=''>
                        <div className='space-y-[3px] mb-[38px]'>
                            <h1 className='font-anton text-secondary text-[40px]'>UX & UI Design</h1>
                            <p className='font-abel text-sm text-olive max-w-[304px]'>User Experience (UX) Design for digital platforms
                                User Research and Usability Testing
                                Wireframing, Prototyping, and Interaction Design
                                Mobile and Web App Design
                                Service Design and Journey Mapping
                                UX Writing and Microcopy Strateg</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='space-y-[3px] mb-[38px]'>
                            <h1 className='font-anton text-secondary text-[40px]'>Media and Entertainment</h1>
                            <p className='font-abel text-sm text-olive max-w-[304px]'>Film Concept Development and Creative Consulting
                                Set Design for Film, TV, or Live Productions
                                Music Video Direction and Visual Concepting
                                Hosting Creative Panels, TV, or Web Series</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='space-y-[3px] mb-[38px]'>
                            <h1 className='font-anton text-secondary text-[40px]'>Consulting and Leadership</h1>
                            <p className='font-abel text-sm text-olive max-w-[304px]'>Design Thinking and Innovation Workshops
                                Mentorship for Creative and UX Professionals
                                Accessibility, Inclusion, and Digital Transformation Consulting</p>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className='relative'>
                    <div className='space-y-[3px] mb-[38px]'>
                        <h1 className='font-anton text-secondary text-[40px]'>Experimental Art & Installations</h1>
                        <p className='font-abel text-sm text-olive max-w-[200px]'>Immersive Art Installations
                            Interactive Exhibition Design
                            Fashion and Art Showcase Curation
                            Public Art Projects
                            Experiential Marketing Activations</p>
                    </div>
                    <div className=''>
                        <div className='space-y-[3px] mb-[38px]'>
                            <h1 className='font-anton text-secondary text-[40px]'>Creative Strategy</h1>
                            <p className='font-abel text-sm text-olive max-w-[301px]'>Brand Identity Development
                                Campaign Storytelling and Creative Direction
                                Content Strategy for Digital and Social Platforms
                                Art Direction and Visual Concepting
                                Event Branding and Creative Consulting</p>
                        </div>

                    </div>
                    <div className='w-[312px] h-[353px] bg-[#D9D9D9] hidden lg:block absolute top-28 left-[350px]'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact