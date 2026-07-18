import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubCalendar = () => {
  return (
    <div className=" max-w-7xl mx-auto flex justify-center items-center ">
      <div>
        <h2 className="text-4xl font-bold mb-8  font-display uppercase tracking-tight text-gray-900 text-center">
          My GitHub Contributions
        </h2>

        <div className="p-8 border border-gray-300 rounded-lg shadow-lg">
          <GitHubCalendar username="paedDev" colorScheme="light" />
        </div>
      </div>
    </div>
  );
};

export default GithubCalendar;
