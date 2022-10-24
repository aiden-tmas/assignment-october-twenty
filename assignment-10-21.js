function arrayMatrix(arr1, arr2) {
  let tempArray;
  let matrixArray = [];
  let exists = false;

  for (arr1Item in arr1) {
    for (arr2Item in arr2) {
      tempArray = [arr1[arr1Item], arr2[arr2Item]];
      exists = false;
      for (item in matrixArray) {
        if (String(tempArray) === String(matrixArray[item])) {
          exists = true;
        }
      }
      if (exists != true) {
        matrixArray.push(tempArray);
      }
    }
  }

  for (arr2Item in arr2) {
    for (arr1Item in arr1) {
      tempArray = [arr2[arr2Item], arr1[arr1Item]];
      exists = false;
      for (item in matrixArray) {
        if (String(tempArray) === String(matrixArray[item])) {
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

console.log(arrayMatrix([1, 1], [1, 2, 3, 4, 5]));
