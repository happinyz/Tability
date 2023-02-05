import React, { useEffect } from "react";
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar.css";
import "../styles/GithubStyles.scss";

interface IGithubCalendar {
  username: string;
  responsive?: boolean;
  tooltips?: boolean;
}

const GithubCalendar = ({
  username,
  responsive,
  tooltips,
}: IGithubCalendar) => {
  useEffect(() => {
    console.log(
      GitHubCalendar(".GitHubCalendar", username, {
        responsive: { responsive },
        tooltips: { tooltips },
        global_stats: false,
      })
    );
  }, []);

  return (
    <div className="GitHub">
      <a
        href={"https://github.com/" + username}
        rel="noopener noreferrer"
        className="GitHubCalendar"
      />
    </div>
  );
};

export default GithubCalendar;
