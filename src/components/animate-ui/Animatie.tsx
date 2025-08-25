import { motion } from "framer-motion";
import image from "@/assets/image.png";
import image2 from "@/assets/image copy 6.png";
import image3 from "@/assets/image copy 7.png";
import image4 from "@/assets/image copy 8.png";
import image5 from "@/assets/image copy 9.png";
import image6 from "@/assets/image copy 10.png";
import image7 from "@/assets/image copy 11.png";
import image8 from "@/assets/image copy 12.png";
import image9 from "@/assets/image copy 13.png";
import image10 from "@/assets/image copy 14.png";
import image11 from "@/assets/image copy 4.png";
import image12 from "@/assets/image copy 15.png";
import image13 from "@/assets/image copy 16.png";
import image14 from "@/assets/image copy 17.png";
import image15 from "@/assets/image copy 18.png";
import image16 from "@/assets/image copy 19.png";
import image17 from "@/assets/image copy 20.png";
import image18 from "@/assets/image copy 21.png";
import image19 from "@/assets/image copy 22.png";
import image20 from "@/assets/image copy 23.png";
import { TextAnimate } from "../magicui/text-animate";


interface TechItem {
  icon: string;
}

const techStack: TechItem[] = [
  { icon: image },
  { icon: image2 },
  { icon: image3 },
  { icon: image4 },
  { icon: image5 },
  { icon: image6 },
  { icon: image7 },
  { icon: image8 },
  { icon: image9 },
  { icon: image10 },
  { icon: image11 },
  { icon: image12 },
  { icon: image13 },
  { icon: image14 },
  { icon: image15 },
  { icon: image16 },
  { icon: image17 },
  { icon: image18 },
  { icon: image19 },
  { icon: image20 },
];

export default function TechScroller() {
  return (
    <div className=" py-10 overflow-hidden space-x-1.5 gap-4 rounded-4xl">
      <h1 className=" flex items-center justify-center text-2xl font-bold mb-16">
        <TextAnimate animation="fadeIn" by="line" as="p" children={"Technology Stack"}/>
      </h1>
      <motion.div
        className="flex gap-8 whitespace-nowrap mb-16 rounded-2xl cursor-grab drop-shadow-[0_4px_50px_rgba(239,68,68,0.7)]"
        animate={{ x: ["0%", "-100%"] }}
        
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...techStack, ...techStack].map((tech) => (
          <img
            src={tech.icon}
            alt={`Tech icon`}
            className="w-16 h-16 object-contain"
          />
        ))}
      </motion.div>
      <motion.div
        className="flex gap-8 whitespace-nowrap mb-16 rounded-2xl cursor-grab drop-shadow-[0_4px_50px_rgba(239,68,68,0.7)]"
        animate={{ x: ["-100%", "0%"] }}
        
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...techStack, ...techStack].map((tech) => (
          <img
            src={tech.icon}
            alt={`Tech icon`}
            className="w-16 h-16 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
}
