"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Performance = () => {
  return (
    <div className="relative md:py-20 py-10 overflow-hidden">
      <h3 className="z-10 text-white text-center sm:text-[3rem] text-[2.4rem] max-sm:mb-10 font-bold ">
        Performance
      </h3>
      <div className="flex md:flex-row flex-col-reverse  ">
        <motion.div
          initial={{ rotate: -20 }}
          animate={{ y: 25, rotate: 20 }}
          transition={{
            ease: "linear",
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="flex-1 flex items-center justify-center p-10 z-10"
        >
          <Image
            src={"/images/performnce.webp"}
            width={300}
            height={300}
            className="transform -scale-x-100 md:w-[420px]  z-10"
            alt="SEO || Performance || Optamisation"
          />
        </motion.div>
        <div className="flex-1 flex flex-col gap-11 items-center justify-center z-10">
          {/* //Mobile */}
          <div className="flex justify-evenly w-full sm:hidden ">
            <div>
              <div
                className="radial-progress font-bold sm:hidden text-white"
                style={{
                  "--value": 100,
                  "--size": "7rem",
                  "--thickness": ".4rem",
                }}
              >
                100%
              </div>
              <h3 className="text-center mt-1 font-bold uppercase text-white">
              Best Practises
              </h3>
            </div>
            <div>
              <div
                className="radial-progress font-bold sm:hidden text-white"
                style={{
                  "--value": 100,
                  "--size": "7rem",
                  "--thickness": ".4rem",
                }}
              >
                100%
              </div>
              <h3 className="text-center mt-1 uppercase font-bold text-white">
              accessibility
              </h3>
            </div>
          </div>
          {/* Pc  */}
          <div className="sm:flex justify-evenly w-full hidden">
            <div>
              <div
                className="radial-progress font-bold text-white"
                style={{
                  "--value": 100,
                  "--size": "9rem",
                  "--thickness": ".7rem",
                }}
              >
                100%
              </div>
              <h3 className="uppercase text-center mt-2 font-bold text-white">
                Best Practises
              </h3>
            </div>

            <div>
              <div
                className="radial-progress font-bold text-white"
                style={{
                  "--value": 100,
                  "--size": "9rem",
                  "--thickness": ".7rem",
                }}
              >
                100%
              </div>
              <h3 className="text-center uppercase mt-1 font-bold text-white">
              accessibility
              </h3>
            </div>
          </div>
          {/* Pc  */}
          <div className="hidden sm:block">
            <div
              className="radial-progress font-bold text-white"
              style={{
                "--value": 100,
                "--size": "9rem",
                "--thickness": ".7rem",
              }}
            >
              100%
            </div>
            <h3 className="text-center mt-1 font-bold text-white ">SEO</h3>
          </div>
          {/* //Mobile */}
          <div>
            <div
              className="radial-progress font-bold sm:hidden bg-primary bg-opacity-50 text-white"
              style={{
                "--value": 100,
                "--size": "7rem",
                "--thickness": ".4rem",
              }}
            >
              100%
            </div>
            <h3 className="text-center sm:hidden mt-1 text-[1.4rem] font-bold text-white">
              SEO
            </h3>
          </div>
        </div>
      </div>
      <h4 className=" flex text-white font-semibold text-center w-full justify-center">
        According to Google{" "}
        <Image
          src={"/logo/google.webp"}
          width={30}
          height={50}
          className="ml-2"
          alt="SEO || Performance || Optamisation"
        />{" "}
      </h4>
      <video
        src="/images/blackholec.mp4"
        autoPlay
        loop
        muted
        className="absolute w-full top-0  h-full object-cover mix-blend-screen "
      ></video>
    </div>
  );
};

export default Performance;
