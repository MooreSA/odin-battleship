/* eslint-disable no-unused-vars */
import React from 'react';
// import Player from '../gameLogic/Player';
import BoardRow from './BoardRow';

const PlayerBoard = (props) => {
  // console.log(props);
  const {
    player,
    playerAttack,
    placeShip,
  } = props;

  let playerFlag = false;
  if (placeShip) playerFlag = true;

  const handleEvent = (event) => {
    if (placeShip) {
      const { x, y } = event.target.dataset;
      placeShip(x, y);
    } else if (playerAttack) {
      const { x, y } = event.target.dataset;
      playerAttack(x, y);
    }
  };

  if (placeShip) playerFlag = true;

  return (
    <div className="player-area">
      <div className="player-area__header">Player</div>
      <div className="board">
        {player.playerBoard.grid.map((boardRow, rowIndex) => (
          <BoardRow
            handleEvent={handleEvent}
            playerFlag={playerFlag}
            rowInfo={boardRow}
            rowIndex={rowIndex}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerBoard;
