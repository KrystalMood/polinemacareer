import React from "react";
import aboutImage from "@/public/template1.jpg";
import { Users, Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";

const TEAM = [
  {
    name: "Pramudya Surya",
    role: "CEO & Founder",
    image: aboutImage,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Giovano Alkandri",
    role: "COO",
    image: aboutImage,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Atabik M",
    role: "Head of Marketing",
    image: aboutImage,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Fauzie Ikhsanul",
    role: "Lead Developer",
    image: aboutImage,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Tiara Mera",
    role: "Lead Developer",
    image: aboutImage,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Zannur",
    role: "Lead Developer",
    image: aboutImage,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

export default function Team() {
  return (
    <section className="relative bg-[#fffaf8] py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 -left-96 w-[500px] h-[500px] bg-[#ff9b71]/10 rounded-full blur-3xl opacity-80" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#ff9b71]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff9b71]/10 mb-4">
            <Users className="w-4 h-4 text-[#ff9b71]" />
            <span className="text-sm font-medium text-[#ff9b71]">Our Team</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Meet The Team Behind PolinemaCareer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our talented team of professionals dedicated to revolutionizing the
            way students find their dream careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-sm border border-[#FFE4D6] 
              hover:border-[#FFBB9C] hover:shadow-lg hover:shadow-[#FFE4D6]/50 
              hover:scale-[1.02] hover:-translate-y-1
              transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div
                  className="relative w-24 h-24 rounded-xl overflow-hidden ring-4 ring-[#ff9b71]/20 
                group-hover:ring-[#ff9b71]/40 transition-all"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#ff9b71]/0 group-hover:bg-[#ff9b71]/10 transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl font-semibold text-slate-900 group-hover:text-[#ff9b71] 
                  transition-colors mb-1"
                  >
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 transition-colors">
                    {member.role}
                  </p>
                  <div
                    className="flex gap-3 transform translate-y-0 opacity-100 group-hover:translate-y-0 
                  transition-all duration-300"
                  >
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-[#ff9b71]/10 rounded-lg hover:bg-[#ff9b71]/20 
                      hover:scale-110 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4 text-[#ff9b71]" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 bg-[#ff9b71]/10 rounded-lg hover:bg-[#ff9b71]/20 
                      hover:scale-110 transition-all duration-300"
                    >
                      <Twitter className="w-4 h-4 text-[#ff9b71]" />
                    </a>
                    <a
                      href={member.social.github}
                      className="p-2 bg-[#ff9b71]/10 rounded-lg hover:bg-[#ff9b71]/20 
                      hover:scale-110 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 text-[#ff9b71]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
