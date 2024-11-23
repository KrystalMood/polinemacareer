import React from "react";
import { Briefcase, Users, Building2, Target } from "lucide-react";
import Image from "next/image";
import temporary from "@/public/temporary.jpg";

export default function OurHope() {
  return (
    <section className="relative min-h-[80vh] bg-[#fffaf8] overflow-hidden px-[5%] py-16 lg:py-20">
      <div className="absolute top-20 -left-96 w-[500px] h-[500px] bg-[#ff9b71]/10 rounded-full blur-3xl opacity-80" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#ff9b71]/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold leading-tight tracking-wide text-slate-900 lg:text-5xl">
          <span className="text-[#ff9b71]">Our Vision</span>
          <br className="hidden lg:inline" />
          for the Next Decade
        </h2>

        <div className="mt-10 flex flex-col gap-x-16 lg:flex-row">
          <h4 className="text-justify font-light leading-relaxed text-gray-600 first-letter:float-left first-letter:text-[5rem] first-letter:font-bold first-letter:leading-[4rem] first-letter:text-[#ff9b71]">
            In the next decade, PolinemaCareer aspires to become the leading
            solution in connecting talent with meaningful career opportunities.
            We envision creating a seamless platform that transforms how people
            discover, apply for, and secure their dream jobs. Through continuous
            technological innovation, we aim to make career advancement
            accessible to everyone, everywhere, while maintaining a
            user-friendly and secure environment.
          </h4>
          <div className="mt-8 w-full lg:mt-0 lg:w-1/2">
            <div className="rounded-xl bg-white p-6 shadow-lg border border-[#ff9b71]/10">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff9b71]/10">
                    <Users className="h-6 w-6 text-[#ff9b71]" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Global Reach</h3>
                  <p className="text-sm text-gray-600">
                    Connecting millions of professionals worldwide
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff9b71]/10">
                    <Building2 className="h-6 w-6 text-[#ff9b71]" />
                  </div>
                  <h3 className="font-semibold text-slate-900">
                    Top Companies
                  </h3>
                  <p className="text-sm text-gray-600">
                    Partnering with industry leaders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-x-16 lg:mt-16 lg:flex-row">
          <div className="mt-8 w-full lg:mt-0 lg:w-2/5">
            <div className="rounded-xl bg-white p-6 shadow-lg border border-[#ff9b71]/10">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff9b71]/10">
                    <Briefcase className="h-6 w-6 text-[#ff9b71]" />
                  </div>
                  <h3 className="font-semibold text-slate-900">
                    Career Growth
                  </h3>
                  <p className="text-sm text-gray-600">
                    Empowering professional development
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff9b71]/10">
                    <Target className="h-6 w-6 text-[#ff9b71]" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Innovation</h3>
                  <p className="text-sm text-gray-600">
                    Leading technological advancement in recruitment
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h4 className="text-justify font-light leading-relaxed text-gray-600 first-letter:float-left first-letter:text-[5rem] first-letter:font-bold first-letter:leading-[4rem] first-letter:text-[#ff9b71]">
            Furthermore, PolinemaCareer is committed to being at the forefront
            of digital transformation in recruitment. We aim to collaborate with
            leading companies and communities to expand opportunities, enhance
            service quality, and support professional growth holistically. With
            a focus on innovation and understanding of both employer and job
            seeker needs, we hope to create lasting positive impact on careers
            worldwide and build trust as the preferred career platform of the
            future.
          </h4>
          <div className="relative w-[150%] h-[150%]">
            <span className="absolute inset-0 bg-gradient-to-t from-[#ff9b71] to-transparent rounded-lg z-10 opacity-50" />
            <span className="absolute top-3 left-3 w-[110%] h-[110%] bg-gradient-to-t from-[#ff9b71] to-transparent rounded-lg" />
            <Image
              src={temporary}
              alt="Our Hope"
              width={500}
              height={500}
              className="rounded-lg shadow-lg relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
