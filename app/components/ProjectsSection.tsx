"use client";

import Image, { StaticImageData } from "next/image";
import Image1 from "@/public/gs1-icon.jpg";
import Image2 from "@/public/indusind_logo.png";
import Image3 from "@/public/numeropulse_icon.webp";
interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string | StaticImageData;
}

function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  image,
}: ProjectProps) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-500 hover:shadow-lg transition-all h-full flex flex-col">
      {/* Project Image Header */}
      <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-300">
        {image ? (
          <Image src={image} alt={title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            {title.charAt(0)}
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-1 leading-relaxed">{description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-gray-200">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors text-center text-sm flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition-colors text-center text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            Code
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "GS1 India - Product Marketplace",
      description:
        "Developed the GS1 India products (QR Code) Marketplace platform working across 120 countries, also utilized by the Indian Army. Developed frontend and backend for over 60 pages.",
      technologies: ["Next.js", "Strapi", "REST API", "GraphQL"],
      githubUrl: "",
      liveUrl: "https://www.gs1india.org",
      image: Image1, // Update with your actual image path
    },
    {
      title: "IndusInd Bank - Credit Card System",
      description:
        "Developed the online credit card management system for IndusInd Bank. Created components and layouts for 6 major pages with extensive validation using Formik.",
      technologies: ["React.js", "Formik", "REST API", "Validation"],
      githubUrl: "",
      liveUrl: "https://pay.indusind.bank.in/crd/",
      image: Image2, // Update with your actual image path
    },
    {
      title: "Numerology Mobile App",
      description:
        "A feature-rich mobile app to explore personalized numerology insights. Optimized API usage for performance and integrated Google Analytics and Firebase Notifications.",
      technologies: [
        "React Native",
        "Redux Toolkit",
        "Formik",
        "Yup",
        "Node.js",
        "Strapi",
      ],
      githubUrl: "",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.numeropulse&pcampaignid=web_share",
      image: Image3, // Update with your actual image path
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've built using React, Next.js, React
            Native, and Strapi. Each project demonstrates different skills and
            technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Want to see more? Check out my GitHub profile for additional
            projects and contributions.
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View All Projects on GitHub
          </a>
        </div> */}
      </div>
    </section>
  );
}
