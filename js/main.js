import Board from './Board.js';
import Moves from './Moves.js';

const players = ['0', 'X'];

let canvas;
let board;
let moves;
let matrix; 
let actualPlayer;

const initButton = document.getElementById('js-initGame');
const messageBox = document.getElementById('js-messages').getElementsByTagName('p')[0];

initButton.addEventListener('click', init);

function init() {
  initButton.removeEventListener('click', init)
  cleanBoard();
  
  canvas = document.getElementById('canvas');
  board = new Board(canvas);
  moves = new Moves(canvas);
  
  canvas.addEventListener('click', gameCycle);
  actualPlayer = Math.round(Math.random())
  messageBox.innerText = 'Es turno de ' + players[actualPlayer];  
}

function cleanBoard(){
  matrix = [
    ['','',''],
    ['','',''],
    ['','','']
  ];
}


function gameCycle(e){
  const thisMove = moves.getPosition(e);
  
  if( moves.validMoves(matrix, thisMove)){
    matrix[thisMove.y][thisMove.x] = actualPlayer;
    board.drowMoves(matrix);
    actualPlayer = (actualPlayer+1)%2;
  }

  messageBox.innerText = 'Es turno de ' + players[actualPlayer];

  if( moves.gameFinished(matrix) || !isNaN(moves.haveWinner(matrix)) ){
    canvas.removeEventListener('click', gameCycle);
    messageBox.innerText = 'El ganador es: ' + players[moves.haveWinner(matrix)];
    initButton.addEventListener('click', init);
  }
}






