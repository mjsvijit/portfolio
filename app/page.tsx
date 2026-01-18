'use client';

import { useState, useEffect } from 'react';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import MobileNav from './components/MobileNav';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'skills', 'experience', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Navigation */}
      <MobileNav activeSection={activeSection} onSectionClick={scrollToSection} />

      {/* Left Sidebar - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block">
        <LeftSidebar />
      </div>

      {/* Right Sidebar Navigation - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block">
        <RightSidebar activeSection={activeSection} onSectionClick={scrollToSection} />
      </div>

      {/* Main Content Area */}
      <div className="lg:ml-80 lg:mr-16 pt-16 lg:pt-0">
        <HeroSection onScrollTo={scrollToSection} />
        <ServicesSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />

        {/* Footer */}
        <footer className="py-8 px-6 lg:px-12 bg-gray-100 border-t border-gray-200">
          <div className="max-w-6xl mx-auto text-center text-gray-600">
            <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
