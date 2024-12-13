import React, { useState } from 'react';
import signupImage from '../assests/login.webp'; // Adjust the path based on your folder structure

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    setError('');
    console.log('Login successful:', { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-400 ">
      <div className="bg-transparent  flex max-w-4xl w-full">
        
        {/* Left Section - Image */}
        <div className="hidden md:flex items-center justify-center w-1/2  bg-transparent">
          <img src={signupImage} alt="Sign Up Illustration" className="object-cover max-w-full" />
        </div>

        {/* Right Section - Form */}
        <div className="w-1/2 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{' '}
          <a href="/sign-up" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
