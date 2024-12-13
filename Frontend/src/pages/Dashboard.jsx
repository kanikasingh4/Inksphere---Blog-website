import React from "react";
import { motion } from "framer-motion";

const enrolledCourses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    progress: 75,
    certificateLink: "#",
  },
  {
    id: 2,
    title: "Data Science with Python",
    progress: 45,
    certificateLink: "#",
  },
  {
    id: 3,
    title: "React.js Essentials",
    progress: 90,
    certificateLink: "#",
  },
];

const userProfile = {
  name: "User",
  email: "user@example.com",
  avatar: "https://i.pravatar.cc/150?img=3",
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-teal-600 text-white py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center">
            <img
              src={userProfile.avatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="font-medium">{userProfile.name}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <motion.section
          className="bg-white p-6 rounded-lg shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Enrolled Courses</h2>
          {enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="mb-6 border-b pb-4 last:border-b-0"
            >
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <motion.div
                  className="bg-blue-400 h-4 rounded-full"
                  style={{ width: `${course.progress}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
              <p className="text-sm mt-2">{course.progress}% Complete</p>
              {course.progress === 100 && (
                <a
                  href={course.certificateLink}
                  className="inline-block mt-3 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                >
                  Download Certificate
                </a>
              )}
            </div>
          ))}
        </motion.section>

        {/* Progress Tracking */}
        <motion.section
          className="bg-white p-6 rounded-lg shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Progress Tracking</h2>
          <p className="text-gray-700 mb-4">
            Keep track of your learning progress and complete your courses to
            earn certificates.
          </p>
          <motion.div
            className="bg-blue-100 py-3 px-4 rounded-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <p className="text-blue-700 font-semibold">
              You are making great progress! Keep it up. 🚀
            </p>
          </motion.div>
        </motion.section>

        {/* Profile Management */}
        <motion.section
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Profile Management</h2>
          <div className="flex items-center mb-4">
            <img
              src={userProfile.avatar}
              alt="Profile"
              className="w-20 h-20 rounded-full mr-4"
            />
            <div>
              <p className="text-lg font-medium">{userProfile.name}</p>
              <p className="text-gray-600">{userProfile.email}</p>
            </div>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Edit Profile
          </button>
        </motion.section>
      </div>
    </div>
  );
};

export default Dashboard;

