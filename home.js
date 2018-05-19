function Home( x, y, w ) {
    const LINE = 2;
    this.x = x;
    this.y = y;
    this.w = w;
    this.color = "white";

    this.draw = function() {
        colorRect( this.x, this.y, this.w, this.w, 'black' );
        colorRect( this.x + LINE, this.y + LINE, this.w - LINE*2, this.w - LINE*2, this.color );
    }

    this.slots = buildSlots();

    function buildSlots() {
        var arr = create2DArray( 4, 4 );
        for ( i = 0; i < 4; i++ ) {
            for ( j = 0; j < 4; j++ ) {
                arr[i][j] = [ ((x + (j * 12)) + 12), ((y + (i * 12)) + 12) ];
            }
        }
        return arr;
    }

    function create2DArray(rows, cols) {
        var arr = new Array( rows );
        for ( i = 0; i < arr.length; i++ ) {
            arr[i] = new Array( cols );
        }
        return arr;
    }
}
