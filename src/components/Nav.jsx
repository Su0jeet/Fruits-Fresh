import React from "react";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import {motion} from 'framer-motion'

const navMenu = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Products",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/",
  },
  {
    id: 2,
    name: "Shop",
    url: "/",
  },
  {
    id: 2,
    name: "Contacts",
    url: "/",
  },
];

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 0.5, delay: 0.5}}}
        className=" container flex justify-between items-center py-4 md:pt-4">
          {/* logo section */}
          <div className="flex items-center gap-2 uppercase font-bold text-2xl">
            <p className=" text-primary">fruit</p>
            <p className="text-secondary">store</p>
            <FaLeaf className="text-green-600" />
          </div>
          {/* menu section */}
          <div className=" hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {navMenu.map((menu) => (
                <li key={menu.id} className="text-xl">
                  <a
                    href={menu.url}
                    className=" hover:text-primary hover:shadow-[0_3Px_0_-1px] font-semibold"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
              <button className=" text-2xl hover:bg-primary hover:text-white p-2  rounded-full">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          {/* Mobile toggle button   */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl "/>
          </div>
        </motion.div>
      </nav>
      {/* mobile menu section  */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Nav;
