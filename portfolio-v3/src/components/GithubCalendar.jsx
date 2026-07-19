import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubCalendar = () => {
  const blackTheme = {
    light: ["#ebedf0", "#9ca3af", "#6b7280", "#374151", "#111827"],

    dark: ["#1f2937", "#4b5563", "#6b7280", "#9ca3af", "#f3f4f6"],
  };
  return (
    <div className=" max-w-7xl mx-auto flex justify-center items-center ">
      <div>
        <h2 className="text-4xl font-bold mb-8  font-display uppercase tracking-tight text-gray-900 text-center">
          My GitHub Contributions
        </h2>
        {/* add a color of the block */}
        <div className="p-8 border border-gray-300 rounded-lg shadow-lg">
          <GitHubCalendar
            username="paedDev"
            colorScheme="light"
            theme={blackTheme}
          />
        </div>
      </div>
    </div>
  );
};

export default GithubCalendar;
