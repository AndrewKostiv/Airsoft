import { useEffect, useState } from "react";

const defaultNewGameModePiece = {
  name: "",
  active: false,
  id: -1,
  forts: false,
};

function GameList({ gameModes, setGameModes }) {
  const [newGameModePiece, setNewGameModePiece] = useState(
    defaultNewGameModePiece
  );

  function handleAddGameMode(e, newGameModePiece) {
    e.preventDefault();
    if (!newGameModePiece.name) return;
    const newGameMode = {
      name: newGameModePiece.name,
      active: false,
      id: Date.now(),
      forts: newGameModePiece.forts,
    };
    setGameModes([...gameModes, newGameMode]);
    setNewGameModePiece({
      ...defaultNewGameModePiece,
      forts: newGameModePiece.forts,
    });
  }

  function handleRemoveGameMode(e, id) {
    e.preventDefault();
    setGameModes(gameModes.filter((game) => game.id !== id));
  }

  function handleUpdateGameMode(e, id, newGameModeData) {
    setGameModes(
      gameModes.map((game) =>
        game.id === id ? { ...game, ...newGameModeData } : game
      )
    );
  }

  //   useEffect(() => {
  //     console.log(gameModes);
  //   }, [gameModes]);

  return (
    <>
      <h2>GameList</h2>
      <form onSubmit={(e) => handleAddGameMode(e, newGameModePiece)}>
        <input
          type="text"
          value={newGameModePiece.name}
          onChange={(e) =>
            setNewGameModePiece({ ...newGameModePiece, name: e.target.value })
          }
        />
        <select
          value={newGameModePiece.forts}
          onChange={(e) =>
            setNewGameModePiece({
              ...newGameModePiece,
              forts: e.target.value,
            })
          }
        >
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
        <button type="submit">Add Game</button>
      </form>

      <ul>
        {gameModes.map((gameMode) => (
          <li key={gameMode.id} value={gameMode.name}>
            {" "}
            <span>Name: </span>
            <input
              type="text"
              value={gameMode.name}
              onChange={(e) =>
                handleUpdateGameMode(e, gameMode.id, { name: e.target.value })
              }
            />{" "}
            <span>Include Forts: </span>{" "}
            <select
              value={gameMode.forts}
              onChange={(e) =>
                handleUpdateGameMode(e, gameMode.id, { forts: e.target.value })
              }
            >
              <option value="false">False</option>
              <option value="true">True</option>
            </select>
            <button
              type="button"
              onClick={(e) => handleRemoveGameMode(e, gameMode.id)}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GameList;
