"use client";
import silverBall from "@/assets/silver ball.png";
import Image from "next/image";
import DoubleButton from "../Shared/DoubleButton";
import { motion } from "motion/react";
import arrow from "@/assets/lets-chat-arrow.png";

const LetsChat = () => {
  return (
    <div className="mx-auto max-w-[1298px] flex flex-col lg:flex-row items-center mb-[78px] gap-[10px] lg:gap-[90px] relative px-0  lg:px-10 xl:px-0">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="uppercase text-olive font-anton text-[80px] md:text-[90px] lg:text-[128px] max-w-[640px] leading-[200px]"
      >
        Let's Chat
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -top-7 left-60 md:left-[60%] lg:top-20 lg:left-80"
      >
        <Image
          src={arrow}
          width={600}
          height={600}
          alt="arrow"
          className="w-[100px] h-[100px] lg:w-[273px] lg:h-[138px] object-contain"
        />
      </motion.div>

      {/* Contact Form & Silver ball in large screen */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden lg:block relative"
      >
        <Image
          src={silverBall}
          width={1000}
          height={1000}
          alt="Lets start image"
          className="w-[350px] h-[400px] lg:w-[640px] lg:h-[640px] object-contain"
        />
        <div className="absolute top-[16%] lg:top-[22%] left-[80px] lg:left-[110px]">
          <div className="flex items-center justify-center flex-col gap-[20px]">
            <input
              type="text"
              placeholder="NAME"
              className="w-[200px] lg:w-[410px] h-[35px] lg:h-[60px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold"
            />
            <input
              type="text"
              placeholder="EMAIL"
              className="w-[200px] lg:w-[410px] h-[35px]   lg:h-[60px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold"
            />
            <textarea
              placeholder="MESSAGE"
              className="w-[200px] lg:w-[410px] h-[90px] lg:h-[160px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-dmSans pl-[30px] shadow-lg font-semibold pt-[20px]"
            />
            <div className="">
              <DoubleButton
                text="Send Message"
                bgColor="bg-secondary"
                textColor="text-[#333333]"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form & Silver ball in mobile and tablet screen */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="block lg:hidden "
      >
        {/* <Image
                        src={silverBall}
                        width={1000}
                        height={1000}
                        alt='Lets start image'
                        className='w-[350px] h-[400px] lg:w-[640px] lg:h-[640px] object-contain'
                    /> */}
        {/* absolute top-[16%] lg:top-[22%] left-[80px] lg:left-[110px] */}
        <div className="">
          <div className="flex flex-col justify-center items-center gap-[12px] md:gap-[20px] px-[13px]">
            <input
              type="text"
              placeholder="NAME"
              className="w-[310px] md:w-[500px] lg:w-[410px] h-[40px] md:h-[50px] lg:h-[60px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-abel pl-[12px] shadow-md"
            />
            <input
              type="text"
              placeholder="EMAIL"
              className="w-[310px] md:w-[500px] lg:w-[410px] h-[40px] md:h-[50px]   lg:h-[60px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-abel pl-[12px] shadow-md"
            />
            <textarea
              placeholder="MESSAGE"
              className="w-[310px] md:w-[500px] lg:w-[410px] h-[100px] md:h-[150px] lg:h-[160px] bg-white border-none outline-none rounded-[8px] placeholder:text-black placeholder:text-[16px] font-abel pl-[12px] shadow-md pt-[20px]"
            />
            <div className="mt-[20px]">
              <div className="relative">
                <button
                  className={`w-[200px] lg:w-[260px] h-[48px] lg:h-[80px] bg-secondary rounded-[40px] flex items-center justify-center uppercase font-anton text-[#333333] text-[20px] z-10 relative `}
                >
                  Submit
                </button>
                <button className="w-[200px] lg:w-[260px] h-[48px] lg:h-[80px] bg-primary rounded-[40px] flex items-center justify-center uppercase font-anton text-olive text-[20px] absolute -bottom-2 left-2"></button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LetsChat;
