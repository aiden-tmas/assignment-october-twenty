function titleCase(string) {
  let titledString = "";
  let words = string.split(" ");
  let tempString;

  for (let word in words) {
    tempString = "";

    for (let letter in words[word]) {
      if (letter == 0) {
        tempString += words[word][letter].toUpperCase();
      } else {
        tempString += words[word][letter].toLowerCase();
      }
    }
    if (word === words.length) {
      titledString += tempString;
    } else {
      titledString += `${tempString} `;
    }
  }

  return titledString;
}

let myString = "i love both dogs and cats.";
console.log(titleCase(myString));
