import { useState } from "react";
import Team from "../Team";
import "./TeamRandomizer.css";

export default function TeamRandomizer({ players }) {
  const [count, setCount] = useState(2);
  const [teams, setTeams] = useState([]);
  //================================
  // Functions
  //================================
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function handleMakeTeams(e) {
    e.preventDefault();

    const newTeams = Array.from({ length: count }, () => []);
    let tempPlayers = players.slice();
    shuffle(tempPlayers);

    tempPlayers.forEach((player, i) => {
      newTeams[i % count].push(player);
    });
    setTeams(newTeams);
  }
  //================================
  // jsx
  //================================
  return (
    <>
      <h2 className="title">TeamRandomizer</h2>
      <form onSubmit={handleMakeTeams}>
        <span>Number of Teams: </span>
        <select
          name=""
          id=""
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        >
          {Array.from({ length: players.length }, (_, i) => i + 1).map(
            (num) => (
              <option key={num} value={num}>
                {num}
              </option>
            )
          )}
        </select>
        <button type="submit">Make teams</button>
        <button type="reset" onClick={() => setTeams([])}>
          Clear
        </button>
      </form>
      {teams.length > 0 ? (
        <ul>
          {teams.map((team, teamNumber) => (
            <Team key={teamNumber} team={team} teamNumber={teamNumber} />
          ))}
        </ul>
      ) : null}
    </>
  );
}
