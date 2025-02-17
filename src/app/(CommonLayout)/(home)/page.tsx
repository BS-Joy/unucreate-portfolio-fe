import Contact from "@/components/Home/Contact";
import DesignForTheHuman from "@/components/Home/DesignForTheHuman";
import DesignForTheHuman2 from "@/components/Home/DesignForTheHuman2";
import Hero from "@/components/Home/Hero";
import LetsChat from "@/components/Home/LetsChat";
import LetsStart from "@/components/Home/LetsStart";
import MyProjects from "@/components/Home/MyProjects";
import Welcome from "@/components/Home/Welcome";
import WhatIDo from "@/components/Home/WhatIDo";
import WhoIHaveWorked from "@/components/Home/WhoIHaveWorked";



export default function Home() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <Hero />
      <Welcome />
      <WhoIHaveWorked />
      {/* <WhatIDo /> */}
      {/* <DesignForTheHuman2 /> */}
      <MyProjects />
      {/* <Contact /> */}
      <LetsChat />
      <LetsStart />
    </div>
  );
}
