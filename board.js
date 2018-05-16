function Board(arrPlayer) {
    this.arrPlayer = arrPlayer;
    this.path = [
        [4, 2],
        [4, 1],
        [4, 0],
        [3, 0],
        [2, 0]
    ];
    this.dice = [
        dice1 = new Dice(),
        dice2 = dice1,
        dice3 = dice1,
        dice4 = dice1,
    ];
}

var board = new Board( ['Ravi', 'Shivam', 'Payal', 'Radhika'] );
