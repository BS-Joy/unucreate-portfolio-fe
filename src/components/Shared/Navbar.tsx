'use client'
import logo from '@/assets/jodi logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion } from "motion/react"

const navLinks = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'About Us',
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
            scaleY: 0
        },
        animate: {
            scaleY: 1
        },
        exit: {
            scaleY: 0
        }
    }

    return (
        <header>
            <nav className='flex justify-between items-center pl-8 pr-8 lg:pl-[92px] lg:pr-[69px] pt-7 lg:pt-[102px]'>
                <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt='Jodi Logo Image'
                    className='w-20 h-20 lg:w-[162px] lg:h-[144px] object-contain'
                />

                {/* Large screen menu */}
                <div className='lg:flex hidden items-center gap-[20px]'>
                    <Link href='/' >
                        <button className={`w-[141px] h-[60px] rounded-[40px] border border-primary ${pathname === "/" ? 'bg-primary' : 'bg-transparent'} text-[20px] font-dmSans`}>Home</button>
                    </Link>
                    <Link href='/about'>
                        <button className={`w-[141px] h-[60px] rounded-[40px] border border-primary ${pathname === "/about" ? 'bg-primary' : 'bg-transparent'} text-[20px] font-dmSans`}>
                            About Us
                        </button>
                    </Link>
                    <Link href='/process'>
                        <button className={`w-[141px] h-[60px] rounded-[40px] border border-primary ${pathname === "/process" ? 'bg-primary' : 'bg-transparent'} text-[20px] font-dmSans`}>
                            Process
                        </button>
                    </Link>
                    <Link href='/projects'>
                        <button className={`w-[141px] h-[60px] rounded-[40px] border border-primary ${pathname === "/projects" ? 'bg-primary' : 'bg-transparent'} text-[20px] font-dmSans`}>
                            Projects
                        </button>
                    </Link>
                    <Link href='/contact'>
                        <button className={`w-[141px] h-[60px] rounded-[40px] border border-primary ${pathname === "/contact" ? 'bg-primary' : 'bg-transparent'} text-[20px] font-dmSans`}>
                            Contact
                        </button>
                    </Link>
                </div>

                {/* Open Hamburger menu */}
                <div className='cursor-pointer lg:hidden text-4xl text-primary font-belle bg-olive p-3 rounded-full flex items-center justify-center' onClick={toggleMenu}>
                    <h1>Menu</h1>
                </div>
            </nav>



            {open &&
                <motion.div
                    variants={menuVars}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    className='fixed left-0 top-0 w-full h-screen bg-olive text-primary p-10 z-10'>
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
                            <div className='cursor-pointer lg:hidden text-4xl text-olive font-belle bg-primary p-3 rounded-full flex items-center justify-center' onClick={toggleMenu}>
                                <h1>Menu</h1>
                            </div>
                        </div>

                        {/* Moble screen links */}
                        <div className='flex flex-col h-full justify-center font-fascinate items-center gap-5'>
                            {
                                navLinks.map((link, index) => {
                                    return <MobileNavLink key={index} title={link.title} href={link.href} />
                                })
                            }
                        </div>
                    </div>
                </motion.div>}
        </header >
    )
}

export default Navbar


const MobileNavLink = ({ title, href }: { title: string, href: string }) => {
    return (
        <div className='text-6xl uppercase text-primary'>
            <Link href={href}>
                {title}
            </Link>
        </div>
    )
}