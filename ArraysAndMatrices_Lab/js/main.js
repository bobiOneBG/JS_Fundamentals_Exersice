function sumFirstLast(arr) {
    let sum = [arr[0], arr[arr.length - 1]]
        .map((v, i) => {
            return +v
        })
        .reduce((acc, cur) => {
            return acc + cur;
        }, 0);
    console.log(sum);
}

function evenPositionElements(arr) {
    let evenArr = arr
        .filter((v, i) => {
            return (i % 2) === 0;
        });

    console.log(evenArr.join(' '));

}

function negativePositiveNumbers(arr) {
    let result = [];

    for (num of arr)
        if (num < 0)
            result.unshift(num);
        else
            result.push(num);

    console.log(result.join('\n'));

}

function firstAndLastKNumbers(arr) {
    let k = arr.shift();

    console.log(arr.slice(0, k).join(' '));
    console.log(arr.slice(arr.length - k, arr.length).join(' '));

}

function lastKNumbersSequence(n, k) {
    let seq = [1];
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current - 1;

        let sum = seq.slice(start, end + 1).reduce((acc, cur) => {
            return acc + cur;
        }, 0);


        seq[current] = sum;
    }
    console.log(seq.join(' '));

}

function processOddNumbers(arr) {
    let rslt = arr
        .filter((v, i) => {
            return i % 2 !== 0
        })
        .map((v) => {
            return v * 2
        })
        .reverse();

    console.log(rslt.join(' '));

}

function smallestTwoNumbers(arr) {
    let rslt = arr.sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ');

    console.log(rslt);
}

function biggestElement(matrix) {

    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        row => biggestNum = Math.max(biggestNum, row.reduce((a, b) => Math.max(a, b))));

    console.log(biggestNum);

}

function diagonalSums(matrix) {
    let arr = [0, 0];

    matrix.forEach((row, indx) => {
        row.forEach((item, innerIndx) => {
            if (innerIndx === indx) {
                arr[0] += item;

            } if (innerIndx + indx === row.length - 1) {
                arr[1] += item;

            }
        })
    });

    console.log(arr.join(' '))
}

function equalNeighbors(matrix) {
    let neighbors = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row < matrix.length - 1) {
                if (matrix[row][col] == matrix[row + 1][col]) {
                    neighbors++;
                }
            }
            if (col < matrix[row].length) {
                if (matrix[row][col] == matrix[row][col + 1]) {
                    neighbors++;
                }
            }
        }
    }
    return neighbors;
}