import React from "react";
import ExperienceData from "@/app/model/experience-data/ExperienceData";

function TimelineItem(ExperienceData: ExperienceData) {
  return (
    <div className="relative flex items-start ">
      <div className="absolute left-0 h-6 w-6 bg-white border-4 border-black rounded-full"></div>
      <div className="ml-10">
        <h3 className="text-2xl font-semibold">{ExperienceData.title}</h3>
        <span className="block text-md text-gray-500">
          {ExperienceData.date}
        </span>
        <p className="text-gray-600">{ExperienceData.description}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
