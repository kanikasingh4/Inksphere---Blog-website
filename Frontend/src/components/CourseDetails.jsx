import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const courseDetails = {
  1: {
    title: "Web Development Bootcamp",
    overview: "Learn HTML, CSS, and JavaScript to become a full-stack web developer.",
    syllabus: [
      "HTML Basics",
      "CSS Styling",
      "JavaScript Fundamentals",
      "Building Projects",
    ],
    instructor: {
      name: "Jane Smith",
      bio: "Jane is a senior web developer with over 10 years of experience.",
    },

  },
  2: {
    title: "Data Science with Python",
    overview: "Master data analysis, visualization, and machine learning.",
    syllabus: ["Python Basics", "Pandas", "Data Visualization", "ML Basics"],
    instructor: {
      name: "John Doe",
      bio: "John is a data scientist with experience in Fortune 500 companies.",
    },

  },
  3:{
    title: "React.js Essentials",
    overview: "Build powerful web apps with React.",
    syllabus: ["Javascript Basics", "React", "Tailwind css",],
    instructor: {
      name: "John Doe",
      bio: "John is a data scientist with experience in Fortune 500 companies.",
    },

  },
};

const CourseDetails = () => {
  const { id } = useParams();
    const course = courseDetails[id];
  
    if (!course) {
     return <div className="p-8">Course not found.</div>;
   }
  return (
    <div className="min-h-screen bg-gradient-to-t from-teal-800 via-teal-400 to-white   py-10 px-4 md:px-20">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        {/* Header Section */}
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
         {course.title}
        </motion.h1>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
         {course.overview}
        </motion.p>

        {/* Syllabus Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-3">Syllabus</h2>
          <ul className="list-disc list-inside space-y-2">
          {course.syllabus.map((topic, index) => (
           <li key={index} className="mb-2 text-gray-700 dark:text-gray-200">
              {topic}
             </li>
           ))}
            </ul>
        </motion.div>

        {/* Instructor Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Instructor</h2>
          <p>
          <strong>{course.instructor.name}</strong>: {course.instructor.bio}
          </p>
        </motion.div>

        

        {/* Enroll Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-3 px-6 rounded-full text-lg transition-transform transform hover:scale-105">
            Enroll in Course
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetails;
