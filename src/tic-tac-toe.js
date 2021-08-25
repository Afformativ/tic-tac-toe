class TicTacToe {
    constructor() {
        this.arr = [[null, null, null],[null, null, null],[null, null, null]];
        this.x = true;
        this.previous = '';
    }

    getCurrentPlayerSymbol() { 
        return this.x ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.arr[columnIndex][rowIndex] === null){
        this.arr[columnIndex][rowIndex] = this.getCurrentPlayerSymbol();
        this.x = !this.x;
        }
    }

    isFinished() {
        if (this.isDraw()) return true;
        return this.getWinner() ? true : false;
    }

    getWinner() {
        for (let i = 0; i < this.arr.length; i++)
        {
            if (this.arr[i][0] === this.arr[i][1]  && this.arr[i][1] === this.arr[i][2]) return this.arr[i][0];
            if (this.arr[0][i] === this.arr[1][i] && this.arr[1][i] === this.arr[2][i]) return this.arr[0][i]; 
        }
        if (this.arr[0][0] === this.arr[1][1] && this.arr[1][1] === this.arr[2][2]) return this.arr[0][0];
        if (this.arr[0][2] === this.arr[1][1] &&  this.arr[1][1] === this.arr[2][0]) return this.arr[0][2];
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < this.arr.length; i++)
        for (let j = 0; j < this.arr[i].length; j++)
        if (this.arr[i][j] === null) return false;
        return true;
    }

    isDraw() {
        if (!this.noMoreTurns()) return false; 
        if (this.getWinner() === 'x' || this.getWinner() === 'o') return false;
        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.arr[colIndex][rowIndex];
    }
}

module.exports = TicTacToe;
