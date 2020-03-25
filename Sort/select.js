/**
 * 选择排序
 */
function select(arr) {
  let idx = null;
  for (let i = 0; i < arr.length; i++) {
    idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) {
        idx = j;
      }
    }
    if (arr[idx] !== arr[i]) {
      let t = arr[i];
      arr[i] = arr[idx];
      arr[idx] = t;
    }
  }
  console.log(arr);
}
select([11, 3, 6, 31, 2, 46, 34, 67, 1]);
