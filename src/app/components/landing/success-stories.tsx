import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import templateImage from "@/public/peakpx.jpg";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer at Google",
    image: templateImage,
    rating: 5,
    testimony:
      "PolinemaCareer helped me land my dream job! The platform's user-friendly interface and extensive job listings made my job search incredibly efficient.",
    graduationYear: "2023",
    major: "Informatics Engineering",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "UI/UX Designer at Microsoft",
    image: templateImage,
    rating: 5,
    testimony:
      "As a fresh graduate, I found the perfect opportunity through PolinemaCareer. The career resources and company insights were invaluable.",
    graduationYear: "2022",
    major: "Information System",
  },
  {
    id: 3,
    name: "Amanda Williams",
    role: "Data Analyst at Amazon",
    image: templateImage,
    rating: 5,
    testimony:
      "The platform's job matching algorithm is spot-on! I received relevant job recommendations that perfectly aligned with my skills and career goals.",
    graduationYear: "2023",
    major: "Computer Engineering",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-8 bg-gradient-to-b from-[#fffaf8] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Alumni
          </h2>
          <p className="text-lg text-gray-600">
            Discover how PolinemaCareer has helped our graduates launch
            successful careers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-[#ff9b71] opacity-50" />
              </div>

              {/* Testimony */}
              <p className="text-gray-600 mb-6 italic">"{item.testimony}"</p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(item.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 fill-[#ff9b71] text-[#ff9b71]"
                  />
                ))}
              </div>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-[#ff9b71]">{item.role}</p>
                  <p className="text-xs text-gray-500">
                    {item.major} - Class of {item.graduationYear}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Job Placement Rate", value: "95%" },
            { label: "Average Salary Increase", value: "40%" },
            { label: "Companies Hiring", value: "500+" },
            { label: "Success Stories", value: "1000+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-[#ff9b71]/5"
            >
              <p className="text-3xl font-bold text-[#ff9b71] mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
