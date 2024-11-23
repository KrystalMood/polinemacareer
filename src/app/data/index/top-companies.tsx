import { Company } from "@/app/types/index/top-company";

const companies: Company[] = [
    {
      id: 1,
      name: "Astra International",
      location: "Jakarta, Indonesia",
      isFeatured: true,
      openPositions: 25,
      employeeCount: 180000,
      description: "Indonesia's largest conglomerate with diverse business portfolios including automotive, financial services, heavy equipment, and agribusiness."
    },
    {
      id: 2,
      name: "Pertamina",
      location: "Jakarta, Indonesia",
      isFeatured: false,
      openPositions: 18,
      employeeCount: 32000,
      description: "Indonesia's state-owned oil and natural gas corporation committed to providing sustainable energy solutions."
    },
    {
      id: 3,
      name: "Adaro Energy",
      location: "Jakarta, Indonesia",
      isFeatured: false,
      openPositions: 15,
      employeeCount: 25000,
      description: "One of Indonesia's largest coal mining companies with integrated pit-to-power business operations."
    },
    {
      id: 4,
      name: "United Tractors",
      location: "Jakarta, Indonesia",
      isFeatured: false,
      openPositions: 12,
      employeeCount: 28000,
      description: "Indonesia's leading distributor of heavy equipment and mining solutions provider."
    },
    {
      id: 5,
      name: "Pupuk Indonesia",
      location: "Jakarta, Indonesia",
      isFeatured: true,
      openPositions: 20,
      employeeCount: 15000,
      description: "State-owned fertilizer producer supporting Indonesia's agricultural sector and food security."
    },
    {
      id: 6,
      name: "Japfa Comfeed Indonesia",
      location: "Jakarta, Indonesia",
      isFeatured: false,
      openPositions: 16,
      employeeCount: 40000,
      description: "Leading agri-food company focusing on animal protein production and processing."
    },
  ];

export default companies;
