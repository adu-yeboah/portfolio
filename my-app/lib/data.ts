
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
  Twitter
} from 'lucide-react';

export const navigationItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const skills = [
  {
    category: 'Mobile Development',
    icon: Smartphone,
    items: ['React Native', "Flutter", 'Expo', 'Mobile UI/UX'],
    color: 'text-blue-400'
  },
  {
    category: 'Frontend Development',
    icon: Layout,
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'text-cyan-400'
  },
  {
    category: 'Backend Development',
    icon: Database,
    items: ['Node.js', 'Laravel', 'Express', 'MySQL', 'MongoDB', 'PostgreSQL'],
    color: 'text-emerald-400'
  },
  {
    category: 'Languages & Tools',
    icon: Code2,
    items: ['JavaScript', 'PHP', 'Python', 'Git', 'Docker', 'AWS', "Azure"],
    color: 'text-purple-400'
  }
];

export const experiences = [
  {
    company: 'Freelance Software Developer',
    role: 'Full Stack Developer',
    period: '2022 - Present',
    description: 'Developing high-quality mobile and web applications for various clients across different industries.',
    achievements: [
      'Built and launched multiple mobile apps on Play Store.',
      'Developed custom CMS solutions based on Laravel and React.',
      'Optimized application performance reducing load times by 40%.'
    ]
  },
  // Add more experiences here as needed
];

export const mobileProjects = [
  {
    title: 'SignEase',
    description: 'An educational app to learn Ghanaian Sign Language with videos, quizzes, and progress tracking.',
    imageSrc: '/images/signease.jpg',
    techStack: ['React Native', 'Expo', 'Global State'],
    links: {
      preview: '/images/signease.jpg',
      download: 'https://drive.google.com/your-signease-apk-link',
    },
    highlight: 'Education'
  },
  {
    title: 'Notora',
    description: 'A note-taking app with folder management, audio recording, and transcription features.',
    imageSrc: '/images/notora.jpg',
    techStack: ['React Native', 'Expo', 'SQLite'],
    links: {
      preview: '/images/notora.jpg',
      download: 'https://play.google.com/store/apps/details?id=com.aduyeboah.notora',
    },
    highlight: 'Productivity'
  },
  {
    title: 'Quick Scan',
    description: 'A QR code scanning and generation app for everyday use.',
    imageSrc: '/images/quickscan.jpg',
    techStack: ['React Native', 'Expo', 'Camera API'],
    links: {
      preview: '/images/quickscan.jpg',
      download: 'https://play.google.com/store/apps/details?id=com.aduyeboah.quickscan',
    },
    highlight: 'Utility'
  },
];

export const webProjects = [
  {
    title: 'Chat App',
    description: 'Real-time chat application with WebSockets and end-to-end encryption concepts.',
    imageSrc: '/images/chat.JPG',
    techStack: ['Next.js', 'Node.js', 'Socket.io', 'MongoDB'],
    links: {
      demo: 'https://chat-eta-opal.vercel.app/',
      github: 'https://github.com/adu-yeboah/chat',
    },
    highlight: 'Real-time'
  },
  {
    title: 'Wisconstructures',
    description: 'A responsive real estate platform with a heavy-duty admin dashboard.',
    imageSrc: '/images/wiscon.JPG',
    techStack: ['React', 'Laravel', 'MySQL', 'Redux'],
    links: {
      github: 'https://github.com/adu-yeboah/Winconstructures',
    },
    highlight: 'Real Estate'
  },
  {
    title: 'Flick Time',
    description: 'A movie discovery app with advanced filtering and API integration.',
    imageSrc: '/images/flicktime.JPG',
    techStack: ['React', 'SCSS', 'TMDB API'],
    links: {
      github: 'https://github.com/adu-yeboah/FlickTime_web',
    },
    highlight: 'Entertainment'
  },
  {
    title: 'Luxury Afthonia',
    description: 'A high-end creative project showcasing premium animations and modern design.',
    imageSrc: '/images/luxury_afthonia.JPG',
    techStack: ['JavaScript', 'Canvas', 'GSAP'],
    links: {
      demo: 'http://www.luxuryafthonia.com/',
    },
    highlight: 'Creative'
  }
];

export const contactInfo = [
  {
    type: 'Email',
    value: 'aduyeboah001@gmail.com',
    href: 'mailto:aduyeboah001@gmail.com',
    icon: Mail,
    color: 'hover:text-cyan-400'
  },
  {
    type: 'GitHub',
    value: 'github.com/adu-yeboah',
    href: 'https://github.com/adu-yeboah/',
    icon: Github,
    color: 'hover:text-white'
  },
  {
    type: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: '#', // Add real LinkedIn if known
    icon: Linkedin,
    color: 'hover:text-blue-500'
  }
];
