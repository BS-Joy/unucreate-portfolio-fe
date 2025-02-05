'use client'
import logo from '@/assets/jodi logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className='flex justify-between items-center pl-5 pr-5 lg:pl-[92px] lg:pr-[69px] pt-7 lg:pt-[102px]'>
            <Image
                src={logo}
                width={100}
                height={100}
                alt='Jodi Logo Image'
                className='w-20 h-20 lg:w-[162px] lg:h-[144px] object-contain'
            />
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
        </div>
    )
}

export default Navbar
