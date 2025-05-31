import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Oishy.dev</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <li><a href="#about" className="hover:text-orange-500">About</a></li>
          <li><a href="#skills" className="hover:text-orange-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
          <li><a href="#education" className="hover:text-orange-500">Education</a></li>
          <li><a href="#research" className="hover:text-orange-500">Research</a></li>
          <li><a href="#certificates" className="hover:text-orange-500">Certificates</a></li>
          <li><a href="#leadership" className="hover:text-orange-500">Leadership</a></li>
        </ul>

        {/* Theme Toggle (Desktop) */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="hidden md:block ml-4 px-3 py-1 rounded border text-sm font-medium
                     border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {isDark ? "☀ Light" : "🌙 Dark"}
        </button>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-lg px-2 py-1 border rounded text-gray-600 dark:text-gray-300"
          >
            {isDark ? "☀" : "🌙"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 space-y-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          {/* Primary items (always shown) */}
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

          {/* Grouped dropdown (secondary) */}
          <li className="pt-2 border-t border-gray-300 dark:border-gray-700 font-semibold text-orange-500">More</li>
          <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
          <li><a href="#research" onClick={() => setMenuOpen(false)}>Research</a></li>
          <li><a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a></li>
          <li><a href="#leadership" onClick={() => setMenuOpen(false)}>Leadership</a></li>
        </ul>
      )}
    </nav>
  );
}
