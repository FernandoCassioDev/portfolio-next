import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaAws,
  FaDatabase,
  FaDocker,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiGooglecloud, SiSpring } from "react-icons/si";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const techStack = [
  { name: "Java", icon: <FaJava className="text-red-500 w-16 h-16" /> },
  { name: "Spring", icon: <SiSpring className="text-green-500 w-16 h-16" /> },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript className="text-blue-600 w-16 h-16" />,
  },
  { name: "React", icon: <FaReact className="text-blue-400 w-16 h-16" /> },
  { name: "Next.js", icon: <RiNextjsFill className="text-black w-16 h-16"/>
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-16 h-16" /> },
  {
    name: "SQL/NoSQL",
    icon: <FaDatabase className="text-purple-500 w-16 h-16" />,
  },
  { name: "Docker", icon: <FaDocker className="text-blue-500 w-16 h-16" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-400 w-16 h-16" /> },
  { name: "GCP", icon: <SiGooglecloud className="w-16 h-16" /> },
];

function Carousel() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 rounded-lg shadow-lg mx-4 my-5">
        <h2 className="text-3xl text-white  text-center mb-6">TECH STACK</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          slidesPerView={3}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {techStack.map((tech, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-white">
                {tech.icon}
                <p className="mt-2 text-lg">{tech.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Carousel;
