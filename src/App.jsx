/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import GameController from './gameLogic/GameController';
import PlayerBoard from './components/PlayerBoard';

function App() {
  const [gameController, setGameController] = useState(new GameController());
  const [shipsToPlace, setShipsToPlace] = useState([5, 4, 3, 3, 2, 2]);

  const placeShip = (x, y) => {
    const xCord = parseInt(x, 10);
    const yCord = parseInt(y, 10);
    const shipLength = shipsToPlace[0];
    setGameController(() => {
      const { error, game: newGame } = gameController.humanPlace(xCord, yCord, shipLength, true);
      if (error) {
        return gameController;
      }
      setShipsToPlace(() => {
        shipsToPlace.shift();
        return shipsToPlace;
      });
      return newGame;
    });
  };

  const playerAttack = (x, y) => {
    if (shipsToPlace.length !== 0) return;
    setGameController(() => {
      const { error, game: newGame } = gameController.humanAttack(x, y);
      if (error) return gameController;
      return newGame;
    });
  };

  // This is similar to componentDidMount
  // Use this to set game up
  useEffect(() => {
    // Have the computer player set up their board
    setGameController((oldGame) => {
      const { game } = oldGame.gameStart();
      return game;
    });
  }, []);

  return (
    <div className="page">
      {/* TODO */}
      {/* <Header /> */}
      <PlayerBoard
        player={gameController.humanPlayer}
        placeShip={placeShip}
      />
      <PlayerBoard
        player={gameController.computerPlayer}
        playerAttack={playerAttack}
      />
    </div>
  );
}

export default App;
