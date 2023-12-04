import React from 'react'
import './ScoreBoard.css'
const ScoreBoard = ({scores, xPlaying}) => {
    const {xScore, oScore} = scores; //Destructures the scores prop to get xScore and oScore.
    return (
        <div className='scoreBoard'>
            <span className={`score x-score ${!xPlaying && "inactive"}`}> X - {xScore} </span> 
            {/* if xPlaying is false (indicating it's "O"'s turn), it adds the "inactive" class to the "X" */}
            <span className={`score o-score ${xPlaying && "inactive"}`}> O - {oScore} </span>
            {/* if xPlaying is true (indicating it's "X"'s turn), it adds the "inactive" class to the "O" */}
        </div>
    )
}

export default ScoreBoard
