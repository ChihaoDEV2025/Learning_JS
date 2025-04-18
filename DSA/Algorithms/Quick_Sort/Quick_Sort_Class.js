function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function QuickSort(arr, left, right) {
  //Base condition
  if (left >= right) return; // Base condition

  //Find pivot = arr[mid]
  let mid = Math.floor((left + right) / 2);
  let pivot = arr[mid];

  //Set i and j
  let i = left,
    j = right;

  //while a[i] < pivot i++ , a[j] > pivot j++ => find the error places

  do {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;
    if (i <= j) {
      swap(arr, i, j);
      //Go ahead or down after swapping
      i++;
      j--;
    }
  } while (i <= j);

  //Divide and conquer to start the new place
  QuickSort(arr, left, j);
  QuickSort(arr, i, right);
}

// Test
let arr = [3, 1, 4, 5, 2, 0];
QuickSort(arr, 0, arr.length - 1);
//length = 6, 0 1 2 3 4 5 ; length -1
console.log(arr); // [0, 1, 2, 3, 4, 5]
