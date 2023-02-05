import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RunningTime from "./components/RunningTime";
import Word from "./components/Word";
import GithubCalendar from "./components/GithubCalendar";

function App() {
  return (
    <div>
      <Word></Word>
      <RunningTime></RunningTime>
      <GithubCalendar username="c3-alvinzou" tooltips={true}></GithubCalendar>
    </div>
  );
}

export default App;
