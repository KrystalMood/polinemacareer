"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faqcontent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const termsData = [
    {
      title: "Introduction",
      content: "These Terms and Conditions govern your use of our website and services. By accessing and using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services."
    },
    {
      title: "User Responsibilities",
      content: "As a user, you are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to notify us immediately if you suspect any unauthorized use of your account."
    },
    {
      title: "Intellectual Property",
      content: "All content on this website, including text, images, logos, and software, is the property of the company and is protected by intellectual property laws. You may not copy, modify, distribute, or use any content without prior written consent from us."
    },
    {
      title: "Privacy and Data Protection",
      content: "We respect your privacy and are committed to protecting your personal information. Please refer to our Privacy Policy to understand how we collect, use, and protect your personal data."
    },
    {
      title: "Prohibited Activities",
      content: "You agree not to engage in any activity that could harm, disrupt, or impair the functioning of our website, including but not limited to hacking, uploading malicious software, or engaging in spamming or phishing activities."
    },
    {
      title: "Termination of Service",
      content: "We reserve the right to suspend or terminate your access to the website if we suspect any violation of these Terms and Conditions. This can occur with or without notice, depending on the severity of the violation."
    },
    {
      title: "Limitation of Liability",
      content: "We are not responsible for any damages, losses, or liabilities arising from the use of our website or services. You agree to use our services at your own risk and waive any claims for damages against us."
    },
    {
      title: "Governing Law",
      content: "These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which we operate. Any disputes arising from the use of our website will be subject to the exclusive jurisdiction of the courts in that jurisdiction."
    },
    {
      title: "Amendments to Terms",
      content: "We may update these Terms and Conditions from time to time. All changes will be posted on this page with an updated date. We encourage you to review these terms periodically to stay informed of any updates."
    },
    {
      title: "Contact Information",
      content: "If you have any questions or concerns regarding these Terms and Conditions, please contact us at support@example.com."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Terms and Conditions Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
          <p className="text-lg text-gray-600">Please read these Terms and Conditions carefully before using our website and services.</p>
        </div>

        {/* Terms and Conditions Content */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="space-y-6">
            {termsData.map((term, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 rounded-lg"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-xl font-semibold text-gray-700">{term.title}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </div>
                {openIndex === index && (
                  <div className="p-4 text-gray-700 bg-gray-50 rounded-lg">
                    <p>{term.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
