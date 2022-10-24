function alphabeticalLetters(string) {
  let splitString = string.split(" ");
  let combinedString = "";
  let lettersArray = [];
  let finalString = "";

  for (word in splitString) {
    combinedString += splitString[word];
  }

  for (letter in combinedString) {
    lettersArray.push(combinedString[letter]);
  }

  lettersArray.sort((a, b) => {
    return a.localeCompare(b, undefined, { sensitivity: "base" });
  });

  for (letter in lettersArray) {
    finalString += lettersArray[letter];
  }

  return finalString;
}

let inputString = "Something in the way";
console.log(alphabeticalLetters(inputString));
