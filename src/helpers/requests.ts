import axios from "axios";
import { UNSPLASH_API_KEY, DICTIONARY_API_KEY } from "../config";

const cheerio = require("cheerio");

interface WordResponse {
  word: string;
  definition: string;
}

export interface ImageResponse {
  rawUrl: string;
  imageLink: string;
  location: string;
  userName: string;
  userLink: string;
}

// Date is in YYYY/MM/DD format
export async function fetchWordOfDay(date: string) {
  const url: string = `https://www.merriam-webster.com/word-of-the-day/${date}`;
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const word = $(".wod-definition-container").find("em").first().text();
    return word;
  } catch (err: any) {
    console.error("Error fetching word of the day from Merriam Webster");
  }
}

export async function fetchDefinitions(word: string) {
  const url: string = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${DICTIONARY_API_KEY}`;
  try {
    const response = await axios.get(url);
    console.log("word api", response);
    return response.data.shortdef;
  } catch (err: any) {
    console.error("Error fetching definitions from Merriam Webster");
  }
}

export async function fetchBackgroundImages(): Promise<ImageResponse> {
  const url: string = `https://api.unsplash.com/photos/random`;
  const headers = new Headers({
    Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
  });
  const params = new URLSearchParams();

  params.set("count", "1");
  params.set("collections", "1053828");

  const response = (
    await (await fetch(`${url}?${params}`, { headers })).json()
  )[0];

  console.log(response);

  return {
    rawUrl: response.urls.raw,
    imageLink: response.links.html,
    location: response.location?.name,
    userName: response.user.name,
    userLink: response.user.links.html,
  };
}
