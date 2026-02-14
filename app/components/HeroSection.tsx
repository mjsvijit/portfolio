"use client";

import Image from "next/image";

interface HeroSectionProps {
  onScrollTo: (section: string) => void;
}

export default function HeroSection({ onScrollTo }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-12 lg:py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            {/* I'm */}
             <span className="text-yellow-500">Vijit Singh</span>
          </h1>
          <h4 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
            Full Stack Developer
          </h4>
          <p className="text-gray-600 text-lg leading-relaxed">
            Full-stack developer with 3.6 years of experience delivering
            end-to-end project solutions across frontend (Next.js, React.js,
            React Native) and backend (Strapi, REST/GraphQL APIs). Successfully
            handled 12+ projects independently, with expertise in n8n workflows
            and AI solutions to optimize automation and business processes.
          </p>
          <button
            onClick={() => onScrollTo("contact")}
            className="bg-yellow-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-yellow-600 transition-colors flex items-center gap-2 text-lg"
          >
            <span>HIRE ME</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative z-10 max-w-md w-full">
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/images/profile_image.png"
                alt="Profile Picture"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              />
            </div>
          </div>

          {/* Decorative Shapes */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-300 rounded-full opacity-60 -z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-300 rounded-lg opacity-40 -z-10"></div>
          <div className="absolute top-1/2 -right-8 w-16 h-16 bg-blue-300 rounded-full opacity-50 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
