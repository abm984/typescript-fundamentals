function removeFalseyValues(arr: any[]): any[] {
    return arr.filter(val => !!val);
}
