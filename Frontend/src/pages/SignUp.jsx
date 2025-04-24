import React, { useState } from "react";
import { motion } from "framer-motion";


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900  mt-16">
      <motion.div
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400  text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700"
                
              />
           
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
          
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400  text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700"
              />
            
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400  text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700"
              />
          
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-red-500 text-white py-3 rounded-lg shadow-md hover:bg-red-600 transition-transform"
          >
            Create account
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-center mt-6 text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <a href="/sign-in" className="text-blue-500 hover:underline">
            Log In
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
