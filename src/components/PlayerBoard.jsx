import React from 'react';
// import Player from '../gameLogic/Player';
import BoardRow from './BoardRow';

const PlayerBoard = (props) => {
  const { opponent, player, attack } = props;
  const { grid } = player.playerBoard;

  const handleAttack = (event) => {
    const { x, y } = event.target.dataset;
    attack(x, y, opponent);
  };

  return (
    <div>
      <div className="board__header">Player</div>
      <div className="board">
        {grid.map((boardRow, rowIndex) => (
          <BoardRow
            rowInfo={boardRow}
            handleAttack={handleAttack}
            rowIndex={rowIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerBoard;
