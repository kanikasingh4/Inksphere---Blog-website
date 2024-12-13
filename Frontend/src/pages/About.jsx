// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-t from-teal-100 via-teal-50 to-white text-gray-900 dark:text-gray-200 py-10 px-6 md:px-20 ">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mt-20">
        {/* Title Section */}
        <motion.h1
          className="text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About InkSphere
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          className="text-lg text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          InkSphere is your gateway to learning and sharing technical knowledge. 
          Explore diverse e-learning courses and stay updated with insightful blogs 
          crafted by tech enthusiasts.
        </motion.p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* E-Learning Feature */}
          <motion.div
            className="p-6 bg-blue-100 dark:bg-blue-700 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-2">📚 Interactive E-Learning</h2>
            <p>
              Access a wide range of courses designed to boost your skills. 
              Learn at your own pace with comprehensive materials and hands-on projects.
            </p>
          </motion.div>

          {/* Technical Blogs Feature */}
          <motion.div
            className="p-6 bg-green-100 dark:bg-green-700 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-2">📝 Technical Blogs</h2>
            <p>
              Stay informed with blogs on the latest tech trends, coding tutorials, 
              and industry insights. Share your knowledge and grow with the community.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="/blog"
            className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105"
          >
            Explore Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
