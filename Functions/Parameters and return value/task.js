function isRightTriangle(side1, side2, side3){
    if (side1 >= side2 && side1 >= side3) return side1**2 === side2**2 + side3**2;
    if (side2 >= side1 && side2 >= side3) return side2**2 === side3**2 + side1**2;
    if (side3 >= side1 && side3 >= side2) return side3**2 === side2**2 + side1**2;
}

console.log(isRightTriangle(3, 4, 5));  // true
console.log(isRightTriangle(4, 5, 3));  // true
console.log(isRightTriangle(5, 3, 4));  // true
console.log(isRightTriangle(4, 3, 4));  // false
