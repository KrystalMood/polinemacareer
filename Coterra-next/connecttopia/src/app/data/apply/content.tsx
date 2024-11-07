const locationOptions = [
  { id: "nearMe", label: "Near me" },
  { id: "remote", label: "Remote job", defaultChecked: true },
  { id: "exact", label: "Exact location" },
  { id: "15km", label: "Within 15km" },
  { id: "30km", label: "Within 30km" },
  { id: "50km", label: "Within 50km" },
];

const salaryOptions = [
  { id: "any", label: "Any", defaultChecked: true },
  { id: "2500k", label: "> 2.500k" },
  { id: "5000k", label: "> 5.000k" },
  { id: "7500k", label: "> 7.500k" },
  { id: "10000k", label: "> 10.000k" },
];

const dateOptions = [
  { id: "allTime", label: "All Time", defaultChecked: true },
  { id: "last24Hours", label: "Last 24 Hours" },
  { id: "last3Days", label: "Last 3 Days" },
  { id: "last7Days", label: "Last 7 Days" },
];

const experienceOptions = [
  { id: "anyExperience", label: "Any experience", defaultChecked: true },
  { id: "internship", label: "Internship" },
  { id: "remote", label: "Work remotely" },
];

const employmentOptions = [
  { id: "fullTime", label: "Full Time" },
  { id: "temporary", label: "Temporary" },
  { id: "partTime", label: "Part-time" },
];

export {
  locationOptions,
  salaryOptions,
  dateOptions,
  experienceOptions,
  employmentOptions,
};
