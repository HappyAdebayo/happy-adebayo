import eccomerce from '@/assets/eccomerce.png';
import chooz from '@/assets/chooz.png'
import lincpay from '@/assets/lincpay.png'
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
      title: "Polling platform",
      siteplatform:'Website',
      description:
        "Monetizable polling platform enabling users to create and share polls, earn from vote engagement, and analyze results in real-time.",
      tech: ["Php", "Paystack", "Tailwind", "MySQL"],
      image: chooz,
      live: "https://choozplatform.com",
    },
    {
      title: "School Finance App",
      siteplatform:'App',
      description:
        "All-in-one student finance app that simplifies fee payments, tracks transactions, and provides a secure platform for managing school-related expenses.",
      tech: ["Php", "Paystack",  "Expo", "React Native"],
      image: lincpay,
      live: "#",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: 15 },
    { label: "Happy Clients", value: 10 },
    { label: "Years Experience", value: 2 },
    { label: "Technologies", value: 10 },
  ]

  export {stats,projects,techStack}