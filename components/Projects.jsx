import Image from "next/image";
import React from "react";
import { projects } from "@/constants";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const getData = async () => {
  const client = createClient({
    projectId: "f3is13ck",
    dataset: "production",
    apiVersion: '2021-03-25',
    useCdn: true,
  });


  const query = '*[_type == "projects"]';

  const skills = await client.fetch(query);

  return skills;
};
const Projects = async () => {
  const data = await getData();
  const client = createClient({
    projectId: "f3is13ck",
    dataset: "production",
    useCdn: true,
  });



  const builder = imageUrlBuilder(client);
  return (
    <div className="py-10 min-h-screen bg-heroImage bg-center bg-cover">
      <h2 className="text-center text-white md:text-[3rem] text-[2rem] mb-10 font-bold">
        Projects
      </h2>
      <div className="flex flex-wrap sm:p-10 p-5 gap-5 ">
        {data.map((item, index) => (
          <a href={item.link || '#'} key={index}>
            <div className="sm:w-[300px] h-auto w-full ">
              <Image
                src={`${builder
                  .image(item.project.asset._ref)
                  .auto("format")
                  .fit("max")
                  .toString()}`}
                width={500}
                height={300}
                alt={item.title}
                className="w-full"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
