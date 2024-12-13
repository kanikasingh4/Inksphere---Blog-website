import React from "react";
import { motion } from "framer-motion";

const Home= () => {
  return (
    <div>
    <div className="relative bg-gradient-to-br from-teal-200 to-teal-600 text-white h-screen flex  items-center justify-center px-4">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-40 h-40 bg-white opacity-10 rounded-full top-20 left-10"
          animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0], rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-32 h-32 bg-white opacity-10 rounded-full bottom-20 right-20"
          animate={{ x: [0, -100, 100, 0], y: [0, 50, -50, 0], rotate: [0, -360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-2xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 dark:text-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Start Learning Today With <span className="text-black dark:text-white">InkSphere</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8 dark:text-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Explore thousands of courses and unlock your potential.
        </motion.p>



        {/* Call-to-Action Button */}
        <motion.a
          href="/courses"
          className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Courses
        </motion.a>
      </div>
      
    </div>
    <div className="dark:bg-gray-800 dark:text-white bg-white text-black py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <a href="#" className=" mx-2">
            Privacy Policy
          </a>
          <a href="#" className=" mx-2">
            Terms of Service
          </a>
          <a href="#" className=" mx-2">
            Contact
          </a>
        </div>
        <p >&copy; 2024 InkSphere. All rights reserved.</p>
      </div>
    </div>
    </div>
  );
};

export default Home;

