import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
 
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const isAuthenticated = true; // Change this based on authentication status

  // Load the user's theme preference from local storage
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode and save preference to local storage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0  left-0 w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-teal-800 via-teal-500 to-teal-300 rounded-full text-white'>
          INK
        </span>
        <span>SPHERE</span>
      </Link>

          {/* Menu for Desktop */}
          <div className="hidden md:flex items-center space-x-6 font-semibold text-lg">
            <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400">
              Home
            </a>
            <a href="/course" className="text-gray-600 dark:text-gray-300  hover:text-teal-500 dark:hover:text-teal-400">
              Courses
            </a>
            <a href="/about" className="text-gray-600 dark:text-gray-300  hover:text-teal-500 dark:hover:text-teal-400">
              About
            </a>
            <a href="/blog" className="text-gray-600 dark:text-gray-300  hover:text-teal-500 dark:hover:text-teal-400">
              Blog
            </a>
            {isAuthenticated ? (
              <a href="/dashboard" className="text-gray-600 dark:text-gray-300  hover:text-teal-500 dark:hover:text-teal-400">
                Dashboard
              </a>
            ) : (
              <a href="/login" className="text-gray-600 dark:text-gray-300  hover:text-teal-500 dark:hover:text-teal-400">
                Login / Signup
              </a>
            )}
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {darkMode ? (
                <span><MdLightMode /></span>
              ) : (
                <span><MdDarkMode /></span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a href="/" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400">
            Home
          </a>
          <a href="/course" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400">
            Courses
          </a>
          <a href="/about" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400">
            About
          </a>
          <a href="/blog" className="block px-4 py-2 text-gray-600 dark:text-gray-300  hover:text-teal-500 dark:hover:text-teal-400">
            Blog
          </a>
          {isAuthenticated ? (
            <a href="/dashboard" className="block px-4 py-2 text-gray-600 dark:text-gray-300  hover:text-teal-500 dark:hover:text-teal-400">
              Dashboard
            </a>
          ) : (
            <a href="/login" className="block px-4 py-2 text-gray-600 dark:text-gray-300  hover:text-teal-500 dark:hover:text-teal-400">
              Login / Signup
            </a>
          )}
          <button
            onClick={toggleDarkMode}
            className="block w-full text-left px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 focus:outline-none"
          >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
