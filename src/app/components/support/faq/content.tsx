"use client";
import React, { useState } from "react";
import { HelpCircle } from "lucide-react";
import { FAQ_DATA } from "@/app/data/faq/data";
import { FAQItem } from "./item";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-[#fffaf8] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 -left-96 w-[500px] h-[500px] bg-[#ff9b71]/10 rounded-full blur-3xl opacity-80" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#ff9b71]/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff9b71]/10 mb-4">
              <HelpCircle className="w-4 h-4 text-[#ff9b71]" />
              <span className="text-sm font-medium text-[#ff9b71]">
                Got Questions?
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Here are some of the most commonly asked questions. If you can't
              find what you're looking for, feel free to contact us!
            </p>
          </div>

          {/* FAQ Content */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="space-y-6">
              {FAQ_DATA.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
