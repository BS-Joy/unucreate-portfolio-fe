import Image from "next/image";
import heroImg from "@/assets/hero image.png";
import barcodeLogo from "@/assets/jodi barcode logo.png";

const Hero = () => {

    return (
        <div className="relative w-full h-screen flex flex-col justify-start md:justify-center items-center pt-10 mt-6 lg:mt-16">
            <h1 className="font-anton text-sm lg:text-[20px] flex justify-end pr-5 lg:pr-[89px] pt-5 lg:pt-0 absolute -top-4 md:top-0 right-0">
                UX designer & artist
            </h1>

            <div className="flex items-center justify-center relative">
                <Image
                    src={heroImg}
                    width={1300}
                    height={1300}
                    alt="Hero Image"
                    className="w-96 h-96 md:w-[800px] md:h-[800px] lg:w-[1300px] lg:h-[853px]"
                />

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
                </h1>
            </div>
        </div>
    );
};

export default Hero;
