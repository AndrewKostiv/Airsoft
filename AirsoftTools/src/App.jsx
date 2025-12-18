import { useEffect, useState } from "react";
import "./css/App.css";
import TeamRandomizer from "./Components/TeamRandomizer/TeamRandomizer.jsx";
import TeamList from "./Components/TeamList/TeamList.jsx";
import Game from "./Components/Game Randomizer/Game.jsx";
import GameList from "./Components/GameList/GameList.jsx";

const initialPlayers = [
  {
    name: "Andrew",
    rank: 0,
    melee: 0,
    kills: 0,
    deaths: 0,
    gamesPlayed: 0,
    gamesWon: 0,
    gamesFlaked: 1,
    id: 1,
  },
  {
    name: "Hudson",
    rank: 0,
    melee: 0,
    kills: 0,
    deaths: 0,
    gamesPlayed: 0,
    gamesWon: 0,
    gamesFlaked: 0,
    id: 2,
  },
  {
    name: "Sye",
    rank: 0,
    melee: 1,
    kills: 0,
    deaths: 0,
    gamesPlayed: 0,
    gamesWon: 0,
    gamesFlaked: 0,
    id: 3,
  },
  {
    name: "Landon",
    rank: 0,
    melee: 0,
    kills: 0,
    deaths: 0,
    gamesPlayed: 0,
    gamesWon: 0,
    gamesFlaked: 0,
    id: 4,
  },
  {
    name: "Daren",
    rank: 0,
    melee: 0,
    kills: 0,
    deaths: 0,
    gamesPlayed: 0,
    gamesWon: 0,
    gamesFlaked: 0,
    id: 5,
  },
];

const initialGameModes = [
  { name: "Team Death Match", active: false, id: 1, forts: true },
  { name: "Free For All", active: false, id: 2, forts: false },
  { name: "Attack & Defend", active: false, id: 3, forts: true },
  { name: "Capture The Flag", active: false, id: 4, forts: true },
];

function App() {
  const [players, setPlayers] = useState(initialPlayers);
  const [gameModes, setGameModes] = useState(initialGameModes);

  //================================
  // Functions
  //================================
  /**
   * All purpose array shuffler
   * @param {*} array
   * @returns shuffled array
   */
  // function shuffle(array) {
  //   let currentIndex = array.length,
  //     randomIndex;

  //   // While there remain elements to shuffle.
  //   while (currentIndex !== 0) {
  //     // Pick a remaining element.
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;

  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ];
  //   }

  //   return array;
  // }

  // useEffect(() => {
  //   console.log(players);
  // }, [players]);

  //================================
  // jsx
  //================================
  return (
    <>
      <TeamList players={players} setPlayers={setPlayers} />
      <TeamRandomizer players={players} />
      <GameList gameModes={gameModes} setGameModes={setGameModes} />
      <Game gameModes={gameModes} setGameModes={setGameModes} />
    </>
  );
}

export default App;
