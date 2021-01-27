/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GameController from './gameLogic/GameController';
import PlayerBoard from './components/PlayerBoard';
import NextShipInfo from './components/NextShipInfo';
import Modal from './components/Modal';
import Footer from './components/Footer';

function App() {
  const [gameController, setGameController] = useState(new GameController());
  const [shipsToPlace, setShipsToPlace] = useState([5, 4, 3, 3, 2, 2]);
  const [orientation, setOrientation] = useState(true);

  // This is similar to componentDidMount
  // Use this to set game up
  useEffect(() => {
    // Have the computer player set up their board
    setGameController((oldGame) => {
      const { game } = oldGame.gameStart();
      return game;
    });
  }, []);

  const resetGame = (event) => {
    event.preventDefault();
    setGameController(() => {
      let game = new GameController();
      ({ game } = game.gameStart());
      return game;
    });
    setShipsToPlace([5, 4, 3, 3, 2, 2]);
  };

  // Places the ship of the human player
  const placeShip = (x, y) => {
    // get the cords pressed
    const xCord = parseInt(x, 10);
    const yCord = parseInt(y, 10);
    // the next ship in line to be placed
    const shipLength = shipsToPlace[0];
    setGameController(() => {
      // try any place the ship here
      const { error, game: newGame } = gameController.humanPlace(
        xCord, yCord, shipLength, orientation,
      );
      // If error, gameController is unaffected
      if (error) {
        return gameController;
      }
      // Get rid of the ship
      // Should I do this INSIDE of setGameController?
      // Who knows
      setShipsToPlace(() => {
        shipsToPlace.shift();
        return shipsToPlace;
      });
      // update gameController
      return newGame;
    });
  };

  // You shouldn't need a comment to know what this does
  const swapOrientation = () => {
    setOrientation(!orientation);
  };

  // Method used for player attacks
  const playerAttack = (x, y) => {
    // Can't attack the enemy, if you have ships to place!
    if (shipsToPlace.length !== 0) return;
    // or if you already won/lost
    if (gameController.winner) return;
    setGameController(() => {
      // error is only true if the attack was bad somehow
      const { error, game: newGame } = gameController.humanAttack(x, y);
      // gameController SHOULD be unaffected by errors
      if (error) return gameController;
      return newGame;
    });
  };

  return (
    <div className="page">
      <Header />
      <Modal winner={gameController.winner} resetGame={resetGame} />
      <NextShipInfo
        nextShip={shipsToPlace[0]}
        orientation={orientation}
        swapOrientation={swapOrientation}
      />
      <div className="game-area">
        <PlayerBoard
          player={gameController.humanPlayer}
          placeShip={placeShip}
        />
        <PlayerBoard
          player={gameController.computerPlayer}
          playerAttack={playerAttack}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
