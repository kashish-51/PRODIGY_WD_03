// Importing necessary dependencies from React
import React, { useRef, useState } from 'react';
// Importing the CSS file for styling
import './TicTacToe.css';
// Importing images for the circle and cross icons
import circleicon from '../Assets/circleicon.png';
import crossicon from '../Assets/crossicon.png';

// Initializing an array to store the state of each box in the Tic Tac Toe grid
let data = ["", "", "", "", "", "", "", "", ""];

// Functional component definition for TicTacToe
const TicTacToe = () => {

  // Using state hooks to manage the count of moves and whether the game is locked
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  // Creating a reference for the title element
  let titleRef = useRef(null);

  // Creating references for each box in the grid
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  // Storing box references in an array
  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  // Function to handle the toggle action when a box is clicked
  const toggle = (e, num) => {
    // If the game is locked, return and do nothing
    if (lock) {
      return 0;
    }
    // If count is even, it's player X's turn, else player O's turn
    if (count % 2 === 0) {
      // Updating the box content with an X and updating the data array
      e.target.innerHTML = `<img src ='${crossicon}'>`;
      data[num] = "x";
      // Incrementing the move count
      setCount(++count);
    } else {
      // Updating the box content with an O and updating the data array
      e.target.innerHTML = `<img src ='${circleicon}'>`;
      data[num] = "o";
      // Incrementing the move count
      setCount(++count);
    }
    // Checking if there's a winner after each move
    checkWin();
  };

  // Function to reset the game
  const reset = () => {
    // Unlocking the game
    setLock(false);
    // Resetting the data array and updating the title
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = 'Tic Tac Toe Game';
    // Clearing the content of each box
    box_array.map((e) => {
      e.current.innerHTML = "";
    });
  };

  // Function to check if there's a winner
  const checkWin = () => {
    // Checking all possible winning combinations
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      // If there's a winner, call the won function with the winning player
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  // Function to handle the game won scenario
  const won = (winner) => {
    // Locking the game to prevent further moves
    setLock(true);
    // Updating the title to declare the winner
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations 🤩: <img src=${crossicon} you won>`;
    } else {
      titleRef.current.innerHTML = `Congratulations 🤩: <img src=${circleicon} you won>`;
    }
  };

  // JSX rendering of the Tic Tac Toe component
  return (
    <div className='container'>
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe Game
      </h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e) => { toggle(e, 0) }}></div>
          <div className="boxes" ref={box2} onClick={(e) => { toggle(e, 1) }}></div>
          <div className="boxes" ref={box3} onClick={(e) => { toggle(e, 2) }}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4} onClick={(e) => { toggle(e, 3) }}></div>
          <div className="boxes" ref={box5} onClick={(e) => { toggle(e, 4) }}></div>
          <div className="boxes" ref={box6} onClick={(e) => { toggle(e, 5) }}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7} onClick={(e) => { toggle(e, 6) }}></div>
          <div className="boxes" ref={box8} onClick={(e) => { toggle(e, 7) }}></div>
          <div className="boxes" ref={box9} onClick={(e) => { toggle(e, 8) }}></div>
        </div>
      </div>
      <button className="reset" onClick={() => { reset() }} >
        Reset
      </button>
    </div>
  );
}

// Exporting the TicTacToe component as the default export
export default TicTacToe;
