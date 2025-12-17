import { useState } from "react";
import TeamMember from "./TeamMember";
import "./TeamList.css";

function TeamList({ players, onAddPlayer, onRemovePlayer, onUpdatePlayer }) {
  const [newPlayer, setNewPlayer] = useState("");

  return (
    <>
      <h2>Team List </h2>
      <form onSubmit={(e) => onAddPlayer(e, newPlayer)}>
        <input
          type="text"
          name=""
          id=""
          value={newPlayer}
          onChange={(e) => setNewPlayer(e.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>
      <ul className="member-list">
        {players.map((player) => (
          <TeamMember
            key={player.id}
            player={player}
            onRemovePlayer={onRemovePlayer}
            onUpdatePlayer={onUpdatePlayer}
          />
        ))}
      </ul>
    </>
  );
}

export default TeamList;
