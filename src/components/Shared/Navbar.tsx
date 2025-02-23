'use client'
import logo from '@/assets/jodi logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { IoMdClose } from 'react-icons/io'
import { HiMenu } from 'react-icons/hi'

const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Process', href: '/process' },
    { title: 'Projects', href: '/projects' },
    { title: 'Showroom', href: '/showroom' },
    { title: 'Contact', href: '/contact' },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    const toggleMenu = () => setOpen((prev) => !prev)

    const sidebarVariants = {
        initial: { x: '100%' }, // start off-screen to the right
        animate: { x: '0%', transition: { type: 'tween', duration: 0.3 } },
        exit: { x: '100%', transition: { type: 'tween', duration: 0.3 } },
    }

    return (
        <header>
            <nav className="flex justify-between items-center pl-4 pr-3 lg:pl-[92px] lg:pr-[69px] pt-1 lg:pt-[50px]">
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

                {/* Desktop navigation */}
                <div className="lg:flex hidden items-center gap-[20px]">
                    {navLinks.map((link, index) => (
                        <Link href={link.href} key={index}>
                            <button
                                className={`w-[126px] h-[60px] rounded-[40px] border border-primary ${pathname === link.href ? 'bg-primary' : 'bg-transparent'
                                    } text-[20px] font-abel`}
                            >
                                {link.title}
                            </button>
                        </Link>
                    ))}
                </div>

                {/* Hamburger icon for mobile */}
                <div
                    className="cursor-pointer lg:hidden text-4xl p-3"
                    onClick={toggleMenu}
                >
                    <HiMenu />
                </div>
            </nav>

            {/* Sidebar for mobile */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={sidebarVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed right-0 top-0 h-screen w-[250px] bg-olive text-primary p-7 z-20"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <Image
                                src={logo}
                                width={100}
                                height={100}
                                alt="Jodi Logo Image"
                                className="w-16 h-16 object-contain"
                            />
                            <div
                                className="cursor-pointer text-4xl"
                                onClick={toggleMenu}
                            >
                                <IoMdClose />
                            </div>
                        </div>
                        <div className="flex flex-col gap-7">
                            {navLinks.map((link, index) => (
                                <MobileNavLink
                                    key={index}
                                    title={link.title}
                                    href={link.href}
                                    setOpen={setOpen}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Navbar

const MobileNavLink = ({
    title,
    href,
    setOpen,
}: {
    title: string
    href: string
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const closeNav = () => setOpen(false)
    return (
        <div className="text-2xl uppercase text-primary">
            <Link href={href} onClick={closeNav} className="relative group">
                {title}
            </Link>
        </div>
    )
}
