class Board{
  margin = 50;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.height =  canvas.offsetHeight;
    this.width = this.canvas.offsetWidth;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.#drowBoardLines();
  }

  #drowBoardLines(){
    this.ctx.beginPath();
    this.ctx.lineWidth=5;
    //Lineas Horizontales
    this.ctx.closePath();
    this.ctx.lineTo(0 , this.height / 3);
    this.ctx.lineTo(this.width, this.height / 3);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
  
    this.ctx.lineTo(0, (this.height/3)*2);
    this.ctx.lineTo(this.width, (this.height/3)*2);
    this.ctx.stroke();
    this.ctx.closePath();

    // Lineas Verticales
    this.ctx.beginPath();
    this.ctx.lineTo(this.width/3 , 0)
    this.ctx.lineTo(this.width/3, this.height)
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.lineTo((this.width/3)*2, 0)
    this.ctx.lineTo((this.width/3)*2, this.height)
    this.ctx.stroke();
    this.ctx.closePath();
  }

  #drowCross(x,y){
    const xOffset = (this.width/3)*x;
    const yOffset = (this.height/3)*y;

    this.ctx.beginPath();
    this.ctx.lineTo(this.margin + xOffset, this.margin + yOffset);
    this.ctx.lineTo((this.height/3) - this.margin + xOffset, (this.height/3) - this.margin + yOffset);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.lineTo( (this.width/3) - this.margin + xOffset , this.margin + yOffset );
    this.ctx.lineTo(  this.margin + xOffset , (this.height/3) - this.margin + yOffset );
    this.ctx.stroke();
    this.ctx.closePath();
  }

  #drowCircle(x,y){
    const xOffset = (this.height/3) * x;
    const yOffset = (this.width/3) * y;
    const radious = (this.height/6) - (this.margin/2)

    this.ctx.beginPath();
    this.ctx.arc(
      (radious/2) + (this.margin) + xOffset,
      (radious/2) + this.margin + yOffset,
      radious, 0 ,  2 * Math.PI
    );

    this.ctx.stroke();
    this.ctx.closePath();
  }

  drowMoves(boardMatrix){
    for(let i=0; i<boardMatrix.length; i++){    // Barre las filas
      for(let j=0; j<boardMatrix[i].length; j++){   // Barre las Columnas
        if(boardMatrix[i][j] === 0){
          this.#drowCircle(j, i);
        }else if(boardMatrix[i][j] === 1){
          this.#drowCross(j, i);
        }
      }
    }
  }

  clear(){
    this.ctx.clearRect(0, 0, this.width, this.height);
  
  }

}

export default Board;