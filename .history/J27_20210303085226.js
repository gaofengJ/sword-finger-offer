/**
 * 普通解法
 * 时间复杂度：O(2^n)
 * 空间复杂度：递归栈的空间
 */
function Fibonacci (n) {
  if (n == 0 || n === 1) return n
  if (n === 0) return 0
  if (n === 1) return 1
  return Fibonacci(n - 1) + Fibonacci(n - 2)
}

/**
 * 
 * 动态规划
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function Fibonacci (n) {
  if (n === 0 || n === 1) return n
  let a = 0
  let b = 1
  let c
  for (let i = 2; i <= n; i++) {
    c = a + b
    a = b
    b = c
  }
  return c
}
