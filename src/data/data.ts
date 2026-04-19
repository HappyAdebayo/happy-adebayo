import eccomerce from '@/assets/eccomerce.png';
import hopehaven from '@/assets/hopehaven.png'
import frameflow from '@/assets/frameflow.png'
import {
  FileCode,    
  Atom,        
  ServerCog,   
  Landmark,    
  Code2
} from "lucide-react";

const techStack = [
  {
    name: "React.js",
    icon: Atom,
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "React Native",
    icon: Atom ,
    color: "bg-gradient-to-br from-indigo-500 to-indigo-700",
  },
  {
    name: "PHP",
    icon: FileCode,
    color: "bg-gradient-to-br from-purple-500 to-purple-700",
  },
  {
    name: "Laravel",
    icon: Landmark,
    color: "bg-gradient-to-br from-red-600 to-red-800",
  },
  {
    name: "Python",
    icon: Code2,
    color: "bg-gradient-to-br from-yellow-500 to-yellow-700",
  },
  {
    name: "MySQL",
    icon: ServerCog ,
    color: "bg-gradient-to-br from-blue-700 to-blue-900",
  },
];

  const projects = [
    {
      title: "E-Commerce Platform",
      siteplatform:'Website',
      description:
        "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      tech: ["React.js", "MySQL", "Paystack", "Tailwind"],
      image: eccomerce,
      live: "https://anointedsuperstore.store/",
    },
    {
      title: "HopeHaven",
      siteplatform:'Website',
      description:
        "HopeHaven is a modern orphanage website designed to create awareness, encourage donations, and connect volunteers with children in need. The platform focuses on a warm, trustworthy user experience with clear navigation, impactful storytelling, and responsive design.",
      tech: ["nexjs", "tailwindcss"],
      image: hopehaven,
      live: "https://hope-haven-of4y.vercel.app/",
    },
    {
      title: "FrameFlow",
      siteplatform:'Website',
      description:
        "FrameFlow is a modern photography portfolio website designed to showcase high-quality visual work in a clean, immersive layout. Built with a dark, minimal aesthetic, it focuses on highlighting photography through bold imagery, smooth interactions, and an intuitive gallery experience with category filtering and lightbox previews.",
      tech: ["nexjs", "tailwindcss"],
      image: frameflow,
      live: "https://frameflow-sigma.vercel.app/",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: 15 },
    { label: "Happy Clients", value: 10 },
    { label: "Years Experience", value: 2 },
    { label: "Technologies", value: 10 },
  ]

  export {stats,projects,techStack}