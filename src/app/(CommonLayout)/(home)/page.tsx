import Contact from "@/components/Home/Contact";
import DisignForTheHuman2 from "@/components/Home/DisignForTheHuman2";
import Hero from "@/components/Home/Hero";
import LetsChat2 from "@/components/Home/LetsChat2";
import MyProjects2 from "@/components/Home/MyProjects2";
import Showroom from "@/components/Home/Showroom";
import Welcome from "@/components/Home/Welcome";
import WhatIDo from "@/components/Home/WhatIDo";
import WhoIHaveWorked from "@/components/Home/WhoIHaveWorked";



export default function Home() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="hidden lg:block">
        <Hero />
      </div>
      <Welcome />
      <WhoIHaveWorked />
      {/* <WhatIDo /> */}
      {/* <DesignForTheHuman2 /> */}
      {/* <MyProjects /> */}
      <MyProjects2 />
      {/* <Contact /> */}
      {/* <LetsChat /> */}
      <DisignForTheHuman2 />
      <Showroom />
      <LetsChat2 />
      {/* <LetsStart /> */}
    </div>
  );
}
