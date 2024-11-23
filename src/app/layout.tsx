import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import templateImage from "@/public/peakpx.jpg";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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

export const metadata: Metadata = {
  title: "PolinemaCareer",
  description: "Platform karir untuk mahasiswa serta alumnus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
