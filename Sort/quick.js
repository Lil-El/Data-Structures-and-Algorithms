/**
 * 快速排序:
 * 1.寻找基数
 * 2.数组移动，大于基数的向右移，反之左移（一轮结束后，可以确定基数所处的准确位置，然后对左右两个子数组进行递归）
 * 3.反复
 * https://segmentfault.com/a/1190000015488549
 */
function quick(arr, i, j) {
  if (i < j) {
    let left = i;
    let right = j;
    let pivot = arr[left];
    while (i < j) {
      while (arr[j] >= pivot && i < j) {
        j--;
      }
      if (i < j) {
        arr[i++] = arr[j];
        arr[j] = pivot; //
      }
      while (arr[i] <= pivot && i < j) {
        i++;
      }
      if (i < j) {
        arr[j--] = arr[i];
        arr[i] = pivot; //
      }
    }
    quick(arr, left, i - 1);
    quick(arr, i + 1, right);
    return arr;
  }
}

let r = quick([11, 3, 6, 31, 2, 46, 34, 67, 1], 0, 8);
console.log(r);
