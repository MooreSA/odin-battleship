/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const GridItem = (props) => {
  const {
    gridInfo, colIndex, rowIndex, handleAttack,
  } = props;

  if (gridInfo.ship) {
    return (
      <div
        className="board__cell board__cell--ship"
        aria-label="Board Cell"
        data-x={colIndex}
        data-y={rowIndex}
        onClick={handleAttack}
        role="button"
        tabIndex="0"
      />
    );
  }
  if (gridInfo.attacked) {
    return (
      <div
        className="board__cell board__cell--attacked"
        aria-label="Board Cell"
        data-x={colIndex}
        data-y={rowIndex}
        onClick={handleAttack}
        role="button"
        tabIndex="0"
      />
    );
  }
  return (
    <div
      className="board__cell"
      aria-label="Board Cell"
      data-x={colIndex}
      data-y={rowIndex}
      onClick={handleAttack}
      onKeyPress={handleAttack}
      role="button"
      tabIndex="0"
    />
  );
};

export default GridItem;
