"use client";

import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";
import React from "react";
import Image from "next/image";
import aboutImage from "@/public/template1.jpg"; // Gantilah dengan gambar yang sesuai

export default function AboutUs() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1C2056] to-[#2d317a] py-24 px-4 text-center text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            About Us
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-light mb-6">
            We are dedicated to shaping the future of work and empowering
            individuals to pursue their passions. Learn more about our journey,
            values, and team.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-sky-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 font-light leading-relaxed">
            Our mission is to connect talented individuals with companies that
            value creativity, passion, and expertise. We aim to empower both
            companies and job seekers by providing innovative solutions and a
            user-friendly platform that simplifies the hiring process.
          </p>
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-gradient-to-br from-[#2d317a] to-[#1C2056] py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Our vision is to revolutionize the way people find meaningful
            careers by fostering a global community where talent is recognized,
            nurtured, and celebrated. We envision a world where individuals can
            achieve their professional goals and companies can thrive with the
            best talent at their side.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
              <p className="text-lg text-gray-600 font-light">
                We continuously strive to innovate and adapt to the ever-evolving
                job market, ensuring our platform remains at the forefront of
                industry trends.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Integrity</h3>
              <p className="text-lg text-gray-600 font-light">
                We uphold the highest standards of integrity in everything we do,
                ensuring trust and transparency in all our relationships.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Collaboration</h3>
              <p className="text-lg text-gray-600 font-light">
                We believe in the power of collaboration, working closely with our
                clients, users, and team members to achieve shared success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-sky-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Example team member */}
            <div className="space-y-4">
              <Image
                src={aboutImage} // Replace with actual team member images
                alt="Team Member"
                className="rounded-full w-32 h-32 object-cover mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800">Pramudya Surya</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            {/* Add other team members here */}
            <div className="space-y-4">
              <Image
                src={aboutImage} // Replace with actual team member images
                alt="Team Member"
                className="rounded-full w-32 h-32 object-cover mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800">Giovano Alkandri</h3>
              <p className="text-gray-600">Chief Operating Officer</p>
            </div>
            <div className="space-y-4">
              <Image
                src={aboutImage} // Replace with actual team member images
                alt="Team Member"
                className="rounded-full w-32 h-32 object-cover mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800">Atabik M</h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>
            <div className="space-y-4">
              <Image
                src={aboutImage} // Replace with actual team member images
                alt="Team Member"
                className="rounded-full w-32 h-32 object-cover mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800">Fauzie Ikhsanul</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="space-y-4">
              <Image
                src={aboutImage} // Replace with actual team member images
                alt="Team Member"
                className="rounded-full w-32 h-32 object-cover mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800">Tiara Mera</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="space-y-4">
              <Image
                src={aboutImage} // Replace with actual team member images
                alt="Team Member"
                className="rounded-full w-32 h-32 object-cover mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800">Zannur</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
