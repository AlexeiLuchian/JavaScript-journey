function arrayMax(array){
    let max = array[0];

    for (let num of array){
        if (num > max) {
            max = num;
        }
    }

    return max;
}

let array = [-2, 6, 14, 4, 50, -11, 1];
console.log(arrayMax(array));  // 50

array = [6, 1, 2, 3, 4, 5];
console.log(arrayMax(array));  // 6

array = [-4, -3, -2, -1, 0];
console.log(arrayMax(array));  // 0