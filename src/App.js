import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const linkStyle = (path) =>
    location.pathname === path
      ? "text-blue-500 font-semibold"
      : "hover:text-blue-500";

  return (
    <>
      <nav className="flex justify-between items-center px-6 md:px-10 py-4 shadow bg-white dark:bg-gray-800">
        {/* LOGO */}
        <Link to="/" className="text-lg md:text-xl font-bold">
          Hrishikesh Kolli
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>

          <Link to="/projects" className={linkStyle("/projects")}>
            Projects
          </Link>

          <Link to="/experience" className={linkStyle("/experience")}>
            Experience
          </Link>

          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded border dark:border-gray-600"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-6 py-4 flex flex-col items-end space-y-4">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>

          <Link to="/projects" className={linkStyle("/projects")}>
            Projects
          </Link>

          <Link to="/experience" className={linkStyle("/experience")}>
            Experience
          </Link>

          <button
            onClick={() => setDark(!dark)}
            className="border px-3 py-1 rounded"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      )}
    </>
  );
}

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar dark={dark} setDark={setDark} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>

        {/* FOOTER */}
        <div className="text-center text-sm text-gray-500 py-6 border-t dark:border-gray-700 mt-10">
          © 2026 Hrishikesh Kolli · Built with React & Tailwind
        </div>
      </div>
    </Router>
  );
}

export default App;
