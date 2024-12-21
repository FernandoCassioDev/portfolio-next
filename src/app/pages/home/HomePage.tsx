"use client"

import Navbar from "@/app/components/navbar/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="my-7 mx-3">
        <h1 className="font-extrabold text-2xl">
          Hello 👋
          <br /> I am Fernando a professional
          {/* add typing animation at final part of the text */}
        </h1>
      </div>
    </>
  );
}

export default HomePage;
