import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Cpu,
  Layout,
  Github,
  Mail,
  Phone,
  Linkedin,
  Twitter,
} from "lucide-react";

export const navigationItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const skills = [
  {
    category: "Mobile Development",
    icon: Smartphone,
    items: ["React Native", "Flutter", "Expo", "Mobile UI/UX"],
    color: "text-blue-400",
  },
  {
    category: "Frontend Development",
    icon: Layout,
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    color: "text-cyan-400",
  },
  {
    category: "Backend Development",
    icon: Database,
    items: ["Node.js", "Laravel", "Express", "MySQL", "MongoDB", "PostgreSQL"],
    color: "text-emerald-400",
  },
  {
    category: "Languages & Tools",
    icon: Code2,
    items: ["JavaScript", "PHP", "Python", "Git", "Docker", "AWS", "Azure"],
    color: "text-purple-400",
  },
];

export const experiences = [
  {
    company: "Freelance Software Developer",
    role: "Full Stack Developer",
    period: "2022 - Present",
    description:
      "Developing high-quality mobile and web applications for various clients across different industries.",
    achievements: [
      "Built and launched multiple mobile apps on Play Store.",
      "Developed custom CMS solutions based on Laravel and React.",
      "Optimized application performance reducing load times by 40%.",
    ],
  },
  // Add more experiences here as needed
];

interface Projects {
    slug: string;
    title: string;
    description: string;
    imageSrc: string;
    gallery: string[];
    content: string;
    techStack: string[];
    links: {
        preview?: string;
        download?: string;
        github?: string;
        demo?: string;
    };
    highlight: string;
}[]
export const mobileProjects: Projects[] = [
  {
    slug: "quick-scan",
    title: "Quick Scan",
    description: "A QR code scanning and generation app for everyday use.",
    imageSrc: "/images/quickscan.png",
    gallery: [
      "/images/quickscan.png"
    ],
    content: "## Overview\nQuick Scan is a versatile utility application designed to make scanning and generating QR codes fast and effortless. Built with React Native and Expo, it leverages the device's camera to instantly decode various QR types.\n\n## Features\n- Fast and accurate scanning\n- Create custom QR codes\n- History tracking of scanned codes",
    techStack: ["React Native", "Expo", "Camera API"],
    links: {
      preview: "/images/quickscan.png",
      download:
        "https://play.google.com/store/apps/details?id=com.aduyeboah.quickscan",
    },
    highlight: "Utility",
  },
  // {
  //   title: "Quick Scan",
  //   description: "A QR code scanning and generation app for everyday use.",
  //   imageSrc: "/images/quickscan.png",
  //   techStack: ["React Native", "Expo", "Camera API"],
  //   links: {
  //     preview: "/images/quickscan.png",
  //     download:
  //       "https://play.google.com/store/apps/details?id=com.aduyeboah.quickscan",
  //   },
  //   highlight: "Utility",
  // },
  {
    slug: "signease",
    title: "SignEase",
    description:
      "An educational app to learn Ghanaian Sign Language with videos, quizzes, and progress tracking.",
    imageSrc: "/images/signease.jpg",
    gallery: [
      "/images/signease.jpg"
    ],
    content: "## Overview\nSignEase bridges the communication gap by providing an intuitive platform to learn Ghanaian Sign Language (GSL). It features a structured curriculum with interactive video lessons.\n\n## Features\n- Video-based learning modules\n- Interactive quizzes\n- Progress tracking",
    techStack: ["React Native", "Expo", "Global State"],
    links: {
      preview: "/images/signease.jpg",
      download: "https://drive.google.com/your-signease-apk-link",
    },
    highlight: "Education",
  },
  {
    slug: "notora",
    title: "Notora",
    description:
      "A note-taking app with folder management, audio recording, and transcription features.",
    imageSrc: "/images/notora.jpg",
    gallery: [
      "/images/notora.jpg"
    ],
    content: "## Overview\nNotora is a powerful productivity tool tailored for users who need structured note-taking. It goes beyond simple text notes by incorporating audio recordings and transcription features.\n\n## Features\n- Advanced folder management\n- In-app audio recording\n- Text transcription",
    techStack: ["React Native", "Expo", "SQLite"],
    links: {
      preview: "/images/notora.jpg",
      download:
        "https://play.google.com/store/apps/details?id=com.aduyeboah.notora",
    },
    highlight: "Productivity",
  },
];

