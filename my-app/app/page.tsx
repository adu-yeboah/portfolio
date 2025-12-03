
import ContactItem from '@/components/contactItem';
import Navigation from '@/components/navigation';
import Particles from '@/components/particles';
import ProjectCard from '@/components/projectCard';
import Image from 'next/image';

export default function Home() {
  const mobileProjects = [
    {
      title: 'SignEase',
      description: 'An educational app to learn Ghanaian Sign Language with videos, quizzes, and progress tracking.',
      imageSrc: '/images/signease.jpg',
      techStack: ['React Native', 'Expo'],
      links: {
        preview: '/images/signease.jpg',
        download: 'https://drive.google.com/your-signease-apk-link',
      },
    },
    {
      title: 'Notora',
      description: 'A note-taking app with folder management, audio recording, and upcoming transcription features.',
      imageSrc: '/images/notora.jpg',
      techStack: ['React Native', 'Expo'],
      links: {
        preview: '/images/notora.jpg',
        download: 'https://play.google.com/store/apps/details?id=com.aduyeboah.notora',
      },
    },
    {
      title: 'Quick Scan',
      description: 'A QR code scanning and generation app for everyday use.',
      imageSrc: '/images/quickscan.jpg',
      techStack: ['React Native', 'Expo'],
      links: {
        preview: '/images/quickscan.jpg',
        download: 'https://drive.google.com/your-quickscan-apk-link',
      },
    },
  ];

  const webProjects = [
    {
      title: 'Chat App',
      description: 'Real-time chat application with WebSockets.',
      imageSrc: '/images/chat.JPG',
      techStack: ['Next.js', 'Node.js', 'MongoDB'],
      links: {
        demo: 'https://chat-eta-opal.vercel.app/',
        github: 'https://github.com/adu-yeboah/chat',
      },
    },
    {
      title: 'Wisconstructures',
      description: 'A responsive real estate platform with admin dashboard.',
      imageSrc: '/images/wiscon.JPG',
      techStack: ['React', 'Laravel', 'MySQL'],
      links: {
        github: 'https://github.com/adu-yeboah/Winconstructures',
      },
    },
    {
      title: 'School Landing Page',
      description: 'A Simple Landing Page for a School.',
      imageSrc: '/images/school_landpage.JPG',
      techStack: ['Next.js', 'Tailwind CSS'],
      links: {
        demo: 'https://school-5hjv.vercel.app/',
      },
    },
    {
      title: 'Flick Time',
      description: 'A movie discovery app with API integration.',
      imageSrc: '/images/flicktime.JPG',
      techStack: ['React', 'SCSS', 'API'],
      links: {
        github: 'https://github.com/adu-yeboah/FlickTime_web',
      },
    },
    {
      title: 'Luxury Afthonia',
      description: 'A creative project showcasing animations and design.',
      imageSrc: '/images/luxury_afthonia.JPG',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      links: {
        demo: 'http://www.luxuryafthonia.com/',
      },
    },
    {
      title: 'Blog App',
      description: 'A blog platform for Ghanaian tours.',
      imageSrc: '/images/blog.JPG',
      techStack: ['Laravel', 'Inertia.js', 'React'],
      links: {
        github: 'https://github.com/adu-yeboah/blog_app',
      },
    },
  ];

  return (
    <>
      <Particles />
      <Navigation />

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hello, I&apos;m <span className="text-cyan-400">Adu Yeboah Samuel</span>
              </h1>
              <p className="text-2xl text-gray-400">Software Developer</p>
              <p className="text-gray-300 text-lg">
                Crafting exceptional mobile & web experiences with modern technologies
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-semibold transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 border border-gray-700 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 rounded-full font-semibold transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
                <Image
                  src="/images/image.jpg"
                  alt="Adu Yeboah Samuel"
                  fill
                  className="rounded-full object-cover border-4 border-gray-800 relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="text-cyan-400">Me</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              Hi, I&apos;m <span className="text-cyan-400 font-semibold">Adu Yeboah Samuel</span>, a passionate software developer specializing in mobile and web applications.
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              I craft intuitive mobile apps using <strong className="text-cyan-400">React Native</strong> and build full-stack web solutions with <strong className="text-cyan-400">React.js</strong>, <strong className="text-cyan-400">Laravel</strong>, and <strong className="text-cyan-400">Node.js</strong>. My focus is on blending usability with performance to create impactful digital products.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-6">
              {['React Native (Expo)', 'React Js', 'Next Js', 'JavaScript', 'Node.js', 'Laravel'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-800 hover:bg-cyan-900/30 text-cyan-300 rounded-full transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Projects Section */}
      <section id="mobile-projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-cyan-900/20 rounded-lg">
              <span className="text-3xl">📱</span>
            </div>
            <h2 className="text-4xl font-bold">Mobile Applications</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Web Projects Section */}
      <section id="web-projects" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-cyan-900/20 rounded-lg">
              <span className="text-3xl">💻</span>
            </div>
            <h2 className="text-4xl font-bold">Web Applications</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <ContactItem
              type="email"
              value="aduyeboah001@gmail.com"
              href="mailto:aduyeboah001@gmail.com"
            />
            <ContactItem
              type="phone"
              value="0509272549"
              href="tel:+233509272549"
            />
            <ContactItem
              type="github"
              value="GitHub Profile"
              href="https://github.com/adu-yeboah/"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 bg-black/50">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Adu Yeboah Samuel. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}