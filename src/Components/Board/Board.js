import React from 'react'
import Box from '../Box/Box';
import './Board.css';

const Board = ({board, onClick}) => {
  return (
    <div className='board'>
       
        {board.map((value, idx) => {
            return <Box value={value} onClick={() => value == null && onClick(idx)}/> // The onClick prop is a function that will be called when a box is clicked. It is conditioned on the value being null to prevent changing existing values i.e. X to O or O to X.
        })}
       {/* The onClick prop is used to handle clicks on each box in the board 
       The component iterates over each element in the board array using map. */}
    </div>
  )
}

export default Board
