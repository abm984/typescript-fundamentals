{
    "compilerOptions": {
      "target": "es5",
      "lib": ["es2015", "dom"],
      "strict": true
    }
  }
  
function wordsStartingWithA(words: string[]): string[] {
    return words.filter(word => word.startsWith('a') || word.startsWith('A'));
}
