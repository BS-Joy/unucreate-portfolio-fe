import logo from '@/assets/jodi logo.png'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center pl-[92px] pr-[69px] pt-[102px]'>
            <Image
                src={logo}
                width={200}
                height={200}
                alt='Jodi Logo Image'
                className='w-[162px] h-[144px]'
            />
            <div className='flex items-center gap-[20px]'>
                <button className='w-[141px] h-[60px] rounded-[40px] border border-primary text-[20px] font-dmSans'>Home</button>
                <button className='w-[141px] h-[60px] rounded-[40px] border border-primary text-[20px] font-dmSans'>About Us</button>
                <button className='w-[141px] h-[60px] rounded-[40px] border border-primary text-[20px] font-dmSans'>Process</button>
                <button className='w-[141px] h-[60px] rounded-[40px] border border-primary text-[20px] font-dmSans'>Projects</button>
                <button className='w-[141px] h-[60px] rounded-[40px] border border-primary text-[20px] font-dmSans'>Contact</button>
            </div>
        </div>
    )
}

export default Navbar
