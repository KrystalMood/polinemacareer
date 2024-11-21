"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import templateImage from "@/public/pakjokowi.jpeg";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap,
  Calendar,
  Edit,
  FileText,
  Download
} from "lucide-react";

export default function ProfileContent() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Please login to view your profile</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-[#1C2056] to-[#2d317a]" />
          <div className="relative px-6 py-8">
            <div className="absolute -top-16">
              <Image
                src={user.photoURL || templateImage}
                alt="Profile"
                width={128}
                height={128}
                className="rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
            <div className="mt-16">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{user.name || "PT Polinema Makmur Jaya"}</h1>
                  <p className="text-lg text-gray-600">Retail</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-gray-900 rounded-lg hover:bg-amber-500 transition-colors">
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>{user.email || "email@example.com"}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>+62 123 456 789</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>Malang, Indonesia</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>Joined March 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* About */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                Visi
                Menjadi perusahaan terdepan dalam inovasi teknologi yang memberikan solusi berkelanjutan untuk mendukung pertumbuhan bisnis dan meningkatkan kualitas hidup masyarakat di tingkat global.
              </p> <br />
              <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                <ol className="mt-2 list-decimal list-inside text-gray-600">
                <li>Menyediakan solusi digital yang inovatif dan berkualitas tinggi untuk memenuhi kebutuhan pelanggan dari berbagai industri.</li>
                <li>Mengutamakan kepuasan pelanggan dengan memberikan layanan yang handal, responsif, dan berorientasi pada hasil.</li>
                <li>Mengembangkan teknologi yang ramah lingkungan dan berkontribusi pada keberlanjutan global.</li>
                <li>Memberdayakan sumber daya manusia yang berkualitas melalui pelatihan dan pengembangan berkelanjutan.</li>
                <li>Membangun kemitraan strategis dengan pelaku industri untuk menciptakan nilai tambah dan memperluas jaringan global.</li>
                </ol>   
              </p>
            </div>

            {/* Education */}
            {/* <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Education</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <GraduationCap className="w-5 h-5 text-gray-400" />
                  <div>
                    <h3 className="font-medium">State Polytechnic of Malang</h3>
                    <p className="text-sm text-gray-600">Bachelor of Informatics Engineering</p>
                    <p className="text-sm text-gray-500">2020 - 2024</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Briefcase className="w-5 h-5 text-gray-400" />
                  <div>
                    <h3 className="font-medium">a company has a blablaba;</h3>
                    <p className="text-sm text-gray-600">TechCorp Solutions</p>
                    <p className="text-sm text-gray-500">Jan 2023 - Present</p>
                    <div className="mt-2 list-disc text-gray-600">
                      <p>
                        PT Sentra Teknologi Nusantara adalah perusahaan teknologi terkemuka di Indonesia yang berdedikasi untuk menyediakan solusi digital terintegrasi bagi berbagai industri, mulai dari keuangan, manufaktur, hingga e-commerce. Berdiri sejak tahun 2012 dengan kantor pusat di Jakarta, kami telah berkembang pesat menjadi mitra strategis bagi lebih dari 500 perusahaan di Asia Tenggara, berkat komitmen kami terhadap inovasi, kualitas, dan layanan pelanggan yang unggul.
                      </p>
                    </div>
                    {/* <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>Developed responsive web applications using React and Next.js</li>
                      <li>Implemented modern UI/UX designs using Tailwind CSS</li>
                      <li>Collaborated with backend team for API integration</li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Resume */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Produk dan Layanan</h2>
              </div>
              <div className="flex items-center gap-0.5 p-1 rounded-lg">
                <div className=" list-disc text-gray600">
                      <p mb-1>

                        Kami menyediakan berbagai solusi digital untuk mendukung transformasi bisnis Anda:
                      </p>
                      
                      <ol className="mt-2 list-decimal list-inside text-gray-600">
                        <li>Pengembangan Perangkat Lunak Kustom: Solusi perangkat lunak yang dirancang khusus untuk memenuhi kebutuhan bisnis Anda.</li>
                        <li>Sistem ERP (Enterprise Resource Planning): Alat pengelolaan sumber daya perusahaan yang terintegrasi.</li>
                        <li>Layanan Cloud dan Big Data: Infrastruktur berbasis cloud untuk mengelola dan menganalisis data dalam skala besar.</li>
                        <li>Konsultasi Teknologi: Memberikan panduan strategis untuk membantu perusahaan mengadopsi teknologi terkini.</li>
                      </ol>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 