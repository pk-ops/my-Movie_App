import * as React from 'react';
import { useState } from 'react';

export function TicTacTos() {
  return (
    <div>
      <h1>Fun Game</h1>
      <Board/>
    </div>
  );
}
function Board(){
  const [board,setBoard]=useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const[isXTurn,setisXturn]=useState(true);
  const decideWinner=(index)=>{
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
  setBoard([null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,]);
  
}
  return(
    <div className='board'>
      {board.map((val,index)=>(
        <GameBox val={val} onPlayerClick={()=>handleCLick(index)} />
      ))}
      <h1>Winner is: {winner}</h1>

      <button className='reset' onClick={Reset}>Reset</button>
    </div>
  )
}
function GameBox({val, onPlayerClick}){
  

  const styles={
    color:val==="X"?"green":"red"
  }
  return(
    <div style={styles} onClick={onPlayerClick} className='game-box'>{val}</div>
  )
}
