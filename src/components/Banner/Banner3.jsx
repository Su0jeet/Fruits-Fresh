import React from "react";
import Banner3Png from "../../assets/banner-bg.jpg";
import { IoBagHandleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FadeLeft } from "../../Utility/Animation";

const bgStyle = {
  backgroundImage: `url(${Banner3Png})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Banner3 = () => {
  return (
    <>
      <section className="container mb-12">
        <div
          style={bgStyle}
          className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl"
        >
          {/* empty div  */}
          <div></div>
          {/* Brand info  */}
          <div className="flex flex-col justify-center ">
            <motion.h1
              initial="hidden"
              variants={FadeLeft(0.5)}
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
             Get Fresh Fruits Today
            </motion.h1>
            <motion.p
              initial="hidden"
              variants={FadeLeft(0.7)}
              whileInView="visible"
              viewport={{ once: true }}
              className="font-semibold font-averia"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique voluptates eveniet dolorem. Excepturi neque quibusdam
              accusantium debitis harum animi nihil, repellat sunt maiores.
            </motion.p>
            <motion.p
              initial="hidden"
              variants={FadeLeft(0.9)}
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
              variants={FadeLeft(1.1)}
              animate="visible"
              className="flex justify-center md:justify-start pt-4"
            >
              <button className="bg-primary text-white font-averia py-3 px-6 rounded-xl shadow-md shadow-primary hover:scale-110 duration-500 flex items-center gap-2 ">
                <span>
                  <IoBagHandleOutline />
                </span>{" "}
                Order Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner3;
