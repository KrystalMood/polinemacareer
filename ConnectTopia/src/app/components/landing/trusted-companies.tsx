import logoList from "@/app/data/index/truested-companies";

export default function Logo(): JSX.Element {
  return (
    <div className="relative h-[10rem] w-screen bg-[#fffaf8]">
      <div className="relative flex justify-around h-full mx-auto items-center gap-3 md:gap-0">
        {logoList.map((logo) => (
          <div
            key={logo.title}
            className="fill-gray-500 scale-50 w-24 md:w-44 md:scale-90 lg:scale-100"
          >
            {logo.image}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[#c69b8a] opacity-50 w-full"></div>
    </div>
  );
}
