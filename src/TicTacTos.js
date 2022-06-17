import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';

import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export function TicTacTos() {
  return (
    <div className='fun-game'>
      <h1>Fun Game</h1>
      <Board/>
    </div>
  );
}

function Board(){
  const InitialBoard=([ null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,]);
  const [board,setBoard]=useState(InitialBoard);
  const[isXTurn,setisXturn]=useState(true);
  const decideWinner=()=>{
    const lines=[
      [0,1,2],
      [3,4,5,],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i=0;i<lines.length;i++){
      const[a,b,c]=lines[i];
      if(board[a]!=null && board[a]===board[b] && board[b]===board[c])
      {
        return board[a];
      }
    }
    return null;
  };
  const winner=decideWinner(board);
  const handleCLick=(index)=>{
    if(!winner && !board[index]){
    const boardCopy=[...board];
    boardCopy[index]=isXTurn?'X':'O';
    setBoard(boardCopy);
    //Changing Turn
    setisXturn(!isXTurn);
  }
}
function Reset(){
  setBoard(InitialBoard);
    setisXturn(true)
  
}
const { width, height } = useWindowSize()
  return(
    <div >
    <div className='board'>
     {winner? <Confetti width={width} height={height}/>:null}
      {board.map((val,index)=>(
        <GameBox val={val}  onPlayerClick={()=>handleCLick(index)} />
      ))}
      {winner?<h1>Winner is:{winner}</h1>:null}
      </div>
      
      <Button className="reset" onClick={Reset} variant="outlined">Restart</Button>
     
    </div>
    
  )
}
function GameBox({val, onPlayerClick}){
  

  const styles={
    color:val==="X"?"green":"red"
  }
  return(
    <div style={styles}  onClick={onPlayerClick} className='game-box'>{val}</div>
  )
}
