function arrayMatrix(arr1, arr2) {
  let tempArray;
  let matrixArray = [];
  let exists = false;

  for (arr1Item in arr1) {
    for (arr2Item in arr2) {
      tempArray = [arr1[arr1Item], arr2[arr2Item]];
      for (item in matrixArray) {
        if (
          tempArray[0] === matrixArray[item][0] &&
          tempArray[1] === matrixArray[item][1]
        ) {
          exists = true;
        }
      }
      if (exists != true) {
        matrixArray.push(tempArray);
      }
    }
  }

  return matrixArray;
}

console.log(arrayMatrix([1, 1], [1, 1]));
