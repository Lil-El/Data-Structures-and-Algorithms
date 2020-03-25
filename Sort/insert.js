/**
 * 插入排序
 */

function insert(arr) {
  let temp = null;
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    temp = arr[i];
    while (j > 0 && arr[j - 1] < temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  console.log(arr);
}
insert([11, 3, 6, 31, 2, 46, 34, 67, 1]);
