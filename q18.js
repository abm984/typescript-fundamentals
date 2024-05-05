function sumOfElements(arr, isEven) {
    return arr.filter(function (num) { return (isEven ? num % 2 === 0 : num % 2 !== 0); }).reduce(function (acc, val) { return acc + val; }, 0);
}
