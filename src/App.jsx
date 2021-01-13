import React, { useState } from 'react';
import PlayerBoard from './components/PlayerBoard';
import GameController from './gameLogic/GameController';

function App() {
  const [controller, setController] = useState(new GameController(true));

  const attack = (x, y, target) => {
    const test = new GameController(true);
    test.takeTurn(x, y, target);
    console.log(test);
    setController(controller);
    // setController((currentController) => {
    //   currentController.takeTurn(x, y, target);
    // });
  };

  return (
    <div className="gamearea">
      <PlayerBoard
        player={controller.humanPlayer}
        opponent={controller.computerPlayer}
        attack={attack}
      />
      <PlayerBoard
        player={controller.computerPlayer}
        opponent={controller.humanPlayer}
        attack={attack}
      />
    </div>
  );
}

export default App;
