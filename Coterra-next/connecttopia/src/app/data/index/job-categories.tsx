import { Category } from "@/app/types/index/category";
import { Code, Megaphone, HeartPulse, Database, Paintbrush, Calculator, Music, Video } from "lucide-react";

const categories: Category[] = [
    { title: "Code & Programming", icon: <Code />, openPositions: 312 },
    { title: "Digital Marketing", icon: <Megaphone />, openPositions: 297 },
    { title: "Video & Animation", icon: <Video />, openPositions: 247 },
    { title: "Music & Audio", icon: <Music />, openPositions: 204 },
    { title: "Account & Finance", icon: <Calculator />, openPositions: 167 },
    { title: "Health & Care", icon: <HeartPulse />, openPositions: 125 },
    { title: "Data & Science", icon: <Database />, openPositions: 57 },
    { title: "Graphics & Design", icon: <Paintbrush />, openPositions: 357 },
  ];
  
export default categories;
