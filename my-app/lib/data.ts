import {
  Code2,
  Smartphone,
  Database,
  Layout,
  Github,
  Mail,
  Linkedin,
  CloudUpload,
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
    items: [
      "React Native",
      "Expo",
      "Expo Router",
      "Reanimated",
      "Gesture Handler",
    ],
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
    category: "Backend & APIs",
    icon: Database,
    items: [
      "Node.js",
      "Laravel",
      "Express",
      "REST APIs",
      "WebSockets",
      "MySQL",
    ],
    color: "text-emerald-400",
  },
  {
    category: "Release & SDKs",
    icon: CloudUpload,
    items: [
      "EAS Build/Submit",
      "Stripe",
      "PayStack",
      "Google OAuth",
      "AWS",
      "AZURE",
      "railway",
      "namecheap",
    ],
    color: "text-purple-400",
  },
];

export const experiences = [
  {
    company: "Cognize Corporation",
    role: "Full Stack Developer",
    period: "Sep 2025 – Present",
    description:
      "Lead development across mobile (React Native/Expo) and web (React.js/Next.js) for two production educational platforms — shipping updates to both the App Store and Google Play.",
    achievements: [
      "Built subscription systems combining Stripe (Android) and iOS In-App Purchases across both apps.",
      "Implemented OTP verification, role-based access control, and secure token management.",
      "Built interactive features: animated lesson flows, quizzes with real-time feedback, and Chart.js visualizations.",
      "Developed web admin dashboard for content management, user analytics, and platform configuration.",
    ],
  },
  {
    company: "Freelance — Multiple Clients",
    role: "Full Stack Developer",
    period: "2022 – Present",
    description:
      "Architected and delivered production mobile and web applications across fintech, e-commerce, and real estate industries.",
    achievements: [
      "Shipped multiple React Native/Expo apps to the Apple App Store and Google Play.",
      "Built responsive multi-role dashboards (Individual/Business/Enterprise) with Framer Motion and Chart.js.",
      "Integrated Stripe and PayStack payment processing for subscription management.",
      "Delivered SEO-optimized Next.js landing pages with 90+ Lighthouse scores.",
    ],
  },
  {
    company: "Bilo Tech Ltd., Tema",
    role: "Frontend Developer",
    period: "Aug – Oct 2024",
    description:
      "Developed high-performance web frontend and React Native mobile app for a food-ordering platform.",
    achievements: [
      "Built Next.js frontend with SSR achieving 90+ Lighthouse performance score.",
      "Integrated Hubtel payment gateway for secure in-app payments.",
      "Connected REST APIs for authentication and real-time order updates via WebSockets.",
    ],
  },
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
}
export const mobileProjects: Projects[] = [
  {
    slug: "quick-scan",
    title: "Quick Scan",
    description: "A QR code scanning and generation app for everyday use.",
    imageSrc: "/images/quickscan.png",
    gallery: ["/images/quickscan.png"],
    content:
      "## Overview\nQuick Scan is a versatile utility application designed to make scanning and generating QR codes fast and effortless. Built with React Native and Expo, it leverages the device's camera to instantly decode various QR types.\n\n## Features\n- Fast and accurate scanning\n- Create custom QR codes\n- History tracking of scanned codes",
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
    gallery: ["/images/signease.jpg"],
    content:
      "## Overview\nSignEase bridges the communication gap by providing an intuitive platform to learn Ghanaian Sign Language (GSL). It features a structured curriculum with interactive video lessons.\n\n## Features\n- Video-based learning modules\n- Interactive quizzes\n- Progress tracking",
    techStack: ["React Native", "Expo", "Global State"],
    links: {
      preview: "/images/signease.jpg",
      // download: "ADD_YOUR_LINK_HERE",
    },
    highlight: "Education",
  },
  {
    slug: "InStuddy",
    title: "InStuddy",
    description:
      "A study aid application for students to manage their coursework and resources.",
    imageSrc: "/images/instuddy.png",
    gallery: ["/images/instuddy.png"],
    content:
      "## Overview\nInStuddy is designed to help students organize their study materials and manage their coursework effectively. It provides a centralized platform for accessing notes, assignments, and other educational resources.\n\n## Technical Details\nBuilt with Next.js for a blazing fast frontend and Laravel for a robust backend, connected to a MySQL database.",
    techStack: ["React Native", "Expo"],
    links: {
      demo: "https://www.instuddy.com/",
      // github: "https://github.com/adu-yeboah/invoicepay",
    },
    highlight: "Education",
  },
  {
    slug: "notora",
    title: "Notora",
    description:
      "A note-taking app with folder management, audio recording, and transcription features.",
    imageSrc: "/images/notora.jpg",
    gallery: ["/images/notora.jpg"],
    content:
      "## Overview\nNotora is a powerful productivity tool tailored for users who need structured note-taking. It goes beyond simple text notes by incorporating audio recordings and transcription features.\n\n## Features\n- Advanced folder management\n- In-app audio recording\n- Text transcription",
    techStack: ["React Native", "Expo", "SQLite"],
    links: {
      preview: "/images/notora.jpg",
      download:
        "https://play.google.com/store/apps/details?id=com.aduyeboah.notora",
    },
    highlight: "Productivity",
  },
];

