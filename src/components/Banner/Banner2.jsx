import React from 'react'
import Banner2Png from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../Utility/Animation";

const Banner2 = () => {
  return (
    <>
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* Brand info  */}
        <div className="flex flex-col justify-center ">
          <motion.h1
            initial="hidden"
            variants={FadeUp(0.5)}
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl lg:text-6xl font-bold uppercase"
          >
           Online Fruit <br /> Store
          </motion.h1>
          <motion.p
            initial="hidden"
            variants={FadeUp(0.7)}
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
              Download App
            </button>
          </motion.div>
        </div>
         {/* Banner image  */}
         <div className="flex justify-center items-center">
          <motion.img
            initial={{opicity: 0, x:200, rotate:75 }}
            whileInView={{opacity: 1, x:0, rotate:0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            src={Banner2Png}
            alt=""
            className="w-[350px] md:max-w-[500px] h-full object-cover"
          />
        </div>
      </div>
    </section>
  </>
  )
}

export default Banner2