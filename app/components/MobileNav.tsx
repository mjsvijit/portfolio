'use client';

import { useState } from 'react';

interface MobileNavProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

export default function MobileNav({ activeSection, onSectionClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'services', name: 'Services' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'education', name: 'Education' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleClick = (section: string) => {
    onSectionClick(section);
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold text-gray-900">Portfolio</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 flex items-center justify-center text-gray-900"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-gray-200 bg-white">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={`w-full text-left px-6 py-3 font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-yellow-500 text-white'
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
            >
              {section.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

