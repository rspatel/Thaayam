function Board(arrPlayer) {
    this.arrPlayer = arrPlayer;
    this.path = [
        [4, 2],
        [4, 1],
        [4, 0],
        [3, 0],
        [2, 0],
        [1, 0],
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [1, 4],
        [2, 4],
        [3, 4],
        [4, 4],
        [4, 3],
        [3, 3],
        [2, 3],
        [1, 3],
        [1, 2],
        [1, 1],
        [2, 1],
        [3, 1],
        [3, 2],
        [2, 2]
    ];
    this.dice = [
        dice1 = new Dice(),
        dice2 = dice1,
        dice3 = dice1,
        dice4 = dice1,
    ];
}

var board = new Board( ['Ravi', 'Shivam', 'Payal', 'Radhika'] );
