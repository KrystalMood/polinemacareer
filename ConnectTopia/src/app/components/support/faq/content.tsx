"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faqcontent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is this website about?",
      answer: "This website is a platform for developers to connect and share knowledge. It allows users to ask questions, share articles, and collaborate on projects."
    },
    {
      question: "How do I create an account?",
      answer: "Click on the 'Sign Up' button in the top right corner and fill in the necessary details such as email, username, and password."
    },
    {
      question: "How do I reset my password?",
      answer: "Go to the login page and click on 'Forgot Password'. You'll receive an email with instructions to reset your password."
    },
    {
      question: "How can I contact support?",
      answer: "You can contact support by emailing us at support@example.com or through the contact form on the support page."
    },
    {
      question: "What are the system requirements?",
      answer: "You need a modern web browser (Chrome, Firefox, Safari) and an internet connection to use the website. No specific hardware requirements."
    },
    {
      question: "Can I collaborate on projects with others?",
      answer: "Yes! You can invite other developers to collaborate on projects, share code, and communicate through the platform's messaging system."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Currently, there is no mobile app. However, the website is fully responsive and optimized for mobile browsing."
    },
    {
      question: "How do I delete my account?",
      answer: "If you wish to delete your account, please contact our support team via email and we will assist you in the process."
    },
    {
      question: "Is the website free to use?",
      answer: "Yes, the website is completely free to use. We offer optional premium features for advanced functionality."
    },
    {
      question: "How can I contribute to the website?",
      answer: "You can contribute by writing articles, answering questions, or providing suggestions through our feedback form."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* FAQ Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">Here are some of the most commonly asked questions. If you can't find what you're looking for, feel free to contact us!</p>
        </div>

        {/* FAQ Content */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 rounded-lg"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </div>
                {openIndex === index && (
                  <div className="p-4 text-gray-700 bg-gray-50 rounded-lg">
                    <p>{faq.answer}</p>
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
