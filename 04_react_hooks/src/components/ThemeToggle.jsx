import { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((mode) => !mode);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: isDarkMode ? "balck" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt
        aliquam ab tempora quisquam eaque sequi magni. Nesciunt cumque,
        explicabo, deleniti aspernatur, illum quam sapiente laborum recusandae
        consequatur temporibus iste!
      </h2>
      <button onClick={toggleTheme}>
        切换到{isDarkMode ? "白天" : "暗黑"}模式
      </button>
    </div>
  );
};

export default ThemeToggle;
