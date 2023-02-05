import React, { useState } from "react";
import { fetchWordOfDay } from "../helpers/requests";

interface IWord {}

const Word = ({}: IWord) => {
  const date = new Date().toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const [word, setWord] = useState(fetchWordOfDay(date));
  //   console.log(word);

  return <div></div>;
};

export default Word;
