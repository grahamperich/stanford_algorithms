function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const midPoint = (arr.length / 2);
    const firstHalf = arr.slice(0, midPoint);
    const secondHalf = arr.slice(midPoint);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }

  function merge(left, right) {
    const resultLength = left.length + right.length;
    let result = []
    i = 0
    j = 0;

    for (let k = 0; k < resultLength; k++) {
      if (left[i] && right[j]) {
        if (left[i] < right[j]) {
          result[k] = left[i];
          i++;
        } else {
          result[k] = right[j];
          j++;
        } 
      } else if (left[i]) {
        result[k] = left[i];
        i++;
      } else if (right[j]) {
        result[k] = right[j];
        j++;
      }
    }

    return result;
  }
}

