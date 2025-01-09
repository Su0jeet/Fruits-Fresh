import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import HeroPng from "../../assets/fruit-plate.png";
import LeafPng from "../../assets/leaf.png";
import {motion} from 'framer-motion';
import{FadeRight} from "../../Utility/Animation"

const Hero = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          {/* Brand info  */}
          <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
            <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
              <motion.h1
              initial="hidden"
              variants={FadeRight(0.6)}
              animate="visible"
               className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia">
                Healthy
                <br />
                fresh <span className="text-secondary">fruits!</span>
              </motion.h1>
              <motion.p
              initial="hidden"
              variants={FadeRight(0.9)}
              animate="visible"
              className="text-2xl tracking-wide">
                Order Now For Fresh Healthy Life{" "}
              </motion.p>
              <motion.p 
              initial="hidden"
              variants={FadeRight(1.2)}
              animate="visible"
              className="text-gray-400">
                Healthy and yummy food for fresh morning breakfast. Eat daily
                for good health and mind order now and get 20% offon your first
                order
              </motion.p>
              {/* Button section  */}
              <motion.div 
              initial="hidden"
              variants={FadeRight(1.5)}
              animate="visible"
              className="flex justify-center md:justify-start">
                <button className="bg-primary text-white font-averia py-3 px-6 rounded-xl shadow-md shadow-primary hover:scale-110 duration-500 flex items-center gap-2 ">
                  <span>
                    <IoBagHandleOutline />
                  </span>{" "}
                  Order Now
                </button>
              </motion.div>
            </div>
          </div>
          {/* Hero image  */}
          <div className="flex justify-center items-center">
            <motion.img
            initial={{opicity: 0, x:200, rotate:75 }}
            animate={{opacity: 1, x:0, rotate:0 }}
            transition={{duration: 1, delay: 0.2 }}
            src={HeroPng} alt="" className="w-[350px] md:w-[550px] drop-shadow"/>
          </div>
          {/* Leaf image  */}
          <div className="absolute top-14 md:top-0 right-1/2 blur-sm
          opacity-80 rotate-[40deg] ">
            <motion.img
            initial={{opicity: 0, y:-200, rotate:75 }}
            animate={{opacity: 1, y:0, rotate:0 }}
            transition={{duration: 1, delay: 1.5 }} 
             src={LeafPng} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
