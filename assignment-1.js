function combineArrays(arr1, arr2) {
  let newArray = [];
  let maxLength;
  if (arr1.length >= arr2.length) {
    maxLength = arr1.length;
  } else {
    maxLength = arr2.length;
  }

  for (i = 0; i < maxLength; i++) {
    if (arr1[i]) {
      newArray.push(arr1[i]);
    }
    if (arr2[i]) {
      newArray.push(arr2[i]);
    }
  }

  return newArray;
}

console.log(
  combineArrays([1, 2, 3, 7, 8, 9], [4, 5, 6, 10, 11, 12, 13, 14, 15])
);
