"use client";

interface ProgressBarProps {
  label: string;
  percentage: number;
}

function ProgressBar({ label, percentage }: ProgressBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-base font-semibold text-gray-900">{label}</span>
        <span className="text-sm text-gray-600">{percentage}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-yellow-500 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are my core technical skills and expertise in modern web
            development technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills with Progress Bars */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Technical Skills
            </h3>
            <ProgressBar label="React.js" percentage={95} />
            <ProgressBar label="Next.js" percentage={90} />
            <ProgressBar label="React Native" percentage={85} />
            <ProgressBar label="JavaScript" percentage={90} />
            <ProgressBar label="Redux" percentage={85} />
            <ProgressBar label="Context API" percentage={90} />
            <ProgressBar label="Strapi" percentage={80} />
          </div>

          {/* Extra Skills */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Additional Skills
            </h3>
            <div className="space-y-3">
              {[
                "CSS - Bootstrap",
                "TypeScript",
                "GraphQL",
                "Google Analytics",
                "Firebase Notification",
                "REST APIs",
                "Formik & Yup Toolkit",
                "Responsive Design",
                "SEO Optimization",
                "n8n Workflows",
                "Agile Collaboration",
              ].map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-yellow-500 mt-1 font-bold">▸</span>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
