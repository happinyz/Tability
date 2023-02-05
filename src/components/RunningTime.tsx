import React, { useEffect, useState } from "react";
import "../styles/styles.scss";
const { DateTime } = require("luxon");

interface IRunningTime {}

const RunningTime = ({}: IRunningTime) => {
  const timeFormat = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const [date, setDate] = useState<string>(
    DateTime.now().toLocaleString(DateTime.DATE_FULL)
  );
  const [time, setTime] = useState<string>(
    DateTime.now().toLocaleString(timeFormat)
  );

  // TODO: Consolidate into one DateTime.now() call
  useEffect(() => {
    const interval = setInterval(() => {
      const date = DateTime.now().toLocaleString(DateTime.DATE_FULL);
      const time = DateTime.now().toLocaleString(timeFormat);
      setDate(date);
      setTime(time);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-container">
      <div className="time">{time}</div>
      <div className="date">{date}</div>
    </div>
  );
};

export default RunningTime;
