import "./TeamList.css";
function TeamMember({ player, onRemovePlayer, onUpdatePlayer }) {
  return (
    <li key={player.id} value={player.name}>
      Name:{" "}
      <input
        className="input-box"
        type="text"
        value={player.name}
        onChange={(e) => onUpdatePlayer(e, { name: e.target.value }, player.id)}
      />{" "}
      Kills:{" "}
      <input
        className="small-input input-box"
        type="number"
        value={player.kills}
        onChange={(e) =>
          onUpdatePlayer(e, { kills: e.target.value }, player.id)
        }
      />{" "}
      Deaths:{" "}
      <input
        className="small-input input-box"
        type="number"
        value={player.deaths}
        onChange={(e) =>
          onUpdatePlayer(e, { deaths: e.target.value }, player.id)
        }
      />{" "}
      Melee Kills:{" "}
      <input
        className="small-input input-box"
        type="number"
        value={player.melee}
        onChange={(e) =>
          onUpdatePlayer(e, { melee: e.target.value }, player.id)
        }
      />{" "}
      Games Played:{" "}
      <input
        className="small-input input-box"
        type="number"
        value={player.gamesPlayed}
        onChange={(e) =>
          onUpdatePlayer(e, { gamesPlayed: e.target.value }, player.id)
        }
      />{" "}
      Games Won:{" "}
      <input
        className="small-input input-box"
        type="number"
        value={player.gamesWon}
        onChange={(e) =>
          onUpdatePlayer(e, { gamesWon: e.target.value }, player.id)
        }
      />{" "}
      Games Flaked:{" "}
      <input
        className="small-input input-box"
        type="number"
        value={player.gamesFlaked}
        onChange={(e) =>
          onUpdatePlayer(e, { gamesFlaked: e.target.value }, player.id)
        }
      />
      <button
        className="remove-btn"
        onClick={(e) => onRemovePlayer(e, player.id)}
      >
        &times;
      </button>
    </li>
  );
}

export default TeamMember;
