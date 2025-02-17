import Image from "next/image";
import heroImg from "@/assets/hero-image.png";
import heroImg2 from "@/assets/hero image.png";
import barcodeLogo from "@/assets/jodi barcode logo.png";
import DoubleButton from "../Shared/DoubleButton";

const Hero = () => {

    return (
        <div className="relative w-full flex flex-col justify-start md:justify-center items-center pt-10 mt-6 lg:mt-16 mb-28">
            <h1 className="font-anton text-sm lg:text-[20px] xl:text-[32px] uppercase tracking-widest flex justify-end pr-5 lg:pr-[89px] pt-5 lg:pt-0 absolute -top-4 md:top-0 right-0">
                UX designer & artist
            </h1>

            <div className="flex flex-col items-center justify-center ">
                <Image
                    src={heroImg}
                    width={1300}
                    height={1300}
                    alt="Hero Image"
                    className="w-80 h-80 md:w-[800px] md:h-[800px] lg:w-[1145px] lg:h-[732px]"
                />

                <div className="pr-5 md:pr-12 lg:pr-28">
                    <DoubleButton text="Let's Connect" bgColor='bg-secondary' textColor='#333333' />
                </div>
                {/* 
                <div className="absolute top-[25%] left-[25%] lg:left-[28%] xl:left-[33%]">
                    <Image
                        src={barcodeLogo}
                        width={1300}
                        height={1300}
                        alt="Barcode Image"
                        className="w-44 h-44 md:w-[300px] md:h-[300px] lg:w-[390.1px] lg:h-[391.63px] object-contain"
                    />
                </div>
                <h1 className="text-xs lg:text-[20px] font-anton text-white absolute top-[73%] left-[13%] md:left-[30%] lg:left-[28%] xl:left-[33%] max-w-[270px] lg:max-w-[396px] text-center leading-[30px] tracking-wider">
                    Building Engaging, Inclusive Experiences through UX, Innovation, and Storytelling
                </h1> */}
            </div>
        </div>
    );
};

export default Hero;
