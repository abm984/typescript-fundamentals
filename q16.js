function removeFalseyValues(arr) {
    return arr.filter(function (val) { return !!val; });
}
