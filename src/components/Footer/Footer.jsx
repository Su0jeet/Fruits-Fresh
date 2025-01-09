import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLeaf  } from "react-icons/fa";
import { motion } from 'framer-motion';


const Footer = () => {
  return (
    <>
    <footer className="bg-red-200 py-12 mt-12">
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex justify-between items-center">
            {/* Logo section  */}
            <div className="flex items-center gap-2 text-2xl font-bold uppercase">
                <p className='text-primary'>fruits</p>
                <p className='text-secondary'>store</p>
                <FaLeaf className='text-green-500'/>
            </div>
            {/* Social icon section  */}
            <div className="flex items-center gap-4 text-2xl text-gray-700 mt-5 ">
            <FaFacebook  className='hover:scale-110 duration-500'/>
            <FaInstagram  className='hover:scale-110 duration-500'/>
            <FaTwitter className='hover:scale-110 duration-500'/>
            </div>
        </motion.div>
    </footer>
    </>
  )
}

export default Footer