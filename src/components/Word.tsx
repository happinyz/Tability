import React, { useEffect, useState } from "react";
import { fetchWordOfDay, WordResponse } from "../helpers/requests";
import "../styles/styles.scss";

// TODO: Replace with Wordnik API

interface IWord {}

const Word = ({}: IWord) => {
  const date = new Date().toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const [word, setWord] = useState<string>("");
  const [definitions, setDefinitions] = useState<string>("");

  const getWordDetails = async () => {
    const wordDetails: WordResponse = await fetchWordOfDay(date);

    console.log(wordDetails);
    setWord(wordDetails.word);
    setDefinitions(wordDetails.definitions);
  };

  useEffect(() => {
    getWordDetails();
  }, []);

  return (
    <div className="word-container">
      <a className="word-main" href="https://www.wordnik.com/word-of-the-day">
        {word} - {definitions}
      </a>
    </div>
  );
};

export default Word;
