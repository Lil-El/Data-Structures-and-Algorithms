/**
 * 冒泡排序:复杂度是 O(n2)
 */

function Bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] > arr[j]) {
        let t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
      }
    }
  }
  console.log(arr);
}
Bubble([2, 3, 54, 652, 3, 55, 1, 3, 45]);
