import Image from "next/image";
import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const getData = async () => {
  const client = createClient({
    projectId: "f3is13ck",
    dataset: "production",
    apiVersion: '2021-03-25',
    useCdn: true,
  });

  const query = '*[_type == "aboutsec"]';
  const hero = await client.fetch(query);
  return hero;
};

const AboutComponent = async () => {
  const data = await getData();
  const client = createClient({
    projectId: "f3is13ck",
    dataset: "production",
    useCdn: true,
  });

  const builder = imageUrlBuilder(client);

  return (
    <div className="w-full left-0 mx-auto h-full relative top-0 py-16 max-md:items-center flex justify-center  md:flex-row flex-col p-5 overflow-hidden">
      <div className="flex-1 z-10  w-full">
        <h2 className="gradient_text capitalize md:text-[4rem] sm:text-[3rem] text-[2rem] font-bold ">
          About
        </h2>
        <p className="text-white md:text-[1rem] text-[.8rem]">
          {data[0].content}
        </p>
      </div>
      <div className=" flex-1 z-10 aboutImage">
        <Image
          src={`${builder
            .image(data[0].aboutsec.asset._ref)
            .auto("format")
            .fit("max")
            .toString()}`}
          width={500}
          height={800}
          className="flex-1 z-10"
          alt={data[0].alt}
        />
      </div>
      <video
        src="/images/cards-video.webm"
        autoPlay
        loop
        muted
        className="absolute w-full top-0 h-full md:object-contain object-cover"
      ></video>
    </div>
  );
};

export default AboutComponent;
