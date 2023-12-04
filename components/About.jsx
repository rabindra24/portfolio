import Image from "next/image";
import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const getData = async () => {
  const client = createClient({
    projectId: "f3is13ck",
    dataset: "production",
    apiVersion: '2021-10-25',
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

  // console.log(data)

  const builder = imageUrlBuilder(client);

  return (
    <div className="w-full left-0 mx-auto h-full relative top-0 py-16 max-md:items-center flex justify-center  md:flex-row flex-col p-5 overflow-hidden">
      <div className="flex-1 z-10  w-full">
        <h2 className="gradient_text mb-3 capitalize md:text-[4rem] sm:text-[3rem] text-[3rem] font-bold ">
          About
        </h2>
        <p className="text-white md:text-[1.1rem] font-epilogue">
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
        src="/images/cards-video(1).mp4"
        autoPlay
        loop
        muted
         playsInline={true} disablePictureInPicture={true}
        className="absolute sm:w-full w-[500px]  sm:h-full h-[400px] md:object-contain object-cover"
      ></video>

    </div>
  );
};

export default AboutComponent;
