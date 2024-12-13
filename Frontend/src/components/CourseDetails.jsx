import React from "react";
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
    reviews: [
      { student: "Alex", rating: 5, comment: "Fantastic course!" },
      { student: "Maria", rating: 4, comment: "Very informative." },
    ],
  },
  2: {
    title: "Data Science with Python",
    overview: "Master data analysis, visualization, and machine learning.",
    syllabus: ["Python Basics", "Pandas", "Data Visualization", "ML Basics"],
    instructor: {
      name: "John Doe",
      bio: "John is a data scientist with experience in Fortune 500 companies.",
    },
    reviews: [
      { student: "Sam", rating: 5, comment: "Highly recommended!" },
      { student: "Emily", rating: 4, comment: "Well-structured course." },
    ],
  },
};

const CourseDetails = () => {
  const { id } = useParams();
  const course = courseDetails[id];

  if (!course) {
    return <div className="p-8">Course not found.</div>;
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{course.title}</h1>
        <p className="text-lg mb-8">{course.overview}</p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Syllabus</h2>
          <ul className="list-disc pl-6">
            {course.syllabus.map((topic, index) => (
              <li key={index} className="mb-2 text-gray-700">
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Instructor</h2>
          <p className="text-gray-800">
            <strong>{course.instructor.name}</strong>: {course.instructor.bio}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Student Reviews</h2>
          {course.reviews.map((review, index) => (
            <div key={index} className="border-b py-4">
              <p className="font-bold">{review.student}</p>
              <p className="text-yellow-500">Rating: {review.rating} / 5</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>

        <a
          href="/enroll"
          className="block text-center bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition"
        >
          Enroll in Course
        </a>
      </div>
    </section>
  );
};

export default CourseDetails;
