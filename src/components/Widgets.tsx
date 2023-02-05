import React from "react";
import GithubCalendar from "./GithubCalendar";
import RunningTime from "./RunningTime";
import Word from "./Word";

interface IWidgets {}

const Widgets = ({}: IWidgets) => {
  return (
    <div className="widget-container">
      <Word></Word>
      <RunningTime></RunningTime>
      <GithubCalendar username="c3-alvinzou" tooltips={true}></GithubCalendar>
    </div>
  );
};

export default Widgets;
