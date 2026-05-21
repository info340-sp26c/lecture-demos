import React, { useState } from 'react';
import NavBar from './NavBar';
import { FECGames } from './FECGames.jsx';
import { CreateOrEditGame } from './CreateOrEditGame.jsx'

import FECGameList from '../data/FECGameList.json';

console.log(FECGameList)

function App() {

  const [gameArray, setGameArray] = useState(FECGameList)

  const addGame = (gameobj) => {

  // const newGame = {
  //       "ImagePath": "img/meerkats.jpg",
  //       "Manufacturer": "TIMS NEW GAME",
  //       "GameName": "NEW ADDED GAME",
  //       "ManufacturerSite": "https://www.espn.com"
  //     }

    // const updateGameArray = [...gameArray, newGame];

    const updateGameArray = [...gameArray, gameobj];
    setGameArray(updateGameArray); //update state and re-render
  }
  

  return (
    <div className='container'>
      <div className="App">
          <NavBar />
          <FECGames FECGameList={gameArray} />
          <CreateOrEditGame addNewGameCallback={addGame}/>
      </div>
    </div>
  );
}

export default App;

