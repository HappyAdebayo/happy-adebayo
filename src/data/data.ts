import backly from '@/assets/website/backly/backly-logo.png'


import {
  FileCode,
  ServerCog,
  Landmark,
  Code2,
  Database
} from "lucide-react";


const techStack = [
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
    name: "MySQL",
    icon: ServerCog,
    color: "bg-gradient-to-br from-blue-700 to-blue-900",
  },
  {
    name: "Node.js",
    icon: Code2,
    color: "bg-gradient-to-br from-green-600 to-green-800",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    color: "bg-gradient-to-br from-blue-400 to-indigo-600",
  },
];

  const projects = [
    {
      title: "Backly",
      siteplatform: "REST API",
      description:
        "Backly is a visual backend builder that lets developers spin up production-ready REST APIs without writing boilerplate. It follows a Modular MVC architecture, generating clean, maintainable Node.js and PHP server code backed by PostgreSQL — complete with JWT authentication, role-based access control, and auto-generated Swagger documentation.",
      tech: ["Node.js", "PHP", "PostgreSQL", "REST API", "Modular MVC"],
      image: backly,
      live: "https://www.buildbackly.com",
      docs: "https://backly-server.onrender.com/api-docs/",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: 15 },
    { label: "Happy Clients", value: 10 },
    { label: "Years Experience", value: 3},
    { label: "Technologies", value: 10 },
  ]



  export {stats,projects,techStack,}