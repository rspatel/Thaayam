function Player( name, color ) {
    this.name = name;
    this.color = color;
    this.direction = 'South';
    this.moves = [];
    this.home;

    this.pieces = [
        piece1 = new Piece( color ),
        piece2 = new Piece( color ),
        piece3 = new Piece( color ),
        piece4 = new Piece( color )
    ];

    this.rollDice = function( diceArray ) {
        var total = 0;

        for ( i = 0; i < diceArray.length; i++ ) {
            total += diceArray[i].roll();
        }

        var action = getRealValue( total );
        this.moves.push(action);
        return action;
    }

    function getRealValue( value ) {
        switch ( value ) {
            case 0 :
                return 8;
                break;
            case 4 :
                return 4;
                break;
            default :
                return value;
        }
    }

}
