class battleship {
    constructor(player = 0) {
        this.player = player;
        this.board = new Array(10).fill(0).map(() => new Array(10).fill(0));
    }
    show_board() {
        let board = " ";
        for (let i = 0; i < this.board.length; i++) {
           for (let j = 0; j < this.board[i].length; j++) {
               board += this.board[i][j] + " ";
           }
              board += "<br>";
        }
        return board;
    }
    attack(x, y) {
        x++;
        y++;
        this.board[y][x] = "X";
    }
}