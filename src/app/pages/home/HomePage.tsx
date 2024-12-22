"use client";

import CodeDesign from "@/app/components/codedesign/CodeDesign";
import Navbar from "@/app/components/navbar/Navbar";
import { Typewriter } from "react-simple-typewriter";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="my-7 mx-3 h-24">
        <h1 className="font-extrabold text-2xl">
          Hello 👋
          <br />I am Fernando a professional
          <div className="text-green-500 font-extrabold text-2xl">
            <Typewriter
              words={["Software Engineer"]}
              loop={false} // Number of loops (set to `false` for infinite)
              typeSpeed={100} // Typing speed
              deleteSpeed={50} // Deleting speed
              delaySpeed={1000} // Delay between words
            />
          </div>
        </h1>
      </div>
      <div className="mx-4">
        <CodeDesign />
      </div>
    </>
  );
}

export default HomePage;
