function merge(arr = [], left, mid, right) {
  //Check l and r
  if (left > right) return;

  //Divide
  const leftArr = arr.slice(left, mid + 1);
  const rightArr = arr.slice(mid + 1, right + 1);

  //
  let i = 0; // index for leftArr
  let j = 0; // index for rightArr
  let k = left; // index for main array

  //merge
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }

  //if i < leftArr.length
  while (i < leftArr.length) {
    arr[k++] = leftArr[i++];
  }

  while (j < rightArr.length) {
    arr[k++] = rightArr[j++];
  }

  //Another way to merge: ????????? using shift();
}

function mergeSort(arr, left, right) {
  if (left >= right) {
    return;
  }

  let middle = left + Math.floor((right - left) / 2);

  mergeSort(arr, left, middle);
  mergeSort(arr, middle + 1, right);

  merge(arr, left, middle, right);
}

const arr = [9, 3, 7, 1, 5];
mergeSort(arr, 0, arr.length - 1);
console.log(arr); // [1, 3, 5, 7, 9]

//Expand : Break each features into small function
