function maxNegRow(matrix){
    let negNums = [];

    for (let row of matrix) {
        for (let elem of row) {
            if (elem < 0) {
                negNums.push(elem);
                break;
            }
        }
    }

    let maxNeg = negNums[0];
    for (let num of negNums) {
        if (num > maxNeg) maxNeg = num;
    }

    return maxNeg;
}

let matrix = [
    [-5,  -1, 14],
    [2,  -45, 35],
    [17, 37, -20],
    [-7,  30, -25]
];

console.log(maxNegRow(matrix));  // -5

// you can use the arrayMax function from the previous task
