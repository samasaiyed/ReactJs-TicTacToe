import './App.css';
import Board from './Components/Board/Board';
import React, {useState} from 'react';
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';
import ResetButton from './Components/ResetButton/ResetButton';

function App() {

  const WIN_CONDITION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true); //xPlaying state is used to keep track of which player's turn it is in game. The initial state is set to true, indicating that "X" will be the first player to make a move.
  const [scores, setScores] = useState({xScore: 0, oScore: 0});
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (BoxIdx) => {
    const updatedBoard = board.map((value, idx) => { //idx = current index
      if(idx === BoxIdx){
        return xPlaying === true ? "X" : "O";
      }
      else{
        return value;
      }
    })

    const winner = checkWinner(updatedBoard);
    if(winner)
    {
      if(winner === 'O'){
        let {oScore} = scores;
        oScore += 1
        setScores({...scores, oScore})
      }
      else{
        let {xScore} = scores;
        xScore += 1
        setScores({...scores, xScore})
      }
    }

    setBoard(updatedBoard);

    setXPlaying(!xPlaying); // switch to other player i.e. X to O 
    //the player's turn with setXPlaying(!xPlaying) after a move is made. 
    //This way, the state alternates between true and false, switching between "X" and "O" turns.
  }

  const checkWinner = (board) => {
    for(let i = 0 ; i < WIN_CONDITION.length ; i++)
    {
      const [x, y, z] = WIN_CONDITION[i];

      //check condition for winner 
      if(board[x] && board[x] === board[y] && board[y] === board[z]) 
      {
        setGameOver(true); // whenever someone wins setGameOver = true
        return board[x];
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setScores({xScore: 0, oScore: 0}); // reset score to 0 on scoreBoard
  }

  return (
    <div className="App">
      <h1> TIC -TAC -TOE GAME  </h1>
      <ScoreBoard scores={scores} xPlaying={xPlaying}/>
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick}/>
      <ResetButton resetBoard={resetBoard}/>
    </div>
  );
}

export default App;
