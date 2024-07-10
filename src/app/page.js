import Flashlight from "../components/Flashlight.js";
import HeroSection from "@/components/HeroSection.js";
import About from "@/components/About.js";
import ScrollDownIndicator from "@/components/ScrollDown.js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-24">
      <div className="text-left">
        <HeroSection />
        <About/>  
        <Flashlight />
        <ScrollDownIndicator/> 
      </div>
    </main>
  );
}