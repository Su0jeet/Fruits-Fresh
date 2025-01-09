import React from "react";
import fruit1 from "../../assets/fruits/apple(1).png";
import fruit2 from "../../assets/fruits/orange.png";
import fruit3 from "../../assets/fruits/avocado.png";
import fruit4 from "../../assets/fruits/cherry.png";
import { AnimatePresence, motion } from "framer-motion";
import { FadeLeft } from "../../Utility/Animation";

const FruitPrice = [
  {
    id: 1,
    name: "Fresh red Apple",
    link: "/",
    price: "$2.00",
    image: fruit1,
    delay: 0.3,
  },

  {
    id: 2,
    name: "Fresh Orenge",
    link: "/",
    price: "$2.00",
    image: fruit2,
    delay: 0.6,
  },

  {
    id: 3,
    name: "Fresh Avocado",
    link: "/",
    price: "$4.00",
    image: fruit3,
    delay: 0.9,
  },

  {
    id: 1,
    name: "Fresh Cherries",
    link: "/",
    price: "$5.00",
    image: fruit4,
    delay: 1.2,
  },
];
const Fruits = () => {
  return (
    <>
      <section>
        <div className="container pt-12 pb-20">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl font-bold uppercase text-left pb-10"
          >
            our menu
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {FruitPrice.map((menu) => (
              <motion.div
                variants={FadeLeft(menu.delay)}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.1 }}
                className="bg-white rounded-3xl px-3 py-2
              shadow shadow-gray-300 flex flex-row justify-around items-center gap-3"
              >
                <img
                  src={menu.image}
                  alt=""
                  className="w-[60px] mb-4 scale-110  "
                />
                <h2 className="text-md font-semibold">
                  {menu.name}
                  <p className="text-secondary">{menu.price}</p>
                </h2>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Fruits;
