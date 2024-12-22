"use client";

import CodeDesign from "@/app/components/codedesign/CodeDesign";
import Navbar from "@/app/components/navbar/Navbar";
import { Typewriter } from "react-simple-typewriter";

function HomePage() {
  return (
    <>
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
      <div>
        <CodeDesign />
      </div>
    </>
  );
}

export default HomePage;
