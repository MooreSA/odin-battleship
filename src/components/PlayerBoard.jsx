import React from 'react';
// import Player from '../gameLogic/Player';
import BoardRow from './BoardRow';

const PlayerBoard = (props) => {
  // console.log(props);
  const { player, playerAttack } = props;

  const handleAttack = (event) => {
    // const x = event.target.dataset;
    const { x, y } = event.target.dataset;
    playerAttack(x, y);
  };

  return (
    <div>
      <div className="board__header">Player</div>
      <div className="board">
        {player.playerBoard.grid.map((boardRow, rowIndex) => (
          <BoardRow
            handleAttack={handleAttack}
            rowInfo={boardRow}
            rowIndex={rowIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerBoard;
