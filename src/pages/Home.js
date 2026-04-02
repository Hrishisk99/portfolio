import React from "react";
import { TypeAnimation } from "react-type-animation";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaGitAlt,
  FaReact,
  FaAngular,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { SiPython } from "react-icons/si";

export default function Home() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
    { name: "Java", icon: <FaJava className="text-red-500 text-3xl" /> },
    { name: "Python", icon: <SiPython className="text-yellow-300 text-3xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-3xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-3xl" /> },
    { name: "Angular", icon: <FaAngular className="text-red-600 text-3xl" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition">
      <div className="max-w-4xl mx-auto flex flex-col items-center px-6 py-16 text-center">
        {/* HERO SECTION */}
        <div className="max-w-2xl">
          {/* Profile Image */}
          <div className="relative flex justify-center mb-6">
            <div className="absolute w-56 h-56 md:w-72 md:h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>

            <img
              src="/hsk.jpeg"
              alt="profile"
              className="relative w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-white shadow-xl animate-float hover:scale-110 transition duration-300"
            />
          </div>

          {/* Name */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hi, I'm Hrishikesh Kolli 👋
            </span>
          </h1>

          {/* Role */}
          <div className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 animate-fadeIn delay-100">
            <TypeAnimation
              sequence={[
                "Frontend Developer 🚀",
                1500,
                "UI Enthusiast 🎨",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base animate-fadeIn delay-200 leading-relaxed">
            I'm a passionate frontend developer focused on building responsive and user-friendly web applications. I enjoy turning ideas into real-world products and continuously improving my problem-solving skills through hands-on development.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 animate-fadeIn delay-300">
            <a
              href="/projects"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="/HrishikeshSK_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="border px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 transition duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* SOCIAL LINKS 🔥 */}
          <div className="flex justify-center gap-6 text-xl text-gray-600 dark:text-gray-300 animate-fadeIn delay-300">
            {/* <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white">
              <FaGithub />
            </a> */}

            <a
              href="https://www.linkedin.com/in/hrishikesh-s-kolli-121856221/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:hrishikeshs2047@gmail.com"
              className="hover:text-red-500"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="w-full mt-14">
          <h3 className="text-2xl font-bold mb-6 animate-fadeIn">Skills</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition duration-300 flex flex-col items-center gap-2"
              >
                {skill.icon}
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
