import Contact from "@/components/Contact";
import DesignForTheHuman from "@/components/DesignForTheHuman";
import Hero from "@/components/Hero";
import LetsChat from "@/components/LetsChat";
import LetsStart from "@/components/LetsStart";
import MyProjects from "@/components/MyProjects";
import Welcome from "@/components/Welcome";
import WhatIDo from "@/components/WhatIDo";
import WhoIHaveWorked from "@/components/WhoIHaveWorked";


export default function Home() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <Hero />
      <Welcome />
      <WhoIHaveWorked />
      <WhatIDo />
      <DesignForTheHuman />
      <LetsStart />
      <MyProjects />
      <Contact />
      <LetsChat />
    </div>
  );
}
