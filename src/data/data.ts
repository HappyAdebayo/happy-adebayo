import backly from '@/assets/website/backly/backly-logo.png'

// DebtTracker Assets
import dtLogin from '@/assets/mobile/debtTracker/login.png';
import dtSignup from '@/assets/mobile/debtTracker/signup.jpeg';
import dtHomepage from '@/assets/mobile/debtTracker/homepage.png';
import dtSettings from '@/assets/mobile/debtTracker/settings.png';

// LincPay Assets
import lpLogin from '@/assets/mobile/lincpay/login.png';
import lpSignup from '@/assets/mobile/lincpay/signup.png';
import lpHomescreen from '@/assets/mobile/lincpay/homescreen.png';
import lpTransactions from '@/assets/mobile/lincpay/trasactionscreen.png';
import lpNotifications from '@/assets/mobile/lincpay/notification-screen.png';
import lpProfile from '@/assets/mobile/lincpay/profile-screen.png';

import {
  FileCode,
  ServerCog,
  Landmark,
  Code2,
  Database
} from "lucide-react";

const debtTrackerApk = new URL('../assets/mobile/debtTracker/abk/application-edc38657-c539-48e9-a206-91faab442717.apk', import.meta.url).href;

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

  const mobileApps = [
    {
      id: "lincpay",
      title: "LincPay",
      tagline: "School Finance & Fee Management",
      description: "LincPay is a school finance management platform designed to help students manage and pay their academic fees in one place.",
      platform: "iOS & Android (UI & Flow Showcase)",
      tech: ["React Native", "Tailwind CSS", "PHP / Laravel", "MySQL"],
      features: [
        "View and track all student fees in a unified dashboard",
        "Process payments securely with support for credit cards, bank transfers, and digital wallets",
        "View real-time receipt generation and complete transaction history",
        "Receive automated reminders and notifications for upcoming fee deadlines"
      ],
      screens: [
        { label: "Login", image: lpLogin, description: "Secure, responsive student login interface" },
        { label: "Sign Up", image: lpSignup, description: "Streamlined multi-step student registration" },
        { label: "Home", image: lpHomescreen, description: "Overview of pending fees and academic standing" },
        { label: "Transactions", image: lpTransactions, description: "Detailed list of recent and pending fee payments" },
        { label: "Notifications", image: lpNotifications, description: "Important announcements and deadline warnings" },
        { label: "Profile", image: lpProfile, description: "Personal details and financial configuration" },
      ]
    },
    {
      id: "debttracker",
      title: "DebtTracker",
      tagline: "Personal Finance & Debt Tracking",
      description: "DebtTracker is a personal finance tracking application that helps users record, monitor, and manage debts.",
      platform: "Android Application",
      tech: ["React Native", "Expo SDK", "SQLite", "Tailwind CSS"],
      features: [
        "Easily log money borrowed and lent with custom descriptions",
        "Set repayment due dates and get timely alert reminders",
        "Visual charts and summaries of net worth and outstanding balances",
        "100% offline functionality keeping your sensitive financial data secure on-device"
      ],
      apkUrl: debtTrackerApk,
      screens: [
        { label: "Login", image: dtLogin, description: "Fast biometric-ready login page" },
        { label: "Register", image: dtSignup, description: "Simple secure account sign up screen" },
        { label: "Home Screen", image: dtHomepage, description: "Comprehensive dashboard showing total debt, debtors, and recent activities" },
        { label: "Settings", image: dtSettings, description: "Profile preferences, notification toggles, and data export" },
      ]
    }
  ];

  export {stats,projects,techStack,mobileApps}