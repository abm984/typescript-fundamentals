function sumOfElements(arr: number[], isEven: boolean): number {
    return arr.filter(num => (isEven ? num % 2 === 0 : num % 2 !== 0)).reduce((acc, val) => acc + val, 0);
}
