/**
 * 递归：
 * 斐波那契数列
 * 尾调用
 * 尾调用优化
 */

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n < 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));
