/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const Cell = (props) => {
  const {
    handleEvent,
    gridInfo,
    colIndex,
    rowIndex,
  } = props;

  let className = 'board__cell';

  if (gridInfo.ship && gridInfo.attacked) className += ' board__cell--hit';
  else {
    if (gridInfo.ship) className += (' board__cell--ship');
    if (gridInfo.attacked) className += (' board__cell--miss');
  }

  return (
    <div
      className={className}
      aria-label="Board Cell"
      data-x={colIndex}
      data-y={rowIndex}
      onClick={handleEvent}
      role="button"
      tabIndex="0"
      key={Math.random()}
    />
  );
};

export default Cell;
