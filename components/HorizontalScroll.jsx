"use client";
import React, { useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { ServiceData } from "@/constants";

const HorizontalScroll = () => {
  // const url =
  //   "https://f3is13ck.apicdn.sanity.io/v1/data/query/production?query=*";
  // const token =
  //   "Bearer skHXbXookij6Xwa2Pneh3H05BnU7F5pUWt2FHQ9YzERWb9qPdqrAlFosB3yW7DqdLgSZAhTYoLxz5E1ystXMTl2i6sV45KzOSar1CYRhtajsoKXDBblCeJvWqsg5qEUKiTBrhspSgqNAgEHUvGWpOs4MWMxxKjo2qz1vb7CGQndx0vnJder2";

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-primary py-10">
      <h3 className="sticky top-14 font-bold text-white text-[3rem] text-center left-[40%]">
        {" "}
        Service&apos;s{" "}
      </h3>
      <div className="h-screen sticky flex items-center top-0 overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {ServiceData.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden  w-[300px] h-[380px]"
            >
              <button className=" bottom-0 left-1/2  transform -translate-x-1/2 -translate-y-1/2 absolute  text-white bg-primary  w-[80%] p-2 rounded-md font-bold ">
                {item.title}
              </button>
              <Image
                src={item.img}
                width={300}
                height={380}
                className="w-full h-full   object-cover"
                alt={item.title}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
