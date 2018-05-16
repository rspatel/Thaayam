function Dice() {
    this.roll = function() {
        var num = Math.random();
        console.log( num );

        if ( num >= 0.5 )
        {
            return 1;
        }
        return 0;
    }
}
