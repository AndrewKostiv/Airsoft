import React, { useState } from "react";
import "./TeamRandomizer.css";

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
  const [numTeams, setNumTeams] = useState(2);
  const [numTeamsInput, setNumTeamsInput] = useState("2");
  const [teams, setTeams] = useState([]);

  function handleAddPlayer(e) {
    e.preventDefault();

    const playerObj = {
      key: players.length > 0 ? Math.max(...players.map((p) => p.key)) + 1 : 1,
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

  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function handleRandomize() {
    if (players.length === 0) return;

    const effectiveTeams = Math.min(numTeams, players.length);
    const shuffled = shuffleArray(players);
    const newTeams = Array.from({ length: effectiveTeams }, () => []);

    shuffled.forEach((player, index) => {
      newTeams[index % effectiveTeams].push(player);
    });

    setTeams(newTeams);
  }

  function handleTeamCountChange(value) {
    setNumTeamsInput(value);
    const parsed = parseInt(value);
    if (!isNaN(parsed) && parsed >= 1) {
      setNumTeams(Math.min(parsed, maxTeams));
    }
  }

  function handleTeamCountBlur() {
    const parsed = parseInt(numTeamsInput);
    if (isNaN(parsed) || parsed < 1) {
      setNumTeamsInput("1");
      setNumTeams(1);
    } else {
      const clamped = Math.min(parsed, maxTeams);
      setNumTeamsInput(clamped.toString());
      setNumTeams(clamped);
    }
  }

  const maxTeams = players.length > 0 ? players.length : 1;

  return (
    <div className="container">
      <div className="max-width">
        <h1 className="title">Team Randomizer</h1>

        <div className="card">
          <h2 className="section-title">Add Players</h2>
          <div className="input-group">
            <input
              type="text"
              value={newPlayer}
              onChange={(e) => setNewPlayer(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddPlayer(e);
                }
              }}
              placeholder="Enter player name..."
              className="text-input"
            />
            <button onClick={handleAddPlayer} className="btn btn-primary">
              Add Player
            </button>
          </div>

          <div className="players-section">
            <h3 className="subsection-title">Players ({players.length})</h3>
            {players.length === 0 ? (
              <p className="empty-state">No players added yet</p>
            ) : (
              <ul className="player-list">
                {players.map((item) => (
                  <li key={item.key} className="player-item">
                    <span className="player-name">{item.name}</span>
                    <button
                      onClick={() => handleRemovePlayer(item.key)}
                      className="btn-remove"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="teams-config">
            <h3 className="subsection-title">Number of Teams</h3>
            <div className="team-count-input">
              <input
                type="number"
                min="1"
                max={maxTeams}
                value={numTeamsInput}
                onChange={(e) => handleTeamCountChange(e.target.value)}
                onBlur={handleTeamCountBlur}
                className="number-input"
              />
              <span className="team-count-hint">(max: {maxTeams})</span>
            </div>

            <button
              onClick={handleRandomize}
              disabled={players.length === 0}
              className="btn btn-randomize"
            >
              🎲 Randomize Teams
            </button>
          </div>
        </div>

        {teams.length > 0 && (
          <div className="card">
            <h2 className="section-title">Randomized Teams</h2>
            <div className="teams-grid">
              {teams.map((team, index) => (
                <div key={index} className="team-card">
                  <h3 className="team-title">Team {index + 1}</h3>
                  <ul className="team-player-list">
                    {team.map((player) => (
                      <li key={player.key} className="team-player">
                        {player.name}
                      </li>
                    ))}
                  </ul>
                  <p className="team-count">
                    {team.length} {team.length === 1 ? "player" : "players"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamRandomizer;
