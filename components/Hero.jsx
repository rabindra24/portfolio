import React from "react";
import Image from "next/image";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const getData = async () => {
  const client = createClient({
    projectId: "f3is13ck",
    dataset: "production",
    useCdn: true,
  });

  const query = '*[_type == "hero"]';

  const hero = await client.fetch(query);

  return hero;
};

const Hero = async () => {

  const data = await getData();

  const client = createClient({
    projectId: "f3is13ck",
    dataset: "production",
    useCdn: true,
  });

  const builder = imageUrlBuilder(client);


  return (
    <div className="bg-heroImage sm:pt-24 pt-48  min-h-screen w-full flex sm:items-center px-3  bg-center bg-cover bg-no-repeat flex-col relative overflow-x-hidden">
      <h1 className="gradient_text md:text-[4rem] sm:text-[3rem] text-[3.5rem] font-semibold">
        {data[0].subhead}
      </h1>
      <h1 className="text-white uppercase md:text-[5rem] sm:text-[3.5rem] mb-10 text-[2.8rem] font-bold ">
        {data[0].occupation}
      </h1>

      <Image
        src={`${builder
          .image(data[0].hero.asset._ref)
          .auto("format")
          .fit("max")
          .toString()}`}
        width={400}
        height={400}
        className="md:w-[450px] absolute sm:bottom-0 bottom-10"
        alt={data[0].alt}
      />
    </div>
  );
};

export default Hero;
