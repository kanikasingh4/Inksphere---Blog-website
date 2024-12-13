import React from "react";
import { motion } from "framer-motion";
import image from "../assests/home-img.webp";
import CourseCatalog from "../components/CourseCatalog";

export default function Course() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header Section */}
      <header className="bg-teal-300 text-black dark:bg-teal-900 dark:text-white py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">Welcome to InkSphere</h1>
          <p className="mt-2 text-lg">
            Your gateway to endless learning opportunities
          </p>
        </div>
      </header>

      {/* Hero Section with Animation */}
      <section className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between dark:bg-gray-900 dark:text-white">
        <div className="w-full md:w-1/2">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Learn Anytime, Anywhere
          </motion.h2>
          <motion.p
            className="text-gray-700 mb-6 dark:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore a wide range of courses tailored to boost your skills and
            knowledge.
          </motion.p>
          <motion.a
            href="/course"
            className="bg-yellow-300 text-white px-6 py-3 rounded-md hover:bg-yellow-400 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Get Started
          </motion.a>
        </div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={image} alt="Learning Illustration" />
        </motion.div>
      </section>

      {/* Course Highlights Section */}
      <section id="courses" className="bg-white py-12 dark:bg-gray-500">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Courses
          </h2>
          <CourseCatalog></CourseCatalog>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-teal-300 text-black dark:bg-teal-900 dark:text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Thousands of Learners Today
          </h2>
          <p className="mb-6 text-lg">
            Sign up now and unlock access to hundreds of high-quality courses.
          </p>
          <a
            href="/sign-up"
            className="bg-white text-teal-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
          >
            Sign Up for Free
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 InkSphere. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="mx-2 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="mx-2 hover:underline">
              Terms of Service
            </a>
            <a href="#" className="mx-2 hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
