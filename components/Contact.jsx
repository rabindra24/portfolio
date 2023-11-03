"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const formHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/rabindra/google_sheets/aPwFdVzxqVgaNeeb?tabId=Sheet2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [formData.name, formData.email, formData.query],
          ]),
        }
      );
      await response.json();
      setFormData({
        name: "",
        email: "",
        query: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" h-full md:w-[80%] mx-auto w-full relative top-0 py-16 px-5 flex justify-center items-center md:flex-row flex-col ">
        <div className="flex-1 z-10 w-full relative">
          <h2 className="gradient_text md:text-[4rem] sm:text-[3rem] text-[2rem] font-bold mb-10">
            Let&apos;s connect
          </h2>
          <div className="w-[400px] h-[400px] gradient_box absolute bottom-0 left-[-300px] rounded-full -z-1 backstretch animated"></div>
          <form
            onSubmit={formHandler}
            className=" shadow-md rounded lg:w-[80%]  mb-4  py-16 px-5 form_box z-[100]"
          >
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="bg-transparent  border-2 rounded w-full py-2 px-3 text-white mb-3"
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-transparent border border-b-2 rounded w-full py-2 px-3 text-white mb-3"
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2 "
                htmlFor="password"
              >
                Query
              </label>
              <textarea
                className="bg-transparent border border-b-2 rounded w-full py-2 px-3 text-white mb-3"
                id="Query"
                type="text"
                value={formData.query}
                onChange={(e) =>
                  setFormData({ ...formData, query: e.target.value })
                }
                placeholder="Query"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-pink_gradient p-2 rounded text-white bg-gradient_pink w-full"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <motion.div
          animate={{ y: 65, rotateY: 7 }}
          transition={{
            ease: "linear",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className=" flex-1 z-10"
        >
          <Image
            src={"/images/contact.webp"}
            width={500}
            height={800}
            className="flex-1 z-10"
            alt="Instagram || Whatsapp || LinkedIn"
            id="contact"
          />
        </motion.div>
      </div>
    </>
  );
};

export default ContactComponent;
