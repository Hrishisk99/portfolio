import React from "react";

const projects = [
  {
    name: "QTripDynamic",
    desc: "Developed a dynamic travel booking web application with REST API integration, enabling city exploration, multi-filter search, and a reservation system with persistent user preferences.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "REST APIs", "LocalStorage", "jQuery"],
    live: "https://frontend-fn581x8ey-hrishikesh-s-kollis-projects.vercel.app",
    features: [
      "REST API integration",
      "Multi-filter search",
      "Persistent user data",
    ],
  },
  {
    name: "QTripStatic",
    desc: "Built a responsive travel website from wireframes, implementing reusable UI components and structured layouts to deliver a consistent, mobile-first user experience.",
    tech: ["HTML", "CSS", "Bootstrap"],
    live: "https://qtrip-static-o3i27x6mo-hrishikesh-s-kollis-projects.vercel.app",
    features: ["Responsive design", "Reusable components", "Mobile-first UI"],
  },
  {
    name: "XCruise",
    desc: "Designed a responsive cruise booking interface showcasing destinations with structured layouts and interactive UI elements.",
    tech: ["HTML", "CSS"],
    live: "https://69c7ca428d4ccebc8ff856ed--legendary-bavarois-0a44d0.netlify.app",
    features: ["Clean UI", "Responsive layout", "Interactive design"],
  },
  {
    name: "XProfile",
    desc: "Built a personal profile UI showcasing structured layout and styling fundamentals.",
    tech: ["HTML", "CSS"],
    live: "#",
    features: ["Clean layout", "Basic UI design"],
  },
  {
    name: "QCalc",
    desc: "Developed a functional calculator using JavaScript with DOM manipulation.",
    tech: ["JavaScript", "DOM"],
    live: "#",
    features: ["DOM manipulation", "Event handling"],
  },
  {
    name: "Quiz App",
    desc: "Created an interactive quiz application with dynamic question rendering and score tracking.",
    tech: ["JavaScript", "HTML", "CSS"],
    live: "#",
    features: ["Dynamic rendering", "Score tracking"],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition">
      <div className="max-w-6xl mx-auto p-6 md:p-10">
        <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>

        {/* CLEAN GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition duration-300 flex flex-col justify-between
              ${index < 3 ? "border border-blue-500/40 shadow-blue-500/10" : ""}`}
            >
              <div>
                {/* FEATURE TAG 🔥 */}
                {index < 3 && (
                  <span className="text-xs text-blue-500 font-semibold mb-2 block">
                    ⭐ Featured
                  </span>
                )}

                <h3 className="text-xl font-semibold dark:text-white mb-2">
                  {p.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {p.desc}
                </p>

                {/* FEATURES */}
                <ul className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {p.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

                {/* TECH BADGES */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* LIVE BUTTON */}
              {p.live !== "#" && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-600 font-medium hover:underline"
                >
                  🚀 Live Demo
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}