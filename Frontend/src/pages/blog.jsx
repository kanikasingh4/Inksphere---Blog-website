import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Top 5 Programming Languages in 2024",
    description: "Stay ahead with these in-demand languages.",
    link: "#",
  },
  {
    title: "How to Ace Your Tech Interview",
    description: "Tips and strategies for landing your dream job.",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <a
                href={blog.link}
                className="text-blue-500 hover:underline"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
