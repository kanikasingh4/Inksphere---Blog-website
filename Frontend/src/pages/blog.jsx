// src/components/Blog.jsx
import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Understanding React Fundamentals",
    summary:
      "A beginner-friendly guide to the core concepts of React, including components, state, and props.",
    imageUrl: "https://via.placeholder.com/600x300",
    author: "author",
    date: "month XX,20XX",
  },
  {
    id: 2,
    title: "Top 10 JavaScript Libraries for 2024",
    summary:
      "Explore the most popular JavaScript libraries and frameworks that are shaping the future of web development.",
    imageUrl: "https://via.placeholder.com/600x300",
    author: "author",
    date: "month XX,20XX",
  },
  {
    id: 3,
    title: "Mastering Asynchronous JavaScript",
    summary:
      "Learn how to handle asynchronous operations in JavaScript using promises, async/await, and more.",
    imageUrl: "https://via.placeholder.com/600x300",
    author: "author",
    date: "month XX,20XX",
  },
];

const Blog = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-6 md:px-20  mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Latest in Tech & IT
        </motion.h1>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: post.id * 0.2, duration: 0.5 }}
            >
              {/* Image */}
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {post.title}
                </h2>
                {/* Summary */}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.summary}
                </p>
                {/* Author and Date */}
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

