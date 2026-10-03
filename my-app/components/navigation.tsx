"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { navigationItems } from '@/lib/data';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navigationItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-neutral-950/80 backdrop-blur border-b border-neutral-800'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-xl font-bold tracking-tight"
          >
            AY<span className="text-blue-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-neutral-400 hover:text-neutral-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="/resume.pdf"
              download
              className="ml-3 flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-neutral-800 text-neutral-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
            >
              <Download size={14} />
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-2 px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-100 p-2 rounded-md hover:bg-neutral-800/60 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 md:hidden transition-[opacity,visibility] duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70"
          onClick={() => setIsOpen(false)}
          aria-hidden
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 max-w-[80%] bg-neutral-950 border-l border-neutral-800 transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col px-6 pt-6">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md hover:bg-neutral-800/60 transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 mt-4">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3 py-3 text-base font-medium rounded-md transition-colors ${
                      isActive
                        ? 'text-blue-400 bg-blue-500/10'
                        : 'text-neutral-300 hover:text-neutral-100 hover:bg-neutral-800/50'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-4 px-3 py-3 text-center text-base font-medium rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-colors"
              >
                Hire Me
              </a>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
