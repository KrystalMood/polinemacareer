import logoList from "@/app/data/index/truested-companies";

export default function IndexLogo(): JSX.Element {
  return (
    <div className="relative h-[10rem] w-screen">
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
      <div className="absolute inset-0 bg-gray-400 opacity-50 w-full"></div>
    </div>
  );
}
