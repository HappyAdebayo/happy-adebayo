import Hero from "@/components/HomePage/hero"
import Services from "@/components/HomePage/services"
import About from "@/components/HomePage/about"
import Skills from "@/components/HomePage/skill"
import Portfolio from "@/components/HomePage/portfolio"
import MobileApps from "@/components/mobile-app"

export default function LandingPage() {

  return (
    <div className="">

     <Hero/>

     <Services/>

     <About/>

      <Skills/>

      <Portfolio/>
      
      <MobileApps/>

      

    </div>
  )
}
