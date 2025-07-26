import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Outlet } from "react-router-dom"
import { motion,useScroll } from "framer-motion";

const Layout =()=>{
      const { scrollYProgress } = useScroll()
    
    return(
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gold-gradient z-50 shadow-lg shadow-yellow-500/50"
            style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
            />
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
    )
}

export default Layout