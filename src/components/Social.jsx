import React, { useEffect, useState } from 'react';
import { FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

const Social = ({ platform, username }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Retrieve the theme from localStorage on mount
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []); // Only run once when component mounts

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Set platform icons
  const platformIcons = {
    twitter: <FaTwitter className="icon" style={{ fontSize: '1.5rem' }} />,
    github: <FaGithub className="icon" style={{ fontSize: '1.5rem' }} />,
    youtube: <FaYoutube className="icon" style={{ fontSize: '1.5rem' }} />,
  };

  const icon = platformIcons[platform.toLowerCase()] || null;

  return (
    <div>
      <a
        href={`https://www.${platform}.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          
        }}
      >
      {platformIcons[platform.toLowerCase()]}
      </a>
   
    </div>
  );
};

export default Social;
