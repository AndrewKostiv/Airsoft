import { useState } from "react";
import "./css/App.css";
import TeamRandomizer from "./Components/TeamRandomizer/TeamRandomizer.jsx";
import TeamList from "./Components/TeamList/TeamList.jsx";

const initialPlayers = [
  {
    name: "Andrew",
    Rank: 0,
    Melee: 0,
    kills: 0,
    deaths: 0,
    GamesPlayed: 0,
    GamesWon: 0,
    GamesFlaked: 1,
    id: 1,
  },
  {
    name: "Hudson",
    Rank: 0,
    Melee: 0,
    kills: 0,
    deaths: 0,
    GamesPlayed: 0,
    GamesWon: 0,
    GamesFlaked: 0,
    id: 2,
  },
  {
    name: "Sye",
    Rank: 0,
    Melee: 1,
    kills: 0,
    deaths: 0,
    GamesPlayed: 0,
    GamesWon: 0,
    GamesFlaked: 0,
    id: 3,
  },
  {
    name: "Landon",
    Rank: 0,
    Melee: 0,
    kills: 0,
    deaths: 0,
    GamesPlayed: 0,
    GamesWon: 0,
    GamesFlaked: 0,
    id: 4,
  },
  {
    name: "Daren",
    Rank: 0,
    Melee: 0,
    kills: 0,
    deaths: 0,
    GamesPlayed: 0,
    GamesWon: 0,
    GamesFlaked: 0,
    id: 5,
  },
];

function App() {
  const [players, setPlayers] = useState(initialPlayers);

  //================================
  // Functions
  //================================
  function handleAddPlayer(newPlayerName) {
    const newPlayer = {
      name: newPlayerName,
      Rank: 0,
      Melee: 0,
      kills: 0,
      deaths: 0,
      GamesPlayed: 0,
      GamesWon: 0,
      GamesFlaked: 0,
      id: Date.now(),
    };
    setPlayers((players) => [...players, newPlayer]);
  }

  function handleRemovePlayer(id) {
    setPlayers((players) => players.filter((player) => player.id !== id));
  }

  function handleUpdatePlayer(newPlayerData) {
    setPlayers((players) =>
      players.map((player) =>
        player.id !== newPlayerData.id ? newPlayerData : player
      )
    );
  }
  //================================
  // jsx
  //================================
  return (
    <>
      <TeamList
        players={players}
        onAddPlayer={handleAddPlayer}
        onRemovePlayer={handleRemovePlayer}
        onUpdatePlayer={handleUpdatePlayer}
      />
      <TeamRandomizer players={players} />
    </>
  );
}

export default App;
