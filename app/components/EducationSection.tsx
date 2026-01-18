"use client";

interface EducationItemProps {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
  achievements?: string[];
}

function EducationItem({
  degree,
  institution,
  duration,
  description,
  achievements,
}: EducationItemProps) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-500 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{degree}</h3>
          <p className="text-lg text-gray-700 font-medium mb-2">
            {institution}
          </p>
        </div>
        <span className="text-sm text-yellow-600 font-semibold bg-yellow-100 px-3 py-1 rounded-full whitespace-nowrap ml-4">
          {duration}
        </span>
      </div>
      {description && (
        <p className="text-gray-600 mb-3 leading-relaxed">{description}</p>
      )}
      {achievements && achievements.length > 0 && (
        <ul className="space-y-1 mt-4">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-gray-600"
            >
              <span className="text-yellow-500 mt-1">▸</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function EducationSection() {
  const education = [
    {
      degree: "Full Stack Web Development",
      institution: "Masai School, Bangalore, KA",
      duration: "Graduation Date: March 2022",
      description:
        "Intensive bootcamp focused on MERN stack and software engineering fundamentals.",
      achievements: [
        "4 Full Stack Development projects completed using HTML | CSS | Javascript | Node | Express | React.js",
        "Focused on data structures, algorithms, and collaborative projects.",
      ],
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Dr. Rammanohar Lohiya Awadh University, Ayodhya, UP",
      duration: "Graduation Date: October 2021",
      description:
        "Completed undergraduate degree with a focus on computer science and applications.",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My educational background and academic achievements that have shaped
            my journey as a developer.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>

        {/* Certifications or Additional Training */}
        <div className="mt-12 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Certifications & Continuous Learning
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-semibold text-gray-900">
                  React - The Complete Guide
                </p>
                <p className="text-sm text-gray-600">
                  Masai School / Offline Course
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-semibold text-gray-900">
                  Next.js & React - Complete Developer Guide
                </p>
                <p className="text-sm text-gray-600">
                  Masai School / Offline Course
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-semibold text-gray-900">
                  React Native - The Practical Guide
                </p>
                <p className="text-sm text-gray-600">
                  Masai School / Offline Course
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-semibold text-gray-900">
                  JavaScript Algorithms and Data Structures
                </p>
                <p className="text-sm text-gray-600">
                  Masai School / Offline Course
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
