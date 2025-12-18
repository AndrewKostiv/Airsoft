import { useState } from "react";
import TeamMember from "./TeamMember";
import "./TeamList.css";

function TeamList({ players, setPlayers }) {
  const [newPlayer, setNewPlayer] = useState("");
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

  return (
    <>
      <h2>Team List </h2>
      <form onSubmit={(e) => handleAddPlayer(e, newPlayer)}>
        <input
          className="input-text"
          type="text"
          name=""
          id=""
          value={newPlayer}
          onChange={(e) => setNewPlayer(e.target.value)}
        />
        <button className="submit-btn" type="submit">
          Add Player
        </button>
      </form>
      <ul className="member-list">
        {players.map((player) => (
          <TeamMember
            key={player.id}
            player={player}
            onRemovePlayer={handleRemovePlayer}
            onUpdatePlayer={handleUpdatePlayer}
          />
        ))}
      </ul>
    </>
  );
}

export default TeamList;
