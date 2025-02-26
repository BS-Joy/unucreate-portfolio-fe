'use client'
import Image from "next/image";
import heroImg from "@/assets/hero-image-background.png";
import projectImg1 from "@/assets/projects1.png";
import projectImg2 from "@/assets/projects2.png";
import blendyd from "@/assets/blendyd.png";
import drift from "@/assets/drift.png";
import ramble from "@/assets/ramble.png";
import { motion } from "motion/react"
import { useState } from "react";

const MyProjectsMobile = () => {
    const projects = [
        {
            title: 'Blendyd Studios',
            desc: 'I developed a mobile app for job seekers that streamlines the search and application process.',
            image: blendyd
        },
        {
            title: 'DRIFT HOTELS ',
            desc: 'I conceptualized and designed innovative experiences for Modernism Week attendees, seamlessly blending art, design, and immersive technologies to provide effortless access to both in-person and virtual events.',
            image: drift
        },
        {
            title: 'Ramble',
            desc: 'I developed intuitive, user-centric digital experiences that seamlessly connected outdoor enthusiasts with sustainable, inclusive, and community-driven hospitality solutions.',
            image: ramble
        },
    ]
    return (
        <div>
            <div className="flex items-center justify-center mb-4">
                <div
                    className="w-[335px] h-[220px] bg-cover bg-center flex  justify-center items-center"
                    style={{ backgroundImage: `url(${heroImg.src})` }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="font-anton text-[40px] text-center tracking-[.18em] text-white uppercase pr-4 pt-8 leading-relaxed"
                        style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                    >Featured Work</motion.h1>
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
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="font-abel text-[24px] leading-[32px] tracking-[.15em] text-center pb-9">A SNAPSHOT OF MY MOST RECENT PROJECTS </motion.h1>

                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 gap-[40px] md:gap-32">
                        {projects.map((project, i) => {
                            const [isHovered, setIsHovered] = useState(false);

                            return (
                                <div key={i}>
                                    <motion.h1
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="font-anton text-[24px] leading-[32px] tracking-widest pb-[12px] uppercase text-start md:text-center"
                                    >
                                        {project.title}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="font-abel text-[16px] leading-[19px] pb-[16px] md:pb-[16px] text-start md:text-center"
                                    >
                                        {project.desc}
                                    </motion.p>

                                    <div
                                        className="relative"
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        >
                                            <Image
                                                src={project.image}
                                                width={1000}
                                                height={1000}
                                                alt="Project Image"
                                                className="w-full h-[210px] md:h-full object-cover"
                                            />
                                        </motion.div>

                                        {isHovered && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                // inset-0 bg-black bg-opacity-70
                                                className="absolute inset-0 flex items-center justify-center"
                                            >
                                                <div className="h-[170px] w-[216px] bg-secondary pl-[16px] flex flex-col justify-between items-start">
                                                    <div className="pt-[13px] flex flex-col justify-center max-w-[168px] space-y-[8px]">
                                                        <h1 className="text-[18px] font-anton text-white">{project.title}</h1>
                                                        <p className="text-[14px] font-karla text-[#f0f0f0] leading-[19px]"> {project.desc.slice(0, 70)}...
                                                        </p>
                                                    </div>
                                                    <button className="text-[16px] font-karla text-white uppercase font-bold mb-1">View case Study</button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex items-center  pt-[40px] md:pt-[170px] mb-[30px]">
                    <h1 className="font-anton text-[24px] leading-[32px] tracking-[.15em] uppercase text-olive max-w-[273px]">Check Out all my work <span className="text-[#ee3322]">here</span> </h1>
                </div>
            </div>
        </div>
    )
}

export default MyProjectsMobile