function printArrayiWithGivenDelimiter(arr) {
    let delimeter = arr.pop();

    console.log(arr.join(delimeter));
}

function printEveryNthElementFromAnArray(arr) {
    let step = +arr.pop();

    arr = arr.filter((v, i) => {
        return i % step === 0;

    });

    console.log(arr.join('\n'))
}

function addAndRemoveElements(arr) {
    let temp = 1;
    let rslt = [];

    for (let str of arr) {
        if (str === 'add') {
            rslt.push(temp++);

        } else if (str === 'remove') {
            rslt.pop(0);
            temp++;
        }
    }

    console.log(rslt.length > 0 ? rslt.join('\n') : ('Empty'));
}

function rotateArray(arr) {
    let step = +arr.pop();
    step %= arr.length;
    step = Math.abs(step - arr.length)
    let tempArr = arr.splice(0, step);

    arr = arr.concat(tempArr);

    console.log(arr.join(' '));
}

function extractIncreasingSubsequenceFromArray(arr) {
    let rslt = arr.filter((x, i) => x >= Math.max(...arr.slice(0, i + 1)));

    console.log(rslt.join('\n'));
}

function sortArray(arr) {
    console.log(arr.sort().sort((a, b) => a.length - b.length).join('\n'));

}

function magicMatrices(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b, 0);
    for (let row = 0; row < matrix.length; row++) {
        let rowSum = matrix[row].reduce((a, b) => a + b, 0);
        if (rowSum != sum)
            return false;
        for (let col = 0; col < matrix[row].length; col++) {
            let sumCol = 0;
            for (let row = 0; row < matrix.length; row++) {
                sumCol += matrix[row][col];
            }
            if (sumCol != sum)
                return false;
        }
    }
    return true;
}

function spiralMatrix(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    let startRow = 0,
        startCol = 0,
        endRow = rows - 1,
        endCol = cols - 1;
    let number = 1;

    while (startRow <= endRow || startCol <= endCol) {

        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = number++;

        }

        for (let i = startRow + 1; i <= endRow; i++) {
            matrix[i][endCol] = number++;
        }

        for (let i = endCol - 1; i >= startCol; i--) {
            matrix[endRow][i] = number++;
        }

        for (let i = endRow - 1; i > startRow; i--) {
            matrix[i][startCol] = number++;
        }


        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

function diagonalAttack(arr) {
    let matrix = arr.map(row => row.split(' ').map(x => +x));

    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row == col) {
                primaryDiagonalSum += matrix[row][col];
            }
            if (col === matrix[row].length - row - 1) {
                secondaryDiagonalSum += matrix[row][col];
            }
        }
    }

    if (primaryDiagonalSum === secondaryDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row !== col && col !== matrix[row].length - row - 1) {
                    matrix[row][col] = primaryDiagonalSum;
                }
            }
        }
    }

    let result = matrix.map(row => row.join(' ')).join('\n');
    console.log(result);
}

function orbitMatrix(numArr) {
    let [rows, cols, x, y] = numArr;

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push(('0').repeat(cols).split('').map(Number));
    }

    let num = 1;
    matrix[x][y] = 1;
    let counter = 1;
    let currentRow = x;
    let currentCol = y;

    while (true) {
        let isFilled = false;
        num++;
        let startRow = Math.max(0, currentRow - counter);
        let endRow = Math.min(matrix.length - 1, currentRow + counter);
        let startCol = Math.max(0, currentCol - counter);
        let endCol = Math.min(matrix[0].length - 1, currentCol + counter);
        for (let row = startRow; row <= endRow; row++) {
            for (let col = startCol; col <= endCol; col++) {
                if (matrix[row][col] == 0) {
                    matrix[row][col] = num;
                    isFilled = true;
                }
            }
        }
        counter++;
        if (!isFilled) {
            break;
        }
    }

    let result = matrix.map(row => row.join(' ')).join('\n');
    console.log(result);
}
