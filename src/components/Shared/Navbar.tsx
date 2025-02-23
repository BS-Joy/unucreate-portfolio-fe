'use client'
import logo from '@/assets/jodi logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { HiMenu } from "react-icons/hi";

const navLinks = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'About',
        href: '/about'
    },
    {
        title: 'Process',
        href: '/process'
    },
    {
        title: 'Projects',
        href: '/projects'
    },
    {
        title: 'Showroom',
        href: '/showroom'
    },
    {
        title: 'Contact',
        href: '/contact'
    },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname();

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    // Animate mobile view screen
    const menuVars = {
        initial: {
            x: "100%", // Start off-screen to the right
        },
        animate: {
            x: "0%", // Move into view
            transition: {
                type: "tween",
                duration: 0.3
            }
        },
        exit: {
            x: "100%", // Exit to the right
            transition: {
                type: "tween",
                duration: 0.3
            }
        }
    };


    return (
        <header>
            <nav className='flex justify-between items-center pl-8 pr-8 lg:pl-[92px] lg:pr-[69px] pt-1 lg:pt-[50px]'>
                <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt='Jodi Logo Image'
                    className='w-10 h-10 lg:w-[102px] lg:h-[104px] object-contain hidden lg:block'
                />

                <div className='flex flex-col items-center lg:hidden pt-5'>
                    <h1 className='font-anton text-[24px] tracking-widest uppercase'>Jodi Swaby</h1>
                    <h3 className='font-abel text-[16px] tracking-widest uppercase'>UX designer </h3>
                </div>

                {/* Large screen menu */}
                <div className='lg:flex hidden items-center gap-[20px]'>
                    <Link href='/' >
                        <button className={`w-[126px] h-[60px] rounded-[40px] border border-primary ${pathname === "/" ? 'bg-primary' : 'bg-transparent'} text-[20px] font-abel`}>Home</button>
                    </Link>
                    <Link href='/about'>
                        <button className={`w-[126px] h-[60px] rounded-[40px] border border-primary ${pathname === "/about" ? 'bg-primary' : 'bg-transparent'} text-[20px] font-abel`}>
                            About
                        </button>
                    </Link>
                    <Link href='/process'>
                        <button className={`w-[126px] h-[60px] rounded-[40px] border border-primary ${pathname === "/process" ? 'bg-primary' : 'bg-transparent'} text-[20px] font-abel`}>
                            Process
                        </button>
                    </Link>
                    <Link href='/projects'>
                        <button className={`w-[126px] h-[60px] rounded-[40px] border border-primary ${pathname === "/projects" ? 'bg-primary' : 'bg-transparent'} text-[20px] font-abel`}>
                            Projects
                        </button>
                    </Link>
                    <Link href='/showroom'>
                        <button className={`w-[126px] h-[60px] rounded-[40px] border border-primary ${pathname === "/showroom" ? 'bg-primary' : 'bg-transparent'} text-[20px] font-abel`}>
                            Showroom
                        </button>
                    </Link>
                    <Link href='/contact'>
                        <button className={`w-[126px] h-[60px] rounded-[40px] border border-primary ${pathname === "/contact" ? 'bg-primary' : 'bg-transparent'} text-[20px] font-abel`}>
                            Contact
                        </button>
                    </Link>
                </div>

                {/* Open Hamburger menu */}
                <div className='cursor-pointer lg:hidden text-4xl text-olive font-belle  p-3 rounded-full flex items-center justify-center' onClick={toggleMenu}>
                    {/* <h1>Menu</h1> */}
                    <HiMenu />
                </div>
                {/* <div className='cursor-pointer lg:hidden text-4xl text-primary font-belle bg-olive p-3 rounded-full flex items-center justify-center' onClick={toggleMenu}>
                    <IoMdMenu />
                </div> */}
            </nav>

            <AnimatePresence>
                {/* Mobile screen menu */}
                {open &&
                    <motion.div
                        variants={menuVars}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        className='fixed left-0 top-0 w-full h-screen origin-top bg-olive text-primary p-7 z-20'>
                        <div className='flex h-full flex-col'>
                            <div className='flex justify-between'>
                                <Image
                                    src={logo}
                                    width={100}
                                    height={100}
                                    alt='Jodi Logo Image'
                                    className='w-20 h-20 lg:w-[162px] lg:h-[144px] object-contain'
                                />

                                {/* Close Hamburger menu */}
                                <div className='cursor-pointer lg:hidden text-4xl text-primary font-anton pr-6 rounded-full flex items-center justify-center' onClick={toggleMenu}>
                                    <IoMdClose />
                                </div>
                            </div>

                            {/* Moble screen links */}
                            <div className='flex flex-col h-full justify-start pt-10 font-abel items-center gap-7'>
                                {
                                    navLinks.map((link, index) => {
                                        return <MobileNavLink key={index} title={link.title} href={link.href} setOpen={setOpen} />
                                    })
                                }
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </header >
    )
}

export default Navbar


const MobileNavLink = ({ title, href, setOpen }: { title: string; href: string; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const closeNavWhenClickingLink = () => {
        setOpen(false); // Directly set it to false to close the menu
    };
    return (
        <div className='text-4xl uppercase text-primary relative'>
            <Link href={href} onClick={closeNavWhenClickingLink} className='relative group'>
                {title}
                {/* Animated underline */}
                <motion.div
                    className="absolute left-0 bottom-0 w-full h-1 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
            </Link>
        </div>
    )
}