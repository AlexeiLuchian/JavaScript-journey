function generateNumbersPromise() {
  return new Promise((resolve) => {
    resolve([2, 4, 6, 8, 10]);
  });
}

function summarizeNumbers(numbersPromise) {
  return numbersPromise.then(function (numbers) {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum;
  });
}

summarizeNumbers(generateNumbersPromise()).then(
  (result) => console.log(result), // 30
);
