function Player( name, age, color ) {
    this.name = name;
    this.age = age;
    this.color = color;

    this.rollDice = function( diceArray ) {
        var total = 0;

        for ( i = 0; i < diceArray.length; i++ ) {
            total += diceArray[i].roll();
        }

        return getRealValue( total );
    }


    function getRealValue( value ) {
        switch ( value ) {
            case 0 :
                return 4;
                break;
            case 4 :
                return 8;
                break;
            default :
                return value;
        }
    }

}

var Ravi = new Player( 'Ravi', 21, function(){ return 'green' } );
