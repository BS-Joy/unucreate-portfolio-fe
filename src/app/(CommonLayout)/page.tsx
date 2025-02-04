import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import WhoIHaveWorked from "@/components/WhoIHaveWorked";


export default function Home() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <Hero />
      <Welcome />
      <WhoIHaveWorked />
    </div>
  );
}
