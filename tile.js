function Tile( x, y, w ) {
    const LINE = 5;
    this.x = x;
    this.y = y;
    this.w = w;

    this.show = function() {
        colorRect( this.x, this.y, this.w, this.w, 'black' );
        colorRect( this.x + LINE, this.y + LINE, this.w - LINE*2, this.w - LINE*2, 'white' );
    }
}
