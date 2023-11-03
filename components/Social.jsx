import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const getData = async () => {
  const client = createClient({
    projectId: "f3is13ck",
    dataset: "production",
    apiVersion: '2021-03-25',
    useCdn: true,
  });

  const query = '*[_type == "social"]';
  const hero = await client.fetch(query);
  return hero;
};

const Social = async () => {
  const data = await getData();
  const client = createClient({
    projectId: "f3is13ck",
    dataset: "production",
    useCdn: true,
  });

  const builder = imageUrlBuilder(client);
  return (
    <div className="flex relative flex-col  top-0 w-full " >
      <div className="flex w-full items-center justify-center mb-10">
        {data.map((item, index) => (
          <a href={item.link} key={index}>
            <Image
              src={`${builder
                .image(item.icon.asset._ref)
                .auto("format")
                .fit("max")
                .toString()}`}
              width={60}
              height={60}
              className="w-[40px] mx-5"
              alt={item.link}
            />
          </a>
        ))}
      </div>
      <p className="text-center text-white ">
        Copyright © 2023 Developed By Me{" "}
      </p>
    </div>
  );
};

export default Social;
