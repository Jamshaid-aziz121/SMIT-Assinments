let arr = [3, 2, 9, 5, 8, 1, 4, 6];

function specificFunction(arr, value) {
  if (arr.length === 0) {
    return false;
  }
  if (arr[0] === value) {
    return true;
  } else {
    return specificFunction(arr.slice(1), value);
  }
}

console.log("Specific Number is found : " + specificFunction(arr, 5))