import React from 'react';
import GridItem from './GridItem';

const BoardRow = (props) => {
  const { rowInfo, handleAttack, rowIndex } = props;

  return (
    <div className="board__row">
      {rowInfo.map((gridItem, colIndex) => (
        <GridItem
          gridInfo={gridItem}
          handleAttack={handleAttack}
          rowIndex={rowIndex}
          colIndex={colIndex}
        />
      ))}
    </div>
  );
};

export default BoardRow;
