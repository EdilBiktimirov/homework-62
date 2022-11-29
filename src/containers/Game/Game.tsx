import React from 'react';
import game from  "../../assets/game.png";


const Game = () => {
  return (
    <div className="mt-3 d-flex flex-column align-items-center">
      <a href="https://github.com/EdilBiktimirov/homework-54.git">GitHub link for Game App</a>
      <img className="mt-3" src={game} alt="#"/>
    </div>
  );
};

export default Game;