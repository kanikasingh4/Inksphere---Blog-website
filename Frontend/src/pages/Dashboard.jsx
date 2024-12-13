// src/components/Dashboard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaCalendarAlt, FaBell, FaLink } from "react-icons/fa";

const courses = [
  { title: "JavaScript Fundamentals", progress: 75 },
  { title: "React Advanced", progress: 50 },
  { title: "Data Structures & Algorithms", progress: 90 },
];

const upcomingClasses = [
  { subject: "React State Management", date: "Dec 20, 2024", time: "10:00 AM" },
  { subject: "Async JavaScript", date: "Dec 22, 2024", time: "1:00 PM" },
];

const notifications = [
  "You have a new assignment due on Dec 18.",
  "React Advanced course updated with new modules.",
  "Join the live Q&A session on Dec 19.",
];

const quickLinks = [
  { name: "Course Library", icon: <FaBook />, href: "#" },
  { name: "Schedule", icon: <FaCalendarAlt />, href: "#" },
  { name: "Notifications", icon: <FaBell />, href: "#" },
  { name: "Resources", icon: <FaLink />, href: "#" },
];

const Dashboard = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Course Progress */}
        <motion.div
          className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            📚 Your Courses
          </h2>
          {courses.map((course, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{course.title}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mt-2">
                <motion.div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${course.progress}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Upcoming Classes */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            🗓 Upcoming Classes
          </h2>
          <ul className="space-y-4">
            {upcomingClasses.map((cls, index) => (
              <li key={index} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="font-semibold text-gray-700 dark:text-gray-300">{cls.subject}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cls.date} at {cls.time}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Notifications */}
        <motion.div
          className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            🔔 Notifications
          </h2>
          <ul className="space-y-4">
            {notifications.map((note, index) => (
              <li key={index} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                {note}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            ⚡ Quick Links
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center bg-blue-500 text-white p-4 rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
              >
                <span className="mr-2 text-2xl">{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
