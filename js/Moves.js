class Moves{
  constructor(canvas){
    this.canvas = canvas;

    this.height = this.canvas.offsetHeight;
    this.width = this.canvas.offsetWidth;
  }

  getPosition(e){
    const xFactor = e.layerX/(this.width);
    const yFactor = e.layerY/(this.height);

    const x = Math.ceil(xFactor * 3) - 1;
    const y = Math.ceil(yFactor * 3) - 1;

    return {x,y};
  }

  validMoves(board, move){
    if( board[move.y][move.x] !== '' ){
      return false;
    }
    return true;
  }

  #equals(a, b, c){
    return( a === b && a === c && b == c && a !== ''  )
  }

  gameFinished(board){
    for(let i=0; i<board.length; i++){    // Barre las filas
      for(let j=0; j<board[i].length; j++){   // Barre las Columnas
        if(board[i][j] === ''){
          return false
        }
      }
    }
    return true;
  }

  haveWinner(board){
    for(let i=0; i<board.length; i++){    // Barre las filas
      
      // Horizontal check
      if( this.#equals(board[i][0], board[i][1], board[i][2] ) ){
        return board[i][0];
      }

      // Vertical check
      if( this.#equals(board[0][i], board[1][i], board[2][i] ) ){
        return board[0][i];
      }

      // Diagonal 1 check
      if( this.#equals(board[0][0], board[1][1], board[2][2] ) ){
        return board[1][1];
      }

      // Diagonal 2 check
      if( this.#equals(board[0][2], board[1][1], board[2][0] ) ){
        return board[1][1];
      }

    }
  }

}

export default Moves;