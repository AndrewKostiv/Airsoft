import React, { useState } from "react";

const TeamRandomizer = () => {
  const [players, setPlayers] = useState([
    { key: 1, name: "Player1" },
    { key: 2, name: "Player2" },
    { key: 3, name: "Player3" },
    { key: 4, name: "Player4" },
    { key: 5, name: "Player5" },
    { key: 6, name: "Player6" },
  ]);

  const [newPlayer, setNewPlayer] = useState("");

  function handleAddPlayer(e) {
    e.preventDefault();

    const playerObj = {
      key: players.length + 1,
      name: newPlayer,
    };

    if (playerObj.name !== "") {
      setPlayers([...players, playerObj]);
    }

    setNewPlayer("");
  }

  function handleRemovePlayer(key) {
    setPlayers(players.filter((player) => player.key !== key));
  }

  return (
    <>
      <div>TeamRandomizer</div>

      <form onSubmit={handleAddPlayer}>
        <input
          type="text"
          value={newPlayer}
          onChange={(e) => setNewPlayer(e.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>

      <ul>
        {players.map((item) => (
          <li key={item.key}>
            {item.name}{" "}
            <button onClick={() => handleRemovePlayer(item.key)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeamRandomizer;
