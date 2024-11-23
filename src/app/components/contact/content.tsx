import { Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import React from "react";
import { FaDiscord } from "react-icons/fa";

export default function ContactContent() {
  return (
    <div className="relative min-h-screen bg-[#fffaf8] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 -left-96 w-[500px] h-[500px] bg-[#ff9b71]/10 rounded-full blur-3xl opacity-80" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#ff9b71]/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff9b71]/10 mb-4">
            <Mail className="w-4 h-4 text-[#ff9b71]" />
            <span className="text-sm font-medium text-[#ff9b71]">
              Get in Touch With Us
            </span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Contact <span className="text-[#ff9b71]">Us</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help! Reach out to
            us and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Section - Contact Info */}
              <div className="bg-[#ff9b71] text-white p-10 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h2>
                  <p className="text-white/80 mb-8">
                    Fill up the form and we will get back to you within 24
                    hours.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <p className="group-hover:translate-x-2 transition-transform">
                        081235305531
                      </p>
                    </div>

                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <p className="group-hover:translate-x-2 transition-transform">
                        contact@polinemacarrier.com
                      </p>
                    </div>

                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <p className="group-hover:translate-x-2 transition-transform">
                        Malang, East Java, Indonesia
                      </p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex gap-4 mt-10">
                    {[
                      { Icon: Twitter, bg: "hover:bg-[#1DA1F2]" },
                      { Icon: Instagram, bg: "hover:bg-[#E4405F]" },
                      { Icon: FaDiscord, bg: "hover:bg-[#5865F2]" },
                    ].map((social, index) => (
                      <button
                        key={index}
                        className={`p-2 bg-white/10 rounded-lg ${social.bg} hover:scale-110 transition-all duration-300`}
                      >
                        <social.Icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -mb-16 -mr-16" />
                <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full -mt-10 -ml-10" />
              </div>

              {/* Right Section - Contact Form */}
              <div className="p-10">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#ff9b71] focus:ring-2 focus:ring-[#ff9b71]/20 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#ff9b71] focus:ring-2 focus:ring-[#ff9b71]/20 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#ff9b71] focus:ring-2 focus:ring-[#ff9b71]/20 transition-colors"
                      rows={4}
                      placeholder="Your message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ff9b71] text-white font-semibold py-3 rounded-lg hover:bg-[#ff8c5c] transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
