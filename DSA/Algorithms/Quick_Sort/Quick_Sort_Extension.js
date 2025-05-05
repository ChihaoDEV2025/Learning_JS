function partition(arr, low, high) {
  let pivot = arr[high];

  let i = low - 1; //i = -1 and then i++ = 0

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
}

// Swap function
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// The QuickSort function implementation
let time = 0;
function quickSort(arr, low, high) {
  if (low < high) {
    console.log("QuickSort called " + time + " times");
    let pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
}

// Main driver code
let arr = [10, 7, 8, 9, 1, 5];
let n = arr.length;

// Call QuickSort on the entire array
console.log("Initial Array:", arr);
quickSort(arr, 0, n - 1);
console.log("Sorted Array:", arr);
