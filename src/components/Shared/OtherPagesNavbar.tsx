'use client'
import logo from '@/assets/jodi logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const OtherPagesNavbar = () => {
    const pathname = usePathname();

    return (
        <div className='flex justify-end items-center pl-[92px] pr-[69px] pt-[102px]'>
            {/* <Image
                src={logo}
                width={100}
                height={100}
                alt='Jodi Logo Image'
                className='w-[162px] h-[144px] object-contain'
            /> */}
            <div className='flex items-center justify-end gap-[20px]'>
                <Link href='/' >
                    <button className={`w-[141px] h-[60px] rounded-[40px] border border-brown ${pathname === "/" ? 'bg-brown text-primary' : 'bg-transparent'} text-[20px] font-dmSans`}>Home</button>
                </Link>
                <Link href='/about'>
                    <button className={`w-[141px] h-[60px] rounded-[40px] border border-brown ${pathname === "/about" ? 'bg-brown text-primary' : 'bg-transparent'} text-[20px] font-dmSans`}>
                        About Us
                    </button>
                </Link>
                <Link href='/process'>
                    <button className={`w-[141px] h-[60px] rounded-[40px] border border-brown ${pathname === "/process" ? 'bg-brown text-primary' : 'bg-transparent'} text-[20px] font-dmSans`}>
                        Process
                    </button>
                </Link>
                <Link href='/projects'>
                    <button className={`w-[141px] h-[60px] rounded-[40px] border border-brown ${pathname === "/projects" ? 'bg-brown text-primary' : 'bg-transparent'} text-[20px] font-dmSans`}>
                        Projects
                    </button>
                </Link>
                <Link href='/contact'>
                    <button className={`w-[141px] h-[60px] rounded-[40px] border border-brown ${pathname === "/contact" ? 'bg-brown text-primary' : 'bg-transparent'} text-[20px] font-dmSans`}>
                        Contact
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default OtherPagesNavbar