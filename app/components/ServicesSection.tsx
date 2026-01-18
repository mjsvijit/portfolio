"use client";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  isSpecial?: boolean;
}

function ServiceCard({
  icon,
  title,
  description,
  isSpecial,
}: ServiceCardProps) {
  if (isSpecial) {
    return (
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-500 transition-colors">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-yellow-500 font-semibold hover:underline">
          ORDER NOW →
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-500 transition-colors">
      <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-4 text-white text-2xl font-bold">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function ServicesSection() {
  const capabilities = [
    {
      icon: "< />",
      title: "Frontend Development",
      description:
        "Building responsive, scalable React and Next.js applications with modern UI/UX patterns",
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description:
        "Cross-platform mobile apps with React Native for iOS and Android",
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description:
        "Code splitting, lazy loading, SSR/SSG, and performance tuning for faster load times",
    },
    {
      icon: "🔧",
      title: "Full-Stack Integration",
      description:
        "Integrating frontend with APIs, headless CMS (Strapi), and backend services",
    },
    {
      icon: "🎯",
      title: "Modern Architecture",
      description:
        "Component-based architecture, state management, and scalable codebase structure",
    },
    {
      icon: "🚀",
      title: "Project Collaboration",
      description:
        "Working in agile teams, code reviews, and maintaining high code quality standards",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What I Do
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            As a full-stack developer with 3.6 years of experience, I specialize
            in building modern, performant web and mobile applications using
            cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <ServiceCard key={index} {...capability} />
          ))}
        </div>
      </div>
    </section>
  );
}
