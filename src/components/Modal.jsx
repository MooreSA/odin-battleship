import React from 'react';

const Modal = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { winner, resetGame } = props;
  if (!winner) return null;
  return (
    <div className="win-modal">
      <div className="win-modal__content">
        <div className="win-modal__winner">
          {`Winner: ${winner}`}
        </div>
        <button type="button" className="win-modal__resetbtn" onClick={resetGame}>Play Again</button>
      </div>
    </div>
  );
};

export default Modal;
