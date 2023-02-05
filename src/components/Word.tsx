import React, { useEffect, useState } from "react";
import { fetchDefinitions, fetchWordOfDay } from "../helpers/requests";

// TODO: Replace with Wordnik API

interface IWord {}

const Word = ({}: IWord) => {
  const date = new Date().toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const [word, setWord] = useState<string>("");
  const [definitions, setDefinitions] = useState<string[]>([]);
  console.log(word);
  console.log(definitions);

  const getWordDetails = async () => {
    const word = await fetchWordOfDay(date);
    const definitions = await fetchDefinitions("word");
    setWord(word);
    setDefinitions(definitions);
  };

  useEffect(() => {
    getWordDetails();
  }, []);

  return <div></div>;
};

export default Word;
