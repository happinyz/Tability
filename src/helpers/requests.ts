import axios from "axios";

// Date is in YYYY/MM/DD format
export async function fetchWordOfDay(date: string) {
  const url: string = `https://www.merriam-webster.com/word-of-the-day/${date}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (err: any) {
    console.error("Error fetching word of the day from Merriam Webster");
  }
}
