function countPositiveNumbers(numbers: number[]): number {
    let count: number = 0;
    for (let num of numbers) {
        if (num > 0) {
            count++;
        }
    }
    return count;
}
