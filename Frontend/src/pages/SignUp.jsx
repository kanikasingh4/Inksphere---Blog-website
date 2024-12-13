// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";
// import DarkModeToggle from "../components/DarkModeToggle";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     agree: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-teal-700 via-teal-300 to-teal-50    p-4">
//       <div className="bg-transparent  flex max-w-4xl  ">
//         {/* Form Section */}
//         <div className="w-full  p-5 shadow-md rounded-lg bg-white  dark:bg-black">
//           <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-5">
//             Sign Up
//           </h2>
//           <p className="text-gray-600 mb-6 text-center dark:text-white">
//             Already have an account?{" "}
//             <a href="/sign-in" className="text-red-500 hover:underline">
//               Log in
//             </a>
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4 ">
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-gray-700 mb-1 dark:text-white"
//               >
//                 Username
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Username"
//                 className="w-full p-3 border rounded-md"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-gray-600 mb-1 dark:text-white"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="example@gmail.com"
//                 className="w-full p-3 border rounded-md"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-gray-600 mb-1 dark:text-white"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter password"
//                 className="w-full p-3 border rounded-md"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 name="agree"
//                 id="agree"
//                 className="mr-2"
//                 checked={formData.agree}
//                 onChange={handleChange}
//               />
//               <label htmlFor="agree" className="text-sm">
//                 I agree to the{" "}
//                 <a href="#" className="text-red-500 hover:underline">
//                   Platforms Terms
//                 </a>{" "}
//                 of Service and{" "}
//                 <a href="#" className="text-red-500 hover:underline">
//                   Privacy Policy
//                 </a>
//               </label>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition"
//             >
//               Create account
//             </button>
//           </form>

//           <div className="flex items-center my-4">
//             <hr className="flex-grow border-t" />
//             <span className="mx-4 text-gray-400">Or</span>
//             <hr className="flex-grow border-t" />
//           </div>

//           <div className="flex justify-center gap-4">
//             <button className="flex items-center gap-1 px-2 py-1 border rounded-md hover:bg-gray-100">
//               <FcGoogle size={30} />
//               Sign up with Google
//             </button>
//             <button className="flex items-center gap-1 px-2 py-1 border rounded-md hover:bg-gray-100">
//               <FaGithub size={30} className="text-black dark:text-white" />
//               Sign up with Github
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// src/components/SignUp.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

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
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                
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
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
