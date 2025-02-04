import Image from "next/image"
import worklogo1 from "@/assets/worklogo1.png"
import worklogo2 from "@/assets/worklogo2.png"
import worklogo3 from "@/assets/worklogo3.png"
import worklogo4 from "@/assets/worklogo4.png"
import worklogo5 from "@/assets/worklogo5.png"



const WhoIHaveWorked = () => {
    return (
        <div className="mx-auto max-w-[884.15px] flex flex-col justify-center items-center pb-32">
            <div className="border-t border-secondary w-[504px] "></div>
            <h1 className="text-[48px] font-anton text-secondary text-center pt-[57px]">Who I have worked with </h1>

            <div className="flex items-center gap-[49.65px] pb-[110px]">
                <Image
                    src={worklogo1}
                    width={200}
                    height={200}
                    alt='Jodi Logo Image'
                    className='w-[131.17px] h-[83.61px] object-contain'
                />
                <Image
                    src={worklogo2}
                    width={200}
                    height={200}
                    alt='Jodi Logo Image'
                    className='w-[131.17px] h-[83.61px] object-contain'
                />
                <Image
                    src={worklogo3}
                    width={200}
                    height={200}
                    alt='Jodi Logo Image'
                    className='w-[131.17px] h-[83.61px] object-contain'
                />
                <Image
                    src={worklogo4}
                    width={200}
                    height={200}
                    alt='Jodi Logo Image'
                    className='w-[131.17px] h-[83.61px] object-contain'
                />
                <Image
                    src={worklogo5}
                    width={200}
                    height={200}
                    alt='Jodi Logo Image'
                    className='w-[131.17px] h-[83.61px] object-contain'
                />
                <Image
                    src={worklogo4}
                    width={200}
                    height={200}
                    alt='Jodi Logo Image'
                    className='w-[131.17px] h-[83.61px] object-contain'
                />
            </div>
            <div className="border-b border-secondary w-[504px] "></div>
        </div>
    )
}

export default WhoIHaveWorked