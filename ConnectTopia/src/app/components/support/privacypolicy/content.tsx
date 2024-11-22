"use client";
import React, { useEffect, useState } from "react";
import { Shield, Lock, FileText, Bell, Settings, Mail } from "lucide-react";

const SECTIONS = [
  {
    id: "introduction",
    icon: <Shield className="w-6 h-6" />,
    title: "Introduction",
    content: [
      "PolinemaCareer is a job-seeking platform created exclusively for Politeknik Negeri Malang students and alumni. This Privacy Policy outlines how we handle your personal information when you use our platform to find or post jobs.",
      "By using PolinemaCareer, you agree to the terms of this Privacy Policy. If you do not agree, please refrain from using the platform.",
    ],
  },
  {
    id: "information-collected",
    icon: <FileText className="w-6 h-6" />,
    title: "Information We Collect",
    content: [
      "To provide our services effectively, we collect certain information from users, including:",
    ],
    listItems: [
      "Personal details such as your full name, student ID (if applicable), email address, and phone number.",
      "Educational background and career-related information, such as your major, graduation year, resume, or portfolio links.",
      "Technical information, including your IP address, browser type, and device details.",
      "Activity data, such as job applications, saved jobs, and profile visits.",
      "Information provided by companies posting job listings on our platform.",
    ],
  },
  {
    id: "data-usage",
    icon: <Settings className="w-6 h-6" />,
    title: "How We Use Your Information",
    content: ["The information we collect is used to:"],
    listItems: [
      "Facilitate job matching and improve your experience on the platform.",
      "Allow companies to view your profile and contact you for job opportunities.",
      "Verify the authenticity of student or alumni accounts.",
      "Provide career guidance and personalized recommendations.",
      "Ensure the security and functionality of the platform.",
      "Send notifications about job openings, events, or updates relevant to your profile.",
    ],
  },
  {
    id: "data-security",
    icon: <Lock className="w-6 h-6" />,
    title: "Data Security",
    content: [
      "We prioritize the security of your personal data. PolinemaCareer implements robust measures to protect your information from unauthorized access or misuse.",
      "However, no system is completely secure. We encourage you to protect your account by using a strong password and avoiding sharing login credentials.",
    ],
  },
  {
    id: "notifications",
    icon: <Bell className="w-6 h-6" />,
    title: "Your Rights and Choices",
    content: [
      "As a user of PolinemaCareer, you have rights regarding your personal information:",
    ],
    listItems: [
      "Access your personal data and review the information we hold about you.",
      "Request corrections to inaccuracies in your profile information.",
      "Delete your account and associated data, subject to legal obligations.",
      "Opt out of receiving promotional emails or notifications.",
    ],
  },
];

const CONTACT_INFO = {
  email: "contact@polinemacarrier.com",
  phone: "081235305531",
  icon: <Mail className="w-6 h-6" />,
};

export default function PrivacyPolicyContent() {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-[#fffaf8]">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Your privacy matters to us. Learn how we protect and manage your
            personal information.
          </p>
        </div>

        {/* Navigation Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeSection === section.id
                  ? "bg-[#ff9b71] text-white"
                  : "bg-white text-gray-600 hover:bg-[#ff9b71]/10 hover:text-[#ff9b71]"
              }`}
            >
              {React.cloneElement(section.icon, {
                className: "w-4 h-4 mr-2",
              })}
              {section.title}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto">
          {SECTIONS.map((section) => (
            <div
              key={section.id}
              className={`transition-all duration-300 space-y-6 ${
                activeSection === section.id ? "block" : "hidden"
              }`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#ff9b71]/10 rounded-xl">
                    {React.cloneElement(section.icon, {
                      className: "w-6 h-6 text-[#ff9b71]",
                    })}
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  {section.listItems && (
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      {section.listItems.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-[#ff9b71]/10 rounded-2xl p-6 text-center">
            <div className="inline-flex p-3 bg-white rounded-xl mb-4">
              {React.cloneElement(CONTACT_INFO.icon, {
                className: "w-6 h-6 text-[#ff9b71]",
              })}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Need More Information?
            </h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about our privacy policy, please contact
              us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p>
                <strong>Email:</strong> {CONTACT_INFO.email}
              </p>
              <p>
                <strong>Phone:</strong> {CONTACT_INFO.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
