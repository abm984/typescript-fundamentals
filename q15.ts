function logScoreExceedsAndFalls(scores: number[]): void {
    let maxScore: number = Math.max(...scores);
    let minScore: number = Math.min(...scores);
    
    let exceedCount: number = 0;
    let fallCount: number = 0;

    for (let score of scores) {
        if (score > maxScore) {
            exceedCount++;
        } else if (score < minScore) {
            fallCount++;
        }
    }

    console.log("Number of times score exceeded maximum score:", exceedCount);
    console.log("Number of times score fell below minimum score:", fallCount);
}
