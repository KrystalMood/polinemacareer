import { Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import React from "react";
import { FaDiscord } from "react-icons/fa";

export default function ContactContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center items-center py-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl text-amber-400 font-semibold">Contact Us</h1>
        <h2 className="text-xl font-light text-gray-600 mt-4">
          Reach out to us with your thoughts, and we'll get back to you!
        </h2>
      </div>

      <div className="bg-white rounded-lg shadow-xl flex justify-center items-center p-0">
        {/* Centered Contact Information Section */}
        <div className="bg-[#1C2056] text-white rounded-lg p-10 max-w-md w-full flex flex-col justify-between">
          <div className="z-10 space-y-6">
            <h1 className="text-3xl font-semibold">Contact Information</h1>
            <p className="text-gray-300">
              Fill up the form and we will get back to you within 24 hours.
            </p>
          </div>

          <div className="z-10 space-y-6 mt-8">
            <div className="flex items-center gap-4 group cursor-pointer">
              <Phone className="group-hover:text-amber-400 transition-colors" />
              <p className="group-hover:text-amber-400 transition-colors">081235305531</p>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <Mail className="group-hover:text-amber-400 transition-colors" />
              <p className="group-hover:text-amber-400 transition-colors">contact@polinemacarrier.com</p>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <MapPin className="group-hover:text-amber-400 transition-colors" />
              <p className="group-hover:text-amber-400 transition-colors">Malang, East Java, Indonesia</p>
            </div>
          </div>

          <div className="z-10 flex space-x-4 mt-8">
            {[
              { Icon: Twitter, bg: "hover:bg-[#1DA1F2]" },
              { Icon: Instagram, bg: "hover:bg-[#E4405F]" },
              { Icon: FaDiscord, bg: "hover:bg-[#5865F2]" },
            ].map((social, index) => (
              <div
                key={index}
                className={`bg-white/10 p-2 rounded-full cursor-pointer ${social.bg} transition-colors`}
              >
                <social.Icon className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
