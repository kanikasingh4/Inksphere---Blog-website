import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa";
import signupimge from "../assests/sign_up.webp"

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950 p-4">
      <div className="bg-transparent  flex max-w-4xl w-full">
        {/* Illustration Section */}
        <div className="hidden md:flex items-center justify-center w-1/2  bg-transparent">
          <img
            src={signupimge}
            alt="Sign up illustration"
            className=' bg-transparent w-full h-5/6'
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 shadow-md rounded-md bg-white">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Already have an account? <a href="/sign-in" className="text-red-500 hover:underline">Log in</a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="name"
              placeholder="Username"
              className="w-full p-3 border rounded-md"
              value={formData.name}
              onChange={handleChange}
              required
            />
            </div>
            <div>
            <label htmlFor="password" className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="w-full p-3 border rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
            </div>
            <div>
            <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full p-3 border rounded-md"
              value={formData.password}
              onChange={handleChange}
              required
            />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                className="mr-2"
                checked={formData.agree}
                onChange={handleChange}
              />
              <label htmlFor="agree" className="text-sm">
                I agree to the{' '}
                <a href="#" className="text-red-500 hover:underline">
                  Platforms Terms
                </a>{' '}
                of Service and{' '}
                <a href="#" className="text-red-500 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition"
            >
              Create account
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-t" />
            <span className="mx-4 text-gray-400">Or</span>
            <hr className="flex-grow border-t" />
          </div>

          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100">
              <FcGoogle size={30} />
              Sign up with Google
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100">
              <FaGithub size={30} className="text-black" />
              Sign up with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
