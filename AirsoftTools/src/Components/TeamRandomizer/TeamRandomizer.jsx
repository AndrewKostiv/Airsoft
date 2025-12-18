import { useState } from "react";
import Team from "./Team";
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
      <h2 className="title">Team Randomizer</h2>
      <form className="team-randomizer-form" onSubmit={handleMakeTeams}>
        <span>Number of Teams: </span>
        <select
          className="input-number"
          name=""
          id=""
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        >
          {players.map((player, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <button className="make-teams-btn" type="submit">
          Make teams
        </button>
        <button
          className="clear-teams-btn"
          type="button"
          onClick={() => setTeams([])}
        >
          Clear
        </button>
      </form>
      {teams.length > 0 ? (
        <ul className="teams-container">
          {teams.map((team, teamNumber) => (
            <Team key={teamNumber} team={team} teamNumber={teamNumber} />
          ))}
        </ul>
      ) : null}
    </>
  );
}
