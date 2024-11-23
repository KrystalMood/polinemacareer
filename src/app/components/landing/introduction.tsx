export default function Introduction(): JSX.Element {
  return (
    <section className="min-h-[40vh] bg-gradient-to-b from-white to-[#fffaf8] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl py-8 md:py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
          {/* Left Side - Title */}
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Let us walk you through{" "}
              <span className="text-[#ff9b71] block mt-2">
                how it works
              </span>
            </h2>
          </div>

          {/* Right Side - Description */}
          <div className="lg:w-1/2">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light italic">
              We're here to guide you step by step, from start to finish. 
              With our intuitive interface and natural interactions, 
              you're free to explore all the resources we've carefully 
              curated just for you.
            </p>
          </div>
        </div>

        {/* Optional Decorative Elements */}
        <div className="relative mt-16">
          <div className="absolute -top-40 -left-20 w-72 h-72 bg-[#ff9b71]/5 rounded-full blur-3xl opacity-70" />
          <div className="absolute -bottom-40 -right-20 w-72 h-72 bg-[#ff9b71]/5 rounded-full blur-3xl opacity-70" />
        </div>
      </div>
    </section>
  );
} 