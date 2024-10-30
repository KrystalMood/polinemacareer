import { Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import React from "react";
import { FaDiscord } from "react-icons/fa";

export default function ContactContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center items-center">
      <div className="text-center my-10">
        <h1 className="text-5xl text-amber-400 font-semibold">Contact Us</h1>
        <h2 className="text-xl font-light text-gray-600">
          Reach out to us with your thoughts, and we'll get back to you!
        </h2>
      </div>
      <div className="bg-white w-4/5 md:w-3/4 lg:w-2/3 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2">
        {/* Left Section */}
        <div className="relative bg-[#1C2056] rounded-l-lg text-white p-10 flex flex-col justify-between">
          <div className="z-10 space-y-4">
            <h1 className="text-3xl font-semibold">Contact Information</h1>
            <p>Say something to start a live chat</p>
          </div>
          <div className="z-10 space-y-6">
            <div className="flex items-center gap-4">
              <Phone />
              <p>(123) 456-7890</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail />
              <p>example@email.com</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin />
              <p>123 Main St, Anytown, USA 12345</p>
            </div>
          </div>
          <div className="z-10 flex space-x-4">
            <div className="bg-amber-400 rounded-full p-2">
              <Twitter />
            </div>
            <div className="bg-amber-400 rounded-full p-2">
              <Instagram />
            </div>
            <div className="bg-amber-400 rounded-full p-2">
              <FaDiscord size={24} />
            </div>
          </div>
        </div>
        {/* Form */}
        <form className="p-10 space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 font-light">
                First Name
              </label>
              <input type="text" className="border-b-2" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 font-light">
                Last Name
              </label>
              <input type="text" className="border-b-2" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 font-light">Email</label>
              <input type="email" className="border-b-2" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 font-light">
                Phone Number
              </label>
              <input type="tel" className="border-b-2" />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 font-light">Message</label>
            <textarea
              className="border-b-2 resize-none"
              rows={4}
              placeholder="Write your message"
            />
          </div>
          <button
            type="submit"
            className="bg-amber-300 px-4 py-2 rounded-lg shadow-md text-white font-medium hover:bg-amber-400 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
