{
    "compilerOptions";
    {
        "target";
        "es5",
            "lib";
        ["es2015", "dom"],
            "strict";
        true;
    }
}
function wordsStartingWithA(words) {
    return words.filter(function (word) { return word.startsWith('a') || word.startsWith('A'); });
}
