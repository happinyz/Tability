import React, { useEffect, useState } from "react";
import { getNBAGames } from "../helpers/requests";
import "../styles/styles.scss";
import * as NBAIcons from "react-nba-logos";

export interface INBAGame {
  home: string;
  away: string;
  homePts?: number;
  awayPts?: number;
  gameTime?: string;
}

// const NBAIcon = (name: string, props = {}) => {
//   const Icon = NBAIcons[name];
//   return <Icon {...props} />;
// };

const NBASchedule = () => {
  const [games, setGames] = useState<INBAGame[]>([]);

  useEffect(() => {
    const getGames = async () => {
      const nbaGames = await getNBAGames();
      setGames(nbaGames);
    };
    getGames();
  }, []);

  return (
    <div className="nba-container">
      {games.map((game) => {
        return (
          <div className="nba-game-box">
            <div>
              <div>{TEAMS[game.home]}</div>
            </div>
            <div>
              <div>{TEAMS[game.away]}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const TEAMS: any = {
  Atlanta: "Hawks",
  Boston: "Celtics",
  Brooklyn: "Nets",
  Charlotte: "Hornets",
  Chicago: "Bulls",
  Cleveland: "Cavaliers",
  Dallas: "Mavericks",
  Denver: "Nuggets",
  Detroit: "Pistons",
  "Golden State": "Warriors",
  Houston: "Rockets",
  Indiana: "Pacers",
  LA: "Clippers",
  "Los Angeles": "Lakers",
  Memphis: "Grizzlies",
  Miami: "Heat",
  Milwaukee: "Bucks",
  Minnesota: "Timberwolves",
  "New Orleans": "Pelicans",
  "New York": "Knicks",
  "Oklahoma City": "Thunder",
  Orlando: "Magic",
  Philadelphia: "76ers",
  Phoenix: "Suns",
  Portland: "Trail Blazers",
  Sacramento: "Kings",
  "San Antonio": "Spurs",
  Toronto: "Raptors",
  Utah: "Jazz",
  Washington: "Wizards",
};

export default NBASchedule;
