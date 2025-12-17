import { useEffect, useState } from "react";
import "./css/App.css";
import TeamRandomizer from "./Components/TeamRandomizer/TeamRandomizer.jsx";
import TeamList from "./Components/TeamList/TeamList.jsx";

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

function App() {
  const [players, setPlayers] = useState(initialPlayers);

  //================================
  // Functions
  //================================
  /**
   *
   * @param {*} e
   * @param {*} newPlayerName Player name
   */
  function handleAddPlayer(e, newPlayerName) {
    e.preventDefault();
    if (!newPlayerName) return;
    const newPlayer = {
      name: newPlayerName,
      Rank: 0,
      melee: 0,
      kills: 0,
      deaths: 0,
      gamesPlayed: 0,
      gamesWon: 0,
      gamesFlaked: 0,
      id: Date.now(),
    };
    setPlayers((players) => [...players, newPlayer]);
  }

  /**
   *
   * @param {*} e
   * @param {*} id Player ID
   */
  function handleRemovePlayer(e, id) {
    e.preventDefault();
    setPlayers((players) => players.filter((player) => player.id !== id));
  }

  /**
   *
   * @param {*} e
   * @param {*} newPlayerData Only the new data object, not a full player data object
   * @param {*} id Player ID
   */
  function handleUpdatePlayer(e, newPlayerData, id) {
    // e.preventDefault();
    // console.log(newPlayerData);
    // console.log(id);

    setPlayers((players) =>
      players.map((player) =>
        player.id === id ? { ...player, ...newPlayerData } : player
      )
    );
  }
  useEffect(() => {
    console.log(players);
  }, [players]);
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
