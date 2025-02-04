import DesignForTheHuman from "@/components/DesignForTheHuman";
import Hero from "@/components/Hero";
import LetsStart from "@/components/LetsStart";
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
    </div>
  );
}
