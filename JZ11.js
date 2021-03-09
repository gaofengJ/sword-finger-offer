/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function NumberOf1 (n) {
  let count = 0
  while (n) {
    n = n & (n - 1)
    count++
  }
  return count
}
