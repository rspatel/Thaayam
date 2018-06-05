function Piece( color ) {
    this.color = color;
    this.x;
    this.y;
    this.Tile;

    this.draw = function() {
        colorCircle( this.x,this.y, 10, this.color );
    }

    function colorCircle(centerX,centerY,radius,color) {
            canvasContext.fillStyle = color;
            canvasContext.beginPath();
            canvasContext.arc(centerX,centerY,radius,0,Math.PI*2, true);
            canvasContext.fill();
    }
}
