import React from "react";
import templateImage from "@/public/templatePost.png";
import Image, { StaticImageData } from "next/image";
import {
  ArrowRight,
  Bookmark,
  Briefcase,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Link,
  Mail,
  MapPin,
  PhoneCall,
  Timer,
  Twitter,
  Wallet,
  Youtube,
} from "lucide-react";
import { FaPinterest } from "react-icons/fa";

interface RelatedJob {
  company: string;
  location: string;
  position: string;
  type: string;
  salary: string;
  logo: StaticImageData;
}

export default function ApplyContent() {
  const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, minima laudantium, illo deserunt necessitatibus reiciendis veritatis exercitationem ullam praesentium architecto explicabo delectus rerum iusto nam nesciunt maxime quos laborum fugit, molestias sit quibusdam? Eaque, officiis nulla. Dolore, dolores. At voluptas corrupti in eum eligendi ut commodi esse, totam pariatur ab laborum cum voluptate quod necessitatibus recusandae, doloribus aperiam officiis dolores. Minus id explicabo vitae modi aut omnis asperiores, cumque officia facilis incidunt atque ratione praesentium, adipisci, eos quia! Sint id laudantium itaque deserunt sequi, obcaecati odit nobis quas inventore temporibus, a eligendi ut eius dolor suscipit eveniet totam. Nihil, ex?`;

  const companyDetails = [
    { label: "Founded in", value: "2010" },
    { label: "Organization type", value: "Private" },
    { label: "Company Size", value: "500-1000 employees" },
    { label: "Phone", value: "+1 (555) 123-4567" },
    { label: "Email", value: "info@companyname.com" },
    { label: "Website", value: "www.companyname.com" },
  ];

  const relatedJobs: RelatedJob[] = [
    {
      company: "Google Inc.",
      location: "Mountain View, CA",
      position: "Senior Product Designer",
      type: "Full Time",
      salary: "$120k-150k/year",
      logo: templateImage,
    },
    {
      company: "Microsoft",
      location: "Seattle, WA",
      position: "UX Research Lead",
      type: "Full Time",
      salary: "$110k-140k/year",
      logo: templateImage,
    },
    {
      company: "Apple",
      location: "Cupertino, CA",
      position: "UI/UX Designer",
      type: "Full Time",
      salary: "$100k-130k/year",
      logo: templateImage,
    },
    {
      company: "Meta",
      location: "Menlo Park, CA",
      position: "Product Designer",
      type: "Contract",
      salary: "$115k-145k/year",
      logo: templateImage,
    },
    {
      company: "Amazon",
      location: "Seattle, WA",
      position: "Senior UX Designer",
      type: "Full Time",
      salary: "$125k-155k/year",
      logo: templateImage,
    },
    {
      company: "Netflix",
      location: "Los Gatos, CA",
      position: "UI Designer",
      type: "Full Time",
      salary: "$105k-135k/year",
      logo: templateImage,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf8] to-white">
      <div className="mx-auto w-[90vw] max-w-7xl py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-6">
            <div className="relative">
              <Image
                src={templateImage}
                alt="Job Image"
                className="w-24 h-24 rounded-xl object-cover shadow-md group-hover:shadow-lg transition-all duration-300"
              />
              <div className="absolute -top-2 -right-2 bg-[#ff9b71]/10 rounded-full p-1.5">
                <Bookmark className="w-5 h-5 text-[#ff9b71]" />
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  Senior UX Design
                </h1>
                <span className="px-3 py-1 text-sm font-medium text-[#ff9b71] bg-[#ff9b71]/10 rounded-full">
                  Featured
                </span>
                <span className="px-3 py-1 text-sm font-medium text-[#ff9b71] bg-[#ff9b71]/10 rounded-full">
                  Full Time
                </span>
              </div>
              <div className="flex flex-wrap gap-6">
                <p className="text-sm text-gray-600 inline-flex items-center gap-2">
                  <Link className="w-4 h-4 text-[#ff9b71]" />
                  <a
                    href="http://instagram.com/username"
                    className="hover:text-[#ff9b71] transition-colors"
                  >
                    instagram.com/username
                  </a>
                </p>
                <p className="text-sm text-gray-600 inline-flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-gray-400" />
                  <a
                    href="tel:+14065550120"
                    className="hover:text-blue-600 transition-colors"
                  >
                    (406) 555-0120
                  </a>
                </p>
                <p className="text-sm text-gray-600 inline-flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <a
                    href="mailto:career@instagram.com"
                    className="hover:text-blue-600 transition-colors"
                  >
                    career@instagram.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-4">
            <button
              onClick={() => (window.location.href = "/auth/verif-apply/page")}
              className="inline-flex items-center px-8 py-3 bg-[#ff9b71] text-white font-semibold rounded-xl 
              hover:bg-[#ff8c5c] transition-all duration-200"
            >
              Apply Now
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1"
              />
            </button>
            <p className="text-sm text-gray-600">
              Expires:{" "}
              <span className="font-semibold text-[#ff9b71]">
                June 30, 2024
              </span>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row justify-between gap-12">
          <div className="lg:max-w-2xl space-y-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Job Description
              </h2>
              {text
                .split(/\s+/)
                .reduce((acc: string[], word, i) => {
                  const paragraphIndex = Math.floor(i / 40);
                  acc[paragraphIndex] =
                    (acc[paragraphIndex] || "") + word + " ";
                  return acc;
                }, [])
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-6 text-lg leading-relaxed text-gray-600 font-normal tracking-wide"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Responsibilities
              </h2>
              <ul className="space-y-4 text-lg text-gray-600 list-disc marker:text-gray-400 ml-6">
                <li className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Share this job
              </h3>
              <div className="flex flex-wrap gap-4">
                <button
                  className="inline-flex items-center px-6 py-3 bg-[#ff9b71]/10 text-[#ff9b71] 
                font-semibold rounded-xl hover:bg-[#ff9b71] hover:text-white transition-all duration-200"
                >
                  <Facebook className="w-5 h-5 mr-2" />
                  Facebook
                </button>

                <button
                  className="inline-flex items-center px-6 py-3 bg-[#ff9b71]/10 text-[#ff9b71] 
                font-semibold rounded-xl hover:bg-[#ff9b71] hover:text-white transition-all duration-200"
                >
                  <Twitter className="w-5 h-5 mr-2" />
                  Twitter
                </button>

                <button
                  className="inline-flex items-center px-6 py-3 bg-[#ff9b71]/10 text-[#ff9b71] 
                font-semibold rounded-xl hover:bg-[#ff9b71] hover:text-white transition-all duration-200"
                >
                  <FaPinterest className="w-5 h-5 mr-2" />
                  Pinterest
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Job Overview
              </h2>

              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Calendar,
                    label: "JOB POSTED",
                    value: "14 June, 2021",
                  },
                  {
                    icon: Timer,
                    label: "JOB EXPIRE IN",
                    value: "14 July, 2021",
                  },
                  { icon: Briefcase, label: "EDUCATION", value: "Graduation" },
                  { icon: Wallet, label: "SALARY", value: "$50k-80k/month" },
                  { icon: MapPin, label: "LOCATION", value: "New York, US" },
                  { icon: Briefcase, label: "JOB TYPE", value: "Full Time" },
                  {
                    icon: Briefcase,
                    label: "EXPERIENCE",
                    value: "10-15 Years",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <item.icon className="w-8 h-8 text-[#ff9b71]" />
                    <p className="text-sm font-medium text-gray-500 text-center">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 text-center">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-6 mb-6">
                <Image
                  src={templateImage}
                  alt=""
                  className="w-20 h-20 rounded-md object-cover"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Company Name
                  </h2>
                  <p className="text-lg text-gray-600">Company Service</p>
                </div>
              </div>

              <div className="space-y-4">
                {companyDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <p className="text-gray-600">{detail.label}:</p>
                    <p className="text-gray-900 font-medium">{detail.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2">
                <div className="p-2 bg-[#E7F0FA] rounded-sm">
                  <Facebook className="w-5 h-5 text-[#0A65CC]" />
                </div>
                <div className="p-2 bg-[#E7F0FA] rounded-sm">
                  <Twitter className="w-5 h-5 text-[#1DA1F2]" />
                </div>
                <div className="p-2 bg-[#E7F0FA] rounded-sm">
                  <Instagram className="w-5 h-5 text-[#C13584]" />
                </div>
                <div className="p-2 bg-[#E7F0FA] rounded-sm">
                  <Youtube className="w-5 h-5 text-[#FF0000]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Jobs
            </h2>
            <p className="text-lg text-gray-600">
              Discover similar opportunities that match your profile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedJobs.map((job, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                transition-all duration-300 hover:-translate-y-1 border border-[#ff9b71]/10 
                hover:border-[#ff9b71]/30"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {job.company}
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      {job.location}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-xl font-medium text-gray-900 mb-2">
                    {job.position}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-gray-400" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Wallet className="w-4 h-4 text-gray-400" />
                      {job.salary}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <button className="text-sm font-medium text-[#ff9b71] hover:text-[#a58c82] transition-colors">
                    View Details
                  </button>
                  <button className="text-sm font-medium text-gray-600 hover:text-gray-700 transition-colors flex items-center gap-1">
                    <Bookmark className="w-4 h-4" />
                    Save
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
