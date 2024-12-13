import React from "react";
import { motion } from "framer-motion";
const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    image: "/assets/web-dev.jpg",
    description: "Learn HTML, CSS, and JavaScript from scratch.",
    instructor: "Jane Smith",
    duration: "12 weeks",
  },
  {
    id: 2,
    title: "Data Science with Python",
    image: "/assets/data-science.jpg",
    description: "Master data analysis and visualization.",
    instructor: "John Doe",
    duration: "10 weeks",
  },
  {
    id: 3,
    title: "React.js Essentials",
    image: "/assets/react.jpg",
    description: "Build powerful web apps with React.",
    instructor: "Alice Johnson",
    duration: "8 weeks",
  },
];

const CourseCatalog = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-6 ">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4 dark:text-white">
                {course.description}
              </p>
              <p className="text-sm text-gray-700 mb-2 dark:text-white">
                <strong>Instructor:</strong> {course.instructor}
              </p>
              <p className="text-sm text-gray-700 mb-4 dark:text-white">
                <strong>Duration:</strong> {course.duration}
              </p>
              <a
                href={`/course/${course.id}`}
                className="block text-center bg-yellow-300 text-white py-2 rounded-full hover:bg-yellow-400 transition"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CourseCatalog;
