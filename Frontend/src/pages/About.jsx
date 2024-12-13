import React from "react";
import { motion } from "framer-motion";

const instructors = [
  {
    name: "John Smith",
    bio: "Web Developer with 10+ years of experience in full-stack development.",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Jane Doe",
    bio: "Data Scientist and Python expert passionate about machine learning.",
    image: "https://i.pravatar.cc/150?img=8",
  },
];

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>
        <p className="text-center mb-8">
          Our mission is to provide quality education to learners worldwide.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-24 h-24 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{instructor.name}</h3>
                <p className="text-gray-600">{instructor.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

