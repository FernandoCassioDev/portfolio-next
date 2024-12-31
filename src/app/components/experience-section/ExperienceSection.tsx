import React from "react";
import TimelineItem from "./TimelineItem";

function ExperienceSection() {
  return (
    <div className="mx-4 my-5 rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-7">
      <div className="mb-5">
        <h2 className="flex justify-center text-2xl text-white text-center">
          EXPERIENCE
        </h2>
      </div>
      <div className="px-3">
        <TimelineItem
          title="CI&T"
          date="january 2025 - moment"
          description="lorem ipsum dolor"
        />
      </div>
    </div>
  );
}

export default ExperienceSection;
