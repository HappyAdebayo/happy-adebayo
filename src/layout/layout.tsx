import Navbar from "@/components/HomePage/navbar";
import Footer from "@/components/HomePage/footer";
import { Outlet } from "react-router-dom"
import ParticleBackground from "@/components/particle-background";
import CustomCursor from "@/components/custom-cursor";

const Layout = () => {

  return (
    <div className="relative isolate min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <CustomCursor />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout