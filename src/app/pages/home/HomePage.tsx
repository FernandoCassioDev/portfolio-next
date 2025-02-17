"use client";

import CodeDesign from "@/app/components/code-design/CodeDesign";
import ExperienceSection from "@/app/components/experience-section/ExperienceSection";
import Navbar from "@/app/components/navbar/Navbar";
import TechCarousel from "@/app/components/tech-carousel/TechCarousel";
import { Typewriter } from "react-simple-typewriter";

function HomePage() {
  return (
    <>
      <section>
        <Navbar />
        <div className="my-7 mx-3">
          <h1 className="font-extrabold text-2xl">
            Hello 👋
            <br />I am Fernando a professional
          </h1>
          <div className="text-green-500 font-extrabold text-2xl h-8">
              <Typewriter
                words={["Software Engineer"]}
                loop={false} // Number of loops (set to `false` for infinite)
                typeSpeed={100} // Typing speed
                deleteSpeed={50} // Deleting speed
                delaySpeed={1000} // Delay between words
              />
            </div>
        </div>
      </section>
      <section>
        <CodeDesign />
      </section>
      <section>
        <TechCarousel />
      </section>
      <section>
        <ExperienceSection />
      </section>
    </>
  );
}

export default HomePage;
