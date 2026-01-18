"use client";

interface ExperienceItemProps {
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

function ExperienceItem({
  role,
  duration,
  description,
  technologies,
}: ExperienceItemProps) {
  return (
    <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-500 transition-all">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-900">{role}</h3>
        <span className="text-sm text-yellow-600 font-semibold bg-yellow-100 px-3 py-1 rounded-full">
          {duration}
        </span>
      </div>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Software Engineer",
      duration: "Aug 2022 - Present",
      description:
        "At Indus Net Technologies Pvt. Ltd., I work as a Full-stack developer with 3.6 years of experience delivering end-to-end project solutions (Next.js, React.js, React Native) and backend (Strapi, REST/GraphQL APIs). Handled 12+ projects independently, collaborating with stakeholders to meet 96% of milestones and reducing development costs by 15%.",
      technologies: [
        "Next.js",
        "React.js",
        "React Native",
        "Strapi",
        "n8n",
        "AI Solutions",
      ],
    },
    {
      role: "Full Stack Development Projects",
      duration: "Graduated March 2022",
      description:
        "Completed intensive training at Masai School, building 4+ full-stack projects using the MERN stack and modern web technologies.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express",
        "React.js",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience & Expertise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I bring extensive experience in modern web and mobile development,
            ready to contribute to your international team.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>

        <div className="mt-12 bg-yellow-50 border-2 border-yellow-500 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Looking for Opportunities
          </h3>
          <p className="text-gray-700 mb-4">
            I'm actively seeking full-time positions as a React Developer in
            international companies. Open to relocation and ready to bring my
            skills and experience to a global team.
          </p>
          <p className="text-sm text-gray-600">
            Available for remote work, on-site positions, or hybrid arrangements
            worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
