import React from "react";
import GithubCalendar from "./GithubCalendar";
import NBASchedule from "./NBASchedule";
import RunningTime from "./RunningTime";
import Word from "./Word";

interface IWidgets {}

const Widgets = ({}: IWidgets) => {
  return (
    <div className="widget-container">
      <RunningTime></RunningTime>
      <GithubCalendar username="c3-alvinzou" tooltips={true}></GithubCalendar>
      <Word></Word>
      <NBASchedule></NBASchedule>
    </div>
  );
};

export default Widgets;
