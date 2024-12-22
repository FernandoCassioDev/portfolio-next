"use client";

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
      <div className="flex flex-col border-solid border border-purple-800 bg-purple-950 mx-4">
        <div className="flex justify-end bg-purple-900">icons</div>
        {/* code */}
        <div className="flex gap-2">
          <span className="ml-2">const</span>
          <span>Developer</span>
          <span>=</span>
          <span>&#123;</span>
        </div>
        <div className="flex ml-6">
          <span>name</span>
          <span>:</span>
          <span className="ml-2">&quot;Fernando Cássio&quot;</span>
          <span>,</span>
        </div>
        <div className="ml-6">
          <span>skills</span>
          <span>:</span>
          <span className="ml-2">&#91;</span>
        </div>
        <div className="ml-10 flex flex-col">
          <span className="flex flex-row">
            <span>&quot;Java&quot;</span>
            <span>,</span>
          </span>
          <span className="flex flex-row">
            <span>&quot;Spring&quot;</span>
            <span>,</span>
          </span>
          <span className="flex flex-row">
            <span>&quot;TypeScript&quot;</span>
            <span>,</span>
          </span>
          <span className="flex flex-row">
            <span>&quot;React&quot;</span>
            <span>,</span>
          </span>
          <span className="flex flex-row">
            <span>&quot;Next.js&quot;</span>
            <span>,</span>
          </span>
          <span className="flex flex-row">
            <span>&quot;Node&quot;</span>
            <span>,</span>
          </span>
          <span className="flex flex-row">
            <span>&quot;SQL&quot;</span>
            <span>,</span>
          </span>
          <span className="flex flex-row">
            <span>&quot;NoSQL&quot;</span>
            <span>,</span>
          </span>
          <span className="flex flex-row">
            <span>&quot;Docker&quot;</span>
            <span>,</span>
          </span>
          <span className="flex flex-row">
            <span>&quot;AWS&quot;</span>
            <span>,</span>
          </span>
          <span className="flex flex-row">
            <span>&quot;GCP&quot;</span>
            <span>,</span>
          </span>
        </div>
        <div className="ml-6">
          <span>&#93;</span>
          <span>,</span>
        </div>
        <div className="ml-6">
          <span>hardWorker</span>
          <span>:</span>
          <span className="ml-2">true</span>
          <span>,</span>
        </div>
        <div className="ml-6">
          <span>quickLeaner</span>
          <span>:</span>
          <span className="ml-2">true</span>
          <span>,</span>
        </div>
        <div className="ml-6">
          <span>hireable</span>
          <span>:</span>
          <span className="ml-2">function()</span>
          <span className="ml-2">&#123;</span>
        </div>
        <div className="ml-9">
          <span>return</span>
          <span className="ml-2">&#40;</span>
        </div>
        <div>
          <span className="ml-12">this.hardworker</span>
          <span className="ml-2">&&</span>
        </div>
        <div>
          <span className="ml-12">this.problemSolver</span>
          <span className="ml-2">&&</span>
        </div>
        <div>
          <span className="ml-12">this.skills.length &lt;=5</span>
        </div>
        <div className="flex flex-col">
          <span className="ml-12">&#41;;</span>
          <span className="ml-6">&#125;</span>
          <span className="ml-2">&#125;</span>
        </div>
      </div>
    </>
  );
}

export default HomePage;
