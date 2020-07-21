// 瀑布流，给多个图片，一行n个排列，使高度最小
// 背包问题的延伸:https://www.nowcoder.com/discuss/3574

function bag(w, v, total) {
  let lines = w.length;
  let m = [[], [], [], []];
  // init first line
  for (let i = 0; i < total; i++) {
    if (i < w[0]) m[0][i] = 0;
    else m[0][i] = v[0];
  }
  for (let j = 1; j < lines; j++) {
    for (let i = 0; i < total; i++) {
      if (i < w[j]) {
        m[j][i] = m[j - 1][i];
      } else {
        if (m[j - 1][i] > m[j - 1][i - w[j]] + v[j]) m[j][i] = m[j - 1][i];
        else m[j][i] = m[j - 1][i - w[j]] + v[j];
      }
    }
  }
  console.log(m);
}
bag([2, 3, 4, 5], [1, 2, 4, 7], 10);
/**
 *
 *
 *
 *
 *
 */
