"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProgressBarProps {
  label: string;
  percentage: number;
}

function ProgressBar({ label, percentage }: ProgressBarProps) {
  return (
    <div className="mb-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-medium text-gray-800">{label}</span>
        <span className="text-xs text-gray-600">{percentage}%</span>
      </div>
      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-yellow-500 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function LeftSidebar() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, text: string, type: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div className="w-80 bg-white h-screen fixed left-0 top-0 border-r border-gray-200 z-40 flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        {/* Profile Picture */}
        <div className="flex justify-center mb-5">
          <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden border-4 border-yellow-500 relative">
            <Image
              src="/images/profile_image_v2.jpg"
              alt="Profile Picture"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-5">
          <h1 className="text-xl font-bold text-gray-900 mb-1">Vijit Singh</h1>
          <p className="text-gray-600 text-sm">Full Stack Developer</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-2 mb-6">
          <a
            href="mailto:vijitsinghayd@gmail.com"
            onClick={(e) => handleCopy(e, "vijitsinghayd@gmail.com", "email")}
            className="w-9 h-9 bg-yellow-500 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors relative group"
            aria-label="Email"
          >
            {copied === "email" ? (
              <>
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-100 transition-opacity whitespace-nowrap z-50">
                  Email Copied!
                </span>
              </>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            )}
          </a>
          <a
            href="tel:+917905597148"
            onClick={(e) => handleCopy(e, "+917905597148", "mobile")}
            className="w-9 h-9 bg-yellow-500 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors relative group"
            aria-label="Mobile"
          >
            {copied === "mobile" ? (
              <>
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-100 transition-opacity whitespace-nowrap z-50">
                  Phone Copied!
                </span>
              </>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            )}
          </a>
          <a
            href="https://www.linkedin.com/in/vijit-singh-9696aa203/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-yellow-500 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/mjsvijit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-yellow-500 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Personal Info */}
        <div className="mb-6 space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 font-semibold text-xs w-20">
              Age:
            </span>
            <span className="text-gray-800 text-xs">25</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 font-semibold text-xs w-20">
              Residence:
            </span>
            <span className="text-gray-800 text-xs">India</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 font-semibold text-xs w-20">
              Status:
            </span>
            <span className="text-green-600 text-xs font-medium">
              Open to Work
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 font-semibold text-xs w-20">
              Location:
            </span>
            <span className="text-gray-800 text-xs">Kolkata, India</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 font-semibold text-xs w-20">
              Hobby:
            </span>
            <span className="text-gray-800 text-xs">Visiting new places</span>
          </div>
        </div>

        {/* Languages Section */}
        <div className="mb-2">
          <h3 className="text-sm font-medium text-gray-900 mb-1">Languages</h3>
          <ProgressBar label="Hindi" percentage={100} />
          <ProgressBar label="English" percentage={70} />
          <ProgressBar label="Bengali" percentage={30} />
        </div>

        {/* Download CV Button */}
        {/* <Link
          href="https://drive.google.com/drive/folders/1whqNhMKq4e_b8WKLuMHIhTTkOyO3QAiB?usp=sharing"
          target="_blank"
          className="mt-2 w-full bg-yellow-500 text-white font-semibold py-2.5 rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2 text-sm"
        >
          <span>DOWNLOAD CV</span>
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
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </Link> */}
      </div>
    </div>
  );
}
