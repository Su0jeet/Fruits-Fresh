import React from "react";
import BannerPng from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../Utility/Animation";

const Banner = () => {
  return (
    <>
      <section className="bg-red-50">
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
          {/* Banner image  */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              viewport={{ once: true }}
              src={BannerPng}
              alt=""
              className="w-[300px] md:max-w-[400px] h-full object-cover"
            />
          </div>
          {/* Brand info  */}
          <div className="flex flex-col justify-center ">
            <motion.h1
              initial="hidden"
              variants={FadeUp(0.5)}
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Brand Info
            </motion.h1>
            <motion.p
              initial="hidden"
              variants={FadeUp(0.7)}
              whileInView="visible"
              viewport={{ once: true }}
              className="font-semibold font-averia"
            >
              Hello, dolor sit amet consectetur adipisicing elit.
              Similique voluptates eveniet dolorem. Excepturi neque quibusdam
              accusantium debitis harum animi nihil, repellat sunt maiores.
            </motion.p>
            <motion.p
              initial="hidden"
              variants={FadeUp(0.9)}
              whileInView="visible"
              viewport={{ once: true }}
              className=" font-averia"
            >
              {" "}
              nulla molestias modi sed deserunt ad reprehenderit tenetur illo ut
              officia vel esse inventore, maxime quibusdam.
            </motion.p>
            {/* Button section  */}
            <motion.div
              initial="hidden"
              variants={FadeUp(1.1)}
              animate="visible"
              className="flex justify-center md:justify-start pt-4"
            >
              <button className="bg-primary text-white font-averia py-3 px-6 rounded-xl shadow-md shadow-primary hover:scale-110 duration-500 flex items-center gap-2 ">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
