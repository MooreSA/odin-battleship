import React from 'react';
import Cell from './Cell';

const BoardRow = (props) => {
  const {
    handleEvent,
    rowInfo,
    rowIndex,
    playerFlag,
  } = props;

  return (
    <div className="board__row">
      {rowInfo.map((gridItem, colIndex) => (
        <Cell
          playerFlag={playerFlag}
          handleEvent={handleEvent}
          gridInfo={gridItem}
          rowIndex={rowIndex}
          colIndex={colIndex}
          key={Math.random()}
        />
      ))}
    </div>
  );
};

export default BoardRow;
