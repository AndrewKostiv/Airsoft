import { useEffect } from "react";

function Game({ gameModes, setGameModes }) {
  function handleChooseGame() {
    const randIndex = Math.floor(Math.random() * gameModes.length);
    const randID = gameModes[randIndex].id;
    console.log(randID);

    setGameModes(
      gameModes.map((game) =>
        game.id === randID
          ? { ...game, active: true }
          : { ...game, active: false }
      )
    );
  }
  useEffect(() => {
    console.log(gameModes);
  }, [gameModes]);

  return (
    <>
      <h2>Game Randomizer</h2>
      <button onClick={handleChooseGame}> Choose Game</button>
      <ul>
        {gameModes.map((game) =>
          game.active === true ? <li key={game.id}>{game.name}</li> : null
        )}
      </ul>
    </>
  );
}

export default Game;
