function logScoreExceedsAndFalls(scores) {
    var maxScore = Math.max.apply(Math, scores);
    var minScore = Math.min.apply(Math, scores);
    var exceedCount = 0;
    var fallCount = 0;
    for (var _i = 0, scores_1 = scores; _i < scores_1.length; _i++) {
        var score = scores_1[_i];
        if (score > maxScore) {
            exceedCount++;
        }
        else if (score < minScore) {
            fallCount++;
        }
    }
    console.log("Number of times score exceeded maximum score:", exceedCount);
    console.log("Number of times score fell below minimum score:", fallCount);
}
