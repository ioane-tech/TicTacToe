import React, { useState } from 'react';
import './App.css';

function App() {
  const [board,setBoard]=useState(Array(9).fill(''))
  const [XPlayer,setXPlayer]=useState(true)
  const [winner,setWinner]=useState(false)

 const handlerSet=(index)=>{
    if(winner===false){
      const newBoard=[...board]
      if(newBoard[index]!=""){
        return
      }
      newBoard[index]=XPlayer? "X" : "O"
      setBoard(newBoard)

      if(newBoard[0]=="X" && newBoard[1]=="X" && newBoard[2]=="X" || newBoard[3]=="X" && newBoard[4]=="X" && newBoard[5]=="X"
        || newBoard[6]=="X" && newBoard[7]=="X" && newBoard[8]=="X" || newBoard[0]=="X" && newBoard[3]=="X" && newBoard[6]=="X"
        || newBoard[1]=="X" && newBoard[4]=="X" && newBoard[7]=="X" || newBoard[2]=="X" && newBoard[5]=="X" && newBoard[8]=="X"
        || newBoard[0]=="X" && newBoard[4]=="X" && newBoard[8]=="X" || newBoard[2]=="X" && newBoard[4]=="X" && newBoard[6]=="X"
      ){
        setWinner(true)
        return
       }
     
      else if(newBoard[0]=="O" && newBoard[1]=="O" && newBoard[2]=="O" || newBoard[3]=="O" && newBoard[4]=="O" && newBoard[5]=="O"
      || newBoard[6]=="O" && newBoard[7]=="O" && newBoard[8]=="O" || newBoard[0]=="O" && newBoard[3]=="O" && newBoard[6]=="O"
      || newBoard[1]=="O" && newBoard[4]=="O" && newBoard[7]=="O" || newBoard[2]=="O" && newBoard[5]=="O" && newBoard[8]=="O"
      || newBoard[0]=="O" && newBoard[4]=="O" && newBoard[8]=="O" || newBoard[2]=="O" && newBoard[4]=="O" && newBoard[6]=="O"
      ) {
          setWinner(true)
          return
        }
       


      setXPlayer(!XPlayer) 
  }
 }

 const restartHandler=()=>{
    setBoard(Array(9).fill(''))
    setXPlayer(true)
    setWinner(false)
 }
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>

    {/**************render board**************/}
      <div className='board_div'>
        {board.map((value,index)=>(
          <div key={index}>
            <button className='board_each_button' id='index' onClick={()=>handlerSet(index)}>{value}</button>
          </div>
        ))}
      </div>
      {
        winner==false?
        (
          <h2 className='status'>{XPlayer? "player: X" : "player: O" }</h2>
        )
        :
        (
          <>
            <div className='winner_background_div'></div>
            <h2 className='winner_status'>{XPlayer? "X is Winner" : "O is Winner" }</h2>
            <button className='winner_restart_button' onClick={restartHandler}>Restart</button>
          </>
        )
      }
      <div className='restart_button_div'><button className='restart_button' onClick={restartHandler}>Restart</button></div>
    </div>
  );
}

export default App;
