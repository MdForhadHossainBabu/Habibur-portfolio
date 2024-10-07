import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  // State to manage the theme ('light' or 'dark'), initialized from local storage or default to 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Effect to update theme in document root and local storage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle function to switch between themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button className="ml-6 transition-all duration-300 ease-in-out" onClick={toggleTheme}>
      {theme === 'light' ? (
        <FaMoon className="text-xl fill-[#0073E6]" />
      ) : (
        <FaSun className="text-xl fill-white" />
      )}
    </button>
  );
};

export default ThemeToggle;
