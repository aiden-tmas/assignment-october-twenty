function longestWord(string) {
  let wordsArray = string.split(" ");
  let longestWord;
  let maxLength = 0;
  let wordLength;

  for (word in wordsArray) {
    wordLength = wordsArray[word].length;
    if (wordLength > maxLength) {
      maxLength = wordLength;
      longestWord = word;
    }
  }

  return wordsArray[longestWord];
}

let string = "We're here to measure your teachability not your knowledge";

console.log(longestWord(string));
