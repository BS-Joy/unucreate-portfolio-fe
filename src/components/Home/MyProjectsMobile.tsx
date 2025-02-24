'use client'
import Image from "next/image";
import heroImg from "@/assets/hero-image-background.png";
import projectImg1 from "@/assets/projects1.png";
import projectImg2 from "@/assets/projects2.png";

const MyProjectsMobile = () => {
    const projects = [
        {
            title: 'Blendyd Studios',
            desc: 'I developed a mobile app for job seekers that streamlines the search and application process.',
            image: projectImg1
        },
        {
            title: 'DRIFT HOTELS ',
            desc: 'I conceptualized and designed innovative experiences for Modernism Week attendees, seamlessly blending art, design, and immersive technologies to provide effortless access to both in-person and virtual events.',
            image: projectImg2
        },
        {
            title: 'Ramble',
            desc: 'I developed intuitive, user-centric digital experiences that seamlessly connected outdoor enthusiasts with sustainable, inclusive, and community-driven hospitality solutions.',
            image: projectImg1
        },
    ]
    return (
        <div>
            <div className="flex items-center justify-center mb-10">
                <div
                    className="w-[335px] h-[220px] bg-cover bg-center flex  justify-center items-center"
                    style={{ backgroundImage: `url(${heroImg.src})` }}
                >
                    <h1 className="font-anton text-[40px] text-center tracking-[.18em] text-white uppercase pr-4 pt-8 leading-relaxed"
                        style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                    >Featured Work</h1>
                </div>
            </div>
            {/* <div className="flex items-center justify-center mb-10">
                <Image
                    src={heroImg}
                    width={1300}
                    height={1300}
                    alt="Hero Image"
                    className="w-[310px] h-[198px] md:w-[800px] md:h-[800px] lg:w-[1145px] lg:h-[732px] pl-2 lg:pl-0"
                />
            </div> */}

            {/* Heading and cards */}
            <div className="px-[23px]">
                <h1 className="font-anton text-[24px] leading-[32px] tracking-widest text-center pb-[49px]">A SNAPSHOT OF MY MOST RECENT PROJECTS </h1>

                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 gap-[40px] md:gap-32">
                        {projects.map((project, i) => (
                            <div key={i}>
                                <h1 className="font-anton text-[24px] leading-[32px] tracking-widest pb-[12px] uppercase text-start md:text-center">{project.title}</h1>
                                <p className="font-abel text-[16px] leading-[19px] pb-[8px] md:pb-[16px] text-start md:text-center">{project.desc}</p>
                                <Image
                                    src={project.image}
                                    width={1000}
                                    height={1000}
                                    alt='Lets start image'
                                    className='w-full  h-[147px] md:h-full object-cover'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-center pt-[40px] md:pt-[170px] mb-[30px]">
                    <h1 className="font-anton text-[24px] leading-[32px] tracking-widest uppercase">Check Out all my work here </h1>
                </div>
            </div>
        </div>
    )
}

export default MyProjectsMobile