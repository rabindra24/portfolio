"use client";
import { experiences } from "@/constants";
import Image from "next/image";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src={experience.icon}
          alt={experience.company_name}
          width={60} height={60}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-gray-300">{experience.company_name}</p>

        <ul className="mt-5 list-disc ml-5 space-y-2">

            {experience.points.map((point, index)=>(
                <li
                key={`experience-point-${index}`}
                className="text-white text-[14px] pl-1 tracking-wider"
                >
                    {point}
                </li>
            ))}

        </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-white sm:text-[3rem] text-[2rem] font-bold text-center">
          Work Experience
        </h2>
        <p className="text-center text-gray-300 font-semibold sm:text-[.9rem] text-[.8rem] uppercase">
          What I have done so far
        </p>
      </div>
      <div className="sm:mt-20 mt-14 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