export const webProjects: Projects[]  = [
  {
    slug: "InStuddy",
    title: "InStuddy",
    description:
      "A study aid application for students to manage their coursework and resources.",
    imageSrc: "/images/instuddy.png",
    gallery: [
      "/images/instuddy.png"
    ],
    content: "## Overview\nInStuddy is designed to help students organize their study materials and manage their coursework effectively. It provides a centralized platform for accessing notes, assignments, and other educational resources.\n\n## Technical Details\nBuilt with Next.js for a blazing fast frontend and Laravel for a robust backend, connected to a MySQL database.",
    techStack: ["Next.js", "Node JS", "PayStack", "PostgreSQL"],
    links: {
      demo: "https://www.instuddy.com/",
      // github: "https://github.com/adu-yeboah/invoicepay",
    },
    highlight: "Education",
  },
  {
    slug: "invoice-pay",
    title: "Invoice Pay",
    description:
      "An application to help creatives and freelancers manage their invoicing.",
    imageSrc: "/images/invoicepay.png",
    gallery: [
      "/images/invoicepay.png"
    ],
    content: "## Overview\nInvoice Pay simplifies the billing process for freelancers and creatives. It allows users to generate professional invoices, track payments, and integrate directly with payment gateways like PayStack.\n\n## Technical Details\nBuilt with Next.js for a blazing fast frontend and Laravel for a robust backend, connected to a MySQL database.",
    techStack: ["Next.js", "Laravel", "PayStack", "MySQL"],
    links: {
      demo: "https://invoicepay.vercel.app/",
      github: "https://github.com/adu-yeboah/invoicepay",
    },
    highlight: "Fintech",
  },
  {
    slug: "wisconstructures",
    title: "Wisconstructures",
    description:
      "A responsive real estate platform with a heavy-duty admin dashboard.",
    imageSrc: "/images/estate.png",
    gallery: [
      "/images/estate.png"
    ],
    content: "## Overview\nWisconstructures serves as a comprehensive real estate platform. It features property listings with advanced filtering and a powerful admin dashboard for managing properties, agents, and user inquiries.\n\n## Technical Details\nThe frontend is powered by Next.js and Redux for state management, interacting with a Node.js backend.",
    techStack: ["Next.js", "Node.js", "Redux"],
    links: {
      demo: "https://winconstructures.vercel.app/",
      github: "https://github.com/adu-yeboah/Winconstructures",

    },
    highlight: "Real Estate",
  },
  {
    slug: "chat-app",
    title: "Chat App",
    description:
      "Real-time chat application with WebSockets and end-to-end encryption concepts.",
    imageSrc: "/images/chat.JPG",
    gallery: [
      "/images/chat.JPG"
    ],
    content: "## Overview\nThis Chat App explores real-time communication using WebSockets. It supports private messaging, group chats, and provides a sleek, responsive interface.\n\n## Technical Details\nSocket.io is used for real-time bidirectional event-based communication, backed by Node.js and MongoDB.",
    techStack: ["Next.js", "Node.js", "Socket.io", "MongoDB"],
    links: {
      demo: "https://chat-eta-opal.vercel.app/",
      github: "https://github.com/adu-yeboah/chat",
    },
    highlight: "Real-time",
  },
  {
    slug: "istem-academy",
    title: "Istem Academy",
    description:
      "A school Platform for managemnt and announcement of school activities",
    imageSrc: "/images/school.png",
    gallery: [
      "/images/school.png"
    ],
    content: "## Overview\nIstem Academy is an educational management platform. It facilitates communication between school administration, teachers, and students regarding activities and announcements.\n\n## Technical Details\nBuilt with the TALL stack (or similar Laravel + React/Inertia stack), providing a seamless SPA experience.",
    techStack: ["React.js", "Laravel", "Inertia.js"],
    links: {
      demo: "https://www.isteamacademi.com//",
      // github: 'https://github.com/adu-yeboah/chat',
    },
    highlight: "Real-time",
  },

  {
    slug: "flick-time",
    title: "Flick Time",
    description:
      "A movie discovery app with advanced filtering and API integration.",
    imageSrc: "/images/flicktime.JPG",
    gallery: [
      "/images/flicktime.JPG"
    ],
    content: "## Overview\nFlick Time is your go-to app for discovering movies and TV shows. It integrates with the TMDB API to fetch the latest data, ratings, and trailers.\n\n## Features\n- Advanced search and filtering\n- Detailed movie information\n- Responsive grid layout",
    techStack: ["React", "SCSS", "TMDB API"],
    links: {
      github: "https://github.com/adu-yeboah/FlickTime_web",
    },
    highlight: "Entertainment",
  },
  {
    slug: "luxury-afthonia",
    title: "Luxury Afthonia",
    description:
      "A high-end creative project showcasing premium animations and modern design.",
    imageSrc: "/images/luxury_afthonia.JPG",
    gallery: [
      "/images/luxury_afthonia.JPG"
    ],
    content: "## Overview\nLuxury Afthonia is an experimental creative project focused on delivering a high-end visual experience. It relies heavily on complex animations and micro-interactions.\n\n## Technical Details\nGSAP (GreenSock Animation Platform) and Canvas are utilized to achieve smooth, performant animations.",
    techStack: ["JavaScript", "Canvas", "GSAP"],
    links: {
      demo: "http://www.luxuryafthonia.com/",
    },
    highlight: "Creative",
  },
];

export const contactInfo = [
  {
    type: "Email",
    value: "aduyeboah001@gmail.com",
    href: "mailto:aduyeboah001@gmail.com",
    icon: Mail,
    color: "hover:text-cyan-400",
  },
  {
    type: "GitHub",
    value: "github.com/adu-yeboah",
    href: "https://github.com/adu-yeboah/",
    icon: Github,
    color: "hover:text-white",
  },
  {
    type: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "#", // Add real LinkedIn if known
    icon: Linkedin,
    color: "hover:text-blue-500",
  },
];
