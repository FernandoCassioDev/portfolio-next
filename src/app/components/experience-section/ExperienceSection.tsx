import React from "react";
import TimelineItem from "./TimelineItem";

function ExperienceSection() {
  return (
    <div className="mx-4 my-5 py-5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg">
      <div className="mb-5">
        <h2 className="flex items-center justify-center text-2xl text-white text-center h-16">
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
