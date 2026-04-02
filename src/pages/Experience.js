import React from "react";

export default function Experience() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition">

      <div className="max-w-4xl mx-auto p-6 md:p-10">

        <h1 className="text-3xl font-bold mb-8 text-center">
          Experience
        </h1>

        <div className="space-y-6">

          {/* EXPERIENCE 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">

            <h2 className="text-xl font-semibold dark:text-white">
              Programmer Analyst at Aiwoox – Applied AnalytiX
            </h2>

            <p className="text-sm text-blue-500 mt-1">
              Project: DebateHQ, Real-Time Debate Platform
            </p>

            <ul className="text-gray-600 dark:text-gray-300 mt-3 space-y-2 text-left list-disc pl-5">

              <li>
                Built and optimized <b>responsive UI components</b> using <b>Angular</b> and <b>TypeScript</b>.
              </li>

              <li>
                Integrated <b>Supabase</b> for backend services, enabling real-time data handling and authentication.
              </li>

              <li>
                Collaborated with <b>QA teams</b> to identify and resolve bugs, ensuring smooth user flows.
              </li>

            </ul>

          </div>

          {/* EXPERIENCE 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">

            <h2 className="text-xl font-semibold dark:text-white">
              Fellowship at Crio.Do (Full Stack Development)
            </h2>

            <p className="text-sm text-green-500 mt-1">
              Ongoing
            </p>

            <ul className="text-gray-600 dark:text-gray-300 mt-3 space-y-2 text-left list-disc pl-5">

              <li>
                Learning <b>Data Structures & Algorithms (DSA)</b> to strengthen problem-solving skills.
              </li>

              <li>
                Acquiring <b>modern full-stack development skills</b> through hands-on projects.
              </li>

              <li>
                Building <b>responsive web applications</b> using modern tech stacks and best practices.
              </li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}