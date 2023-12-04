import React from "react";
import Image from "next/image";
import { Skill } from "@/constants";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const getData = async () => {
  const client = createClient({
    projectId: "f3is13ck",
    dataset: "production",
    apiVersion: '2021-10-25',
    useCdn: true,
  });


  const query = '*[_type == "skills"]';

  const skills = await client.fetch(query);

  return skills;
};

const Skills = async () => {
  const data = await getData();

  const client = createClient({
    projectId: "f3is13ck",
    dataset: "production",
    useCdn: true,
  });

  const builder = imageUrlBuilder(client);

  return (
    <div className="w-full lg:max-w-[1450px] flex flex-col  mx-auto relative top-0 inset-0 backdrop-blur-lg md:py-20 py-10 overflow-hidden">
      <h2 className="z-10 gradient_text md:text-[4rem] sm:text-[3rem] text-[2rem] font-bold md:mb-10 mb-5 md:ml-10 ml-5">
        Skills
      </h2>
      <div className="grid md:grid-cols-9 md:px-10 px-5 sm:grid-cols-6 grid-cols-4  gap-5 z-10">
        {data.map((item, idx) => (
          <Image
            key={idx}
            src={`${builder
              .image(
                item.skill.asset._ref
              )
              .auto("format")
              .fit("max")
              .width(200)
              .toString()}`}
            width={70}
            height={70}
            className="md:w-[80px] w-[50px] md:max-h-[100px] max-h-[60px] z-10 "
            alt={item.title}
          />
        ))}
      </div>
      <video
        src="/images/encryptionc.mp4"
        autoPlay
        loop
        muted
         playsInline={true} disablePictureInPicture={true}
        className="absolute w-full top-5 h-full  object-cover mix-blend-screen "
      ></video>
    </div>
  );
};

export default Skills;
