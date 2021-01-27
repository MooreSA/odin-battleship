import React from 'react';

const NextShipInfo = (props) => {
  const { nextShip, orientation, swapOrientation } = props;

  let orientationStr;

  // This seems wrong
  // It's what I know, though. :)
  if (nextShip === undefined) return <div />;
  if (orientation) {
    orientationStr = 'Orientation: Verticle';
  } else {
    orientationStr = 'Orientation: Horizontal';
  }

  return (
    <div className="next-ship">
      <div className="next-ship__header">
        Place Your Ship!
      </div>
      <div className="next-ship__length">
        {`Ship Length: ${nextShip}`}
      </div>
      <div className="next-ship__orientation">
        {orientationStr}
      </div>
      <button className="next-ship__swap-btn" type="button" onClick={swapOrientation}>
        Swap Orientation
      </button>
    </div>
  );
};

export default NextShipInfo;
