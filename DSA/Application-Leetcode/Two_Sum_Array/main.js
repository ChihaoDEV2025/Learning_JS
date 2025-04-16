class TwoSumArray {
  static findTwoSumArray(arr = [], target) {
    //Store the number
    let map = new Map();

    //cannot use : for each because it cannot return to stop executing
    for (let i = 0; i < arr.length; i++) {
      let rest = Math.abs(target - arr[i]);

      if (map.has(rest)) return [rest, arr[i]];

      map.set(arr[i], i);
    }

    //not found
    return [];
  }
}

const arr = [2, 7, 11, 15];
const target = 9;

const result = TwoSumArray.findTwoSumArray(arr, target);
console.log(result); // Output: [7, 2] or [2, 7]
