import logoList from "~/constants/trustedCompanies";

export default function Logo(): JSX.Element {
  return (
    <div className="relative h-[10rem] w-full overflow-hidden bg-[#fffaf8]">
      <div className="relative mx-auto flex h-full items-center justify-around gap-3 px-4 md:gap-0">
        {logoList.map((logo: any) => (
          <div
            key={logo.title}
            className="w-24 scale-50 fill-gray-500 md:w-44 md:scale-90 lg:scale-100"
          >
            {logo.image}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 w-full bg-[#c69b8a] opacity-50"></div>
    </div>
  );
}
