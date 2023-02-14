import axios from "axios";
import { INBAGame } from "../components/NBASchedule";
import { UNSPLASH_API_KEY, WORDNIK_API_KEY } from "../config";

const cheerio = require("cheerio");

export interface WordResponse {
  word: string;
  definitions: string;
}

export interface ImageResponse {
  rawUrl: string;
  imageLink: string;
  location: string;
  userName: string;
  userLink: string;
}

export async function fetchWordOfDay(date: string): Promise<WordResponse> {
  const url: string = `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${WORDNIK_API_KEY}`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return {
      word: data.word,
      definitions: data.definitions[0].text,
    };
  } catch (err) {
    return err as WordResponse;
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

// export function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {});
//   }
// }

export async function getNBAGames(): Promise<INBAGame[]> {
  const gameArray = [];

  const URL = "https://www.espn.com/nba/schedule";
  const response = await axios.get(URL);

  const $ = cheerio.load(response.data);
  const rowChildren = $(".Table__TBODY").first().children();
  for (var i = 0; i < rowChildren.length; i++) {
    const teamRow = $(rowChildren[i]).find($(".Table__Team"));
    const home: string = $(teamRow[0]).find($("a:nth-child(2)")).html();
    const away: string = $(teamRow[1]).find($("a:nth-child(2)")).html();
    gameArray.push({
      home,
      away,
    });
  }
  return gameArray;
}
