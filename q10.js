function countPositiveNumbers(numbers) {
    var count = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (num > 0) {
            count++;
        }
    }
    return count;
}
