
"use client";

import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";
import React from "react";
import Image from "next/image";
import aboutImage from "@/public/template1.jpg"; // Replace with actual image
import imgHrd from "@/public/hrd.jpg"; // Replace with actual image
import hero from "@/public/aboutus.jpg"; // Replace with actual image

export default function AboutUs() {
  return (
    <>
      <Header />

      {/* About Us Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#0d5c91] mb-8">Our Mission & Vision</h2>
          <p className="text-lg text-[#627785] mb-12 max-w-3xl mx-auto">
            We are your digital enablement partner to accelerate your transformation journey. Whether it is augmenting
            your existing team, leveraging our global talent centers for specialized skills, or delivering managed programs
            for your digital journey.
          </p>

          <h3 className="text-3xl font-semibold text-[#0d5c91] mb-6">Reasons to Work With Us:</h3>
          <ul className="list-none space-y-4 text-lg text-[#627785] max-w-2xl mx-auto">
            <li>Weekly coaching check-ins</li>
            <li>Optimize your candidacy for interviews</li>
            <li>We now support videos and articles</li>
            <li>Leveraging global talent</li>
          </ul>

          <div className="mt-12">
            <Image src={hero} alt="Hero image" className="w-full rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-sky-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#0d5c91] mb-8">What’s Our Core Value</h2>
          <p className="text-lg text-[#627785] mb-12 max-w-3xl mx-auto">
            We are passionate about delivering managed programs to help overcome the tedious tasks of risk and ensure excellence
            in every project. Our values center around integrity, excellence, and partnerships.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Core Value Cards */}
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#0d5c91] mb-4">Integrity</h3>
              <p className="text-lg text-[#627785]">
                Delivering managed programs across over the tedious tasks of risk with utmost integrity.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#0d5c91] mb-4">Excellence</h3>
              <p className="text-lg text-[#627785]">
                We aim for excellence in every project, ensuring the best results through innovation and precision.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#0d5c91] mb-4">Partnerships</h3>
              <p className="text-lg text-[#627785]">
                Building lasting partnerships with our clients to create sustainable growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#0d5c91] mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Team member */}
            {[
              { name: "Pramudya Surya", role: "CEO & Founder", img: aboutImage },
              { name: "Giovano Alkandri", role: "COO", img: aboutImage },
              { name: "Atabik M", role: "Head of Marketing", img: aboutImage },
              { name: "Fauzie Ikhsanul", role: "Lead Developer", img: aboutImage },
              { name: "Tiara Mera", role: "Lead Developer", img: aboutImage },
              { name: "Zannur", role: "Lead Developer", img: aboutImage },
            ].map((member, index) => (
              <div key={index} className="space-y-4 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

