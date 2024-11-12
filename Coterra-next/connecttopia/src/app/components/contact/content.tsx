import { Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import React, { useState } from "react";
import { FaDiscord } from "react-icons/fa";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactContent() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center items-center py-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl text-amber-400 font-semibold">Contact Us</h1>
        <h2 className="text-xl font-light text-gray-600 mt-4">
          Reach out to us with your thoughts, and we'll get back to you!
        </h2>
      </div>

      <div className="bg-white w-4/5 md:w-3/4 lg:w-2/3 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2">
        {/* Left Section - Contact Information */}
        <div className="relative bg-[#1C2056] rounded-t-lg md:rounded-l-lg md:rounded-tr-none text-white p-10 flex flex-col justify-between">
          <div className="z-10 space-y-6">
            <h1 className="text-3xl font-semibold">Contact Information</h1>
            <p className="text-gray-300">Fill up the form and we will get back to you within 24 hours</p>
          </div>

          <div className="z-10 space-y-6">
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

          <div className="z-10 flex space-x-4">
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

        {/* Right Section - Contact Form */}
        <form onSubmit={handleSubmit} className="p-10 space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 font-light mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border-b-2 focus:border-amber-400 outline-none transition-colors px-2 py-1"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 font-light mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border-b-2 focus:border-amber-400 outline-none transition-colors px-2 py-1"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 font-light mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-b-2 focus:border-amber-400 outline-none transition-colors px-2 py-1"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 font-light mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-b-2 focus:border-amber-400 outline-none transition-colors px-2 py-1"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 font-light mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-b-2 focus:border-amber-400 outline-none transition-colors px-2 py-1 resize-none h-32"
              required
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="bg-amber-400 px-8 py-3 rounded-lg text-gray-900 font-semibold hover:bg-amber-500 transition-colors shadow-md hover:shadow-lg w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
