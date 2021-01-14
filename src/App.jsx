import React, { useState, useEffect } from 'react';
import PlayerBoard from './components/PlayerBoard';
// import Gameboard from './gameLogic/Gameboard';
import Player from './gameLogic/Player';

function App() {
  const [humanPlayer, setHumanPlayer] = useState(new Player());
  const [computerPlayer, setComputerPlayer] = useState(new Player());

  const computerAttack = () => {
    const { x, y } = Player.chooseAttack(humanPlayer);
    setHumanPlayer(() => {
      const { player } = humanPlayer.recieveAttack(x, y);
      return player;
    });
  };

  const playerAttack = (x, y) => {
    console.log(x, y);
    setComputerPlayer(() => {
      const { player } = computerPlayer.recieveAttack(x, y);
      return player;
    });
  };

  useEffect(() => {
    computerAttack();
  }, [computerPlayer]);

  return (
    <div className="gamearea">
      <PlayerBoard
        player={humanPlayer}
        opponent={computerPlayer}
      />
      <PlayerBoard
        player={computerPlayer}
        opponent={humanPlayer}
        playerAttack={playerAttack}
      />
    </div>
  );
}

export default App;