export const webProjects: Projects[] = [
  {
    slug: "InStuddy",
    title: "InStuddy",
    description:
      "A study aid application for students to manage their coursework and resources.",
    imageSrc: "/images/instuddy.png",
    gallery: ["/images/instuddy.png"],
    content:
      "## Overview\nInStuddy is designed to help students organize their study materials and manage their coursework effectively. It provides a centralized platform for accessing notes, assignments, and other educational resources.\n\n## Technical Details\nBuilt with Next.js for a blazing fast frontend and Laravel for a robust backend, connected to a MySQL database.",
    techStack: ["Next.js", "Node JS", "PayStack", "PostgreSQL"],
    links: {
      demo: "https://www.instuddy.com/",
      // github: "https://github.com/adu-yeboah/invoicepay",
    },
    highlight: "Education",
  },
  {
    slug: "react-flash-message",
    title: "React Flash Message",
    description:
      "An open-source, reusable React component library for elegant flash notifications with theming support.",
    imageSrc: "/images/flashmessage.png",
    gallery: [],
    content:
      "## Overview\nA reusable React component library published on npm with TypeScript support. Designed for developer experience, API ergonomics, and consistency across React applications.\n\n## Features\n- Theming support for custom branding\n- TypeScript-first with full type safety\n- Semantic versioning and documented API\n- Published and versioned on npm",
    techStack: ["React", "TypeScript", "npm"],
    links: {
      github: "https://github.com/adu-yeboah/flash-message",
    },
    highlight: "Open Source",
  },
  {
    slug: "invoice-pay",
    title: "Invoice Pay",
    description:
      "An application to help creatives and freelancers manage their invoicing.",
    imageSrc: "/images/invoicepay.png",
    gallery: ["/images/invoicepay.png"],
    content:
      "## Overview\nInvoice Pay simplifies the billing process for freelancers and creatives. It allows users to generate professional invoices, track payments, and integrate directly with payment gateways like PayStack.\n\n## Technical Details\nBuilt with Next.js for a blazing fast frontend and Laravel for a robust backend, connected to a MySQL database.",
    techStack: ["Next.js", "Laravel", "PayStack", "MySQL"],
    links: {
      demo: "https://invoicepay.vercel.app/",
      github: "https://github.com/adu-yeboah/invoicepay",
    },
    highlight: "Fintech",
  },
  {
    slug: "flick-time",
    title: "Flick Time",
    description:
      "A movie discovery app with advanced filtering and API integration.",
    imageSrc: "/images/flicktime.png",
    gallery: [
      "/images/flicktime1.png",
      "/images/flicktime2.png",
      "/images/flicktime3.png",
    ],
    content:
      "## Overview\nFlick Time is your go-to app for discovering movies and TV shows. It integrates with the TMDB API to fetch the latest data, ratings, and trailers.\n\n## Features\n- Advanced search and filtering\n- Detailed movie information\n- Responsive grid layout",
    techStack: ["React", "SCSS", "TMDB API"],
    links: {
      github: "https://github.com/adu-yeboah/FlickTime_web",
      demo: "https://flick-time.vercel.app/",
    },
    highlight: "Entertainment",
  },
  {
    slug: "wisconstructures",
    title: "Wisconstructures",
    description:
      "A responsive real estate platform with a heavy-duty admin dashboard.",
    imageSrc: "/images/estate.png",
    gallery: ["/images/estate.png"],
    content:
      "## Overview\nWisconstructures serves as a comprehensive real estate platform. It features property listings with advanced filtering and a powerful admin dashboard for managing properties, agents, and user inquiries.\n\n## Technical Details\nThe frontend is powered by Next.js and Redux for state management, interacting with a Node.js backend.",
    techStack: ["Next.js", "Node.js", "Redux"],
    links: {
      demo: "https://winconstructures.vercel.app/",
      github: "https://github.com/adu-yeboah/Winconstructures",
    },
    highlight: "Real Estate",
  },
  // {
  //   slug: "chat-app",
  //   title: "Chat App",
  //   description:
  //     "Real-time chat application with WebSockets and end-to-end encryption concepts.",
  //   imageSrc: "/images/chat.JPG",
  //   gallery: [
  //     "/images/chat.JPG"
  //   ],
  //   content: "## Overview\nThis Chat App explores real-time communication using WebSockets. It supports private messaging, group chats, and provides a sleek, responsive interface.\n\n## Technical Details\nSocket.io is used for real-time bidirectional event-based communication, backed by Node.js and MongoDB.",
  //   techStack: ["Next.js", "Node.js", "Socket.io", "MongoDB"],
  //   links: {
  //     demo: "https://chat-eta-opal.vercel.app/",
  //     github: "https://github.com/adu-yeboah/chat",
  //   },
  //   highlight: "Real-time",
  // },
  {
    slug: "istem-academy",
    title: "Istem Academy",
    description:
      "A school Platform for managemnt and announcement of school activities",
    imageSrc: "/images/school.png",
    gallery: ["/images/school.png"],
    content:
      "## Overview\nIstem Academy is an educational management platform. It facilitates communication between school administration, teachers, and students regarding activities and announcements.\n\n## Technical Details\nBuilt with the TALL stack (or similar Laravel + React/Inertia stack), providing a seamless SPA experience.",
    techStack: ["React.js", "Laravel", "Inertia.js"],
    links: {
      demo: "https://www.isteamacademi.com/",
      // github: 'https://github.com/adu-yeboah/chat',
    },
    highlight: "Real-time",
  },
  {
    slug: "luxury-afthonia",
    title: "Luxury Afthonia",
    description:
      "A high-end creative project showcasing premium animations and modern design.",
    imageSrc: "/images/luxury_afthonia.JPG",
    gallery: ["/images/luxury_afthonia.JPG"],
    content:
      "## Overview\nLuxury Afthonia is an experimental creative project focused on delivering a high-end visual experience. It relies heavily on complex animations and micro-interactions.\n\n## Technical Details\nGSAP (GreenSock Animation Platform) and Canvas are utilized to achieve smooth, performant animations.",
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
    value: "linkedin.com/in/adu-yeboah",
    href: "https://linkedin.com/in/adu-yeboah",
    icon: Linkedin,
    color: "hover:text-blue-500",
  },
];
